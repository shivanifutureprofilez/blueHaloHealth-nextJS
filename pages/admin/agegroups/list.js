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

const services = [
  "Autism & Developmental Screening",
  "Occupational Therapy",
  "ABA/Behavior Therapy",
  "Speech Therapy",
  "Feeding/Nutrition",
  "Family Counseling",
]
function List() {
  const router = useRouter();

  const [ageGroupsLists, setAgeGroupsLists] = useState([]);

  const fetchGroups = async () => {
    const lists = new RoutesLists();
    const data = lists.getAgeGroups();
    data.then((res) => {
      setAgeGroupsLists(res?.data?.ageGroupList || []);
    }).catch((err) => {
      setAgeGroupsLists([]);
      console.log("err", err)
    });
  }

  const deleteAge = async (pid) => {
    console.log("pid", pid)
    try {
      const lists = new RoutesLists();
      const data = lists.deleteagegroup(pid);
      data.then((res) => {
        console.log("res", res.data.message)
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

  console.log("ageGroupsLists", ageGroupsLists)



  return (
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Age Groups</h1>
        <AddAgeGroup fetchGroups={fetchGroups} />
      </div>

      <div className='flex mt-5'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-6">
          {ageGroupsLists.map((group, idx) => (
            <div key={idx} className=" bg-white border-b border-[#009C4A] rounded-[25px] shadow overflow-hidden flex flex-col items-center relative">
              <div className="w-full min-h-[250px] max-h-[250px]  rounded-lg overflow-hidden mb-4 relative">
                <Link href={`/agegroups/detail/${group?._id}`} ><img
                  src={group?.image || 'https://thumbs.dreamstime.com/b/elderly-man-medical-insurance-health-plan-older-people-pixel-perfect-editable-stroke-line-design-icon-elderly-man-medical-273635532.jpg'}
                  alt={group.title}
                  className="object-cover bg-gray-200  w-full h-full"
                /></Link>
                <h3 className="mb-3 text-start py-[15px] px-[30px] text-white text-xl font-semibold absolute top-0 left-0 w-full  bg-[#0006]">{group.title}</h3>

              </div>
              <button
                onClick={() => { deleteAge(group?._id) }}
                className={` absolute cursor-pointer  rounded-full p-2 top-2 right-2 z-2`} >
                <BsTrash className="text-red-500" size={25} />
              </button>
              <ul className="text-gray-800 p-4 w-full ">
                {services.map((service, i) => (
                  <li key={i} className="mb-2 text-[#626262] flex items-start font-semibold text-[15px] ">
                    <span className="mr-2 mt-1">
                      <FaCircleCheck className="text-green-500 rounded-xl" />
                    </span>
                    {service}
                  </li>
                )) || ''}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AuthLayout>
  )
}

export default List;