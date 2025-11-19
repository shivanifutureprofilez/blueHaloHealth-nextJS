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
import { useParams, useSearchParams } from "next/navigation";
import HowItWorks from "@/components/HowItWorks";
import { motion } from "motion/react";

export default function Index() {
  
  
  const searchParams = useSearchParams();
  const activeAgeGroup = searchParams.get('agegroup');
  const [ageGroup, setAgeGroup] = useState(activeAgeGroup);
  const [loading, setLoading] = useState(true);

  const updateAgeGroup = (e) => {
    setLoading(true)
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
    const lists = new RoutesLists();
    const data = lists.getServices(ageGroup);
    data
      .then((res) => {
        setServiceList(res?.data?.allServices || []);
        setLoading(false)
      })
      .catch((err) => {
        setServiceList([]);
        console.log("err ", err);
        setLoading(false)
      });
  };
  
  useEffect(() => {
    if (totalAgeGroups && totalAgeGroups.length > 0) {
      const firstGroupId = totalAgeGroups[0]._id;
      setAgeGroup(activeAgeGroup || firstGroupId);
      // console.log("activeagegroup : ",activeAgeGroup.description);
      fetchServices(activeAgeGroup || firstGroupId);
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
        ) : <div  className=" grid grid-cols-1 md:grid-cols-3 items-center  gap-2">
          {totalAgeGroups && totalAgeGroups?.map((item, index) => (
            <button
              key={index}
              className={`text-normal w-full px-4 py-2 mb-1 !rounded-2xl border cursor-pointer ${ageGroup === item?._id ? 'bg-[#009C4A] border-[#009C4A] text-white transition-[1s]' : ''}`}
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
          <div className="mx-auto container    text-center">
            <Filter />
            <div  
            // data-aos="fade-right"  
            className="bg-green-50 p-6 rounded-2xl mt-4 shadow-sm  mx-auto">
              {/* <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 * 0.05 }}
                      viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
                    > */}
              <h2 className="heading poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl  mb-3">{serviceList && serviceList[0] && serviceList[0].agegroup?.title}</h2>
              <p className="mt-4 text-gray-600 font-medium mx-auto text-[17px] mb-2 lg:mb-4 leading-re text-center">{serviceList && serviceList[0] && serviceList[0].agegroup?.description}</p>
              {/* </motion.div> */}
              </div>
              { loading ? 
              <Loading />
              :
              <>
              {serviceList && serviceList.length ? (
                <>
                  <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 py-[15px] md:py-[30px] ">
                    {serviceList.map((item, index) => (
                      <ServiceCard key={item?._id || index} item={item} ageGroup={ageGroup} idx={index} />
                    ))}
                  </div>
                </>
              ) 
              : 
                <>
                  <div className="mt-3 mb-3">
                    <Loading />
                  </div>
                </>
              }
              </>
            
            }
            
          </div>
        </div>
        <HowItWorks/>
        <BookingTab />
      </Layout>
    </>
  );
}
