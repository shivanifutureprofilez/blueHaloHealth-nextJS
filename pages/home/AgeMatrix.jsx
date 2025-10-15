import Heading from "@/components/Heading";
import React from "react"; 
import { FaCircleCheck } from "react-icons/fa6";


const ageGroups = [
  {
    title: "0-6 Early Years",
    image: '/AgeMatrix1.png', 
    services: [
      "Autism & Developmental Screening",
      "Occupational Therapy",
      "ABA/Behavior Therapy",
      "Speech Therapy",
      "Feeding/Nutrition",
      "Family Counseling",
    ],
  },
  {
    title: "7-12 School Age",
    image: "/AgeMatrix2.png",
    services: [
      "Psychoeducational testing",
      "Speech & OT",
      "ADHD evaluation",
      "Nutrition support",
      "ABA/social skills groups",
      "Family counseling",
    ],
  },
  {
    title: "13-17 Adolescent",
    image: "/AgeMatrix3.png",
    services: [
      "Mental health & counselling",
      "Transition planning",
      "Executive function coaching",
      "Advanced speech/OT",
      "ADHD assessment",
      "Dietitian",
      "Audiology",
    ],
  },
  {
    title: "18+ Adults",
    image: "/AgeMatrix4.png",
    services: [
      "Mental health therapy",
      "Adult ADHD/ASD assessment",
      "Career & life counselling",
      "Occupational rehab",
      "Nutrition for Chronic Conditions",
      "Audiology",
    ],
  },
];

export default function AgeMatrix() {
  return (
    <section className="bg-[#F7F4F0] py-12  md:m-0">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-2">
          Comprehensive <span className="text-green-600">Therapy Services</span>
        </h2> */}
         <Heading
          className="text-black text-center"
          heading1={"Comprehensive"}
          heading2={" Therapy Services"}
          //content={"Trusted expertise, personalized care, and proven results for every stage of development."}
        />
       <p className="font-medium text-[15px] text-center mb-8  text-gray-700 p-4 md:p-0 max-w-[600px] mx-auto">
          Our certified therapists provide individualized care across all developmental stages
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {ageGroups.map((group, idx) => (
            <div key={idx} className="bg-white border-b border-[#009C4A] rounded-[25px] shadow overflow-hidden flex flex-col items-center">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-4 relative">
                <img
                  src={group.image}
                  alt={group.title}
                  className="object-cover w-full h-full"
                />
              <h3 className="  mb-3 text-start py-[20px] px-[30px] text-white text-xl font-semibold absolute top-0 left-0 w-full">{group.title}</h3>
              </div>
              <ul className="text-gray-800 p-4 w-full ">
                {group.services.map((service, i) => (
                  <li key={i} className="mb-2 text-[#626262] flex items-start font-semibold text-[15px] ">
                    <span className="mr-2 mt-1">
                      <FaCircleCheck  className="text-green-500 rounded-xl"/>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}