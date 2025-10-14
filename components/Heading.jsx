import React from 'react'

function Heading({ heading1, heading2, content, className, pClass }) {
  return (
    <div className='container m-auto'>
      <div className='flex justify-center'>
        <h2 className={`heading  poppins ${className}`} >{heading1} <span className='text-[#009C4A]'>{heading2}</span></h2>
      </div>
      <div>
        {content && (
          <p className={`${pClass} text-[18px]`}>{content}</p>
        )}
      </div>
    </div>
  )
}

export default Heading;