import { baseImgUri } from '@/constants/baseImgUri'
import useProductById from '@/hooks/useProductById'
import { useRouter } from 'next/router'
import React from 'react'

function ItemDetail() {

  
  const router = useRouter()
  const itemId = router.query.itemId
  const {productData} = useProductById(itemId)

  console.log("product details for purchasing ==> ",productData)
  return (
    
       <div className='flex flex-col gap-y-4 items-center  md:shadow-xl px-3 py-2'>
             <div className='flex flex-col gap-y-4'>
             <h3 className='text-2xl text-center font-bold'>Product Details</h3>
             <img src={baseImgUri+productData?.data?.attributes?.heroImg?.data?.attributes?.url} className='md:max-w-md w-full' />
             <div className='flex flex-col gap-y-2 items-start'>
                <h3 className='text-lg'><span className='font-bold'>{productData?.data?.attributes?.initial_size}</span></h3>
                <h3 className='text-lg'><span className='font-bold'>Price : </span><span>{productData?.data?.attributes?.price}</span></h3>
                <h3 className='text-lg'><span className='font-bold'>Sign Type : </span><span>{productData?.data?.attributes?.title}</span></h3>
                <h3 className='text-lg'><span className='font-bold'>Price : </span><span>{productData?.data?.attributes?.price}</span></h3>
             </div>
             </div>
       </div>
  )
}

export default ItemDetail