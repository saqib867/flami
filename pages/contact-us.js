import ContactBox from '@/components/contact/ContactBox';
import ContactForm from '@/components/contact/ContactForm';
import React from 'react';

const ContactUs = () => {
  return (
    <div className=' flex justify-center items-center p-2 sm:px-10 px-5 my-10 min-h-screen'>
      <div className='flex lg:flex-row flex-col justify-between gap-14 max-w-7xl'>
        <div className='flex flex-col justify-center gap-3 flex-1'>
          <h1 className='text-black font-bold lg:text-[62px] text-center sm:text-[55px] text-[40px] leading-tight'>
            Get in Touch
          </h1>
          <span className='text-black font-[400] text-center'>
            Fill out the design your sign or trinket box forms below. Click
            button to fill out form with all the details I need to be able to
            send a design draft and quote
          </span>

          <div class='grid sm:grid-cols-2 gap-10 my-4'>
            <div>
              <ContactBox icon='fa-phone' text='0404032722' />
            </div>
            <div>
              <ContactBox
                icon={'fa-envelope-o'}
                text='flaminsigns@hotmail.com'
              />
            </div>
          </div>
          {/* <span className='text-[17px] font-bold'>
            Call or text 0404032722 for enquiries or email
          </span> */}
          {/* <div className=''>
            <a href='https://www.facebook.com/FlaminSigns/' target='_blank'>
              <i
                style={{ fontSize: '25px' }}
                className='fa fa-facebook'
                aria-hidden='true'
              ></i>
            </a>
          </div> */}
          <div class='flex sm:flex-row flex-col gap-10 my-7'>
            <button className='bg-[#003933] text-white text-[17px] p-4 w-full rounded-md'>
              Design Your Sign
            </button>
            <button className='bg-[#003933] text-white text-[17px] p-4 w-full rounded-md'>
              Design Your Box
            </button>
          </div>
        </div>
        <div className='flex flex-col flex-1 bg-[#003933] py-5 rounded-md'>
          <h1 className='text-white font-bold lg:text-[55px] text-center sm:text-[40px] text-[30px] leading-tight'>
            Contact Us
          </h1>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
