import React from 'react'
import Heading from './Heading';
import { LuCalendarDays } from "react-icons/lu";
import { GrWorkshop } from "react-icons/gr";
import features from "../public/events.json";
import Link from 'next/link';

function Event() {
    return (
        <section className="bg-[#F7F8F9] py-12">
            <div className="container mx-auto">
                <Heading
                    className="text-black text-center"
                    heading1={"Workshops &"}
                    heading2={" Community Events"}
                    //content={"Join our community events designed to support families and build connections"}
                />
                <p className="text-center mb-8 text-[18px] text-gray-700">
                    Join our community events designed to support families and build connections
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-8">
                    {features?.map((item, indx) => (
                        <div
                            key={indx}
                            className="m-3 md:m-0 bg-white rounded-2xl border border-gray-200 shadow flex flex-col p-8 items-start"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#E6F4EA] mb-4">
                                {item?.tag === 'event'
                                    ? <LuCalendarDays size={28} className="text-green-600" />
                                    : <GrWorkshop size={28} className="text-green-600" />}
                            </div>
                            <p className="text-green-600 font-medium mb-2">{item?.date}</p>
                            <h2 className="font-bold text-lg text-black mb-2">{item?.title}</h2>
                            <p className="text-gray-700 mb-6">{item?.description}</p>
                            <Link href="/" className="text-green-600 font-semibold flex items-center gap-1 hover:underline">
                                {item?.link}
                                <span className="ml-1">&#8594;</span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Event;