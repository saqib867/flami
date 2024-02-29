import React from 'react'
import HelperComponent from './HelperComponent'

const CreativeCustomSigns = () => {
  return (
    <div className='bg-[#E7E1CC] px-5 py-16'>

      <div className=' max-w-7xl flex gap-1 flex-col m-auto'>
        <span className='text-[#003933] sm:text-[40px] text-[30px] font-[600]'>Creative Ways to Use Custom Wood Signs</span>
        <span className='text-[#1C1C1C]'>What do you buy a person who has everything? We all know a group of individuals who make it incredibly hard when the time comes for buying gifts. There is a hidden gem that will solve all these problems. Flamin’ Signs and Boxes is no ordinary gift shop but a unique timber laser engraving shop with various creative products. Here are some creative inspirations to get you going.</span>

        <div className='flex flex-col mt-5 gap-5 '>
          <HelperComponent content={"Custom designed name engraving on wood. You decide on the image, words, size, shape and if it is for indoors or outdoors. "} />
          <HelperComponent content={"Whatever you can imagine, Flamin’ Signs and Boxes can engrave and design for you."} />
          <HelperComponent content={"Laser engraved wood gifts. Once you have your custom design ready to go, we use superior laser equipment to ensure that your creative designs come to life. "} />
          <HelperComponent content={"The result is a beautifully crafted piece of timber with professional engraving and designs. Now you can showcase your unique design, which you won't find in any mall."} />
          <HelperComponent content={"Wood selection. Think Mountain Ash and Birdseye Stringy Bark Eucalyptus timber, mango wood or olive wood. Each type of timber has unique characteristics best suited to your design. Our professional team will guide you to the best timber for your customised project."} />
        </div>

      </div>

    </div>
  )
}

export default CreativeCustomSigns
