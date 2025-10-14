import Heading from "@/components/Heading";
import React from "react";

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
    <section className="bg-[#F7F4F0] py-12 m-3 md:m-0">
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
        <p className="text-center text-[18px] mb-8 text-gray-700">
          Our certified therapists provide individualized care across all developmental stages
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ageGroups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-[25px] shadow overflow-hidden flex flex-col items-center">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-4 relative">
                <img
                  src={group.image}
                  alt={group.title}
                  className="object-cover w-full h-full"
                />
              <h3 className="  mb-3 text-start py-[20px] px-[30px] text-white text-xl font-semibold absolute top-0 left-0 w-full">{group.title}</h3>
              </div>
              <ul className="text-gray-800 p-4 ">
                {group.services.map((service, i) => (
                  <li key={i} className="mb-2 text-[#626262] flex items-start font-semibold text-[15px] ">
                    <span className="me-2 mt-1">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="13" height="13" rx="6.5" fill="#009C4A"/>
                      </svg>
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