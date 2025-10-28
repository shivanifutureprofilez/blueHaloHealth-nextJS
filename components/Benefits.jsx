import React from 'react'
import { FaChild } from "react-icons/fa";

function Benefits({ title, description }) {
  return (
    
    <div className='container mx-auto'>
    <div className='flex bg-white rounded-[20px] p-4 max-h-[150px]'>
    <div className='p-3'>
        <FaChild size={28} className='text-green bg-green-200 rounded-full'/>
    </div>
    <div className="">
      <h2 className="text-[18px] md:text-[22px] font-bold">{title}</h2>
      {description && (
        <p className="text-[#373737]">{description}</p>
      )}
    </div>
    </div>
    </div>
  )
}

export default Benefits;