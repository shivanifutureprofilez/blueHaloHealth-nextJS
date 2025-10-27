import React from 'react'
import Image from 'next/image';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Link from 'next/link';


function About() {
  return (
    <div className='bg-[#F7F4F0] md:mt-18 md:mb-18'>
      <div className='container mx-auto bg-[#F7F4F0]'>
        <div className=' md:flex bg-[#F7F4F0]'>
          <Image src='/about.png' alt="About" className="w-full object-cover hidden md:block" width={400} height={300} />
          <div className="md:mt-20 py-4 md:py-8   md:p-0 pt-0 text-left">
            <div className='leading-snug'>
            <h2 className={`heading text-center md:text-left poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3`} >About <span className='text-[#009C4A]'>BlueHaloHealth </span></h2>
            <p className={` text-gray-500 text-center md:text-left font-medium text-[15px]`}>At BlueHaloHealth, we believe that every family deserves the right support, guidance, and care to thrive at every stage of life. Our mission is to empower children, adolescents, and adults with expert therapy services tailored to their unique needs.</p>
            <p className={` text-gray-500 text-center md:text-left font-medium text-[15px]`}>With a team of certified and compassionate therapists, we provide evidence-based interventions that nurture growth, improve communication, and strengthen family bonds. From early developmental milestones to adult challenges, we walk alongside families every step of the way.</p>
          </div>
            {/* <Heading className="text-black !text-left" heading1={"About"}
              heading2={" BlueHaloHealth"}
              pClass="text-left"
              content={"At BlueHaloHealth, we believe that every family deserves the right support, guidance, and care to thrive at every stage of life. Our mission is to empower children, adolescents, and adults with expert therapy services tailored to their unique needs. With a team of certified and compassionate therapists, we provide evidence-based interventions that nurture growth, improve communication, and strengthen family bonds. From early developmental milestones to adult challenges, we walk alongside families every step of the way."} /> */}
            {/* <Button title={"Read More About Us"} className={`button-transparent  mt-7 mb-7`} /> */}
               <div className='text-center md:text-left'>
               <Link
                        href="/about"
                        className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7 mb-7"
                    >
                        Read More About Us
                    </Link>
                </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;