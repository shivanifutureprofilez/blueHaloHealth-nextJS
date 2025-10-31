import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import AddAgeGroup from "../agegroups/AddAgeGroup";
import ServiceCard from "@/components/ServiceCard";
import RoutesLists from "@/pages/api/RoutesLists";
import Link from "next/link";
import Loading from "@/components/Loading";
import NoResultFound from "@/components/NoResult";
import ServiceCardSmall from "@/components/ServiceCardSmall";

function ServicesBox() {
const [ageGroup, setAgeGroup] = useState("");
  const updateAgeGroup = (e) => {
    setAgeGroup(e);
  };
  // console.log("ageGroup", ageGroup);

  const [totalAgeGroups, setTotalAgeGroups] = useState([]);
  const fetchData = async () => {
    try {
      const main = new RoutesLists();
      const response = await main.getAgeGroups();
      if (response.data) {
        setTotalAgeGroups(response.data.ageGroupList);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  // console.log("totalAgeGroups", totalAgeGroups);

  useEffect(() => {
    fetchData();
  }, []);
  
  const [loading, setLoading] = useState(true)
  const [serviceList, setServiceList] = useState([]);
  const fetchServices = async () => {
    setLoading(true)
    const lists = new RoutesLists();
    const data = lists.getServices(ageGroup);
    // console.log("data ", data);
    data
      .then((res) => {
        // console.log("res?.data?.allServices : ", res?.data?.allServices);
        setServiceList(res?.data?.allServices || []);
        setLoading(false)
        // console.log("Service List ", serviceList);
      })
      .catch((err) => {
        setServiceList([]);
        setLoading(false)
        console.log("err ", err);
      });
  };

  useEffect(() => {
    fetchServices();
  }, [ageGroup]);

  const Filter = () => {
    return (
      <div className="    mx-auto">
        <div className=" ">
          <div className="lg:flex justify-between items-center flex-wrap ">
            <div className="w-full  py-3 ">
              <div className="flex  flex-wrap items-center   gap-2">
                <button
                  className={`w-full sm:w-auto button-white   border cursor-pointer ${ageGroup === "" ? 'bg-[#009C4A] border-[#009C4A] text-white transition-[1s]' : ''}`}
                  onClick={() => {
                    updateAgeGroup("");
                  }}
                >
                  <span className="pl-2 pr-2">All Services</span>
                </button>
                {totalAgeGroups && totalAgeGroups?.map((item, index)=>(
                <button
                  key={index}
                  className={`w-full sm:w-auto button-white border cursor-pointer ${ageGroup === item?._id ? 'bg-[#009C4A] border-[#009C4A] text-white transition-[1s]' : ''}`}
                  onClick={() => {
                    updateAgeGroup(item?._id);
                  }}
                >
                  <span className="pl-2 pr-2 whitespace-nowrap">{item?.title}</span>
                </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Services</h1>
        {/* <AddService /> */}
        <Link href="/admin/service/add" className="button cursor-pointer">
          + Add Services
        </Link>
      </div>
      <Filter />
      {loading ? (
        <Loading />
      ) : (
        <>
          {serviceList && serviceList.length ? (
            <>
              <div className="  mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:mt-4 md:mb-8">
                  {serviceList && serviceList?.map((item, index) => (
                    <ServiceCardSmall key={item._id || index} item={item} idx={index} isAdmin={true} fetchServices={fetchServices} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <NoResultFound title={"No Services Found !!"}/>
          )}
        </>
      )}
    </>
  );
}

export default ServicesBox;
