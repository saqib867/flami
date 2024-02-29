import React from 'react'
import BuyersGuideHelper from './BuyersGuideHelper'

const BuyersGuide = () => {
  return (
    <div className=' max-w-7xl my-14 px-5 flex gap-1 flex-col m-auto '>
      <span className='text-[#003933] sm:text-[40px] text-[30px] font-[600]'>A Short Buyer’s Guide to Laser Name Engraving on Wood</span>
      <span className='text-[#1C1C1C]'>We turn your ideas into beautifully crafted timber designs. Our name engraving on wood is flawlessly executed, and when combined with our skill, you can be sure of perfection. We have extensive experience and believe in a hands-on approach from the moment you contact us until you hold your timber gift in your hands.</span>
      <div className='flex flex-col mt-5 gap-5 '>

        <BuyersGuideHelper heading="Finishings." content={" Our signs are precision laser engraved, finished with three to six coats of varnish for either indoors or outdoors. Once dried, your sign is ready for hanging or you can use screws to secure your timber gift."} />

        <BuyersGuideHelper heading="You manage the costs." content={" Pricing depends on the size you choose, as well as the detailed laser engraving and timber selections. For a better indication of the profile"} />

        <BuyersGuideHelper heading="Precision craft." content={" We take pride in delivering the best quality wood, laser engraving services but, most of all, an experience that you will enjoy from conceptualisation to completion."} />
      </div>
    </div>
  )
}

export default BuyersGuide
