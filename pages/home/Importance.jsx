import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { TiSpiral } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import Heading from '@/components/Heading';

function Importance() {
  const features = [
    {
      title: "Integrated System of Care",
      description: "One record, one coordinated team - our clinicians communicate behind the scenes as required, so you never have to manage multiple providers.",
      icon: <GrCertificate className="text-green-dark text-4xl" />
    },
    {
      title: "Expert, Regulated Clinicians",
      description: "Psychologists (C.Psych), Social Workers (RSW), Psychotherapists (RP), NPs, Psychiatrists, OTs, SLPs, and BCBAs working together for your child.",
      icon: <TiSpiral className="text-green-dark text-4xl" />
    },
    {
      title: "Age-Specific Programs, and Truly Personalized Care",
      description: "Your goals drive the plan. No one-size-fits-all therapy. Therapy at your pace. Developmentally tailored pathways for all ages.",
      icon: <FaRegHandshake className="text-green-dark text-4xl " />
    },
    {
      title: "Private, Secure, PHIPA-Compliant",
      description: "Your information is protected through a fully encrypted, secure virtual system.",
      icon: <TbBadge className="text-green-dark text-4xl " />
    }
  ];

  return (
    <section className="bg-[#4B9B711A] py-[40px]  lg:py-[60px]  ">
      <div className="mx-auto container  px-4 text-center">
        <Heading
          className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-4xl  mb-3"
          heading1={"Why Families Choose"}
          heading2={" BlueHaloHealth"}
        //content={"Trusted expertise, personalized care, and proven results for every stage of development."}
        />
        <p className="mb-6 md:mb-2 font-medium text-[15px] text-center  text-gray-700 max-w-[600px] mx-auto">
          Trusted expertise, personalized care, and proven results  for every stage of development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  py-[15px] md:py-[30px] ">
          {features && features?.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl  flex flex-col items-center p-5 md:p-8  text-center"
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