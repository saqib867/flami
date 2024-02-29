import React from 'react'

const Testimonials = () => {
  return (
    <div className='bg-[#003933] px-5 py-10'>

      <div className='flex flex-col gap-3 max-w-7xl m-auto'>

        <div className='flex sm:flex-row flex-col justify-between items-center my-3'>

          <span className='text-white sm:text-[40px] text-[30px] font-[600]'>Testimonials</span>
          <button className='text-white bg-[#FE5B26] px-2 py-1 h-fit'>Sell All Reviews</button>

        </div>

        <div className='flex gap-3 lg:flex-row flex-col justify-between items-center'>

          <img src="/reviews/REVIEW10.webp" alt="review1" />
          <img src="/reviews/REVIEW1.webp" alt="review1" className='w-auto' />
        </div>

      </div>

    </div>
  )
}

export default Testimonials
