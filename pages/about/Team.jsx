// CitySlider.jsx
import React, { useEffect, useState} from "react";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Heading from "@/components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import RoutesLists from "../api/RoutesLists";
import TeamItem from "./TeamItem";

// const teams = [
//     { name: "Mr. Ramesh Chand Sharma", designation: "Chairman", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team1.png' },
//     { name: "Mr. Rakesh Sharma", designation: "Director", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team2.png' },
//     { name: "Ms. Sunita Sharma", designation: "Proprietor – Cadmax Stupika", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team3.png' },
//     { name: "Mr. Lokesh Sharma", designation: "Proprietor- Cadmax Archinterio", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team4.png' },
//     { name: "Mr. Sunil Sharma", designation: "H.O.D. Of Planning 1st", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team1.png' },
//     { name: "Mr. Shankar Sharma", designation: "H.O.D. Of Planning 2nd", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team2.png' },
//     { name: "Mr. Suresh Sharma", designation: "H.O.D. Of Surveying", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team3.png' },
//     { name: "Mr. Nanuram Kumawat", designation: "H.O.D. Of Accountants", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team4.png' },
//     { name: "Mr. M.S. Bhati", designation: "H.O.D. Of Architecture", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team1.png' },
//     { name: "Mr. Govind Kumar", designation: "H.O.D. Of Management", parah1: "I am an ASHA board certified Speech-Language Pathologist. I graduated from Psychology from Ohio State University with my Bachelors and Hunter College with my Masters", parah2: "Throughout my career as a speech therapist, I have enjoyed treating and evaluating a wide variety of speech and language issues across the lifespan", img: '/team2.png' },
// ];

    


const Team = () => {
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState("");

    const fetchData = async () => {
        try {
            setLoading(true);
            const lists = new RoutesLists();
            const data = lists.getTeamMembers();
            data.then((res) => {
                setTeam(res?.data?.teamList || []);
                setLoading(false)
            }).catch((err) => {
                setTeam([]);
                console.log("error : ", err);
                setLoading(false);
            })
        } catch (error) {
            setLoading(false);
            setTeam([]);
            console.log("error :", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="py-[20px] md:py-[40px] lg:py-[60px]  ">
                <div className="mx-auto container  px-4 text-center">
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
                spaceBetween={2}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Autoplay,Pagination]}
                pagination={{
                    clickable: true,
                }}

                className="w-full"
            >
                {team && team?.map((t, idx) => (
                    <SwiperSlide key={idx}>
                        <TeamItem t={t}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default Team;
