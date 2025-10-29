import React from 'react'
import { FaChild } from "react-icons/fa";

function Benefits({ title, description }) {
  return (
    <>
    {title !== '' &&  description !== '' && 
    <div className="flex items-start bg-white rounded-[20px] p-5 shadow-sm hover:shadow-md transition-all duration-300 max-h-[150px]">
      {/* Icon */}
      <div className="flex items-center justify-center w-[55px] h-[55px] bg-green-100 rounded-full flex-shrink-0 hover:bg-green-200 transition">
        <FaChild size={22} className="text-green-dark" />
      </div>

      {/* Text */}
      <div className="ml-4 flex flex-col justify-center overflow-hidden">
        <h2 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight mb-1 text-left">
          {title}
        </h2>
        {description && (
          <p className="text-[#373737] text-[14px] md:text-[15px] leading-snug line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>}
    </>

  )
}

export default Benefits;