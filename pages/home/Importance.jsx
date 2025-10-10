import React from 'react'

import { GrCertificate } from "react-icons/gr";
import { TiSpiral } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import { FaBeer } from 'react-icons/fa'; // 1. Import the icon
import Heading from '@/components/Heading';
import Card from '@/components/Card';

function Importance() {

   const features = [ 
    {
      "title": "Experienced Certified Therapists",
      "description": "Evidence-based behavioral interventions for skill development",
      "icon": <GrCertificate className=" bg-[#4B9B711A]  text-5xl min-h-[55px] rounded-full min-w-[55px]  mb-2 border border-primary round-[10px]  p-2"/>
    },
    {
      "title": "Age Specific, Individualized Care",
      "description": "Evidence-based behavioral interventions for skill development",
      "icon": <TiSpiral className=" bg-[#4B9B711A]  text-5xl min-h-[55px] rounded-full min-w-[55px]  mb-2 border border-primary round-[10px]  p-2"/>
    },
    {
      "title": "School & Healthcare Partnerships",
      "description": "Evidence-based behavioral interventions for skill development",
      "icon": <FaRegHandshake className=" bg-[#4B9B711A]  text-5xl min-h-[55px] rounded-full min-w-[55px]  mb-2 border border-primary round-[10px]  p-2"/>
    },
    {
      "title": "HIPAA-Compliant Privacy",
      "description": "Evidence-based behavioral interventions for skill development",
      "icon": <TbBadge className=" bg-[#4B9B711A]  text-5xl min-h-[55px] rounded-full min-w-[55px]  mb-2 border border-primary round-[10px]  p-2"/>
    }
  ]
console.log("features" ,features)

  return (
    <div className='bg-[#4B9B711A] p-4'>
    <div className='container mx-auto '>
        <div className=''>
            <Heading className="text-black text-center" heading1={"Why Families Choose"} heading2={" BlueHaloHealth"} content={"Trusted expertise, personalized care, and proven results for every stage of development."}/>
        </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {features?.map((feature) => className={`bg-white rounded-xl`} feature={feature} />
        ))} 
      </div> */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 mt-3'>
        {features?.map((item,indx)=>(
         <Card data={item} indx={indx}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Importance;