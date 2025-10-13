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
      icon: <GrCertificate className="text-green-600 text-4xl mb-4" />
    },
    {
      title: "Age specific, individualized Care",
      description: "Evidence-based behavioral interventions for skill development",
      icon: <TiSpiral className="text-green-600 text-4xl mb-4" />
    },
    {
      title: "School & Healthcare Partnerships",
      description: "Evidence-based behavioral interventions for skill development",
      icon: <FaRegHandshake className="text-green-600 text-4xl mb-4" />
    },
    {
      title: "PHIP-Compliant Privacy",
      description: "Evidence-based behavioral interventions for skill development",
      icon: <TbBadge className="text-green-600 text-4xl mb-4" />
    }
  ];

  return (
    <section className="bg-[#F7F4F0] py-12">
      <div className="container mx-auto">
        <Heading
          className="text-black text-center"
          heading1={"Why Families Choose"}
          heading2={" BlueHaloHealth"}
          //content={"Trusted expertise, personalized care, and proven results for every stage of development."}
        />
        <p className="text-center mb-8 text-gray-700">
          Trusted expertise, personalized care, and proven results for every stage of development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow flex flex-col items-center px-8 py-10 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F4EA] mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Importance;