import Heading from "@/components/Heading";
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import RoutesLists from "../api/RoutesLists";
import { Api } from "../api/Api";
import Link from "next/link";
import Loading from "@/components/Loading";
import { motion } from "motion/react";
import Image from "next/image";

export default function AgeMatrix({ admin }) {
  const [ageGroupsLists, setAgeGroupsLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  const fetchGroups = async () => {
    const lists = new RoutesLists();
    const data = lists.getAgeGroups();
    data
      .then((res) => {
        setAgeGroupsLists(res?.data?.ageGroupList || []);
        setLoading(false);
      })
      .catch((err) => {
        setAgeGroupsLists([]);
        console.log("err", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <section className="bg-[#E6EBE3] md:bg-[#F7F4F0] py-[30px] md:py-[40px] lg:py-[60px]">
      <div className="mx-auto container px-4 text-center">
        <Heading
          className="heading mb-0 text-center poppins text-black tracking-tighter leading-tight font-bold text-3xl md:text-5xl lg:text-5xl"
          heading1={"Comprehensive"}
          heading2={" Care Pathways"}
        />
        <p className="font-medium text-[15px] mt-1 text-center md:mb-2 text-gray-700 px-4 md:p-0 max-w-[600px] mx-auto">
          Like life, we aren't meant to do everything alone - and care shouldn't be either.
        </p>

        {loading ? (
          <Loading />
        ) : (
          <div className="py-[15px] md:py-[30px]">
            {/* Tabbed Interface */}
            <div className="bg-white rounded-[25px] shadow-lg overflow-hidden">
              {/* Tab Headers */}
              <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
                {ageGroupsLists &&
                  ageGroupsLists.map((group, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`flex-1 min-w-[150px] px-4 py-6 font-semibold text-sm transition-all duration-300 ${
                        activeTab === idx
                          ? "bg-[#009C4A] text-white border-b-4 border-[#007A3A]"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-12 w-12 flex items-center justify-center">
                          <Image
                            src={
                              group?.image ||
                              group?.icon ||
                              "https://thumbs.dreamstime.com/b/elderly-man-medical-insurance-health-plan-older-people-pixel-perfect-editable-stroke-line-design-icon-elderly-man-medical-273635532.jpg"
                            }
                            alt={group.title}
                            width={48}
                            height={48}
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={`${group?.icon}?amp;q=5`}
                          />
                        </div>
                        <span className="capitalize leading-tight">
                          {group.title}
                        </span>
                      </div>
                    </button>
                  ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-8 lg:p-10">
                {ageGroupsLists[activeTab] && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                      <Link
                        href={`/service?agegroup=${ageGroupsLists[activeTab]?._id}`}
                        className="flex-shrink-0"
                      >
                        <div className="h-32 w-32 flex items-center justify-center bg-gray-50 rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                          <Image
                            src={
                              ageGroupsLists[activeTab]?.image ||
                              ageGroupsLists[activeTab]?.icon ||
                              "https://thumbs.dreamstime.com/b/elderly-man-medical-insurance-health-plan-older-people-pixel-perfect-editable-stroke-line-design-icon-elderly-man-medical-273635532.jpg"
                            }
                            alt={ageGroupsLists[activeTab].title}
                            width={96}
                            height={96}
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={`${ageGroupsLists[activeTab]?.icon}?amp;q=5`}
                          />
                        </div>
                      </Link>
                      <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-black capitalize mb-2">
                          {ageGroupsLists[activeTab].title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">
                          Explore our specialized services for this age group
                        </p>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {ageGroupsLists[activeTab].services &&
                        ageGroupsLists[activeTab].services.map((service, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="group"
                          >
                            <Link
                              href={`/service/detail/${service?._id}`}
                              className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                            >
                              <span className="mt-1 flex-shrink-0">
                                <FaCircleCheck className="text-[#009C4A] text-lg" />
                              </span>
                              <span className="text-[#626262] group-hover:text-[#009C4A] font-semibold text-[15px] text-left capitalize transition-colors duration-200">
                                {service?.name}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                    </div>

                    {/* View All Link */}
                    <div className="mt-8 text-center">
                      <Link
                        href={`/service?agegroup=${ageGroupsLists[activeTab]?._id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#009C4A] text-white font-semibold rounded-full hover:bg-[#007A3A] transition-colors duration-200"
                      >
                        View All Services
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}