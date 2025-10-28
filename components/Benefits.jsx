import React from 'react'
import { FaChild } from "react-icons/fa";

function Benefits({ title, description }) {
  return (
    <div className='flex'>
    <div className=''>
        <FaChild />
    </div>
    <div className="bg-white rounded-[20px] p-4 max-h-[150px]">
      <h2 className="text-[18px] md:text-[22px] font-bold">{title}</h2>
      {description && (
        <p className="text-[#373737]">{description}</p>
      )}
    </div>
    </div>
  )
}

export default Benefits