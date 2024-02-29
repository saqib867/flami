import React from 'react'
import { useRouter } from "next/router";
import useProductById from '@/hooks/useProductById';
import { Card } from 'antd';
import CustomeDesigns from '@/components/CustomeDesigns/CustomeDesigns';
import useSignPricing from '@/hooks/useSignPricing';
import { baseImgUri } from '@/constants/baseImgUri';
function CustomeDesign() {
    const router = useRouter();
  const productId = router.query?.itemId;
  // const {productData} = useProductById(productId)
 
  const {product} = useSignPricing()
 
  
 if(product?.length == 0){
<div className='max-w-7xl sm:px-10 px-4 mx-auto'>
        
        <div className='mx-1 my-3'> 
              <h2>No Custome Design Found</h2>
        </div>
   </div>
           
 } 
  return (
    <div className='max-w-7xl sm:px-10 px-4 mx-auto h-[100vh]'>
        
         <div className='mx-1 my-3'> 
         <h2 className='text-3xl font-bold text-center my-5'>Sign Pricing Guide </h2>
         <div className='flex flex-col gap-y-2'>
            <p className='font-bold'>Please click on the relevant yellow buttons to see the prices of many of the different timber options and size examples/optional extras of the custom timber signs that have been previously made.</p>
            <p className='font-bold'>Please note that these signs are not cheap and the hard wood timbers used and finished engraved signs are of very high quality (Refer to customer reviews above). Scroll down further for text-based sign pricing guide.</p>
         </div>
       
         {/* <CustomeDesigns productData ={productData} /> */}
         <div className='grid grid-cols-3 items-stretch my-4 gap-4'>
             {product?.map((item,index)=>(

                   <div className='flex flex-col justify-between w-full cursor-pointer' onClick={()=>router.push({pathname:'/sign-pricing',query:{itemId:item?.id}})}>
                            <div className='h-52 '>
                               <img src={baseImgUri+item?.attributes?.heroImg?.data?.attributes?.url} className='w-full h-[100%]' />
                            </div>
                            <h3 className='p-2 text-center bg-blue-500 text-white'>{item?.attributes?.title}</h3>
                            
                   </div>
             ))}
         </div>
         </div>
    </div>
  )
}

export default CustomeDesign