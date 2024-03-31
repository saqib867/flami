import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Featured from '@/components/featured'
import CreateCustomSign from '@/components/CreateCustomSign/CreateCustomSign'
import HomeAbout from '@/components/about/HomeAbout'
import CreativeCustomSigns from '@/components/CreativeCustomSigns/CreativeCustomSigns'
import BuyersGuide from '@/components/BuyersGuide/BuyersGuide'
import Testimonials from '@/components/Testimonials/Testimonials'
import { useRouter } from 'next/router'
import Heading from '@/metaHeaders/MetaHeaders'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()
  const description ="100% Australian made, Laser Engraved Timber Signs and Plaques- Mango Wood Jewellery / Trinket boxes - Olive Wood Sentimental Hearts- -Custom Engraved Acacia Wood Chopping/Serving Boards-Own Timber Engraving Service. "
  return (
    <>
    <Heading description={description} keywords="flaming,wood, engraving, wood engraving, signs, home signs, paypal" title="Home" />
      <Hero />
      <Featured />
      {/* <CreateCustomSign /> */}
      <HomeAbout />
      <CreativeCustomSigns />
      <BuyersGuide />
      <Testimonials />
      <div className='my-10 flex lg:flex-row flex-col items-center gap-4 justify-between max-w-7xl m-auto p-5'>
        <div className='flex flex-col gap-5'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] font-[600]'>Customise your favourite sign</span>
          <span className=' text-[18px]'>Turn your ideas into beautifully crafted timber designs</span>
          <div className='flex gap-4 mt-5 max-w-[400px]'>


            <button onClick={() => router.push({ pathname: "/custome-box" })}  className='text-white bg-[#003933] px-3 py-2 rounded'>Design your custom box</button>
            <button onClick={() => router.push({ pathname: "/detail_custom_form" })} className='text-white bg-[#FE5B26] px-3 py-2 rounded'>Design your custom sign</button>

          </div>
          <button onClick={() => router.push({ pathname: "/custome-design" })} className='max-w-[400px] text-white bg-[#9d962d] px-3 py-2 rounded'>Sign Pricing Guide</button>
        </div>

        <div className='flex items-center'>
          <img src="/image 3.png" alt="alt" />
        </div>

      </div>
    </>
  )
}
