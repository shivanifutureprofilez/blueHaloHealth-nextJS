import React from 'react'
import Heading from './Heading';
import Button from './Button';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";

function BookingTab() {
    return (
        <div className='bg-[#F7F4F0]'>
            <div className='container mx-auto'>
                <section className=" overflow-hidden relative  flex items-center justify-center pt-14">
                    {/* mt-24 remove */}
                    <div className="px-4 relative text-white flex items-center justify-center gap-12">
                        <Image
                            src='/BookingImage.png'
                            alt="banner" className="absolute rounded-xl inset-0 object-cover z-[0] !max-h-[400px]"
                            width={1500} height={500}
                            
                        />
                        
                        <div className=" w-full py-[110px] px-12 z-[1]" >
                            <Heading className="!text-white !font-[700] !text-6xl " heading1={"Ready To Get Started"} content={"Take the first step towards personalized therapy and support. Our team is here to help you navigate your journey"} />
                            <div className="flex justify-center items-center space-x-6 mt-4 pt-4">
                                <div className="flex items-center gap-2 font-bold"><CiPhone size={24} /> 9876543218</div>
                                <div className="flex items-center gap-2 font-bold"><IoMailOpenOutline size={24} /> hello@blueHaloHealth.com</div>
                            </div>
                            <div className='flex justify-center items-center pb-8'>
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