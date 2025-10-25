import React from 'react'
import Icon from './Icon';
import { RiDoubleQuotesL } from "react-icons/ri";


function FeedbackCard({ data, className }) {
  return (
    <div className={`text-left p-4 bg-white  text-green-dark rounded-2xl border border-gray-200 shadow-md overflow-hidden  h-auto justify-center items-center  ${className}`}>
      <div className='flex'>
        <RiDoubleQuotesL size={10} className=" text-[#a6cdb8] min-h-[25px]  min-w-[25px]  mb-2 " />
      </div>
      {/* <Heading className="text-black" heading1={feature.title} content={feature.description}/> */}

      <p className='text-black text-left  mb-4 text-[16px] font-medium space-x-4 line-clamp-4 '>
        {data?.description}
      </p>
      <h2 className='font-bold text-black align-left pt-2'>
        {data?.author}
      </h2>
    </div>
  )
}
export default FeedbackCard;