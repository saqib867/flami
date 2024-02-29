import React from 'react'

const HelperComponent = ({ content }) => {
  return (
    <div className='flex items-center gap-2'>
      <i className="fa fa-check-circle" style={{ color: "#003933", fontSize: "20px" }} aria-hidden="true"></i>

      <span>{content}</span>
    </div>
  )
}

export default HelperComponent
