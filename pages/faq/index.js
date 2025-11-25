"use client";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import SectionBanner from "@/components/SectionBanner";
import { useState } from "react";

// Your JSON (paste the array here)
const faqs = [
  {
    "section": "About Blue Halo",
    "question": "What is Blue Halo and how does your multidisciplinary model work?",
    "answer": "Blue Halo provides access to Speech-Language Pathologists, Occupational Therapists, Psychologists, BCBAs, Registered Psychotherapists, and Social Workers. Each clinician practices independently under their regulatory college. With your consent, clinicians may collaborate when clinically appropriate. You choose which services to use."
  },
  {
    "section": "About Blue Halo",
    "question": "Do clinicians collaborate with each other?",
    "answer": "Clinicians may collaborate with your consent when it is clinically appropriate. Collaboration is provider-led, optional, and based on your family’s goals."
  },
  {
    "section": "About Blue Halo",
    "question": "Do I need a referral to start services?",
    "answer": "No. Families can self-refer to all services at Blue Halo."
  },
  {
    "section": "About Blue Halo",
    "question": "Do you offer virtual and in-person care?",
    "answer": "Yes. Most services are available virtually across Ontario. In-person options depend on clinician availability and location. To receive any services, including virtual care, the patient or caregiver must be a current resident of Ontario, as clinicians are licensed only within the province."
  },
  {
    "section": "About Blue Halo",
    "question": "How is my privacy protected?",
    "answer": "We follow PHIPA standards and use secure systems for scheduling, charting, and communication. Information is only shared with your consent."
  },

  {
    "section": "Autism, ADHD & Assessments",
    "question": "Do you assess for autism (ASD), ADHD, and neurodevelopmental conditions?",
    "answer": "Yes. Licensed psychologists complete diagnostic assessments for ASD, ADHD, learning, cognitive, and other neurodevelopmental conditions. All assessments follow Ontario diagnostic standards."
  },
  {
    "section": "Autism, ADHD & Assessments",
    "question": "What does early intervention look like?",
    "answer": "Our early-years intervention is play-based, developmental, naturalistic, and parent-involved. We do not offer high-intensity ABA programs for toddlers. Instead, we use gentle, evidence-based approaches that support communication, play, emotional regulation, and daily routines."
  },
  {
    "section": "Autism, ADHD & Assessments",
    "question": "My child is autistic—what services are available?",
    "answer": "Children may benefit from speech therapy, occupational therapy, behaviour consultation, parent coaching, mental-health therapy, medication support, or psychological assessment. With your consent, clinicians may recommend options. You make the final decisions, and services are combined only when clinically appropriate."
  },

  {
    "section": "Therapies",
    "question": "How do I know if my child needs speech therapy?",
    "answer": "Children may benefit from speech therapy if you notice delayed language, unclear speech, difficulty following instructions, challenges with social communication, or frustration when communicating. An SLP can complete a screening or assessment to determine next steps."
  },
  {
    "section": "Therapies",
    "question": "What does OT help with?",
    "answer": "OT supports sensory processing, motor skills, emotional regulation, feeding, play, and daily routines."
  },
  {
    "section": "Therapies",
    "question": "Do you offer behavioural support?",
    "answer": "Yes. Behaviour consultation focuses on routines, learning supports, emotional regulation, and safety planning. We do not provide high-intensity ABA."
  },
  {
    "section": "Therapies",
    "question": "What mental-health therapies do you offer?",
    "answer": "Our RSWs, RPs, and Psychologists offer CBT, DBT-informed work, ACT, trauma-informed therapy, and parent-child work depending on age and need."
  },
  {
    "section": "Therapies",
    "question": "Do you prescribe medication?",
    "answer": "Our psychiatric clinicians can evaluate mental-health needs, explain medication options, and provide monitoring. Medication is never used to 'treat autism' but may support co-occurring needs."
  },

  {
    "section": "Appointments & Policies",
    "question": "How do I book an appointment?",
    "answer": "You can book online through the secure portal, call our intake team, or request a free consultation. Accessible booking assistance is available upon request."
  },
  {
    "section": "Appointments & Policies",
    "question": "What is your cancellation policy?",
    "answer": "We require 3 business days (72 hours) notice to cancel or reschedule. All changes must be submitted through the secure portal. Late cancellations and no-shows are billed at the full session fee."
  },
  {
    "section": "Appointments & Policies",
    "question": "What happens if I miss a session?",
    "answer": "Missed appointments are billed at the full session rate. Repeated missed sessions may result in services being paused."
  },
  {
    "section": "Appointments & Policies",
    "question": "What is your aggression, harassment, and inappropriate behavior toward staff policy?",
    "answer": "Aggression, harassment, threats, or inappropriate behaviour toward staff or clients is not permitted. Services may be paused or discontinued for safety reasons."
  },
  {
    "section": "Appointments & Policies",
    "question": "How can I provide feedback or report a concern?",
    "answer": "Feedback can be submitted through the secure portal. Clinical concerns are reviewed by the regulated professional involved. We will acknowledge complaints within 7 days and outline next steps. You may contact the clinician’s regulatory college if needed."
  },

  {
    "section": "Billing & Insurance",
    "question": "How does payment work?",
    "answer": "Payment is required at the time of booking. Appointments are not confirmed until payment is completed. Receipts can be submitted to insurance if your plan offers reimbursement."
  },
  {
    "section": "Billing & Insurance",
    "question": "What methods of payment do you accept?",
    "answer": "Credit card and debit/visa-debit for select services. Clinicians cannot accept cash for regulatory and safety reasons."
  },
  {
    "section": "Billing & Insurance",
    "question": "Are services covered by insurance?",
    "answer": "Coverage varies by plan. It is the patient’s responsibility to confirm eligibility, coverage limits, and clinician types. Blue Halo cannot guarantee reimbursement."
  },

  {
    "section": "Coordination & Communication",
    "question": "Can you talk to my child’s school, daycare, or doctor?",
    "answer": "Yes—with your written consent and only if the clinician believes it is clinically appropriate. Collaboration is provider-led and optional."
  },
  {
    "section": "Coordination & Communication",
    "question": "What if my child needs multiple types of therapy?",
    "answer": "You may choose any combination of services. With your consent, clinicians may collaborate when clinically appropriate to support consistent goals."
  },

  {
    "section": "Accessibility (AODA)",
    "question": "How do you support accessibility (AODA)?",
    "answer": "Blue Halo follows the Accessibility for Ontarians with Disabilities Act. If you need assistance with booking, payment, portal access, communication, or documents, we will provide accessible alternatives on request."
  }
];


