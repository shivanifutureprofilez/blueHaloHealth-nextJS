import React, { useEffect, useState } from 'react'
import Heading from './Heading';

import features from "../public/events.json";
import Link from 'next/link';
import EventCard from './EventCard';

function Event() {

    const [f, setF] = useState(features || []);
    useEffect(()=>{ 
        setF(features && features.slice(0,3))
    },[]);


    return (
        <section className="bg-[#F7F8F9] md:pt-12 md:pb-18  py-10">
            <div className="container mx-auto">
                
                <Heading
                    className="heading text-center md:text-left poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
                    heading1={"Workshops &"}
                    heading2={" Community Events"}
                //content={"Join our community events designed to support families and build connections"}
                />
                <p className="font-medium text-[15px] text-center mb-6 text-gray-700 p-2 md:p-0 max-w-[600px] mx-auto">
                    Join our community events designed to support families and build connections
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
                    {f?.map((item, index) => (
                        <EventCard item={item} index={index} />
                    ))}
                </div>
                <div className="flex justify-center">
                    {/* <button onClick={ } className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                        View All Events
                    </button> */}
                    <Link
                        href="/events"
                        className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block"
                    >
                        View All Events
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Event;