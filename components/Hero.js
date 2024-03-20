import { useRouter } from 'next/router'
import React from 'react'
// sdfdsdfsdfd
const Hero = () => {
  const router = useRouter()
  console.log("asdfasf")
  return (
    <div className='bg-[#003933] flex justify-center py-2'>
      <div className='justify-between md:flex-row flex-col gap-10 flex xl:max-w-7xl px-10'>

        <div className='flex flex-col  justify-center py-2'>

          <span className='text-white leading-tight'>100% <span className='text-[#FED02A]'>AUSTRALIAN</span> MADE</span>
          <span className='text-white font-bold lg:text-[62px] sm:text-[40px] text-[30px] leading-tight'>Custom Engraved Wood Timber Signs</span>
          <span className='text-white leading-tight'>The  one stop gift shop for the person who is hard to buy for, or who has everything</span>
          <button onClick={() => router.push("/products")} className='bg-[#FE5B26] text-white w-fit px-3 py-2 my-4 rounded-[4px]'>Explore Shop</button>
          <div className='flex flex-col gap-1 mt-14'>
            <div className='flex gap-2'>
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
            </div>
            <span className='text-white'>500+ Happy Customers</span>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img src="/hero.png" alt="hero" className='' />
        </div>
      </div>
    </div>
  )
}

export default Hero
