import Slider from '@/components/Reviews/Slider'
import ThumbnailSlider from '@/components/Reviews/ThumbnailSlider'
import React from 'react'

const CustomerReviews = () => {
  return (
    <div>
      <div className='my-20 max-w-7xl text-center m-auto'>
        <h1 className='text-black font-bold lg:text-[35px] text-[30px]  leading-tight'>Customer Reviews</h1>
      </div>
      <Slider />
      <div className='max-w-7xl  text-center m-auto'>
        <h1 className='text-black font-bold my-10 lg:text-[35px] text-[30px] leading-tight'>What People Say!</h1>

        <div className='sm:max-w-[100rem] px-10'>
          <div class="flex items-center justify-center">
            <div className="grid xl:grid-cols-5 sm:grid-cols-3 gap-10">
              <div className='flex items-center'>
                <img src="/reviews/1.webp" alt="" />
              </div>
              <div className='flex items-center'>
                <img src="/reviews/2.webp" alt="" />
              </div>
              <div className='flex items-center'>
                <img src="/reviews/3.webp" alt="" />
              </div>
              <div className='flex items-center'>
                <img src="/reviews/4.webp" alt="" />
              </div>
              <div className='flex items-center'>
                <img src="/reviews/5.webp" alt="" />
              </div>
              <div className='flex items-center'>
                <img src="/reviews/6.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ThumbnailSlider /> */}
    </div>
  )
}

export default CustomerReviews
