import React from 'react'
import Image from 'next/image';

import Link from 'next/link';
import { TbBadge, TbWorldHeart } from 'react-icons/tb';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';
import CommingSoonBookButton from './CommingSoonBookButton';
// import { TbWorldHeart } from "react-icons/tb";
import { motion } from "motion/react";
import Popup from './Popup';
import Popup1 from './Popup1';


function VirtualTherapy2() {
  return (
    <div className='bg-[#F7F4F0] py-[40px]  lg:py-[60px] overflow-hidden '>
      <div className='mx-auto container  px-4 text-center'>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8">

          <div className="text-center lg:text-left">
            <div className="leading-snug px-6">
              <h2 data-aos="zoom-out-left" className="heading poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl xl mb-3">
                Virtual <span className="text-[#009C4A]">Therapy</span>
              </h2>
             
              <p className="text-black font-lg !text-[16px] mb-5 lg:mb-4" data-aos="zoom-out-left">At Blue Halo Health, we’re revolutionizing Ontario’s healthcare landscape with a bold vision: a seamless, province-spanning ecosystem where healing happens on your terms.</p>
               <p className="text-black font-lg text-[16px] mb-5 lg:mb-4" data-aos="zoom-out-left">
                Bringing expert care home - through secure, personalized virtual sessions
              </p>
        {/* <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-left pt-2 leading-snug'>Forget traditional clinics—we’re crafting an intelligent, virtual-first
          network that orbits around a single guiding star: <span className='font-bold'>delivering care
            precisely when and where it’s needed most.</span></p> */}
       
              {/* <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4">
               Our team of certified, compassionate therapists provides evidence-based virtual therapy designed to support children, adolescents, and adults at every stage of growth. Through personalized digital sessions, we help clients build resilience, improve communication, and strengthen relationships—all from the comfort and privacy of home.
</p>
<p className='text-gray-500 font-medium text-[15px]'>From developmental milestones to life’s most complex challenges, BlueHaloHealth delivers the guidance, connection, and care needed to help individuals and families thrive—virtually, together.              </p> */}
              <div className='flex item-center justify-center md:block flex-wrap'>
                <ul className="space-y-4 text-base" data-aos="zoom-out-left">
                  <li className="flex items-center gap-6 md:gap-3 text-black">
                    <span className="">
                      <TbWorldHeart size={25} className="text-green-dark" />
                    </span>
                    <p className="text-black text-left  text-[16px] font-medium space-x-4 line-clamp-4 ">
                      Accessible From Anywhere
                    </p>
                  </li>
                  <li className="flex items-center gap-6 md:gap-3 text-black">
                    <span className="">
                      <AiOutlineSchedule size={25} className="text-green-dark" />
                    </span>
                    <p className="text-black text-left  text-[16px] font-medium space-x-4 line-clamp-4 ">
                      Flexible Scheduling
                    </p>
                  </li>
                  <li className="flex items-center hover:cursor-default gap-6 md:gap-3">
                    <span className="">
                      <FaRegHandshake size={25} className="text-green-dark" />
                    </span>
                    <p className="text-black text-left  text-[16px] font-medium space-x-4 line-clamp-4 ">
                      Personalized Care
                    </p>
                  </li>
                  <li className="flex items-center hover:cursor-default gap-6 md:gap-3">
                    <span className="">
                      <TbBadge size={25} className="text-green-dark" />
                    </span>
                    <p className="text-black text-left  text-[16px] font-medium space-x-4 line-clamp-4 ">
                      Safe & Secure
                    </p>
                  </li>
                </ul>
                       <Popup1  btnText={"Start Virtual Therapy"} classes={`border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7`} content={`Thankyou so much but we are not available right now`} />

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
            src="/virtual.png"
            data-aos="flip-up"
            alt="Explore holistic health services including functional medicine, nutrition, and personalized wellness programs from Blue Halo Health."
            className="w-full lg:max-w-[580px] object-cover hidden md:block"
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={`/virtual.png?w=400&q=5`}
          />
        </div>
                {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}> */}
       {/* <Popup1  btnText={"Start Virtual Therapy"} classes={`border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7`} content={`Thankyou so much but we are not available right now`} /> */}
       {/* </motion.div> */}

      </div>
    </div>
  )
}

export default VirtualTherapy2;