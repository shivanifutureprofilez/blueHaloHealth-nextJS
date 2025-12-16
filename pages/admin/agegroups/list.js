import AgeMatrix from '@/pages/home/AgeMatrix';
import React, { useEffect, useState } from 'react'
import AuthLayout from '../layout/AuthLayout';
import { useRouter } from 'next/router';
import RoutesLists from '@/pages/api/RoutesLists';
import Link from 'next/link';
import { FaCircleCheck } from "react-icons/fa6";
import Popup from '@/components/Popup';
import AddAgeGroup from './AddAgeGroup';
import { BsTrash } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import AdminRoutes from '@/pages/api/AdminRoutes';
import NoResultFound from '@/components/NoResult';
import Loading from '@/components/Loading';


function List() {
  const router = useRouter();

  const [ageGroupsLists, setAgeGroupsLists] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetchGroups = async () => {
    const lists = new RoutesLists();
    const data = lists.getAgeGroups();
    data.then((res) => {
      setAgeGroupsLists(res?.data?.ageGroupList || []);
      setLoading(false)
    }).catch((err) => {
      setAgeGroupsLists([]);
      console.log("err", err)
      setLoading(false)
    });
  }
  const deleteAge = async (pid) => {
    try {
      const lists = new RoutesLists();
      const data = lists.deleteagegroup(pid);
      data.then((res) => {

        if (res.data.status) {
          toast.success(res.data.message);
          fetchGroups();
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

  useEffect(() => {
    fetchGroups();
  }, []);
  // useEffect(() => {
  //         if(pid){
  //             getAgeData(pid);
  //         }
  //     }, [pid]);





  return (
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-[22px] lg:text-4xl font-bold text-white">Categories</h1>
        <AddAgeGroup fetchGroups={fetchGroups} />
      </div>

      {loading ? <Loading />
        :
        <>
          {ageGroupsLists && ageGroupsLists?.length > 0 ?
            <div className='flex mt-5'>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 xl:gap-6">
                {ageGroupsLists && ageGroupsLists.map((group, idx) => (
                  <div key={idx} className=" bg-white relative border-b border-[#009C4A] rounded-[25px] shadow overflow-hidden flex flex-col items-center ">
                    <div className="h-[150px] w-[150px]  p-6 pb-0 flex justify-center items-center relative">
                      {/* <Link href={<AddAgeGroup/>} > */}
                      <img
                      src={group?.image || group?.icon || 'https://thumbs.dreamstime.com/b/elderly-man-medical-insurance-health-plan-older-people-pixel-perfect-editable-stroke-line-design-icon-elderly-man-medical-273635532.jpg'}
                      alt={group.title}
                      className="object-contain   transform transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* </Link> */}
                </div>
                

                   
                    <button
                      onClick={() => { deleteAge(group?._id) }}
                      className={` absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer`} >
                      <FaTrash size={14} />
                    </button>
                    <div className="absolute top-3 right-15 ">
                      <AddAgeGroup fetchGroups={fetchGroups} group={group} isEdit={true}  />
                    </div>              <ul className="text-gray-800 p-4 w-full ">
                     
                                    <h3 className="mb-3  text-start text-black text-md font-semibold  w-full  ">{group.title}</h3>
                      {group && group.services && group.services.map((service, i) => (
                        <li key={i} className="mb-2 text-[#626262] flex items-start font-semibold text-[15px] ">
                          <span className="mr-2 mt-1">
                            <FaCircleCheck className="text-green-500 rounded-xl" />
                          </span>
                          {service?.name}
                        </li>
                      )) || ''}
                    </ul>
                  </div>
                ))}
            </div>
            </div>
      :
      <NoResultFound />
          }
    </>
        }
        
    </AuthLayout >
  )
}

export default List;