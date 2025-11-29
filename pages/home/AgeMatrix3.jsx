import Heading from "@/components/Heading";
import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import RoutesLists from "../api/RoutesLists";
import { Api } from "../api/Api";
import Link from "next/link";
import Loading from "@/components/Loading";
import { motion } from "motion/react";
import Image from "next/image";

export default function AgeMatrix3({ admin }) {
  const [ageGroupsLists, setAgeGroupsLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRefs = useRef([]);

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

  const scroll = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = 350; // Increased for larger cards
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#E6EBE3] md:bg-[#F7F4F0] py-[30px] md:py-[40px] lg:py-[60px]">
      <div className="mx-auto container px-4">
        <Heading
          className="heading mb-0 text-center poppins text-black tracking-tighter leading-tight font-bold text-3xl md:text-5xl lg:text-5xl"
          heading1={"Comprehensive"}
          heading2={" Care Pathways"}
        />
        <p className="font-medium text-[15px] mt-1 text-center md:mb-2 text-gray-700 px-4 md:p-0 max-w-[600px] mx-auto">
          Like life, we aren't meant to do everything alone - and care shouldn't
          be either.
        </p>

        {loading ? (
          <Loading />
        ) : (
          <div className="py-[15px] md:py-[30px] space-y-6 md:space-y-8">
            {ageGroupsLists &&
              ageGroupsLists.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[25px] shadow-lg overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6 bg-gradient-to-r bg-[#009C4A]/5  border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/service?agegroup=${group?._id}`}
                        className="flex-shrink-0"
                      >
                        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center bg-white rounded-2xl p-3 shadow-md hover:scale-105 transition-transform duration-300">
                          <Image
                            src={
                              group?.image ||
                              group?.icon ||
                              "https://thumbs.dreamstime.com/b/elderly-man-medical-insurance-health-plan-older-people-pixel-perfect-editable-stroke-line-design-icon-elderly-man-medical-273635532.jpg"
                            }
                            alt={group.title}
                            width={64}
                            height={64}
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={`${group?.icon}?amp;q=5`}
                          />
                        </div>
                      </Link>

                      <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-bold text-black capitalize mb-1">
                          {group.title}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {group.services?.length || 0} services available
                        </p>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => scroll(idx, "left")}
                        className="p-2 md:p-3 rounded-full bg-white hover:bg-[#009C4A] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
                        aria-label="Scroll left"
                      >
                        <FaChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => scroll(idx, "right")}
                        className="p-2 md:p-3 rounded-full bg-white hover:bg-[#009C4A] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
                        aria-label="Scroll right"
                      >
                        <FaChevronRight size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Slider Container */}
                  <div className="p-4 md:p-6">
                    <div
                      ref={(el) => (scrollRefs.current[idx] = el)}
                      className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                    >
                      {group.services &&
                        group.services.map((service, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[280px] md:w-[320px]"
                          >
                            <Link
                              href={`/service/detail/${service?._id}`}
                              className="block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#009C4A] transition-all duration-300 group h-full"
                            >
                              {/* Service Image */}
                              {service?.bannerImg ? (
                                <div className="relative w-full h-40 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                                  <Image
                                    src={service.bannerImg}
                                    alt={service?.name || "Service"}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    placeholder="blur"
                                    blurDataURL={`${service.bannerImg}?amp;q=5`}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                              ) : (
                                <div className="w-full h-40 bg-gradient-to-br from-[#009C4A]/10 to-[#009C4A]/5 flex items-center justify-center">
                                  <div className="text-5xl text-[#009C4A]/30">
                                    {group?.icon || "🏥"}
                                  </div>
                                </div>
                              )}

                              {/* Service Content */}
                              <div className="p-4">
                                <h4 className="text-gray-800 group-hover:text-[#009C4A] font-semibold text-base leading-tight capitalize transition-colors duration-200 mb-2">
                                  {service?.name}
                                </h4>
                                <div className="flex items-center justify-between">
                                  <span className="text-[#009C4A] text-sm font-medium">
                                    Learn more
                                  </span>
                                  <svg
                                    className="w-5 h-5 text-[#009C4A] transform group-hover:translate-x-1 transition-transform duration-200"
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
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                    </div>
                  </div>

                  {/* View All Link */}
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <Link
                      href={`/service?agegroup=${group?._id}`}
                      className="inline-flex items-center gap-2 text-[#009C4A] font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                      View All {group.title} Services
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
              ))}
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