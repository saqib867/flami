import React from 'react'
import notFound  from '../../public/noItem.jpg'
import Image from 'next/image'
function NotFound() {
  return (
    <div className='h-[70vh] flex flex-col items-center justify-center text-center'>
       <Image src={notFound} height={200} width={200} alt='img'/>
      <h3 className='font-bold text-[18px] sm:text-[20px]'>No Product to display</h3>
    </div>
  )
}

export default NotFound
