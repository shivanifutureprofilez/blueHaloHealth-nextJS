import React from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { GrWorkshop } from "react-icons/gr";
import Link from 'next/link';
import FormattedDate from './FormattedDate';

function EventCard({ item, index }) {
    return <>
        {item ? <>
            <div
                key={index}
                className=" bg-white rounded-2xl border border-gray-200 shadow flex flex-col p-4 text-start"
                data-aos="fade-right" 
            >
                <div className="flex justify-center items-center text-center w-12 h-12 rounded-lg bg-[#E6F4EA] mb-4 p-2">
                    {item?.tag === 'Learn More'
                        ? <GrWorkshop size={35} className="text-green-600" />
                        : <LuCalendarDays size={35} className="text-green-600" />}
                </div>
                <p className="!text-[#009C4A] font-medium mb-2"> 
                    <FormattedDate date={item?.startDate.split('T')[0]}/>
                {/* {item?.startDate.split('T')[0]} */}
                 </p>
                <h2 className="font-bold text-lg text-black mb-2">{item?.name}</h2>
                <p className="text-gray-700 mb-4 line-clamp-3">{item?.description}</p>
                {item?.link ? <a href={item?.link} className="text-green-600 font-semibold  flex  gap-1 hover:underline">
                    {item?.linkText}
                    <span className="ml-1">&#8594;</span>
                </a> : ''}
            </div>
        </> : ""}
    </>
}

export default EventCard