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
    <div className="bg-[#E6EBE3] py-12 ">
      <div className="container mx-auto">
        <div className='mb-3'>
        <Heading
          className="text-black "
          pClass="text-center"
          heading1={"Our"}
          heading2={" Vission"}
          content={"At BlueHaloHealth, we envision a world where every child, adolescent, and adult can reach their full potential — supported by compassionate care, expert guidance, and a community that understands their unique journey. We aim to create brighter futures by making therapy and assessment services accessible, empowering, and meaningful for every family we serve."}
        />
        </div>
        <div className='mb-3'>
        <Heading
          className="text-black "
          pClass="text-center"
          heading1={"Our"}
          heading2={" Mission"}
          content={"Our mission is to provide comprehensive, evidence-based therapy and assessment services that nurture growth, independence, and well-being across all ages. We are committed to supporting individuals and families through personalized care, collaborative teamwork, and a warm, inclusive environment — helping every client achieve progress that lasts a lifetime."}
        />
        </div>
        <Heading
          className="text-black text-center"
          //heading1={"Our"}
          heading2={"Values"}
          //content={"Our mission is to provide comprehensive, evidence-based therapy and assessment services that nurture growth, independence, and well-being across all ages. We are committed to supporting individuals and families through personalized care, collaborative teamwork, and a warm, inclusive environment — helping every client achieve progress that lasts a lifetime."}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 m-3 md:m-0">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow flex flex-col items-center px-8 py-10 text-center"
            >
              <div className="flex  justify-center items-center w-16 h-16 rounded-full bg-[#E6F4EA] mb-4">
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