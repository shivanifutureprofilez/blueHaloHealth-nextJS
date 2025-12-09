// import Image from 'next/image';
// import React from 'react'
// import Heading from './Heading';
// import Button from './Button';

// function HowItWorks() {
//   return (
//     <div className="bg-[#E6EBE3] py-[20px] md:py-[40px] lg:py-[60px]">
//       <div className="mx-auto container  px-4 text-center">
//           <Heading
//             className="text-black text-center text-3xl md:text-5xl lg:text-5xl"
//             heading1={"How It"}
//             heading2={" Works"}
//           />
//         <div className='md:flex gap-3 justify-center items-center '>
//           <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
//             <Image src='/step1.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[200px] max-h-[200px]" width={600} height={600} />
//             <p className='text-center font-bold pt-6'>Book A Free Consultation</p>
//           </div>
//           <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
//             <Image src='/step2.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[200px] max-h-[200px]" width={400} height={300} />
//             <p className='text-center font-bold pt-6'>Get matched with the right therapist or service provider</p>
//           </div>
//           <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
//             <Image src='/step33.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[200px] max-h-[200px]" width={400} height={300} />
//             <p className='text-center font-bold pt-6'>Pay securely to confirm your appointment </p>
//           </div>
//           <div className="w-full md:mt-10 md:mb-10 p-8 md:p-0">
//             <Image src='/step4.png' alt="About" className="m-auto w-full object-contain max-w-[200px] min-h-[200px] max-h-[200px]" width={400} height={300} />
//             <p className='text-center font-bold pt-6'>Your care begins</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HowItWorks;


import Image from 'next/image';
import Popup1 from "@/components/Popup1";
import Heading from '@/components/Heading';

export default function HowItWorks() {
  const steps = [
    {
      image: '/step1.png',
      title: 'Book A Free Consultation'
    },
    {
      image: '/step2.png',
      title: 'Get matched with the right therapist or service provider'
    },
    {
      image: '/step33.png',
      title: 'Pay securely to confirm your appointment'
    },
    {
      image: '/step4.png',
      title: 'Your care begins'
    }
  ];

  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="rounded-2xl overflow-hidden">
          {/* Green accent bar */}
       
          
          
   

            {/* How It Works Section */}
            <div>
              <Heading
                className="text-black text-center text-2xl md:text-3xl mb-10"
                heading1={"How It"}
                heading2={" Works"}
              />
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="absolute top-3 left-3 w-10 h-10 bg-[#009C4A] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                        {index + 1}
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 flex items-center justify-center min-h-[200px]">
                        <Image 
                          src={step.image} 
                          alt={step.title} 
                          className="object-contain w-full max-w-[160px] h-auto" 
                          width={200} 
                          height={200} 
                        />
                      </div>
                    </div>
                    <p className='font-semibold text-gray-800 leading-snug'>
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}