export default function index() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <Layout>
            <div className='bg-[#F7F4F0]'>
                <SectionBanner title={"FAQ"} />
                <div className="max-w-5xl mx-auto py-16 px-6 text-gray-900">
                    <h2 className="text-4xl font-bold text-center mb-10 text-[#00A859]">
                        Frequently Asked Questions
                    </h2>
                    {/* <Heading
              className="text-black text-center md:text-left"
              heading1={"Frequently asked "}
              heading2={" questions"}
            //   content={"You have got questions? We've got answers!!"}
            //   pClass={"font-medium text-[15px] mt-1 text-center  md:mb-2  text-gray-700  px-4 md:p-0 max-w-[600px] mx-auto"}
            /> */}
             {/* <Heading
          className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
          heading1={"Frequently asked "}
          heading2={" questions"}
        //content={"Trusted expertise, personalized care, and proven results for every stage of development."}
        />
        <p className="mb-6 md:mb-2 font-medium text-[15px] text-center  text-gray-700 max-w-[600px] mx-auto">
          You have got questions? We've got answers!!
        </p> */}

                    {/* Group by sections */}
                    {Object.entries(
                        faqs.reduce((acc, faq) => {
                            acc[faq.section] = acc[faq.section] || [];
                            acc[faq.section].push(faq);
                            return acc;
                        }, {})
                    ).map(([section, items]) => (
                        <div key={section} className="mb-12">
                            <h2 className="text-2xl font-semibold text-green-600 mb-4">
                                {section}
                            </h2>

                            <div className="space-y-4">
                                {items.map((faq, index) => {
                                    const globalIndex = `${section}-${index}`;
                                    const isOpen = openIndex === globalIndex;

                                    return (
                                        <div
                                            key={index}
                                            className="border border-gray-300 rounded-lg shadow-sm"
                                        >
                                            <button
                                                onClick={() => toggle(globalIndex)}
                                                className="w-full flex justify-between items-center p-4 text-left font-medium bg-white hover:bg-gray-50"
                                            >
                                                <span>{faq.question}</span>
                                                <span className="text-green-600 text-xl">
                                                    {isOpen ? "−" : "+"}
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <div className="p-4 border-t bg-gray-50 text-gray-700">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </Layout >
            );
}
