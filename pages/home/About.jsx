import React from 'react'
import Image from 'next/image';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Link from 'next/link';


function About() {
  return (
    <div className='bg-[#F7F4F0] py-[40px]  lg:py-[60px] ' >
      <div className='mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center'>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8">
          {/* Left Image */}
          <Image
            src="/about2.png"
            alt="About"
           data-aos="flip-up"
            className="w-full lg:max-w-[580px] object-cover hidden md:block"
            width={400}
            height={300}
          />
          {/* Right Text */}
          <div className="text-center lg:text-left" >
            <div className="leading-snug">
              <h2 className="heading poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl mb-3" data-aos="zoom-out-right">
                About <span className="text-[#009C4A]">BlueHaloHealth</span>
              </h2>
              <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4" data-aos="zoom-out-right">
               At BlueHaloHealth, we believe that every individual and family deserves accessible, expert care—no matter where they are. Our mission is to make high-quality mental health and therapy services available to everyone through secure, virtual platforms that fit seamlessly into modern life.
              </p>
              <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4" data-aos="zoom-out-right">
               Our team of certified, compassionate therapists provides evidence-based virtual therapy designed to support children, adolescents, and adults at every stage of growth. Through personalized digital sessions, we help clients build resilience, improve communication, and strengthen relationships—all from the comfort and privacy of home.
</p>
<p className='text-gray-500 font-medium text-[15px]' data-aos="zoom-out-right">From developmental milestones to life’s most complex challenges, BlueHaloHealth delivers the guidance, connection, and care needed to help individuals and families thrive—virtually, together.              </p>
            </div>

            <Link
              href="/about"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7"
              data-aos="zoom-out-right"
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