import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col gap-4 lg:max-w-md m-auto px-10 lg:px-0'>
      <div className='flex flex-col gap-1'>
        <span className='text-white font-[400] text-[18px]'>Name</span>
        <input className='p-2 border border-gray-400 rounded-md' type="text" name="name" id="name" />
      </div>
      <div className='flex flex-col gap-1'>

        <span className='text-white font-[400] text-[18px]'>Email</span>
        <input className='p-2 border border-gray-400 rounded-md' type="email" name="email" id="email" />
      </div>
      <div className='flex flex-col gap-1'>

        <span className='text-white font-[400] text-[18px]'>Phone</span>
        <input className='p-2 border border-gray-400 rounded-md' type="number" name="phone" id="phone" />
      </div>
      <div className='flex flex-col gap-1'>

        <span className='text-white font-[400] text-[18px]'>Enter Message</span>
        <input className='p-2 border h-[150px] border-gray-400 rounded-md' type="text" name="message" id="message" multiple />
      </div>

      <div className='my-4 flex items-center justify-center'>
        <button className='bg-white text-black text-[17px] p-2 w-[60%] rounded-md'>Send</button>
      </div>
    </div>
  )
}

export default ContactForm
