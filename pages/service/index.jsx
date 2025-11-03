import AgeBanner from "@/components/AgeBanner";
import BookingTab from "@/components/BookingTab";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import React, { useEffect, useState } from "react";
import SectionBanner from "@/components/SectionBanner";
import RoutesLists from "../api/RoutesLists";
import Loading from "@/components/Loading";
import NoResultFound from "@/components/NoResult";
import Head from "next/head";

export default function Index() {
  const [ageGroup, setAgeGroup] = useState("");
  const [loading, setLoading] = useState(true);

  const updateAgeGroup = (e) => {
    setAgeGroup(e);
  };

  const [totalAgeGroups, setTotalAgeGroups] = useState([]);

  console.log("totalAgeGroups", totalAgeGroups)

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

  useEffect(() => {
    fetchData();
  }, []);


  const [serviceList, setServiceList] = useState([]);
  const fetchServices = async (ageGroup) => {
    console.log("ageGroup", ageGroup)
    setLoading(true)
    const lists = new RoutesLists();
    const data = lists.getServices(ageGroup);
    data
      .then((res) => {
        setServiceList(res?.data?.allServices || []);
        setLoading(false)
      })
      .catch((err) => {
        setServiceList([]);
        // setLoading(false);
        console.log("err ", err);
        setLoading(false)
      });
  };
  
  useEffect(() => {
    if (totalAgeGroups && totalAgeGroups.length > 0) {
      const firstGroupId = totalAgeGroups[0]._id;
      setAgeGroup(firstGroupId);
      fetchServices(firstGroupId);
    }
  }, [totalAgeGroups]);

  useEffect(() => {
      fetchServices(ageGroup);
  }, [ageGroup]);

  const Filter = () => {
    return (
      <>
        {totalAgeGroups?.length === 0 ? (
          <>
          </>
        ) : <div className="flex justify-center items-center flex-wrap gap-2">
          {totalAgeGroups && totalAgeGroups?.map((item, index) => (
            <button
              key={index}
              className={`button-white !rounded-2xl md:w-[200px] border cursor-pointer ${ageGroup === item?._id ? 'bg-[#009C4A] border-[#009C4A] text-white transition-[1s]' : ''}`}
              onClick={() => { updateAgeGroup(item?._id) }}
            >
              <span className="pl-2 pr-2">{item?.title} </span>
            </button>
          ))}
        </div>}
      </>

    );
  };

  return (
    <>
      <Head>
        <title>Our Services | Blue Halo Health</title>
        <meta name="description" content="Explore holistic health services including functional medicine, nutrition, and personalized wellness programs from Blue Halo Health." />
        <meta name="keywords" content="wellness services, holistic therapy, nutrition, functional medicine, Blue Halo Health services" />
        <meta property="og:url" content="https://bluehalohealth.com/service" />
        <meta property="og:title" content="Our Services | Blue Halo Health" />
        <meta property="og:description" content="Transform your health with our personalized wellness services and functional medicine solutions." />
        <meta property="og:image" content="/summary.png" />
        <meta name="twitter:title" content="Our Services | Blue Halo Health" />
        <meta name="twitter:description" content="Discover holistic wellness services designed for your total well-being." />
        <meta property="og:image" content="/summary.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bluehalohealth.com/service" />
      </Head>
      <Layout>
        <SectionBanner title={"Services"} />
        <div className="bg-[#F7F4F0] py-[20px] md:py-[40px] lg:py-[60px]">
          <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
            <Filter />
            {loading ? (
              <Loading />
            ) : serviceList && serviceList.length ? (
              <>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 py-[15px] md:py-[30px] ">
                  {serviceList.map((item, index) => (
                    <ServiceCard key={item?._id || index} item={item} ageGroup={ageGroup} idx={index} />
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-3 mb-3">
                <NoResultFound title={"No Services Found !!"} />
              </div>
            )}
          </div>
        </div>
        <BookingTab />
      </Layout>
    </>
  );
}
