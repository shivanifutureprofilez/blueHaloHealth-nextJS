import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { TiSpiral } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import Heading from '@/components/Heading';
import { TbHeartCheck } from "react-icons/tb";
import { PiSealCheck } from "react-icons/pi";
import { TbEyeStar } from "react-icons/tb";

function Mission() {
  const features = [
    {
      title: "Passion",
      description: "We are passionate about helping children with autism spectrum disorders and their families-live their best lives",
      icon: <TbHeartCheck className="text-green-600 text-4xl" />
    },
    {
      title: "Quality",
      description: "We hold ourselves to the highest standards of quality in everything that we do",
      icon: <PiSealCheck className="text-green-600 text-4xl" />
    },
    {
      title: "Transparency",
      description: "We value transparency through honesty, ensuring open and clear communication with clients, caregivers, and our team.",
      icon: <TbEyeStar className="text-green-600 text-4xl " />
    }

  ];
  return (
    <div className=" py-[20px] md:py-[40px] lg:py-[60px]  ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
        {/* <div className='grid grid-cols-1 md:grid-cols-2'> */}
        <div className='p-5'>
          <Heading
            className="text-black "
            pClass="text-center"
            heading1={"Our"}
            heading2={" Vision"}
            content={"At BlueHaloHealth, we envision a world where every child, adolescent, and adult can reach their full potential — supported by compassionate care, expert guidance, and a community that understands their unique journey. We aim to create brighter futures by making therapy and assessment services accessible, empowering, and meaningful for every family we serve."}
          />
        </div>
        <div className='p-5 '>
          <Heading
            className="text-black "
            pClass="text-center"
            heading1={"Our"}
            heading2={" Mission"}
            content={"Our mission is to provide comprehensive, evidence-based therapy and assessment services that nurture growth, independence, and well-being across all ages. We are committed to supporting individuals and families through personalized care, collaborative teamwork, and a warm, inclusive environment — helping every client achieve progress that lasts a lifetime."}
          />
        </div>
        {/* </div> */}
        <div className='p-5 '>
          <Heading
            className="text-black text-center"
            heading1={"Our"}
            heading2={"Values"}
            pClass="text-center"
            content={"Blue Halo Health’s core values are at the heart of its mission: Passion fuels efforts to help children with autism and their families, quality is reflected in every standard they uphold, and transparency is shown through honest, open communication with clients, caregivers, and the team."}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow flex flex-col items-center px-3 py-3 md:px-6 md:py-6 text-center"
            >
              <div className="flex  justify-center items-center w-24 h-24 rounded-full bg-[#E6F4EA] mb-4 p-1">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mission;