import React from 'react'

const ContactBox = ({ icon, text }) => {
  return (
    <div className='flex items-center justify-center flex-col gap-2 p-3'>
      <i className={`fa ${icon}`} style={{ fontSize: '30px' }} aria-hidden="true"></i>
      <span className='text-center text-[18px] font-[400] text-black'>{text}</span>

    </div>
  )
}

export default ContactBox
