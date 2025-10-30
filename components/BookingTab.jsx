import React from 'react'
import Heading from './Heading';
import Button from './Button';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from 'next/link';

function BookingTab() {
    return (
        <div className='bg-[#F7F4F0]  py-[20px] md:py-[40px] lg:py-[60px]'>
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">

                <section className="overflow-hidden w-full relative  flex items-center justify-center ">
                    {/* mt-24 remove */}
                    <div className="max-h-[600px] md:!max-h-[400px] relative text-white w-full flex items-center justify-center gap-6 md:gap-12 
                    px-[20px] py-[40px] md:py-[60px] md:px-[30px] rounded-2xl overflow-hidden">
                        <Image
                            src='/BookingImage.png'
                            alt="banner" className="w-full h-full absolute rounded-xl inset-0 object-cover z-[0] "
                            width={1500} height={400}
                        />
                        <div className='w-full h-full opacity-[0.5] absolute top-0 left-0  bg-gradient-to-b from-black via-emerald-600 to-green-600'></div>

                        <div className="w-full z-[1]" >
                            <Heading className="!text-white heading text-center md:text-left poppins  tracking-tighter leading-tight font-bold text-4xl md:text-5xl md:mb-3" heading1={"Ready To Get Started ?"} />
                            <p className="text-center text-[16px] text-white p-2 md:p-4 max-w-[600px] mx-auto">Take the first step towards personalized therapy and support. Our team is here to help you navigate your journey</p>
                            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 bg-[#0000001A] rounded-lg py-3 px-3 mx-auto max-w-[600px]">
                                <Link
                                    href="tel:9876543218"
                                    className="flex items-center gap-2 font-semibold md:font-bold text-white hover:text-[#00D967] transition"
                                >
                                    <CiPhone size={24} /> 9876543218
                                </Link>

                                <Link
                                    href="mailto:hello@blueHaloHealth.com"
                                    className="flex items-center gap-2 font-semibold md:font-bold text-white hover:text-[#00D967] transition"
                                >
                                    <IoMailOpenOutline size={24} /> hello@blueHaloHealth.com
                                </Link>
                            </div>
                            <div className="flex mt-4 flex-wrap items-center justify-center gap-x-6 gap-y-2 bg-[#0000001A] rounded-lg py-3 px-3 mx-auto max-w-[600px]">
                                <p className="rounded-lg font-semibold md:font-bold text-medium p-1">15 MIN consultation on us.</p>
                            </div>

                            <div className='flex justify-center items-center p-2 md:p-4'>
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