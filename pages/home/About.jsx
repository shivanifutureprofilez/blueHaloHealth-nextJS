import React from 'react'
import Image from 'next/image';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
 

function About() {
  return (
    <div className='bg-[#F7F4F0]'>
    <div className='container mx-auto bg-[#F7F4F0]'>
        <div className=' md:flex bg-[#F7F4F0]'>
            <Image src='/about.png' alt="About" className="w-full object-cover" width={400} height={300} />
            <div className="md:mt-20 p-8 md:p-0">
            <Heading className="text-black" heading1={"About"}
             heading2={" BlueHaloHealth"}
              content={"At BlueHaloHealth, we believe that every family deserves the right support, guidance, and care to thrive at every stage of life. Our mission is to empower children, adolescents, and adults with expert therapy services tailored to their unique needs. With a team of certified and compassionate therapists, we provide evidence-based interventions that nurture growth, improve communication, and strengthen family bonds. From early developmental milestones to adult challenges, we walk alongside families every step of the way."}/>
            <Button title={"Read More About Us"} className={`button-transparent  mt-4`}/>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default About;