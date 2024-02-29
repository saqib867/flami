import React from 'react'

const HomeAbout = () => {
  return (
    <div className=' max-w-7xl  m-auto p-5 mt-10'>
      <div className='flex lg:flex-row flex-col justify-between gap-10'>

        <div className='flex flex-col gap-4 pr-10 flex-1'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] font-[600]'>About Us</span>

          <span className=''>Around 10 years ago, Mick had a small business as a picture framer making his own mouldings in his shed. He could not compete with the cheap framing mouldings that were made in China so business was slow.</span>

          <span className=''>I have left my container shop and stall at Queen Vic Market and have retired from attending markets altogether. I am working from home making and posting my custom engraved timber products Australia wide and World wide.</span>

          <span className=''>A new 2017 product is custom wood shock proof wood veneer and shock proof, wood look synthetic phone cases where he can laser engrave any image into the phone cases. In 2019, Mick moved into a container shop within Queen Vic Market where he installed another laser engraver and now is the only on the spot engraver of phone cases and Mango Wood boxes in Australia.</span>
        </div>

        <div className='flex items-center justify-center'>

          <img src="/abouthome.png" alt="about" className=' ' />

        </div>

      </div>


    </div>
  )
}

export default HomeAbout
