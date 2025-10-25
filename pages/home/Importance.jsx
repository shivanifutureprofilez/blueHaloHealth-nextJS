import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { TiSpiral } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import Heading from '@/components/Heading';

function Importance() {
  const features = [
    {
      title: "Experience certified Therapists",
      description: "Evidence-based behavioral interventions for skill development",
      icon: <GrCertificate className="text-green-dark text-4xl" />
    },
    {
      title: "Age specific, individualized Care",
      description: "Evidence-based behavioral interventions for skill development",
      icon: <TiSpiral className="text-green-dark text-4xl" />
    },
    {
      title: "School & Healthcare Partnerships",
      description: "Evidence-based behavioral interventions for skill development",
      icon: <FaRegHandshake className="text-green-dark text-4xl " />
    },
    {
      title: "PHIP-Compliant Privacy",
      description: "Evidence-based behavioral interventions for skill development",
      icon: <TbBadge className="text-green-dark text-4xl " />
    }
  ];

  return (
    <section className="bg-[#E6EBE3] pb-3 md:pb-26 md:pt-18   ">
      <div className="container mx-auto">
        <div className='pt-10 md:pt-0'>
        <Heading
          className="text-black text-center"
          heading1={"Why Families Choose"}
          heading2={" BlueHaloHealth"}
          //content={"Trusted expertise, personalized care, and proven results for every stage of development."}
        />
        </div>
        <p className="font-medium text-[15px] text-center mb-12  text-gray-700 p-2 md:p-0 max-w-[600px] mx-auto">
          Trusted expertise, personalized care, and proven results  for every stage of development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  m-3 md:m-0">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl  flex flex-col items-center p-5 md:p-10  text-center"
            >
              <div className="flex  justify-center items-center w-16 h-16 rounded-full bg-[#E6F4EA] mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-medium text-[15px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Importance;