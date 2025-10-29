import React from 'react'
import Image from 'next/image';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Link from 'next/link';


function About() {
  return (
    <div className='bg-[#F7F4F0] py-[40px]  lg:py-[60px] '>
      <div className='mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center'>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8">
          {/* Left Image */}
          <Image
            src="/about.png"
            alt="About"
            className="w-full lg:max-w-[580px] object-cover hidden md:block"
            width={400}
            height={300}
          />
          {/* Right Text */}
          <div className="text-center lg:text-left">
            <div className="leading-snug">
              <h2 className="heading poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl mb-3">
                About <span className="text-[#009C4A]">BlueHaloHealth</span>
              </h2>
              <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4">
                At BlueHaloHealth, we believe that every family deserves the right
                support, guidance, and care to thrive at every stage of life. Our
                mission is to empower children, adolescents, and adults with expert
                therapy services tailored to their unique needs.
              </p>
              <p className="text-gray-500 font-medium text-[15px]">
                With a team of certified and compassionate therapists, we provide
                evidence-based interventions that nurture growth, improve communication,
                and strengthen family bonds. From early developmental milestones to adult
                challenges, we walk alongside families every step of the way.
              </p>
            </div>

            <Link
              href="/about"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7"
            >
              Read More About Us
            </Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About;