// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Heading from "@/components/Heading";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
// Our Service Images
// import about4 from "../img/about/about4.jpg"
// import about7 from "../img/about/about7.jpg";
// import about12 from "../img/about/about12.jpg";
// import about14 from "../img/about/about14.jpg";
// import about10 from "../img/about/about10.jpg";
// import about13 from "../img/about/about13.jpg";
// import about11 from "../img/about/about11.jpg";
// import about9 from "../img/about/about9.jpg";
// import about6 from "../img/about/about6.jpg"
// import about3 from "../img/about/about3.jpg"





const teams = [
    { name: "Mr. Ramesh Chand Sharma", designation: "Chairman", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team1.png' },
    { name: "Mr. Rakesh Sharma", designation: "Director", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team2.png' },
    { name: "Ms. Sunita Sharma", designation: "Proprietor – Cadmax Stupika",parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team3.png' },
    { name: "Mr. Lokesh Sharma", designation: "Proprietor- Cadmax Archinterio",parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team4.png' },
    { name: "Mr. Sunil Sharma", designation: "H.O.D. Of Planning 1st",parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team1.png' },
    { name: "Mr. Shankar Sharma", designation: "H.O.D. Of Planning 2nd", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan",img: '/team2.png' },
    { name: "Mr. Suresh Sharma", designation: "H.O.D. Of Surveying",parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team3.png' },
    { name: "Mr. Nanuram Kumawat", designation: "H.O.D. Of Accountants",parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team4.png' },
    { name: "Mr. M.S. Bhati", designation: "H.O.D. Of Architecture",parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team1.png' },
    { name: "Mr. Govind Kumar", designation: "H.O.D. Of Management",parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team2.png' },
];

const Team = () => {
    return (
        <div className="mx-auto pb-18">
            <div className="container mx-auto py-12">
                <div className='mb-3 mt-6'>
                    <Heading
                        className="text-black "
                        heading1={"Meet "}
                        heading2={"Our Team"}
                        pClass="text-center"
                        content={"Below are some of our 250+ therapists"}
                    />
                </div>
            </div>
            <Swiper
                spaceBetween={2} centeredSlides={true}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Autoplay]}

                className="w-full"
            >
                {teams && teams?.map((team, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex p-1 flex-col items-start justify-start min-h-[450px]">
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden group">
                                <Image
                                    src={team?.img}
                                    width={500}
                                    height={400}
                                    alt={team?.name}
                                    className="object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-4"
                                />

                                <div className="absolute inset-0  flex items-center text-center justify-center hover:bg-[#009C4A]">
                                    <div className=" text-white p-4 rounded-md opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                        <h2 className="text-[20px] font-bold">
                                            {team?.name}
                                        </h2>
                                        <p className="">{team?.parah1}</p>
                                        <p>{team?.parah2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Team;
