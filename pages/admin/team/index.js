import React, { useEffect, useState } from 'react'
import AuthLayout from '../layout/AuthLayout'
import AddTeamMember from './AddTeamMember';
import RoutesLists from '@/pages/api/RoutesLists';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import AddEvent from '../event/AddEvent';
import AdminRoutes from '@/pages/api/AdminRoutes';
import toast from 'react-hot-toast';
import TeamItem from '@/pages/about/TeamItem';

function index() {
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState("");

    const fetchData = async () => {
        try {
            setLoading(true);
            const lists = new RoutesLists();
            const data = lists.getTeamMembers();
            data.then((res) => {
                setTeam(res?.data?.teamList || []);
                setLoading(false)
            }).catch((err) => {
                setTeam([]);
                console.log("error : ", err);
                setLoading(false);
            })
        } catch (error) {
            setLoading(false);
            setTeam([]);
            console.log("error :", error);
        }
    }

    const deleteTeam = async (pid) => {
        try {
            const lists = new AdminRoutes();
            const data = lists.deleteTeamMembers(pid);
            data.then((res) => {
                toast.success(res.data.message || "Team Member Deleted Successfully");
                fetchData();
            }).catch((err) => {
                console.log("err", err);
                toast.error(res.data.message);
            });
        } catch (err) {
            console.log("err", err)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthLayout>
            <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
                <h1 className="text-[22px] lg:text-4xl font-bold text-white">Team Members</h1>
                <AddTeamMember />
            </div>


            <Swiper
                spaceBetween={2}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true,
                }}

                className="w-full"
            >
                {team && team?.map((t, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='relative'>
                            <button
                            onClick={() => { deleteTeam(t?._id) }}
                            className={` absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer`} >
                            <FaTrash size={14} />
                            </button>
                            <div className="absolute top-3 right-15 z-50">
                                <AddTeamMember fetchData={fetchData} item={t} isEdit={true} />
                            </div>
                            <TeamItem   t={t} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </AuthLayout>
    );
};

export default index;