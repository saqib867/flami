import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { axiosInstance } from '@/axios/axios';
import CheckoutSuccess from '../checkout/CheckoutSuccess';

const CustomBox = () => {
  const schema = yup.object().shape({
    first_name: yup.string().required('first name is required'),
    last_name: yup.string().required('last name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone:yup.number().required("phone number is required"),
    sign_content:yup.string().required("Content is required"),
    budget:yup.number().required("Budget is required"),
   
    Postage:yup.string().required("postage is required"),
    post_code:yup.string().required("Post code is required"),
    font:yup.string().required("font is required"),
   
    compartments:yup.number().required("field is required"),
    extra_comment:yup.string()
  });
  const [image,setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [open,setOpen] = useState(false)
  const {register,handleSubmit,formState:{errors},reset} = useForm({resolver:yupResolver(schema)})

  const handleSubmitData =async(data)=>{

            setLoading(true)
            const type = "box"
            let formData= new FormData();
            const combineData = {...data,type}
            formData.append("files.image",image)
            formData.append("data",JSON.stringify(combineData))
             try {
              
                  const response = await axiosInstance.post('/customer-custom-designs?populate=*',formData)
                  console.log("Box response.data ",response.data)
                   const emailResponse = await  axiosInstance.post('/user/client/email',{product:response.data?.data?.attributes,to:'abc@gmail.com',from:'xyz@gmail.com'})
                console.log("email response ",emailResponse.data)
                setOpen(true)
             } catch (error) {
                    console.log("box error ",error)
             }
             finally{

               setLoading(false)
             }
           
  }

  const handleImage =(e)=>{

          setImage(e.target.files[0])
  }

  return (
    <div className='bg-[#E7E1CC]'>

      <div className='flex max-w-5xl m-auto flex-col  py-10'>

        <div className='flex items-end justify-end px-10'>
          <button className='text-white bg-[#FE5B26] px-2 py-1'>Gift Vouchers available</button>

        </div>

        <div className=' flex flex-col'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]'>Create your custom boxes</span>
        
           <div className='flex flex-col gap-y-5 text-center text-[18px]'>
              <p>You can also use your own font. Just send link of the font or let us know the name of font</p>
              <p><a className='p-2 m-2 bg-[#FE7446] text-white rounded' href='https://mystrapi.s3.eu-north-1.amazonaws.com/fonts.pdf'>Click here to view the fonts style </a> </p>
           </div>
          <form onSubmit={handleSubmit(handleSubmitData)}  className='flex flex-col gap-3  max-w-screen-2xl mt-10 justify-between px-5'>
                   {/* <div>
                    <h3>Click here to view the fonts</h3>
                    <p>You can also use you own font,Paste link of fonts or type name of the font</p>
                     <a href={`${process.env.PUBLIC_URL}/assets/flaming-fonts.pdf`} without target='_blank' rel="noopener noreferrer">Click here to see fonts</a>
                   </div> */}
                   <div className='flex flex-col gap-y-2 sm:flex-row sm:items-center gap-x-2 w-full'>
                   <SignInput label={'First Name'} events={register} name={'first_name'} errors={errors} type={'text'} />
                   <SignInput label={'Last Name'} events={register} name={'last_name'} errors={errors} type={'text'} />
                   </div>
                   <div className='flex flex-col gap-y-2 sm:flex-row sm:items-center gap-x-2 w-full'>
                    <SignInput label={'Email'} events={register} name={'email'} errors={errors} type={'text'} />
                    <SignInput label={'Phone No'} events={register} name={'phone'} errors={errors} type={'number'} />
                   </div>
                    <div className='flex items-center gap-x-2'>
                   
                    <SignInput label={'Font'} events={register} name={'font'} errors={errors} type={'text'} />
                   </div>
                   <SignInput label={'Budget'} events={register} name={'budget'} errors={errors} type={'number'} />
                   <SignInput label={'Wording on Top'} events={register} name={'sign_content'} errors={errors} type={'text'} />
                   
                   

                   <div className='flex flex-col gap-y-2 sm:flex-row sm:items-center gap-x-2 w-full'>
                    <div className='flex flex-col gap-y-2 w-full ' >
                     <label>Compartments</label>
                     <select {...register('compartments')} className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={0}>No Compartments</option>
                          <option value={2}>2 Compartments</option>
                          <option value={3}>3 Compartments</option>
                          <option value={4}>4 Compartments</option>
                     </select>
                     {errors.compartments && <small>{errors.compartments.message}</small>}
                   </div>
                   <div className='flex flex-col gap-y-2 w-full '>
                     <label>Postage</label>
                     <select {...register('Postage')} className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={"Aus Post Postage: Free Austrilia wide"}>Aus Post Postage: Free Austrilia wide</option>
                          <option value={'Express Post $15'}>Express Post $15 </option>
                          
                     </select>
                     {errors.Postage && <small>{errors.Postage.message}</small>}
                   </div>
                   </div>
                   
                   
                    <div className='mt-2 flex items-center w-full gap-x-2'>
                         <SignInput label={"Post Code"} name={'post_code'} events={register} type={'text'} errors={errors} />
                      
                        
                    </div> 
                    <div>
                       <div className='flex flex-col gap-y-3 '>
                       <div className='flex flex-col w-full flex-1'>
                          <label>Upload an Image.</label>
                        <label htmlFor='image' className=' bg-white border border-dashed h-14 rounded p-1 cursor-pointer  border-slate-400'>Upload any image here. An image of what will look on box will be sent back for approval. <span className='text-2xl'>+</span></label>
                        <input type='file' className='hidden' id='image' onChange={(e)=>handleImage(e)} />
                        </div>
                        <div className='flex-1'>
                        {image && <img src={URL.createObjectURL(image)} className='w-[200px]  rounded-md' />}
                        </div>
                       </div>
                    </div>  
                  
                    <div className='flex flex-col my-3 gap-3'>
                         <label>Extra Comments / Please type in Free short message to be engraved under lid or how you would like the format</label>
                         <textarea rows={6} {...register('extra_comment')} name='extra_comment'></textarea>
                    </div>
                   <button disabled={loading} type='submit' className=' bg-green-400 text-white p-3' >{loading ? 'Sending...' :'Send Request' }</button>
          </form>
           
        </div>
        {open && <CheckoutSuccess isModalOpen={open} handleOk={()=>setOpen(false)} />}

      </div>
    </div>

  )
}

export default CustomBox

const SignInput =({label,events,name,errors,type})=>{
            
  return (
         
    <div className='flex flex-col gap-y-1 w-full relative'>
    <label>{label}</label>
    <input  {...events(name) } type={type} className={`border rounded p-1 h-10 border-slate-400`} />
    {errors[name]?<small className='absolute -bottom-4' style={{color:"red"}}>{errors[name].message}</small>:null}
    </div>
  )
}
