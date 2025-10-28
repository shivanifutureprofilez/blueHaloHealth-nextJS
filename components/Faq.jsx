"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Heading from "./Heading";

const faqs = [
  {
    question: "What is Autism Spectrum Disorder (ASD)?",
    answer:
      "Autism Spectrum Disorder is a developmental condition that affects how a person learns, behaves, and interacts with others. Each individual with autism experiences the world in their own unique way.",
  },
  {
    question: "What is ABA Therapy?",
    answer:
      "ABA Therapy (Applied Behavior Analysis) is a therapy based on the science of learning and behavior. It helps improve social, communication, and learning skills through positive reinforcement.",
  },
  {
    question: "How do I get started with ABA therapy at Action Behavior Centers?",
    answer:
      "You can start by scheduling an initial consultation, where our professionals will evaluate your needs and guide you through the onboarding process.",
  },
  {
    question: "What age range do you serve?",
    answer:
      "We provide services for children between 2 to 18 years old, depending on their individual needs and goals.",
  },
  {
    question: "Do you offer one-on-one therapy?",
    answer:
      "Yes, we provide personalized one-on-one therapy sessions to ensure every child receives focused and effective support.",
  },
  {
    question: "Does my child need an autism diagnosis before starting therapy?",
    answer:
      "An initial evaluation helps determine whether therapy is the right fit. A formal diagnosis is preferred but not always mandatory to begin services.",
  },
  {
    question: "Do you offer summer programs?",
    answer:
      "Yes, we offer engaging summer programs designed to support learning and growth through fun, structured activities.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F8F9] py-[20px] md:py-[40px] lg:py-[60px]  ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
        <div className="flex flex-wrap justify-between md:flex-nowrap">
          <div className="max-w-sm">
            <Heading
              className="text-black text-center md:text-left"
              heading1={"Frequently asked "}
              heading2={" questions"}
            />
          </div>
          <div className="space-y-4 mt-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white !max-w-[600px] rounded-lg shadow-sm border border-gray-100 p-5 transition-all duration-900 ease-in-out hover:shadow-md "
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-gray-800 text-[17px] md:text-[18px]">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiMinus className="text-[#00D967] text-xl " />
                  ) : (
                    <FiPlus className="text-[#00D967] text-xl " />
                  )}
                </button>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3 leading-relaxed text-[15px] md:text-[16px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
