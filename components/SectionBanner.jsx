import React from 'react'
import Image from 'next/image';
import Heading from './Heading';

function SectionBanner({title="Shop"}) {
  return (
    <div className='flex flex-wrap items-center relative   '>
        <Image src='/contactBanner.png'  className=' h-[300px] object-cover w-full ' width={1500} height={700}></Image>    
        
        <div className='w-full h-full  opacity-[0.4] absolute'></div>
        <div className='absolute w-full left-[0px] top-[50%] text-center z-[9px] '>
          <Heading
            className="text-black tracking-tighter font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
            heading2={title}
           
          />
            
          <a href="/" className=" text-white text-center pl-0 font-normal underline hover:text-yellow-700">
            home &gt;
          </a>
          <a href="" className=" text-white text-center pl-0 font-normal underline hover:text-yellow-700">
            { title}
          </a>
        </div>
         {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-[85px]">
      </div> */}
    </div>
  )
}

export default SectionBanner;