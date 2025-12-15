import Heading from "@/components/Heading";
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import RoutesLists from "../api/RoutesLists";
import { Api } from "../api/Api";
import Link from "next/link";
import Loading from "@/components/Loading";
import { motion } from "motion/react";
import Image from "next/image";
import { toSlug } from "../utils/toSlug";
// import Slug from "@/components/Slug";
// import { toSlug } from "@/utils/toSlug";





export default function AgeMatrix({ admin }) {

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
  useEffect(() => {
    fetchGroups();
  }, []);


  return (

    <section className="bg-[#E6EBE3] md:bg-[#F7F4F0] py-[30px] md:py-[40px] lg:py-[60px]  ">
      <div className="mx-auto container  px-4 text-center">
        <Heading
          className="heading mb-0 text-center  poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl "
          heading1={"Comprehensive"}
          heading2={" Care Pathways"}
        />
        <p className="font-medium text-[15px] mt-1 text-center  md:mb-2  text-gray-700  px-4 md:p-0 max-w-[600px] mx-auto">
          Like life, we aren't meant to do everything alone - and care shouldn't be either.
        </p>



        {loading ? <Loading /> :
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4  py-[15px] md:py-[30px] ">
            {ageGroupsLists && ageGroupsLists?.map((group, idx) => (
              <div key={idx} className="bg-white group   border-[#009C4A] rounded-[25px] shadow overflow-hidden flex flex-col items-center">
                <div className="h-[150px] w-[150px]  p-6 pb-0 flex justify-center items-center relative">
                  {/* {toSlug(group?.title)} */}
                  
                  <Link href={`/service/${toSlug(group?.title)}`} >
                   {/* <Link href={`/service?agegroup=${group?._id}`} ></Link> */}
                    <Image
                      src={group?.image || group?.icon || 'https://thumbs.dreamstime.com/b/elderly-man-medical-insurance-health-plan-older-people-pixel-perfect-editable-stroke-line-design-icon-elderly-man-medical-273635532.jpg'}
                      alt={group.title}
                      width={100}
                      height={100}
                      className="object-contain   transform transition-transform duration-500 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL={`${group?.icon}?amp;q=5`} // small 10–20px image or base64
                    /></Link>
                </div>
                <ul className="text-gray-800 p-4 w-full ">
                  <h3 className="mb-3  text-start text-black text-md font-semibold capitalize w-full  ">{group.title}</h3>

                  {group && group.services && group.services.map((service, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    // viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
                    >
                      <li key={i} className="mb-2 text-[#626262]  flex items-start hover:text-green-700 hover:underline font-semibold text-[15px] text-start ">
                        <span className="mr-2 mt-1">
                          <FaCircleCheck className="text-green-500 rounded-xl" />
                        </span>
                        <Link href={`/service/detail/${toSlug(service?.name)}`} className='capitalize'>{service?.name}</Link>
                        {/* <Link href={`/service/detail/${service?._id}`} className='capitalize'>{service?.name}</Link> */}
                      </li>
                    </motion.div>
                  )) || ''}
                </ul>
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  );
}