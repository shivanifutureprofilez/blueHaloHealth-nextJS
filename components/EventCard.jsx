import React from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { GrWorkshop } from "react-icons/gr";
import Link from 'next/link';

function EventCard({item, index}) {
    return <>
    {item ? <>
        <div
            key={index}
            className=" md:m-0 bg-white rounded-2xl border border-gray-200 shadow flex flex-col p-8 text-start"
        >
            <div className="flex justify-center items-center text-center w-12 h-12 rounded-lg bg-[#E6F4EA] mb-4">
                {item?.tag === 'event'
                    ? <LuCalendarDays size={35} className="text-green-600" />
                    : <GrWorkshop size={35} className="text-green-600" />}
            </div>
            <p className="text-green-600 font-medium mb-2">{item?.date}</p>
            <h2 className="font-bold text-lg text-black mb-2">{item?.title}</h2>
            <p className="text-gray-700 mb-6 line-clamp-3">{item?.description}</p>
            <Link href="/" className="text-green-600 font-semibold  justify-cente flex  gap-1 hover:underline">
                {item?.link}
                <span className="ml-1">&#8594;</span>
            </Link>
        </div>
</> : ""}
    </>
}

export default EventCard