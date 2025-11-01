import Image from 'next/image';
import React from 'react'
import Heading from './Heading';
import Button from './Button';

function HowItWorks() {
  return (
    <div className="bg-[#E6EBE3] py-[20px] md:py-[40px] lg:py-[60px]">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
          <Heading
            className="text-black text-center"
            heading1={"How It"}
            heading2={" Works"}
          />
        <div className='md:flex gap-3 justify-center items-center '>
          <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
            <Image src='/step1.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[100px] max-h-[200px]" width={600} height={600} />
            <p className='text-center font-bold pt-6'>Book A Free Consultation</p>
          </div>
          <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
            <Image src='/step2.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[100px] max-h-[200px]" width={400} height={300} />
            <p className='text-center font-bold pt-6'>Get matched with the right therapist or service provider</p>
          </div>
          <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
            <Image src='/step33.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[100px] max-h-[200px]" width={400} height={300} />
            <p className='text-center font-bold pt-6'>Pay securely to confirm your appointment </p>
          </div>
          <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
            <Image src='/step4.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[100px] max-h-[200px]" width={400} height={300} />
            <p className='text-center font-bold pt-6'>Your care begins</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;