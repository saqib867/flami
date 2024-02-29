import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Input } from 'antd';
import { useRouter } from 'next/router';
import useProductById from '@/hooks/useProductById';
import { baseImgUri } from '@/constants/baseImgUri';
import { axiosInstance } from '@/axios/axios';
import { useForm } from 'react-hook-form';
function detail_form_custom_sign() {
    const router = useRouter()
    const itemId = router.query.itemId
    const componentId = router.query.componentId
    const {productData} = useProductById(itemId)
   const componentData = productData && productData?.data?.attributes?.custome_sign?.find(item=>item?.id ==  componentId)
  
    console.log("product details for purchasing ==> ",componentData)
  
      const schema = yup.object().shape({
          first_name: yup.string().required('first name is required'),
          last_name: yup.string().required('last name is required'),
          email: yup.string().email().required('Email is required'),
          phone:yup.number().required("phone number is required"),
          sign_content:yup.string().required("Sign content is required"),
         
        });
  
        const {register,handleSubmit,formState:{errors},reset} = useForm({resolver:yupResolver(schema)})
      
       
  
  const handleFormSubmit =async(data)=>{
    

    const formData = new FormData()
    // formData.append('data',JSON.stringify(newForm))
    // formData.append("files.image1", '');
    // formData.append("files.image2", '');
    const myData ={
         sign : productData?.data?.id,
         isCustome:true,
         first_name:data?.first_name,
       last_name:data?.last_name,
       phone:data?.phone,
       email: data?.email,
       sign_content:data?.sign_content
    }
  
  try {
  
    const consumerRespond = await axiosInstance.post(`/customers?populate[0]=sign.heroImg&populate[1]=sign.categories_data&populate[2]=sign.custome_sign`,{data:myData});
  //  console.log("consumer respond ",consumerRespond.data)
    const componentData = consumerRespond?.data?.data?.attributes?.sign?.data?.attributes?.custome_sign?.find(item=>item?.id == componentId)
     console.log("componetn Data ",consumerRespond?.data?.data)
     const response = await axiosInstance.post('/user/email',{product :componentData,isCustome:consumerRespond?.data?.data?.attributes?.isCustome,first_name:data.first_name,last_name:data?.last_name,sign_content:data?.sign_content,phone:data?.phone,to:'husain.saqib@gmail.com',from:'abc@gmail.com'})
     console.log("email response => ",response.data)
  } catch (error) {
      console.log("error while sending email => ",error)
  }
    
  }
  
    return (
      <div className='w-full mx-[5px]'>
         <div className='flex flex-col-reverse max-w-xl mx-auto  gap-x-10 my-2 '>
            <form onSubmit={handleSubmit(handleFormSubmit)} className=' flex flex-col gap-y-9 mt-3'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                   <Inputs label={"First Name"} name={"first_name"} events={register} errors={errors} type={'text'} />
                   <Inputs label={"Last Name"} name={"last_name"} events={register} errors={errors} type={'text'} />
                   <Inputs label={"Email"} name={"email"} events={register} errors={errors} type={'text'} />
                   <Inputs label={"Phone No"} name={"phone"} events={register} errors={errors} type={'number'} />
                   <div className='flex-1'> <Inputs label={"Sign Content"} name={"sign_content"} events={register} errors={errors} type={'text'} /> </div>       
           </div>
             <button type='submit' className='bg-[#003933] text-white p-2 my-3 rounded'>Send</button>
          </form>
           <div>
           <div className='flex flex-col gap-y-4 items-center  md:shadow-lg px-3 py-1'>
               <div className='flex flex-col gap-y-4'>
               <h3 className='text-2xl text-center font-bold'>Product Details</h3>
               <img src={baseImgUri+componentData?.image?.data?.attributes?.url} className=' w-full' />
               <div className='flex flex-col gap-y-2 items-start'>
                  <h3 className='text-lg flex items-center gap-x-1'><span className='font-bold'>{componentData?.size}</span><span className='font-bold'>{componentData?.timber_specie}</span></h3>
                  <h3 className='text-lg'><span className='font-bold'>Price : </span><span>${componentData?.price}</span></h3>
                  <h3 className='text-lg'><span className='font-bold'>Postage : </span><span>{componentData?.Postage}</span><span>{componentData?.postage_price !=0 && componentData?.postage_price}</span></h3>
                  <h3 className='text-lg'><span className='font-bold'>Sign Type : </span><span>{productData?.data?.attributes?.title}</span></h3>
                  <h3 className='text-lg'><span className='font-bold'>Total : </span><span>${componentData?.price + componentData?.postage_price}</span></h3>
               </div>
               </div>
         </div>
           </div>
         </div>
                   
      </div>
    )
}

export default detail_form_custom_sign

const Inputs =({label,events,name,errors,type})=>{
       
    return(
         <div className='flex flex-col gap-y-1'>
              <label>{label}</label>
              <input  {...events(name) } type={type} className={`border rounded p-1 h-10 ${errors[name] ? 'border-red-500' : 'border-slate-400'}`} />
              {errors[name]?<small style={{color:"red"}}>{errors[name].message}</small>:null}
         </div>
    )
}