import React from 'react'
import Heading from './Heading';
import Icon from './Icon';

function Card({ data, className }) {
  return (
    <div className={`  bg-white  text-green-dark rounded-lg border border-gray-200 shadow-md overflow-hidden  h-auto justify-center items-center p-3 ${className}`}>
      <div className='flex justify-center'>
      <Icon icon={data.icon} />
      </div>
      {/* <Heading className="text-black" heading1={feature.title} content={feature.description}/> */}
      <h2 className='text-black'>
        {data?.title}
      </h2>
      <p className='text-black text-center mb-8 text-[18px]space-x-4 '>
        {data?.description}
      </p>
    </div>
  )
}
export default Card;