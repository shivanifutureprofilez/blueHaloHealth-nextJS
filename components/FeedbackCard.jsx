import React from 'react'
import Icon from './Icon';
import { RiDoubleQuotesL } from "react-icons/ri";


function FeedbackCard({ data, className }) {
  return (
    <div className={`text-center p-5 bg-white  text-green-dark rounded-lg border border-gray-200 shadow-md overflow-hidden  h-auto justify-center items-center  ${className}`}>
      <div className='flex'>
      <RiDoubleQuotesL size={10} className=" min-h-[25px]  min-w-[25px]  mb-2 " />
      </div>
      {/* <Heading className="text-black" heading1={feature.title} content={feature.description}/> */}
      
      <p className='text-black text-center mb-8 text-[18px]  space-x-4 line-clamp-8 '>
        {data?.description}
      </p>
      <h2 className='font-semibold text-green-dark align-left pt-4
      .'>
        - {data?.author}
      </h2>
    </div>
  )
}
export default FeedbackCard;