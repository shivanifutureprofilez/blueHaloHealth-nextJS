import Layout from '@/components/Layout'
import SectionBanner from '@/components/SectionBanner'
import React from 'react'
import EventCard from '@/components/EventCard'
import features from "../../public/events.json";
import Heading from '@/components/Heading';
import BookingTab from '@/components/BookingTab';
import HowItWorks from '@/components/HowItWorks';

function index() {
    return (
        <Layout>

            <div className='bg-[#F7F4F0]'>
                <SectionBanner title={"Events"} />
                <section className="bg-[#F7F8F9] py-[20px] md:py-[40px] lg:py-[60px]  ">
                    <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
                           <div className='p-2 md:p-4'>
                            <Heading
                                className="heading text-center poppins !text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
                                heading1={"Event  Highlights"}
                            />
                           </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-[15px] md:py-[30px] ">
                            {features?.map((item, index) => (
                                <EventCard item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
                <BookingTab />
            </div>
        </Layout>
    )
}

export default index;