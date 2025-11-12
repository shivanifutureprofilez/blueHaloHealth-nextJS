import React from 'react'
// import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
// import { SwiperSlide } from 'swiper/react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import CommingSoonBookButton from '@/components/CommingSoonBookButton';

function HeroBanner() {
  const slides = [
    "/heroBanner2.jpg",
    "/swiperhero.png",
    //  "/heroBanner3.jpg",
    "/heroBanner4.jpg",
    // "/heroBanner5.jpg",
    "/heroBanner6.jpg"

  ]
  return (
    <div className="relative ">
      {/* <section className=" md:!bg-[#edeee8] md:px-8   rounded-2xl md:rounded-4xl flex flex-col lg:flex-row items-center justify-between  py-2 md:py-[150px] md:shadow"> */}
      {/* <div
        className="relative h-[425px] md:h-[560px] lg:h-[860px] md:mt-[-150px]"
      > */}
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true} // Enable looping
        breakpoints={{
          300: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >

        {slides?.map((slide, index) => (
          <SwiperSlide key={index} >
            <div className=" w-full h-full">
              <img
                src={slide}
                alt="Slide"
                className=" w-full h-[690px] md:h-[750px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute left-[0] right-[0] bottom-[50px] md:bottom-[200px] w-full max-w-[1320px] m-auto  px-8 md:px-[15px]  z-10'>
        <div className='leading-snug max-w-[1000px] mx-auto'>
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className={`heading text-center  pt-12 md:pt-0 poppins text-white tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3`} >Empowering Families Through <span className='text-white'>Expert Therapy </span>  & Support</h2>
          <p data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className={` text-white text-center   text-[15px]`}>Individualized programs for children, teens, and adults with developmental or behavioral challenges.</p>
          <div className="flex justify-center flex-wrap pt-4 rounded-lg   ">
            <p data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom" className="uppercase tagline rounded-lg font-bold text-2xl  p-3 text-center ">15 Min Consultation On Us.</p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-6" data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">

          {/* <button className='button bg-[#009C4A] cursor-pointer w-full md:w-[230px]'>Book Free Consultation</button> */}

          <CommingSoonBookButton classes={`button bg-[#009C4A] cursor-pointer w-full md:w-[230px] `} content={`Thankyou so much but we are not available right now`} />

          {/* <Link
                    href="/"
                    className="bg-white transition-[1s] w-full md:w-[230px] text-center  text-black px-3 py-3 rounded-lg font-semibold  hover:bg-green-50  inline-block"
                  >
                    Patient Portal
                  </Link> */}
          <CommingSoonBookButton classes={`bg-white transition-[1s] w-full md:w-[230px] text-center  text-black px-3 py-3 rounded-lg font-semibold  hover:bg-green-50  inline-block`} content={`Thankyou so much but we are not available right now`} btnText={`Patient Portal`} />
        </div>
      </div>
      {/* </div> */}
      {/* </section> */}
    </div>
  )
}

export default HeroBanner