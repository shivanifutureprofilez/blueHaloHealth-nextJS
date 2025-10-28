import Image from 'next/image';
import React from 'react'
import Heading from './Heading';
import Button from './Button';

function HowItWorks() {
  return (
    <div className="bg-[#F7F8F9] py-[20px] md:py-[40px] lg:py-[60px]">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
          <Heading
            className="text-black text-center"
            heading1={"How It"}
            heading2={" Works"}
          />
        <div className='md:flex gap-30 justify-center items-center '>
          <div className="md:mt-10 md:mb-10 p-8 md:p-0">
            <Image src='/step1.png' alt="About" className="w-full object-cover" width={400} height={300} />
            <p className='text-center font-bold pt-6'>Book A Free Consultation</p>
          </div>
          <div className="md:mt-10 md:mb-10 p-8 md:p-0">
            <Image src='/step2.png' alt="About" className="w-full object-cover" width={400} height={300} />
            <p className='text-center font-bold pt-6'>Match With A Therapist</p>
          </div>
          <div className="md:mt-10 md:mb-10 p-8 md:p-0">
            <Image src='/step3.png' alt="About" className="w-full object-cover" width={400} height={300} />
            <p className='text-center font-bold pt-6'>Get Started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;