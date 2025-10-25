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
            <div className=' md:pt-10 md:pb-18  py-10 bg-[#f7f8fa]'>
                <div className='container mx-auto '>
                    <div className='pt-3'>
                        <Heading className="text-black text-center" heading1={"What"} heading2={" Families Say"} />
                    </div>
                    <p className="font-medium text-[15px] text-center mb-6 text-gray-700 p-2 md:p-0 max-w-[600px] mx-auto">
                        Real stories from families who’ve experienced the care, guidance, and support of BlueHaloHealth.           
                    </p>
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


