import React from 'react'
import Image from 'next/image';

import Link from 'next/link';
import { TbBadge, TbWorldHeart } from 'react-icons/tb';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';
import CommingSoonBookButton from './CommingSoonBookButton';
import Heading from './Heading';
// import { TbWorldHeart } from "react-icons/tb";


function VirtualTherapy3() {
     const features = [
        {
          title: "Accessible from Anywhere",
          description: "Get therapy support from the comfort of your home, no matter your location.",
          icon: <TbWorldHeart className="text-white bg-green-dark text-4xl" />
        },
        {
          title: "Flexible Scheduling",
          description: "Sessions that fit your family’s routine and availability.",
          icon: <AiOutlineSchedule className="!text-white  text-4xl" />
        },
        {
          title: "Personalized Care",
          description: "One-on-one sessions tailored to your child’s unique developmental goals.",
          icon: <FaRegHandshake className="text-white text-4xl " />
        },
        {
          title: "Safe & Secure",
          description: "We use HIPAA-compliant platforms to ensure privacy and confidentiality.",
          icon: <TbBadge className="text-white text-4xl " />
        }
      ];
    
  return (
    <div className='bg-[#F7F4F0] md:bg-white py-[40px]  lg:py-[60px] '>
      <div className='mx-auto container  px-4 text-center'>
        <Heading className="heading text-center md:text-left poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3" heading1={"Virtual"} heading2={" Therapy"} />
                    <p className="font-medium text-[15px] text-center mb-6 md:mb-2 text-gray-700  max-w-[600px] mx-auto">
Bringing expert care home - through secure, personalized virtual sessions                    </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8">
          
          <div className="text-center lg:text-left">
            <div className="leading-snug">
                
              {/* <h2 className="heading poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl mb-3">
                Virtual <span className="text-[#009C4A]">Therapy</span>
              </h2>
              <p className="text-black font-lg text-[16px] mb-2 lg:mb-4">
                Bringing expert care home - through secure, personalized virtual sessions
              </p> */}
              {/* <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4">
               Our team of certified, compassionate therapists provides evidence-based virtual therapy designed to support children, adolescents, and adults at every stage of growth. Through personalized digital sessions, we help clients build resilience, improve communication, and strengthen relationships—all from the comfort and privacy of home.
</p>
<p className='text-gray-500 font-medium text-[15px]'>From developmental milestones to life’s most complex challenges, BlueHaloHealth delivers the guidance, connection, and care needed to help individuals and families thrive—virtually, together.              </p> */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  py-[15px] md:py-[50px] ">
          {features && features?.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl relative flex flex-col items-center px-5 md:px-9 py-5 md:pt-9 text-center"
            >
              <div className="flex  justify-center absolute top-[-30px] left-4 items-center w-16 h-16 rounded-full bg-green-dark mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold  text-xl mb-2 mt-4 md:mt-2">{feature.title}</h3>
              <p className="text-gray-600  font-medium text-[15px]">{feature.description}</p>
            </div>
          ))}
        </div>
            </div>

            {/* <Link
              href="/about"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7"
            >
              Start Virtual Therapy
            </Link> */}
           
          </div>
           <Image
            src="/vt5.jpg"
            alt="About"
            className="w-full lg:max-w-[700px] object-cover hidden md:block"
            width={600}
            height={600}
          />
        </div>
                 <CommingSoonBookButton btnText={"Start Virtual Therapy"} classes={`border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7`} content={`Thankyou so much but we are not available right now`}/>

      </div>
    </div>
  )
}

export default VirtualTherapy3;