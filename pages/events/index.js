import Layout from '@/components/Layout'
import SectionBanner from '@/components/SectionBanner'
import React from 'react'
import EventCard from '@/components/EventCard'
import features from "../../public/events.json";
import Heading from '@/components/Heading';
import BookingTab from '@/components/BookingTab';

function index() {
    return (
        <Layout>
            <div className='bg-[#F7F4F0]'>
                <SectionBanner title={"Events"} />
                <div className=' mt-3'>
                    <Heading
                        className="text-black"
                        //pClass="text-center"
                        heading1={"Event "}
                        heading2={"Highlights"}
                        //content={"At BlueHaloHealth, we envision a world where every child, adolescent, and adult can reach their full potential — supported by compassionate care, expert guidance, and a community that understands their unique journey. We aim to create brighter futures by making therapy and assessment services accessible, empowering, and meaningful for every family we serve."}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-8 md:mt-4 md:mb-8">
                    {features?.map((item, index) => (
                        <EventCard item={item} index={index} />
                    ))}
                </div>
            </div>
            <BookingTab/>
        </Layout>
    )
}

export default index;