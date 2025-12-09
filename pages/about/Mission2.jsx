import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { TiSpiral } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import Heading from '@/components/Heading';
import { TbHeartCheck } from "react-icons/tb";
import { PiSealCheck } from "react-icons/pi";
import { TbEyeStar } from "react-icons/tb";
import Image from 'next/image';

function Mission2() {
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
    },
    {
      title: "Transparency",
      description: "We value transparency through honesty, ensuring open and clear communication with clients, caregivers, and our team.",
      icon: <TbEyeStar className="text-green-600 text-4xl " />
    },
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
    },
    {
      title: "Transparency",
      description: "We value transparency through honesty, ensuring open and clear communication with clients, caregivers, and our team.",
      icon: <TbEyeStar className="text-green-600 text-4xl " />
    }

  ];
  return (
    <div className=" py-[20px] md:py-[40px] lg:py-[60px]  overflow-hidden">
      <div className="mx-auto container  px-4 text-center">
        <div className='md:flex items-center justify-between'>
          <Image
            src="/about.png"
            alt="Learn about Blue Halo Health’s mission, values, and our expert team dedicated to holistic health and wellness."
            className="w-full lg:max-w-[580px] object-cover hidden md:block"
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={`/about.png?w=400&q=5`}
          // data-aos="flip-up"
          />
          <div className='p-5 text-2xl md:text-3xl'
          // data-aos="fade-left"
          >
            <Heading
              className="text-black text-2xl md:text-3xl"
              pClass="text-center pt-2 leading-snug"
              heading1={"Our"}
              heading2={" Vision"}
              content={"To pioneer Ontario’s most trusted, inclusive, and innovative virtual-first healthcare ecosystem—empowering every individual, family, and community with seamless access to exceptional care, free from barriers, delays, or bias. Blue Halo Health envisions a future where premium, evidence-based support becomes the everyday reality for all Ontarians."}
            />
          </div>
        </div>
        <div className='md:flex items-center justify-between'>

          <div className='p-5 text-2xl md:text-3xl '
          // data-aos="fade-right"
>
            <Heading
              className="text-black text-2xl md:text-3xl"
              pClass="text-center pt-2 leading-snug"
              heading1={"Our"}
              heading2={" Mission"}
              content={"To provide rapid, accessible, multidisciplinary healthcare that merges clinical mastery with genuine compassion. We unite senior clinicians, cutting-edge technology, and collaborative teams to deliver lifelong support—offering transparent, tailored, and inclusive services that empower informed decisions on development, mental health, and overall wellbeing."}
            />
          </div>
          <Image
            src="/about.png"
            alt="Learn about Blue Halo Health’s mission, values, and our expert team dedicated to holistic health and wellness."
            className="w-full lg:max-w-[580px] object-cover hidden md:block"
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={`/about.png?w=400&q=5`}
          // data-aos="flip-up"
          />
        </div>
        {/* </div> */}
        {/* <div className='md:flex items-center text-3xl md:text-5xl lg:text-5xl justify-between'>
            <Image
                        src="/about.png"
                        alt="About"
                        className="w-full lg:max-w-[580px] object-cover hidden md:block"
                        width={400}
                        height={300}
                        data-aos="flip-up"
                      /> */}
        {/* <div className='p-5 text-3xl md:text-5xl lg:text-5xl' data-aos="zoom-in-left">
          <Heading
            className="text-black text-center"
            heading1={"Our"}
            heading2={"Values"}
            pClass="text-center pt-2 leading-snug"
            content={"Blue Halo Health’s core values are at the heart of its mission: Passion fuels efforts to help children with autism and their families, quality is reflected in every standard they uphold, and transparency is shown through honest, open communication with clients, caregivers, and the team."}
          />
        </div>
        {/* </div> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {features && features?.map((feature, idx) => (
            <div
              key={idx}
              // data-aos="fade-right" 
              className="bg-white rounded-2xl shadow flex flex-col items-center px-3 py-3 md:px-6 md:py-6 text-center"
            >
              <div className="flex  justify-center items-center w-24 h-24 rounded-full bg-[#E6F4EA] mb-4 p-1">
                {feature?.icon}
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-2">{feature?.title}</h3>
              <p className="text-gray-600 text-sm">{feature?.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Mission2;