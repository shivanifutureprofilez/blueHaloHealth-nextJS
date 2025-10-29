import Heading from "@/components/Heading";
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import RoutesLists from "../api/RoutesLists";
import { Api } from "../api/Api";
import Link from "next/link";
import Loading from "@/components/Loading";


const services = [
  "Autism & Developmental Screening",
  "Occupational Therapy",
  "ABA/Behavior Therapy",
  "Speech Therapy",
  "Feeding/Nutrition",
  "Family Counseling",
]

// const ageGroups = [
//   {
//     title: "0-6 Early Years",
//     image: '/AgeMatrix1.png', 
//     services: [
//       "Autism & Developmental Screening",
//       "Occupational Therapy",
//       "ABA/Behavior Therapy",
//       "Speech Therapy",
//       "Feeding/Nutrition",
//       "Family Counseling",
//     ],
//   },
//   {
//     title: "7-12 School Age",
//     image: "/AgeMatrix2.png",
//     services: [
//       "Psychoeducational testing",
//       "Speech & OT",
//       "ADHD evaluation",
//       "Nutrition support",
//       "ABA/social skills groups",
//       "Family counseling",
//     ],
//   },
//   {
//     title: "13-17 Adolescent",
//     image: "/AgeMatrix3.png",
//     services: [
//       "Mental health & counselling",
//       "Transition planning",
//       "Executive function coaching",
//       "Advanced speech/OT",
//       "ADHD assessment",
//       "Dietitian",
//       "Audiology",
//     ],
//   },
//   {
//     title: "18+ Adults",
//     image: "/AgeMatrix4.png",
//     services: [
//       "Mental health therapy",
//       "Adult ADHD/ASD assessment",
//       "Career & life counselling",
//       "Occupational rehab",
//       "Nutrition for Chronic Conditions",
//       "Audiology",
//     ],
//   },
// ];

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
  //console.log("ageGroupsLists",ageGroupsLists)





  return (

    <section className="bg-[#E6EBE3] md:bg-[#F7F4F0] py-[30px] md:py-[40px] lg:py-[60px]  ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
        <Heading
          className="heading text-center  poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl "
          heading1={"Comprehensive"}
          heading2={" Therapy Services"}
        />
        <p className="font-medium text-[15px] text-center mb-6 md:mb-2  text-gray-700 p-4 md:p-0 max-w-[600px] mx-auto">
          Our certified therapists provide individualized care across all developmental stages
        </p>

          {loading ? <Loading /> : 
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  py-[15px] md:py-[30px] ">
                {ageGroupsLists && ageGroupsLists?.map((group, idx) => (
                  <div key={idx} className="bg-white border-b border-[#009C4A] rounded-[25px] shadow overflow-hidden flex flex-col items-center">
                    <div className="w-full min-h-[250px] max-h-[250px]  rounded-lg overflow-hidden mb-4 relative">
                      <Link href={`/agegroups/detail/${group?._id}`} ><img
                        src={group?.image || 'https://thumbs.dreamstime.com/b/elderly-man-medical-insurance-health-plan-older-people-pixel-perfect-editable-stroke-line-design-icon-elderly-man-medical-273635532.jpg'}
                        alt={group.title}
                        className="object-cover bg-gray-200  w-full h-full"
                      /></Link>
                      <h3 className="mb-3 text-start py-[15px] px-[30px] text-white text-xl font-semibold absolute top-0 left-0 w-full  bg-[#0006]">{group.title}</h3>
                    </div>
                    <ul className="text-gray-800 p-4 w-full ">
                      {group && group.services && group.services.map((service, i) => (
                        <li key={i} className="mb-2 text-[#626262] flex items-start font-semibold text-[15px] text-start ">
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
          }


      </div>
    </section>
  );
}