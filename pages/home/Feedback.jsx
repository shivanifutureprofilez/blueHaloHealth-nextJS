import Heading from '@/components/Heading'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import FeedbackCard from '@/components/FeedbackCard';
import features from "../../public/feedback.json";

export default function Feedback() {
    
    return (
        <>
            <div className='bg-[#F7F4F0] p-4'>
                <div className='container mx-auto '>
                    <div className=''>
                        <Heading className="text-black text-center" heading1={"What"} heading2={" Families Say"} content={"Trusted expertise, personalized care, and proven results for every stage of development."} />
                    </div>
                     <div className='p-[40px] bg-[#F7F8F9] mt-10 text-black items-center  flex  justify-center'>
                <Swiper
                    spaceBetween={30}
                    //  slidesPerView={8}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    //navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={
                        {
                            468: {
                                slidesPerView: 1,
                            },
                            767: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }
                    }
                >

                    {features?.map((item, indx) => (
                        <SwiperSlide><FeedbackCard data={item} indx={indx} /></SwiperSlide>
                    ))}
                </Swiper>

            </div>
                </div>
            </div>
           
        </>
    )
}


