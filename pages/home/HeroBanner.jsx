import React from 'react'
// import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
// import { SwiperSlide } from 'swiper/react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import CommingSoonBookButton from '@/components/CommingSoonBookButton';
import Popup from '@/components/Popup';
import Popup1 from '@/components/Popup1';
import Image from 'next/image';

function HeroBanner() {
  const slides = [
    "/banner5.jpg",
    "/banner7.jpg",
    // "/banner10.jpg"
    // "/banner9.jpg",
    // "/banner8.jpg"
    // "/hero.png",
    // "/hero2.png",
    // "/hero3.png",
    // "/hero4.png",

    // "/hero5.png"
    // "/banner4.png"
    // "/heroBanner2.jpg",
    // "/swiperhero.png",
    //  "/heroBanner3.jpg",
    // "/heroBanner4.jpg",
    // "/heroBanner5.jpg",
    // "/heroBanner6.jpg"
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
              {/* <Image
                src={`${slide}`}
                alt="Expert Care for Every Stage of Development and Well-Being"
                className="banner-image w-full h-[70vh]
                md:h-[93vh] 
                object-cover"
                width={1000}
                height={1000}
                placeholder="blur"
                // blurDataURL={`${slide}?amp;q=1`} // small 10–20px image or base64
                blurDataURL={`${slide}?q=1&blur=100`}
                fetchpriority="high"
                // fill={true}
              /> */}
              <Image
                src={slide}
                alt="Expert Care for Every Stage of Development and Well-Being"
                priority
                fetchPriority="high"
                sizes="100vw"
                className="banner-image w-full h-[70vh] md:h-[93vh] object-cover"
                fill
              />

              <div className="absolute inset-0 bg-black/50"></div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
      <div className='homecontent md:mt-[20px] absolute   w-full max-w-[1320px] m-auto  px-8 md:px-[15px]  z-10'>
        <div className='leading-snug max-w-[500px] lg:max-w-[1000px] mx-auto '>
          <h1
            // data-aos="fade-up"
            //   data-aos-anchor-placement="bottom-bottom" 
            className={`heading text-center  pt-12 md:pt-0 poppins text-white tracking-tighter leading-tight font-bold text-3xl md:text-5xl lg:text-5xl mb-3`} >Expert Care for  <span className='text-white'>Every Stage of Development </span> and Well-Being</h1>
          <p
            // data-aos="fade-up"
            //   data-aos-anchor-placement="bottom-bottom" 
            className={` text-white text-center   text-[15px]`}>A multidisciplinary, virtual-first care model serving all of Ontario — combining
            speech therapy, behavioural therapy, psychology, neurodevelopmental expertise,
            and mental-health support, with in-home options when needed.</p>
          {/* <p data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className={` text-green-dark text-center mt-3  text-[17px]`}>Personalized Care | At your pace | Safe & Secure | Delivered by OAP Approved Experts
</p> */}
          <div className="flex justify-center flex-wrap pt-4 rounded-lg   ">
            <p
              // data-aos="fade-up"
              //   data-aos-anchor-placement="bottom-bottom"
              className="uppercase tagline rounded-lg font-bold text-[17px]  p-3 text-center ">Virtual-first • Ontario-wide • In-home where needed • PHIPA-compliant</p>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-6"
          // data-aos="fade-up"
          //   data-aos-anchor-placement="bottom-bottom"
          >

            {/* <button className='button bg-[#009C4A] cursor-pointer w-full md:w-[230px]'>Book Free Consultation</button> */}

            <Popup1 classes={`button bg-[#009C4A] cursor-pointer w-full md:w-[230px] `} content={`Thankyou so much but we are not available right now`} />

            {/* <Link
                      href="/"
                      className="bg-white transition-[1s] w-full md:w-[230px] text-center  text-black px-3 py-3 rounded-lg font-semibold  hover:bg-green-50  inline-block"
                    >
                      Patient Portal
                    </Link> */}
            <Popup1 classes={`bg-white transition-[1s] cursor-pointer w-full md:w-[230px] text-center  text-black px-3 py-3 rounded-lg font-semibold  hover:bg-green-50  inline-block`} content={`Thankyou so much but we are not available right now`} btnText={`Patient Portal`} />
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </section> */}
    </div>
  )
}

export default HeroBanner