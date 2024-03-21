import React from 'react'
import { useRouter } from 'next/router'
function CustomeSignPages() {

  const router = useRouter()
  return (
    <div>
      <div className='my-10 flex lg:flex-row flex-col items-center gap-4 justify-between max-w-7xl m-auto p-5'>
        <div className='flex flex-col gap-5'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] font-[600]'>Customise your favourite sign</span>
          <span className=' text-[18px]'>Turn your ideas into beautifully crafted timber designs</span>
          <div className='flex gap-4 mt-5'>


            <button onClick={() => router.push({ pathname: "/custome-box" })}  className='text-white bg-[#003933] px-3 py-2 rounded'>Design your custom box</button>
            <button onClick={() => router.push({ pathname: "/detail_custom_form" })} className='text-white bg-[#FE5B26] px-3 py-2 rounded'>Design your custom sign</button>

          </div>

        </div>

        <div className='flex items-center'>
          <img src="/image 3.png" alt="alt" />
        </div>

      </div>
    </div>
  )
}

export default CustomeSignPages