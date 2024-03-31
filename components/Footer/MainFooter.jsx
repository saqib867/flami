import Link from 'next/link';
import React from 'react';

const MainFooter = () => {
  return (
    <div className='bg-[#003933] p-10 pb-3'>
      <div className='flex flex-col sm:flex-row justify-between max-w-[970px] mx-auto gap-y-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <img src='/logo.png' alt='logo' />
          </div>
          <span className='text-white text-sm max-w-[440px]'>
            We turn your ideas into beautifully crafted timber designs. Our name
            engraving on wood is flawlessly executed, and when combined with our
            skill, you can be sure of perfection. We have extensive experience
            and believe in a hands-on approach from the moment you contact us
            until you hold your timber gift in your hands.
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='font-bold text-white'>Contact Us</span>
          <span className=' text-white'>flaminsignsandboxes@gmail.com</span>
          <span className=' text-white'> 0404032722</span>

          <div className='flex gap-3 mt-5 items-center'>
            <a href='https://www.facebook.com/FlaminSigns/' target='_blank'>
              <i
                style={{ fontSize: '24px', cursor: 'pointer' }}
                className='fa text-white fa-facebook-official'
                aria-hidden='true'
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div className='mt-14 text-sm text-white flex md:flex-row flex-col gap-5 justify-between max-w-[970px] mx-auto text-center'>
        <span>2024 © Flamin' Signs and Boxes - All right reserved</span>

        <div>
          <span className=' hover:underline cursor-pointer'>
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
