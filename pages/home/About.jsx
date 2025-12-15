import React from 'react'
import Image from 'next/image';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Link from 'next/link';
import { motion } from "motion/react";



function About() {
  return (
    <div className='bg-[#F7F4F0] py-[40px]  lg:py-[60px] ' >
      <div className='mx-auto container  px-4 text-center'>
        <div className="flex justify-between items-center gap-4 ">
          
          <div className='w-full max-w-[35%] hidden lg:block'>

          <Image
            src="/about3.png"
            alt="Learn about Blue Halo Health’s mission, values, and our expert team dedicated to holistic health and wellness."
            // data-aos="flip-up"
            className="w-full lg:max-w-[580px] object-cover "
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={`/about3.png?w=400&q=5`}
          />
          </div>

           
          {/* Right Text */}
          <div className="w-full lg:max-w-[65%] text-center lg:text-left" >
            <div className="leading-snug">
              <h2 className="heading poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl  mb-3" >
                About <span className="text-[#009C4A]">BlueHaloHealth</span>
              </h2>
              <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4" >
                At BlueHaloHealth, we believe that every individual and family deserves accessible, expert care—no matter where they are. Our mission is to make high-quality mental health and therapy services available to everyone through secure, virtual platforms that fit seamlessly into modern life.
              </p>
              <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4" >
                Our team of certified, compassionate therapists provides evidence-based virtual therapy designed to support children, adolescents, and adults at every stage of growth. Through personalized digital sessions, we help clients build resilience, improve communication, and strengthen relationships—all from the comfort and privacy of home.
              </p>
              <p className='text-gray-500 font-medium text-[15px]' >From developmental milestones to life’s most complex challenges, BlueHaloHealth delivers the guidance, connection, and care needed to help individuals and families thrive—virtually, together.              </p>
            </div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            > */}
              <Link
                href="/about"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7"
               
              >
                Read More About Us
              </Link>
            {/* </motion.div> */}
          </div>
        </div>


      </div>
    </div>
  )
}

export default About;