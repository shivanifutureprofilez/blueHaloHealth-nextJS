import React, { useEffect, useState } from 'react'
import Heading from './Heading';

import features from "../public/events.json";
import Link from 'next/link';
import EventCard from './EventCard';
import RoutesLists from '@/pages/api/RoutesLists';

function Event() {

    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState("");
    const fetchData = async () => {
        try {
            setLoading(true);
            const lists = new RoutesLists();
            const data = lists.getEvents();
            data.then((res) => {
                // setEvents(res?.data?.eventList || []);
               setEvents(res?.data?.eventList && res?.data?.eventList.slice(0, 3));
                setLoading(false)
            }).catch((err) => {
                setEvents([]);
                console.log("error : ", err);
                setLoading(false);
            })
        } catch (error) {
            setLoading(false);
            setEvents([]);
            console.log("error :", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    // const [f, setF] = useState(events);
    // useEffect(() => {
    //     setEvents(events && events.slice(0, 3));
    // }, []);






    return (
        <section className="bg-[#F7F8F9] py-[40px] lg:py-[60px]">

            <div  data-aos="fade-right" className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
                <Heading
                    className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
                    heading1={"Workshops &"}
                    heading2={" Community Events"}
                //content={"Join our community events designed to support families and build connections"}
                />
                <p  data-aos="fade-right" className="font-medium mb-6 md:mb-2 text-[15px] text-center text-gray-700  max-w-[600px] mx-auto">
                    Join our community events designed to support families and build connections
                </p>
                <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-[15px] md:py-[30px]">
                    {events && events?.map((item, index) => (
                        <EventCard item={item} index={index} />
                    ))}
                </div>
                <div className="flex justify-center py-[15px] md:py-[30px]">
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