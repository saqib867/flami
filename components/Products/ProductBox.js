import React, { memo } from 'react'
import { useRouter } from 'next/router'
import { baseImgUri } from '@/constants/baseImgUri';
const ProductBox = memo(({productData,id,type})=>{

console.log("type =>",type)
const handleExplore =()=>{

if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('type',type)
  }
  router.push({ pathname: '/productitem', query: { itemId:id }}) 
}
  const router = useRouter();
  
  return (
    <div className='bg-white h-[440px] flex flex-col rounded-[4px] lg:w-[100%] p-1 relative'>

      {/* <img src="/hero.png" alt="car-img" className='w-2/3' /> */}
      <div style={{ backgroundImage: `url(${baseImgUri}${productData?.heroImg?.data?.attributes?.url})` }} className="bg-cover bg-center bg-no-repeat w-full h-[220px]">

      </div>
      <span className='text-[#003933] text-[22px] font-[700] text-center '>{productData?.title}</span>

      <span className='text-black font-[400] featuer_box_description '>
        {productData?.description}
      </span>

      <div className='flex justify-between items-center absolute bottom-0'>
        <button onClick={handleExplore} className='bg-[#003933] text-white w-fit px-3 py-2 my-4 rounded-[4px]'>Explore</button>

        <div className='cursor-pointer'>
          {/* <img src="/cart1.png" alt="cart" className='' /> */}
        </div>

      </div>

    </div>
  )
}) 

export default ProductBox
