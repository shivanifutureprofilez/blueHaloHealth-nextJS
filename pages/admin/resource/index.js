import React, { useEffect, useState } from 'react'
import AuthLayout from '../layout/AuthLayout';
import AddAgeGroup from '../agegroups/AddAgeGroup';
// import AddEvent from './AddEvent';
import { LuCalendarDays } from 'react-icons/lu';
import { GrWorkshop } from 'react-icons/gr';
import { useSearchParams } from 'next/navigation';
import RoutesLists from '@/pages/api/RoutesLists';
import Loading from '@/components/Loading';
import NoResultFound from '@/components/NoResult';
import { FaTrash } from 'react-icons/fa';
import AdminRoutes from '@/pages/api/AdminRoutes';
import toast from 'react-hot-toast';
import AddResource from './AddResource';
import FormattedDate from '@/components/FormattedDate';

function index() {

    const [loading, setLoading] = useState(true);
    const [resources, setResources] = useState("");

    const fetchData = async () => {
        try {
            setLoading(true);
            const lists = new RoutesLists();
            const data = lists.getResources();
            data.then((res) => {
                setResources(res?.data?.resourceList || []);
                setLoading(false)
            }).catch((err) => {
                setResources([]);
                console.log("error : ", err);
                setLoading(false);
            })
        } catch (error) {
            setLoading(false);
            setResources([]);
            console.log("error :", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const deleteresource = async (pid) => {
        try {
            const lists = new AdminRoutes();
            const data = lists.deleteResources(pid);
            console.log("pid ",pid);
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
                <h1 className="text-3xl lg:text-4xl font-bold text-white">Resources</h1>
                <AddResource fetchData={fetchData} />
            </div>
            {loading ? <Loading /> :
                <>
                    {resources && resources.length > 0 ? <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  py-[15px] md:py-[30px] ">
                            {resources?.map((item, index) => (
                                <div
                                    key={index}
                                    className=" relative bg-white rounded-2xl border border-gray-200 shadow flex flex-col p-4 text-start"
                                >
                                    <button
                                        onClick={() => { deleteresource(item?._id) }}
                                        className={` absolute bottom-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer`} >
                                        <FaTrash size={14} />
                                    </button>
                                    <div className="absolute bottom-3 right-13 ">
                                        <AddResource fetchData={fetchData} item={item} isEdit={true} />
                                    </div>
                                    <div
                                        className="bg-white rounded-[20px] p-4 h-full  max-h-[150px] "
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="text-[#009C4A] font-medium text-sm">Resource</span>
                                            {item?.tags && item?.tags.length > 0 && (
                                                <span className="text-xs text-gray-500 capitalize ">
                                                    {item?.tags.join(', ')}
                                                    {/* {item?.tags} */}
                                                    </span>
                                            )}
                                        </div>

                                        <h2 title={item?.title} className="text-[18px] line-clamp-2 text-start  md:text-[20px] font-bold">{item?.title}</h2>
                                        {item?.date && (
                                            <p className="text-start text-[#373737]"><FormattedDate date={item?.date.split('T')[0]}/></p>
                                        )}
                                    </div>
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