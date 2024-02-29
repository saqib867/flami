'use client'
import React, { useState } from 'react'
import CustomBox from './CustomBox'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import {axiosInstance} from '@/axios/axios'
import { toast } from 'react-toastify';
import SuccessModal from './SuccessModal';
import CheckoutSuccess from '../checkout/CheckoutSuccess';



const CreateCustomSign = () => {

  const schema = yup.object().shape({
    first_name: yup.string().required('first name is required'),
    last_name: yup.string().required('last name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone:yup.number().required("phone number is required"),
    sign_content:yup.string().required("Sign content is required"),
    budget:yup.number().required("Budget is required"),
    timber_specie:yup.string().required("Timber specie is required"),
    sign_edge:yup.string().required("sign edge is required"),
    indoor_outdoor:yup.string().required("This option is required"),
    fixing_option:yup.string().required("fixing option is required"),
    Postage:yup.string().required("postage is required"),
    post_code:yup.string().required("Post code is required"),
    font:yup.string().required("font is required"),
    size:yup.string().required("Size is required"),
    extra_comment:yup.string()
  });
  const [image,setImage] = useState()
  const [loading,setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleImage =(e)=>{

        setImage(e.target.files[0])
  }

  const {register,handleSubmit,formState:{errors},reset} = useForm({resolver:yupResolver(schema)})

  const handleSubmitData =async(data)=>{
     console.log("data ",data)
    //  setLoading(true)
      const formData = new FormData()
      const type = "sign"
      const combineData = {...data,type}
       formData.append("files.image",image)
       formData.append("data",JSON.stringify(combineData))

            try {

                const response = await axiosInstance.post("/customer-custom-designs?populate=*",formData)
                console.log("custome response ",response.data?.data?.attributes)
                const emailResponse = await  axiosInstance.post('/user/client/email',{product:response.data?.data?.attributes,image,to:'abc@gmail.com',from:data?.email})
                console.log("email response ",emailResponse.data)
                setOpen(true)
                
            } catch (error) {
                  console.log("custome sign error ",error)
            }
           finally{

                setLoading(false)
           }
             
  }

  

  return (
    <div className='bg-[#E7E1CC]'>

      <div className='flex max-w-5xl m-auto flex-col  py-10'>

        <div className='flex items-end justify-end px-10'>
          <button className='text-white bg-[#FE5B26] px-2 py-1'>Gift Vouchers available</button>

        </div>

        <div className=' flex flex-col'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]'>Create your custom signs</span>
          <div className='flex flex-col gap-y-5 text-center text-[18px]'>
              <div className='flex flex-col gap-y-2 my-3'>
                <span className='text-xl font-bold'>Click on the button to view the fonts.</span>
                <span>You can also use your own font. Just send link of the font or let us know the name of font</span>
              </div>
              <p><a className='p-2 m-2 bg-[#FE7446] text-white rounded' href='https://mystrapi.s3.eu-north-1.amazonaws.com/fonts.pdf'>Click here to view the fonts style </a> </p>
           </div>

          <form onSubmit={handleSubmit(handleSubmitData)}  className='flex flex-col gap-3 max-w-screen-2xl my-10 justify-between px-5'>
                   {/* <div>
                    <h3>Click here to view the fonts</h3>
                    <p>You can also use you own font,Paste link of fonts or type name of the font</p>
                     <a href={`${process.env.PUBLIC_URL}/assets/flaming-fonts.pdf`} without target='_blank' rel="noopener noreferrer">Click here to see fonts</a>
                   </div> */}
                   <div className='flex items-center gap-x-2 w-full'>
                   <SignInput label={'First Name'} events={register} name={'first_name'} errors={errors} type={'text'} />
                   <SignInput label={'Last Name'} events={register} name={'last_name'} errors={errors} type={'text'} />
                   </div>
                   <div className='flex items-center gap-x-2'>
                    <SignInput label={'Email'} events={register} name={'email'} errors={errors} type={'text'} />
                    <SignInput label={'Phone No'} events={register} name={'phone'} errors={errors} type={'number'} />
                   </div>
                    <div className='flex items-center gap-x-2'>
                    <SignInput label={'Timber Specie'} events={register} name={'timber_specie'} errors={errors} type={'text'} />
                    <SignInput label={'Font'} events={register} name={'font'} errors={errors} type={'text'} />
                   </div>
                   <SignInput label={'Budget'} events={register} name={'budget'} errors={errors} type={'number'} />
                   <SignInput label={'Sign Content'} events={register} name={'sign_content'} errors={errors} type={'text'} />
                   <SignInput label={'Size of Sign'} events={register} name={'size'} errors={errors} type={'text'} />
                   
                   
                   <div className='flex items-center gap-x-2'>
                    <div className='flex flex-col gap-y-2 w-full '>
                     <label>Sign Edging</label>
                     <select {...register('sign_edge')} name='sign_edge' className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={"Straight Edge"}>Straight Edge</option>
                          <option value={'Natural Edge'}>Natural Edge</option>
                          <option value={'Driftwood Edge'}>Driftwood Edge</option>
                          <option value={"Burnt, Straight Edge"}>Burnt, Straight Edge</option>
                          <option value={"Burnt, Natural Edge"}>Burnt, Natural Edge</option>
                          <option value={"Cut out corners"}>Cut out corners</option>
                          <option value={'Cut Out Cornors with borders'}>Cut Out Cornors with borders</option>
                     </select>
                     {errors.sign_edge && <small  className='text-red-600'>{errors.sign_edge.message}</small>}
                   </div>
                   <div className='flex flex-col gap-y-2 w-full '>
                     <label>Indoor / Outdoor</label>
                     <select {...register('indoor_outdoor')} name='indoor_outdoor' className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={'indoor'}>Indoor</option>
                          <option value={'OutDoor but under Cover'}>OutDoor but under Cover</option>
                          <option value={'Full Outdoor weatherprooofed'}>Full Outdoor weatherprooofed</option>
                     </select>
                     {errors.indoor_outdoor && <small  className='text-red-600'>{errors.indoor_outdoor.message}</small>}
                   </div>
                   </div>

                   <div className='flex items-center gap-x-2'>
                    <div className='flex flex-col gap-y-2 w-full ' >
                     <label>Fixing Option</label>
                     <select {...register('fixing_option')} className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={'No Fixing'}>No Fixing</option>
                          <option value={'Hanger on Back'}>Hanger on Back</option>
                          <option value={'pilot holes for screwing'}>pilot holes for screwing</option>
                          <option value={'Eye bolts and chain'}>Eye bolts and chain</option>
                          <option value={'Garden Stack'}>Garden Stack</option>
                         
                     </select>
                     {errors.fixing_option && <small  className='text-red-600'>{errors.fixing_option.message}</small>}
                   </div>
                   <div className='flex flex-col gap-y-2 w-full '>
                     <label>Postage</label>
                     <select {...register('Postage')} className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={'Aus Post Postage: Free Austrilia wide'}>Aus Post Postage: Free Austrilia wide</option>
                          <option value={'Aus Post Express'}>Aus Post Express $15 -  $25</option>
                         
                     </select>
                     {errors.Postage && <small className='text-red-600'>{errors.Postageostage.message}</small>}
                   </div>
                   </div>
                   
                   
                    <div className='mt-2 flex items-center w-full gap-x-2'>
                         <SignInput label={"Post Code"} name={'post_code'} events={register} type={'text'} errors={errors} />
                        
                    </div> 
                    <div>
                       <div className='flex flex-col gap-y-3 '>
                       <div className='flex flex-col w-full flex-1'>
                          <label>Upload an Image.</label>
                        <label htmlFor='image' className=' bg-white border border-dashed h-14 rounded p-1 cursor-pointer  border-slate-400'>Click here to upload<span className='text-2xl'>+</span></label>
                        <input type='file' className='hidden' id='image' onChange={(e)=>handleImage(e)} />
                        </div>
                        <div className='flex-1'>
                        {image && <img src={URL.createObjectURL(image)} className='w-[200px]  rounded-md' />}
                        </div>
                       </div>
                    </div>  
                
                    <div className='flex flex-col my-3 gap-3'>
                         <label>EXTRA COMMENTS - IMAGE SUGGESTIONS - OPTIONAL FREE SHORT PERSONAL MESSAGE ENGRAVED ON BACK OF SIGN - LET US KNOW THE MESSAGE HERE. Extra $ for longer messages</label>
                         <textarea rows={6} {...register('extra_comment')} name='extra_comment'></textarea>
                    </div>
                   <button disabled={loading} type='submit' className=' bg-green-400 text-white p-3 my-2' >{loading ? "Sending..." : "Send Request"}</button>

                   
          </form>
              
        </div>

           {open && <CheckoutSuccess isModalOpen={open} handleOk={()=>setOpen(false)} />}
      </div>
    </div>

  )
}

export default CreateCustomSign

const SignInput =({label,events,name,errors,type})=>{
            
              return (
                     
                <div className='flex flex-col gap-y-1 w-full relative'>
                <label><span>{label}</span> </label>
                <input  {...events(name) } type={type} className={`border rounded p-1 h-10 border-slate-400`} />
                {errors[name]?<small className='absolute -bottom-4' style={{color:"red"}}>{errors[name].message}</small>:null}
                </div>
              )
}
