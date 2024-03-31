import React from 'react'
import { useRouter } from 'next/router'
function CustomeSignPages() {

  const router = useRouter()
  return (
    <div>
      <div className='my-10 flex md:flex-row flex-col-reverse  gap-4 justify-between max-w-7xl m-auto p-5 h-[100vh]'>
        <div className='flex flex-col gap-5'>
          <span className='text-[#003933] sm:text-[40px] text-[25px] text-center font-[600]'>Customise your favourite sign</span>
          <span className=' text-[18px] text-center'>Turn your ideas into beautifully crafted timber designs</span>
          <div className='flex gap-4 mt-5 max-w-[400px]'>


            <button onClick={() => router.push({ pathname: "/custome-box" })}  className='text-white bg-[#003933] px-3 py-2 rounded'>Design your custom box</button>
            <button onClick={() => router.push({ pathname: "/detail_custom_form" })} className='text-white bg-[#FE5B26] px-3 py-2 rounded'>Design your custom sign</button>

          </div>
          <button onClick={() => router.push({ pathname: "/custome-design" })} className='max-w-[395px] text-white bg-[#9d962d] px-3 py-2 rounded'>Sign Pricing Guide</button>
        </div>

        <div className='flex h-[300px]'>
          <img src="/image 3.png" alt="alt" className='w-full' />
        </div>

      </div>
    </div>
  )
}

export default CustomeSignPages