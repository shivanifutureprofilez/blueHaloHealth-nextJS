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
            <div className='  py-10 bg-[#f7f8fa]'>
                <div className='container mx-auto '>
                    <div className='pt-3'>
                        <Heading className="text-black text-center" heading1={"What"} heading2={" Families Say"} />
                    </div>
                    <p className="text-center mb-8 text-[18px] text-gray-700">
Real stories from families who’ve experienced the care, guidance, and support of BlueHaloHealth.                    </p>
                     <div className='py-[40px]  text-black items-center  flex  justify-center'>
                <Swiper
                    spaceBetween={20}
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
                                slidesPerView: 2,
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


