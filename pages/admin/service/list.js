import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import AddAgeGroup from "../agegroups/AddAgeGroup";
import ServiceCard from "@/components/ServiceCard";
import RoutesLists from "@/pages/api/RoutesLists";
import AddService from "./AddService";
import Link from "next/link";

function list() {
  const Filter = () => {
    return (
      <div className="container mt-12 mx-auto">
        <div className="container mx-auto  pb-2 md:pb-[30px]">
          <div className="lg:flex justify-between items-center flex-wrap ">
            <div className="w-full  py-3 ">
              <div className="flex justify-center items-center flex-wrap gap-2">
                <button
                  className={`button-white w-full md:w-[230px] border cursor-pointer`}
                  onClick={() => {
                    updateAgeGroup("0-6");
                  }}
                >
                  <span className="pl-2 pr-2">0-6 (Early Years)</span>
                </button>

                <button
                  className={`button-white w-full md:w-[230px] border cursor-pointer`}
                  onClick={() => {
                    updateAgeGroup("7-12");
                  }}
                >
                  <span className="pl-2 pr-2">7-12 (School Age)</span>
                </button>

                <button
                  className={`button-white w-full md:w-[230px] border cursor-pointer`}
                  onClick={() => {
                    updateAgeGroup("13-17");
                  }}
                >
                  <span className="pl-2 pr-2">13-17 (Adolescent)</span>
                </button>

                <button
                  className={`button-white w-full md:w-[230px] border cursor-pointer`}
                  onClick={() => {
                    updateAgeGroup("18+");
                  }}
                >
                  <span className="pl-2 pr-2">18+ (Adults)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const [serviceList, setServiceList] = useState([]);

  const fetchServices = async () => {
    const lists = new RoutesLists();
    const data = lists.getServices();
    // console.log("data ", data);
    data
      .then((res) => {
        // console.log("res?.data?.allServices : ", res?.data?.allServices);
        setServiceList(res?.data?.allServices || []);
        console.log("Service List ", serviceList);
      })
      .catch((err) => {
        setServiceList([]);
        console.log("err ", err);
      });
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Services</h1>
        {/* <AddService /> */}
        <Link href="/admin/service/add" className="button cursor-pointer">
          + Add Services
        </Link>
      </div>
      <Filter />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-6 md:mt-4 md:mb-8">
          {serviceList?.map((item, index) => (
            <ServiceCard item={item} idx={index} isAdmin={true} fetchServices={fetchServices} />
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}

export default list;
