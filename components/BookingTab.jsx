import React from 'react'
import Heading from './Heading';
import Button from './Button';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";

function BookingTab() {
    return (
        <div className='bg-[#F7F4F0] pb-0 md:pb-10'>
            <div className='container mx-auto'>
                <section className="  p-3 md:p-0 md:m-0 overflow-hidden w-full relative  flex items-center justify-center ">
                    {/* mt-24 remove */}
                    <div className="!max-h-[600px] relative text-white w-full flex items-center justify-center gap-12 py-[100px] px-[30px] rounded-2xl overflow-hidden">
                        <Image
                            src='/BookingImage.png'
                            alt="banner" className="w-full h-full absolute rounded-xl inset-0 object-cover z-[0] "
                            width={1500} height={500}
                        />
                        <div className='w-full h-full opacity-[0.5] absolute top-0 left-0  bg-gradient-to-b from-black via-emerald-600 to-green-600'></div>
                        
                        <div className="w-full z-[1]" >
                           <Heading className="!text-white text-center tracking-tight !font-[600]   text-3xl md:text-5xl lg:text-5xl mb-4 " heading1={"Ready To Get Started ?"} /> 
                           <p className="text-center mb-8 text-[16px] text-white p-8 md:p-0 max-w-[600px] mx-auto">Take the first step towards personalized therapy and support. Our team is here to help you navigate your journey</p>
                            <div className="flex flex-wrap justify-center items-center space-x-2 ">
                                <div className="flex items-center gap-2 font-semibold md:font-bold"><CiPhone size={24} /> 9876543218</div>
                                <div className="flex items-center gap-2 font-semibold md:font-bold"><IoMailOpenOutline size={24} /> hello@blueHaloHealth.com</div>
                            </div>
                            <div className='flex justify-center items-center pt-4 pb-8'>
                                <Button title={"Book Free Consultation"} className={`button-transparent mt-4 !border-white !text-white`} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BookingTab;