// import Button from '@/components/Button'
// import Heading from '@/components/Heading'
// import Link from 'next/link'
// import React from 'react'
// import Swiper from 'swiper'
// import { Autoplay, Navigation } from 'swiper/modules'
// import { SwiperSlide } from 'swiper/react'
// import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="container mx-auto pb-3">
      <section className=" md:!bg-[#edeee8] md:px-8   rounded-2xl md:rounded-4xl flex flex-col lg:flex-row items-center justify-between  py-2 md:py-[150px] md:shadow">
        <div className="order-2 md:order-1 md:m-3 flex-1 flex flex-col justify-center">
          <div className='leading-snug'>
            <h2 className={`heading text-center md:text-left pt-12 md:pt-0 poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3`} >Empowering Families Through <span className='text-[#009C4A]'>Expert Therapy </span><br />& Support</h2>
            <p className={` text-gray-500 text-center md:text-left font-medium text-[15px]`}>Individualized programs for children, teens, and adults with developmental or behavioral challenges.</p>
            <div className="flex flex-wrap pt-4 rounded-lg   max-w-[600px]">
                                 <p className="rounded-lg font-bold text-xl bg-[#FFFFFF] p-3">15 MIN consultation on us.</p>
                            </div>
           
          </div>
          <div className="flex flex-wrap gap-4 mt-6">

            <button className='button w-full md:w-[230px]'>Book Free Consultation</button>
            <Link
              href="/service"
              className="w-full md:w-[230px] text-center border border-green-600 text-green-600 px-3 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex-1 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="/homeBanner2.png"
            alt="Illustration"
            className="w-full rounded-xl"
          />
          {/* <Swiper
            // spaceBetween={20}
            loop={true}
            Autoplay={{
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
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }
            }
          >
           
              <SwiperSlide><img
                src="/homeBanner2.png"
                alt="Illustration"
                className="w-full rounded-xl"
              /></SwiperSlide>
               <SwiperSlide><img
                src="/banner1.png"
                alt="Illustration"
                className="w-full rounded-xl"
              /></SwiperSlide>
              <SwiperSlide><img
                src="/banner2.png"
                alt="Illustration"
                className="w-full rounded-xl"
              /></SwiperSlide>
               <SwiperSlide><img
                src="/banner3.png"
                alt="Illustration"
                className="w-full rounded-xl"
              /></SwiperSlide>
            
          </Swiper> */}
        </div>
      </section>
    </div>
  )
}