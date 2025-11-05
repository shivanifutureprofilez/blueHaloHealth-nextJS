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
import { FaTrash } from 'react-icons/fa';
import AdminRoutes from '@/pages/api/AdminRoutes';
import toast from 'react-hot-toast';
import FormattedDate from '@/components/FormattedDate';

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

    const deleteevent = async (pid) => {
        try {
            const lists = new AdminRoutes();
            const data = lists.deleteEvents(pid);
            data.then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message);
                    fetchData();
                } else {
                    toast.error(res.data.message);
                }
            }).catch((err) => {
                console.log("err", err);
            });
        } catch (err) {
            console.log("err", err)
        }
    }

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
                                    className=" relative bg-white rounded-2xl border border-gray-200 shadow flex flex-col p-4 text-start"
                                >
                                    <button
                                        onClick={() => { deleteevent(item?._id) }}
                                        className={` absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer`} >
                                        <FaTrash size={14} />
                                    </button>
                                    <div className="absolute top-3 right-15 ">
                                        <AddEvent fetchData={fetchData} item={item} isEdit={true} />
                                    </div>
                                    <div className="flex justify-center items-center text-center w-12 h-12 rounded-lg bg-[#E6F4EA] mb-4 p-2">
                                        {item?.tag === 'Learn More'
                                            ? <GrWorkshop size={35} className="text-green-600" />
                                            : <LuCalendarDays size={35} className="text-green-600" />}
                                    </div>
                                    <p className="!text-[#009C4A] font-medium mb-2"><FormattedDate date={item?.startDate.split('T')[0]}/></p>
                                    <h2 className="font-bold text-lg text-black mb-2">{item?.name}</h2>
                                    <p className="text-gray-700 mb-4 line-clamp-3">{item?.description}</p>
                                    {item?.link ? <a href={item?.link} className="text-green-600 font-semibold  justify-cente flex  gap-1 hover:underline">
                                        {item?.linkText}
                                        <span className="ml-1">&#8594;</span>
                                    </a> : ''}
                                </div>
                            ))}
                        </div>

                    </> : <NoResultFound />}
                </>
            }
        </AuthLayout>
    )
}

export default index;