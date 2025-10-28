import AgeBanner from "@/components/AgeBanner";
import BookingTab from "@/components/BookingTab";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import React, { useEffect, useState } from "react";
import SectionBanner from "@/components/SectionBanner";
import RoutesLists from "../api/RoutesLists";

export default function Index() {
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

  const [serviceList, setServiceList] = useState([]);
  const fetchServices = async () => {
    const lists = new RoutesLists();
    const data = lists.getServices(ageGroup);
    // console.log("data ", data);
    data
      .then((res) => {
        // console.log("res?.data?.allServices : ", res?.data?.allServices);
        setServiceList(res?.data?.allServices || []);
        // console.log("Service List ", serviceList);
      })
      .catch((err) => {
        setServiceList([]);
        console.log("err ", err);
      });
  };

  useEffect(() => {
    fetchServices();
  }, [ageGroup]);

  const Filter = () => {
    return (
      <div className="container mx-auto px-8 py-8 md:py-16 md:px-16 ">

        <div className="flex justify-center items-center flex-wrap gap-2">
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
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="bg-[#F7F4F0]">
        {/* <AgeBanner title={"0-6 (Early Years)"} /> */}
        <SectionBanner title={"Services"} />
        <Filter />
        <div className="container mx-auto px-8 py-8 md:py-16 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceList &&
              serviceList?.map((item, index) => (
                <ServiceCard item={item} ageGroup={ageGroup} idx={index} />
              ))}
          </div>
          <BookingTab />
        </div>
      </div>
    </Layout>
  );
}
