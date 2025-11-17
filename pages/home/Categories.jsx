import Heading from "@/components/Heading";
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import RoutesLists from "../api/RoutesLists";
import { Api } from "../api/Api";
import Link from "next/link";
import Loading from "@/components/Loading";
import { motion } from "motion/react";

export default function Categories({ admin }) {

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
          className="heading mb-0 text-center  poppins text-black tracking-tighter leading-tight font-bold text-3xl md:text-5xl lg:text-5xl "
          heading1={"Comprehensive"}
          heading2={" Therapy Services"}
        />
        <p className="font-medium text-[15px] mt-1 text-center  md:mb-2  text-gray-700  px-4 md:p-0 max-w-[600px] mx-auto">
          Our certified therapists provide individualized care across all developmental stages
        </p>

        <div className="grid grid-cols-4 gap-4">
            <Link href='/service?agegroup=68f098aae07796e988820b2b' className="bg-white border border-gray-300 rounded-xl p-6">
                <h2 className="text-start font-bold">Autism & Developmental Therapy BY Age</h2>
                <ul className="text-start mb-2 border-b mt-1 border-gray-200 pb-3">
                    <li className="text-md mt-2  text-gray-500">0-6 Early Years</li>
                    <li className="text-md mt-2  text-gray-500">6-12 School Age</li>
                    <li className="text-md mt-2  text-gray-500">13-17 Adolescents</li>
                </ul>
            </Link>
            <Link href='/service?agegroup=68f098aae07796e988820b2b' className="bg-gray-200 border border-gray-300 rounded-xl p-6">
                <h2 className="text-start font-bold">Neurodevelopmental & Psychological Assessment</h2>
                <ul className="text-start mb-2 border-b mt-1 border-gray-200 pb-3">
                    <li className="text-md mt-2  text-gray-500">0-6 Early Years</li>
                    <li className="text-md mt-2  text-gray-500">6-12 School Age</li>
                    <li className="text-md mt-2  text-gray-500">13-17 Adolescents</li>
                </ul>
            </Link>
            <Link href='/service?agegroup=68f098aae07796e988820b2b' className="bg-gray-200 border border-gray-300 rounded-xl p-6">
                <h2 className="text-start font-bold"> Mental Health & Behaviour Health Counselling </h2>
                <ul className="text-start mb-2 border-b mt-1 border-gray-200 pb-3">
                    <li className="text-md mt-2  text-gray-500">0-6 Early Years</li>
                    <li className="text-md mt-2  text-gray-500">6-12 School Age</li>
                    <li className="text-md mt-2  text-gray-500">13-17 Adolescents</li>
                </ul>
            </Link>
            <Link href='/service?agegroup=68f098aae07796e988820b2b' className="bg-gray-200 border border-gray-300 rounded-xl p-6">
                <h2 className="text-start font-bold"> Psychiatry & Medication Management </h2>
                <ul className="text-start mb-2 border-b mt-1 border-gray-200 pb-3">
                    <li className="text-md mt-2 text-gray-500">0-6 Early Years</li>
                    <li className="text-md mt-2 text-gray-500">6-12 School Age</li>
                    <li className="text-md mt-2 text-gray-500">13-17 Adolescents</li>
                </ul>
            </Link>
        </div>

            
            
            


      </div>
    </section>
  );
}
