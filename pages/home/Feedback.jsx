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
            <div className='bg-[#f7f8fa]  py-[40px]  lg:py-[60px]'>
                <div data-aos="fade-right" className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
                    <Heading data-aos="fade-right" className="heading text-center md:text-left poppins text-black tracking-tighter leading-tight font-bold text-3xl md:text-5xl lg:text-5xl mb-3" heading1={"What"} heading2={" Families Say"} />
                    <p className="font-medium text-[15px] text-center mb-6 md:mb-2 text-gray-700  max-w-[600px] mx-auto">
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


