import React, { useEffect, useState } from 'react'
import AuthLayout from '../layout/AuthLayout';
import AddAgeGroup from '../agegroups/AddAgeGroup';
import AddEvent from './AddEvent';
import { LuCalendarDays } from 'react-icons/lu';
import { GrWorkshop } from 'react-icons/gr';
import { useSearchParams } from 'next/navigation';
import RoutesLists from '@/pages/api/RoutesLists';
import Loading from '@/components/Loading';
import NoResultFound from '@/components/NoResult';

function index() {

    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState("");

    const fetchData = async () => {
        try {
            setLoading(true);
            const lists = new RoutesLists();
            const data = lists.getEvents();
            data.then((res) => {
                setEvents(res?.data?.eventList || []);
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

    return (
        <AuthLayout>
            <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
                <h1 className="text-3xl lg:text-4xl font-bold text-white">Events</h1>
                <AddEvent fetchData={fetchData} />
            </div>
            {loading ? <Loading /> :
                <>
                    {events && events.length > 0 ? <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-[15px] md:py-[30px] ">
                            {events?.map((item, index) => (
                                <div
                                    key={index}
                                    className=" bg-white rounded-2xl border border-gray-200 shadow flex flex-col p-4 text-start"
                                >
                                    <div className="flex justify-center items-center text-center w-12 h-12 rounded-lg bg-[#E6F4EA] mb-4 p-2">
                                        {item?.tag === 'Learn More'
                                            ? <GrWorkshop size={35} className="text-green-600" />
                                            : <LuCalendarDays size={35} className="text-green-600" />}
                                    </div>
                                    <p className="!text-[#009C4A] font-medium mb-2">{item?.startDate}</p>
                                    <h2 className="font-bold text-lg text-black mb-2">{item?.name}</h2>
                                    <p className="text-gray-700 mb-4 line-clamp-3">{item?.description}</p>
                                    {item?.link ? <a href={item?.link} className="text-green-600 font-semibold  justify-cente flex  gap-1 hover:underline">
                                        {item?.linkText}
                                        <span className="ml-1">&#8594;</span>
                                    </a> : ''}
                                </div>
                            ))}
                        </div>

                    </> : <NoResultFound/> }
                </>
                }
        </AuthLayout>
    )
}

export default index;