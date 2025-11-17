import Heading from '@/components/Heading'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import FeedbackCard from '@/components/FeedbackCard';
import features from "../../public/feedback.json";
import { TbEyeStar, TbHeartCheck } from 'react-icons/tb';
import { PiSealCheck } from 'react-icons/pi';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiMagnifyingGlass } from "react-icons/gi";

function Values() {
    const features = [
        {
            title: "Clinical Excellence",
            description: "We uphold the pinnacle of clinical standards, with seasoned experts steering every initiative and evidence shaping every insight.",
            icon: <FaUserDoctor size={35} className="text-green-600 text-4xl" />
        },
        {
            title: "Accessibility Without Compromise",
            description: "Exceptional care transcends location, timelines, or status—our virtual-first approach guarantees prompt entry for every Ontarian.",
            icon: <PiSealCheck size={35} className="text-green-600 text-4xl" />
        },
        {
            title: "Dignity And Compassion",
            description: "Every interaction honors your humanity: We listen deeply, understand fully, and guide without judgment or haste.",
            icon: <FaHandHoldingHeart size={35} className="text-green-600 text-4xl " />
        },
        {
            title: "Inclusivity And Representation",
            description: "Our services are crafted to embrace all voices—tailored for women, LGBTQ2S+ individuals, neurodiverse families, newcomers, and those with multifaceted needs.",
            icon: <TbEyeStar size={35} className="text-green-600 text-4xl " />
        },
        {
            title: "Collaboration With Consent",
            description: "Seamless team coordination happens on your terms—ensuring unified care that’s always collaborative, never coercive.",
            icon: <TbHeartCheck size={35} className="text-green-600 text-4xl" />
        },
        {
            title: "Transparency And Empowerment",
            description: "Clear insights, straightforward pricing, and complete options empower you to navigate your wellness path with confidence.",
            icon: <GiMagnifyingGlass size={35} className="text-green-600 text-4xl" />
        },
        {
            title: "Innovation With Purpose",
            description: "We harness advanced tech, virtual platforms, and forward-thinking strategies—solely to elevate access, safety, and results.",
            icon: <TbEyeStar size={35} className="text-green-600 text-4xl " />
        },
        {
            title: "Integrity And Trust",
            description: "Honesty, accountability, and equity define us—safeguarding the profound trust entrusted by families across Ontario.",
            icon: <TbEyeStar size={35} className="text-green-600 text-4xl " />
        }

    ];
    return (
        <div>
            <div className='  '>
                <div  className="mx-auto container  px-4 text-center">
                    {/* <Heading  className="heading text-center md:text-left poppins text-black tracking-tighter leading-tight font-bold text-3xl md:text-5xl lg:text-5xl mb-3" heading1={"Our"} heading2={" Values"} />
                    <p className="text-center pt-2 leading-snug   max-w-[600px] mx-auto">
                        Blue Halo Health’s core values are at the heart of its mission: Passion fuels efforts to help children with autism and their families, quality is reflected in every standard they uphold, and transparency is shown through honest, open communication with clients, caregivers, and the team.
                    </p> */}
                    <div className=' text-3xl md:text-5xl lg:text-5xl' 
                    // data-aos="fade-right"
                    >
          <Heading
            className="text-black "
            pClass="text-center pt-2 leading-snug max-w-[600px] mx-auto"
            heading1={"Our"}
            heading2={" Values"}
            content={"Blue Halo Health’s core values are at the heart of its mission: Passion fuels efforts to help children with autism and their families, quality is reflected in every standard they uphold, and transparency is shown through honest, open communication with clients, caregivers, and the team."}
          />
        </div>
                    <div className='py-[15px] md:py-[30px] text-black flex  items-center text-center justify-center '>
                        <Swiper
                            spaceBetween={20}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                            breakpoints={
                                {
                                    468: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }
                            }
                        >
                            {/* {features?.map((item, indx) => (
            <SwiperSlide><FeedbackCard data={item} indx={indx} /></SwiperSlide>
        ))} */}
                            {features && features.map((feature, idx) => (
                                <SwiperSlide key={idx}>
                                    <div
                                        // data-aos="fade-right" 
                                        className="bg-white rounded-2xl h-full md:h-[300px] shadow flex flex-col items-center px-3 py-3 md:px-9 md:py-9  text-center"
                                    >
                                        <div className="flex  justify-center items-center  rounded-full bg-[#E6F4EA] mb-4 p-3">
                                            {feature?.icon}
                                        </div>
                                        <h3 className="font-semibold text-lg md:text-xl mb-2">{feature?.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature?.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values;