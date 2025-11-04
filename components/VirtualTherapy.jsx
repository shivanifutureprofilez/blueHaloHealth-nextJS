import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { TiSpiral } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import Heading from '@/components/Heading';
import { TbWorldHeart } from "react-icons/tb";
import { AiTwotoneSchedule } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";

function VirtualTherapy() {
  const features = [
    {
      title: "Accessible from Anywhere",
      description: "Get therapy support from the comfort of your home, no matter your location.",
      icon: <TbWorldHeart className="text-white bg-green-dark text-4xl" />
    },
    {
      title: "Flexible Scheduling",
      description: "Sessions that fit your family’s routine and availability.",
      icon: <AiOutlineSchedule className="!text-white  text-4xl" />
    },
    {
      title: "Personalized Care",
      description: "One-on-one sessions tailored to your child’s unique developmental goals.",
      icon: <FaRegHandshake className="text-white text-4xl " />
    },
    {
      title: "Safe & Secure",
      description: "We use HIPAA-compliant platforms to ensure privacy and confidentiality.",
      icon: <TbBadge className="text-white text-4xl " />
    }
  ];

  return (
    <section className="bg-[#4B9B711A] py-[40px]  lg:py-[60px]  ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
        <Heading
          className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
          heading1={"Virtual Therapy"}
        //   heading2={" BlueHaloHealth"}
        content={"At BlueHaloHealth, we understand that not every family can visit a clinic easily. Our Virtual Therapy sessions bring expert care directly to your home making therapy more flexible, convenient, and consistent. Whether it’s speech therapy, occupational therapy, or behavioral support, our licensed professionals provide the same quality of care through secure online sessions."}
        />
        {/* <p className="mb-6 md:mb-2 font-medium text-[15px] text-center  text-gray-700 max-w-[600px] mx-auto">
          At BlueKiteHealth, we understand that not every family can visit a clinic easily. Our Virtual Therapy sessions bring expert care directly to your home — making therapy more flexible, convenient, and consistent. Whether it’s speech therapy, occupational therapy, or behavioral support, our licensed professionals provide the same quality of care through secure online sessions.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  py-[15px] md:py-[30px] ">
          {features && features?.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl relative flex flex-col items-center px-5 md:px-9 py-5 md:pt-9 text-center"
            >
              <div className="flex  justify-center absolute top-[-30px] left-4 items-center w-16 h-16 rounded-full bg-green-dark mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold  text-xl mb-2 mt-4 md:mt-2">{feature.title}</h3>
              <p className="text-gray-600  font-medium text-[15px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VirtualTherapy;