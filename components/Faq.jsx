"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Heading from "./Heading";
import Link from "next/link";

const faqs = [
  {
        "question": "What is Blue Halo and how does your multidisciplinary model work?",
        "answer": "Blue Halo provides access to Speech-Language Pathologists, Occupational Therapists, Psychologists, BCBAs, Registered Psychotherapists, and Social Workers. Each clinician practices independently under their regulatory college. With your consent, clinicians may collaborate when clinically appropriate. You choose which services to use."
      },
      {
        "question": "Do clinicians collaborate with each other?",
        "answer": "Clinicians may collaborate with your consent when it is clinically appropriate. Collaboration is provider-led, optional, and based on your family’s goals."
      },
      {
        "question": "Do I need a referral to start services?",
        "answer": "No. Families can self-refer to all services at Blue Halo."
      },
      {
        "question": "Do you offer virtual and in-person care?",
        "answer": "Yes. Most services are available virtually across Ontario. In-person options depend on clinician availability and location. To receive any services, including virtual care, the patient or caregiver must be a resident of Ontario, as clinicians are licensed only within the province."
      },
      {
        "question": "How is my privacy protected?",
        "answer": "We follow PHIPA standards and use secure systems for scheduling, charting, and communication. Information is only shared with your consent."
      },
      {
        "question": "Do you assess for autism (ASD), ADHD, and neurodevelopmental conditions?",
        "answer": "Yes. Licensed psychologists complete diagnostic assessments for ASD, ADHD, learning, cognitive, and other neurodevelopmental conditions. All assessments follow Ontario diagnostic standards."
      },
      {
        "question": "What does early intervention look like?",
        "answer": "Our early-years intervention is play-based, developmental, naturalistic, and parent-involved. We do not offer high-intensity ABA programs for toddlers. Instead, we use gentle, evidence-based approaches that support communication, play, emotional regulation, and daily routines."
      },
      {
        "question": "My child is autistic—what services are available?",
        "answer": "Children may benefit from speech therapy, occupational therapy, behaviour consultation, parent coaching, mental-health therapy, medication support, or psychological assessment. With your consent, clinicians may recommend options. You make the final decisions, and services are combined only when clinically appropriate."
      }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F8F9] py-[20px] md:py-[40px] lg:py-[60px]  ">
      <div className="mx-auto container  px-4 text-center">
        <div className="max-w-[1000px] mx-auto">
          <div className="">
            <Heading
              className="text-black text-center md:text-left text-2xl md:text-3xl"
              heading1={"Frequently asked "}
              heading2={" questions"}
              // content={"You have got questions? We've got answers!!"}
              // pClass={"font-medium text-[15px] mt-1 text-center  md:mb-2  text-gray-700  px-4 md:p-0 max-w-[600px] mx-auto"}
            />
          </div>
          <div className="space-y-4 mt-4 w-full">
            {faqs && faqs?.map((faq, index) => (
              <div
                key={index}
                className="w-full bg-white  rounded-lg shadow-sm border border-gray-100 p-5 transition-all duration-900 ease-in-out hover:shadow-md "
              >
                <button
                  className="flex justify-between items-center cursor-pointer w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-gray-800 text-[17px] md:text-[18px]">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiMinus className="text-[#00D967] text-xl cursor-pointer" />
                  ) : (
                    <FiPlus className="text-[#00D967] text-xl cursor-pointer" />
                  )}
                </button>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3 text-left leading-relaxed text-[15px] md:text-[16px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
         
        </div>
         <Link
                href="/faq"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7"
                // data-aos="zoom-out-right"
              >
                Read More
              </Link>
      </div>
    </section>
  );
}

export default Faq;
