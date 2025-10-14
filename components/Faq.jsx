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
    <section className="bg-[#F7F4F0] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
         <Heading
                    className="text-black"
                    heading1={"Frequently asked "}
                    heading2={" questions"}
                    //content={"Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more."}
                />

        <div className="space-y-4 mt-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 "
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
    </section>
  );
}

export default Faq;
