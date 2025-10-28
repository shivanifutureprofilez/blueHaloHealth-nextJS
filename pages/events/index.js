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
                <div className="container mx-auto px-8 py-8 md:py-16 md:px-16 ">
                    <Heading
                        className="text-black"
                        heading1={"Event "}
                        heading2={"Highlights"}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3  p-4 md:p-8 gap-5">
                        {features?.map((item, index) => (
                            <EventCard item={item} index={index} />
                        ))}
                    </div>
                </div>
                <BookingTab />
            </div>
        </Layout>
    )
}

export default index;