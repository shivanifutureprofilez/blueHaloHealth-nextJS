import React from 'react'

function Button({className,title}) {
  return (
    <>
            {/* <button
                type="submit"
                className={`${bg} w-[277px]  text-[#F7F4F0] text-[14px] font-[600] rounded-lg py-3 border border-black hover:bg-white hover:text-black`}>{title}</button>
           */}
          <button className={` ${className} `}>{title || "Click Me"}</button>

    </>
  )
}

export default Button;