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
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                <img
                  src={group.image}
                  alt={group.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-center">{group.title}</h3>
              <ul className="text-gray-800 space-y-2">
                {group.services.map((service, i) => (
                  <li key={i} className="flex items-center text-[16px]">
                    <span className="text-green-500 mr-2 text-2xl font-bold">&#x2022;</span>
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