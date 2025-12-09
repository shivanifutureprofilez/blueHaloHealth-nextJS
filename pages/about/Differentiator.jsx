import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { TiSpiral } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import Heading from '@/components/Heading';
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineHarmonyOS } from "react-icons/ai";
import { MdOutlineDiversity2 } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";

function Differentiator() {
    const features = [
        {
            title: "Instant Connections",
            description: "Skip the endless queues—get matched with experts in moments, not months.",
            icon: <FaRegHandshake className="text-green-dark text-4xl " />

        },
        {
            title: "Expert-Led Care",
            description: "Senior clinicians guide the team, ensuring depth and precision, with a mix of experienced and supervised professionals tailored to your needs.",
            icon: <GrUserExpert className="text-green-dark text-4xl" />
        },
        {
            title: "Holistic Harmony",
            description: "A 360° view of well-being, weaving together developmental, behavioral, mental health, speech therapy, and counseling into a personalized tapestry.",
            icon: < AiOutlineHarmonyOS className="text-green-dark text-4xl" />
        },
        {
            title: "Diversity-Driven Design",
            description: "Tailored pathways for women, LGBTQ2S+ communities, neurodiverse individuals, newcomers, and caregivers—because true care celebrates every story.",
            icon: <MdOutlineDiversity2 className="text-green-dark text-4xl " />
        },
        {
            title: "Empowered Choices",
            description: "Full transparency at your fingertips—select your providers, services, and journey with confidence and control.",
            icon: <SiTrustpilot className="text-green-dark text-4xl " />
        }
    ];

    return (
        <section className="bg-[#4B9B711A] py-[40px]  lg:py-[60px]  ">
            <div className="mx-auto container  px-4 text-center">
                <Heading
                    className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl mb-3"
                    heading1={"What "}
                    heading2={" Sets Us Apart?"}
                // content={"Innovation infused into every interaction!!"}
                />
                <p className="mb-6 md:mb-4 font-medium text-[16px] text-center text-gray-700 leading-relaxed max-w-[780px] mx-auto px-4">
                    <span className="font-semibold text-[18px] ">Innovation infused into every interaction: </span>
                    We’re engineering a healthcare revolution that’s as trustworthy as it is transformative -
                    rooted in empathy, powered by evidence-based rigor, and designed for the diverse rhythms
                    of modern family life.</p>
                    
                    <p className='mb-6 md:mb-4 font-medium text-[16px] text-center text-gray-700 leading-relaxed max-w-[780px] mx-auto px-4'><span className="font-semibold text-[18px]">Blue Halo Health:</span> Where seasoned expertise ignites compassionate change.
                    Where barriers dissolve into boundless access. Where every family shines brighter —
                    truly seen, understood, and supported.</p>
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  py-[15px] md:py-[30px] ">
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

export default Differentiator;