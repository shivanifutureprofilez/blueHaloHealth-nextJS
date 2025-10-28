import AgeBanner from "@/components/AgeBanner";
import BookingTab from "@/components/BookingTab";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import React, { useEffect, useState } from "react";
import SectionBanner from "@/components/SectionBanner";
import RoutesLists from "../api/RoutesLists";
import Loading from "@/components/Loading";
import NoResultFound from "@/components/NoResult";

export default function Index() {
  const [ageGroup, setAgeGroup] = useState("");
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  // console.log("totalAgeGroups", totalAgeGroups);

  useEffect(() => {
    fetchData();
  }, []);

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
        // setLoading(false);
        // console.log("Service List ", serviceList);
      })
      .catch((err) => {
        setServiceList([]);
        // setLoading(false);
        console.log("err ", err);
        setLoading(false)
      });
  };

  useEffect(() => {
    fetchServices();
  }, [ageGroup]);

  const Filter = () => {
    return (
      <>
        {totalAgeGroups?.length === 0 ? (
          <>
          </>
        ) : <div className="flex justify-center items-center flex-wrap gap-2">
          <button
            className={`button-white w-full md:w-[230px] border cursor-pointer ${ageGroup === "" ? 'bg-[#009C4A] border-[#009C4A] text-white transition-[1s]' : ''}`}
            onClick={() => {
              updateAgeGroup("");
            }}
          >
            <span className="pl-2 pr-2">All Services</span>
          </button>
          {totalAgeGroups && totalAgeGroups?.map((item, index) => (
            <button
              key={index}
              className={`button-white w-full md:w-[230px] border cursor-pointer ${ageGroup === item?._id ? 'bg-[#009C4A] border-[#009C4A] text-white transition-[1s]' : ''}`}
              onClick={() => {
                updateAgeGroup(item?._id);
              }}
            >
              <span className="pl-2 pr-2">{item?.title}</span>
            </button>
          ))}
        </div>}
      </>

    );
  };

  return (
    <Layout>
      <SectionBanner title={"Services"} />
      <div className="bg-[#F7F4F0] py-[20px] md:py-[40px] lg:py-[60px]">
        <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
          <Filter />
          {loading ? (
            <Loading />
          ) : serviceList && serviceList.length ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-[15px] md:py-[30px] ">
                {serviceList.map((item, index) => (
                  <ServiceCard key={item?._id || index} item={item} ageGroup={ageGroup} idx={index} />
                ))}
              </div>
            </>
          ) : (
           <div className="mt-3 mb-3">
               <NoResultFound title={"No Services Found !!"}/>
           </div>
          )}
        </div>
      </div>
      <BookingTab />
    </Layout>
  );
}
