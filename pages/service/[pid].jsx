import Layout from "@/components/Layout";
import SectionBanner from "@/components/SectionBanner";
import ServiceCard from "@/components/ServiceCard";
import BookingTab from "@/components/BookingTab";
import Loading from "@/components/Loading";
import NoResultFound from "@/components/NoResult";
import ServiceEnding from "./ServiceEnding";

import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import RoutesLists from "../api/RoutesLists";

export default function Index() {
  const router = useRouter();
  const activeAgeGroup = router?.query?.pid || null;

  const [ageGroup, setAgeGroup] = useState(null);
  const [serviceList, setServiceList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSingleCategory = async () => {
    try {
      setLoading(true);
      const main = new RoutesLists();
      const res = await main.getCategoryDetail(activeAgeGroup);

      if (res?.data?.status) {
        setAgeGroup(res.data.category);
        setServiceList(res.data.services || []);
      } else {
        setAgeGroup(null);
        setServiceList([]);
      }
    } catch (error) {
      console.error("Category fetch error:", error);
      setAgeGroup(null);
      setServiceList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeAgeGroup) {
      fetchSingleCategory();
    }
  }, [activeAgeGroup]);

  return (
    <>
      {/* SEO */}
      <Head>
        <title>
          {ageGroup?.title
            ? `${ageGroup.title} Services in Ontario | Blue Halo Health`
            : "Our Services | Blue Halo Health"}
        </title>

        <meta
          name="description"
          content={
            ageGroup?.description ||
            "Explore expert-led, virtual-first mental and developmental healthcare services available across Ontario."
          }
        />

        <meta
          property="og:title"
          content={
            ageGroup?.title
              ? `${ageGroup.title} Services | Virtual Care in Ontario`
              : "Our Services | Blue Halo Health"
          }
        />

        <meta
          property="og:description"
          content={
            ageGroup?.description?.slice(0, 200) ||
            "Ontario-wide virtual mental and developmental care delivered by licensed clinicians."
          }
        />

        <meta
          property="og:image"
          content={ageGroup?.coverImg || "/summary.png"}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={
            ageGroup?.title
              ? `${ageGroup.title} Services | Ontario Virtual Care`
              : "Blue Halo Health Services"
          }
        />

        <meta
          name="twitter:description"
          content={
            ageGroup?.description?.slice(0, 200) ||
            "Access virtual-first mental and developmental healthcare services across Ontario."
          }
        />

        <meta
          name="twitter:image"
          content={ageGroup?.coverImg || "/summary.png"}
        />
      </Head>

      <Layout>
        <div className="bg-[#F7F4F0] ">

        
          {loading ? (
            <Loading />
          ) : ageGroup ? (
            <>
            {/* <div className=" "> */}
              <SectionBanner title={ageGroup?.title || "Services"} />
              <div className="mx-auto container text-center py-[20px] md:py-[40px] lg:py-[60px]">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                    <Image
                      src={ageGroup.coverImg}
                      alt={ageGroup.title}
                      width={400}
                      height={300}
                      className="object-cover rounded-xl w-full h-full"
                      priority
                    />
                  </div>

                  <div className="md:w-2/3">
                    <h2 className="text-left text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      {ageGroup.title}
                    </h2>

                    <p className="text-gray-600 text-left text-base md:text-[17px] leading-relaxed mb-6">
                      {ageGroup.description}
                    </p>
                  </div>
                </div>

                {/* Services */}
                {serviceList.length ? (
                  <>
                    <div className="mt-6 pt-6 text-start">
                      <h2 className="text-[24px] font-semibold text-gray-900 mb-2">
                        Our {ageGroup.title} Services
                      </h2>
                      <p className="">
                        All services below are available for this program.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 py-[15px] md:py-[30px]">
                      {serviceList.map((item, index) => (
                        <ServiceCard
                          key={item?._id || index}
                          item={item}
                          ageGroup={ageGroup}
                          idx={index}
                        />
                      ))}
                    </div>
                    
                  </>
                ) : (
                  <NoResultFound />
                )}
              </div>

              {/* Service Ending */}
              <div className="container mx-auto">
                <ServiceEnding />
              </div>
              <BookingTab />
              {/* </div> */}
            </>
          ) : (
            <NoResultFound />
          )}
        </div>

        
      </Layout>
    </>
  );
}
