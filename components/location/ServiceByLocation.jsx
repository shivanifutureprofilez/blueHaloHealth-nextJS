import React, { useEffect, useState } from "react";
import Link from "next/link";
import AdminRoutes from "@/pages/api/AdminRoutes";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import RoutesLists from "@/pages/api/RoutesLists";

export default function ServiceByLocation({ categorySlug, serviceSlug, subServiceSlug }) {
    const [item, setItem] = useState(null);
    const [category, setCategory] = useState(null);
    const [serviceList, setServiceList] = useState(null);
    const [loading, setLoading] = useState(null);

    const fetchSingleCategory = async () => {
        try {
            setLoading(true);
            const main = new RoutesLists();
            const res = await main.getCategoryDetail(categorySlug);
            if (res?.data?.status) {
                setItem(res.data.category);
                console.log("items ", item);
                setServiceList(res.data.services || []);
            } else {
                setItem(null);
                setServiceList([]);
            }
        } catch (error) {
            console.error("Category fetch error:", error);
            setItem(null);
            setServiceList([]);
        } finally {
            setLoading(false);
        }
    };
    const ShowSubServiceDetails = async () => {
        const lists = new RoutesLists();
        await lists.singleSubServiceDetail(subServiceSlug)
            .then((res) => {
                setItem(res?.data?.subServiceData || null);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const ShowServiceDetails = () => {
        const lists = new RoutesLists();
        const data = lists.getServiceDetail(serviceSlug);
        console.log("data : ", data);
        data.then((res) => {
            setItem(res?.data?.serviceData || null);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        });
    };

    useEffect(() => {
        if (serviceSlug) {
            setLoading(true);
            setItem(null);
            ShowServiceDetails();
        }
    }, [serviceSlug]);
    useEffect(() => {
        if (subServiceSlug) {
            console.log("subservice slug ", subServiceSlug);
            setLoading(true);
            ShowSubServiceDetails();
        }
    }, [subServiceSlug]);
    useEffect(() => {
        if (categorySlug) {
            fetchSingleCategory();
        }
    }, [categorySlug]);
    return (
        <div
            className="bg-[#e5dfd73d]  group rounded-[25px] shadow overflow-hidden flex flex-col items-center relative"
        >
            <div className="w-full h-55 rounded-lg overflow-hidden  relative">
                <Link href={`/service/detail/${item?.slug}`}>
                    <Image
                        src={item?.coverImg || item?.bannerImg}
                        alt={item?.name}
                        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                        width={1000}
                        height={55}
                        placeholder="blur"
                        blurDataURL={`${item?.bannerImg}?amp;q=5`}
                    />
                </Link>
            </div>
            <div className="p-6 text-left">
                <h2 className="font-bold text-normal text-black mb-2 line-clamp-2">
                    {item?.name || item?.title}
                </h2>
                <p className="mb-4 text-[15px] font-medium line-clamp-2 text-gray-600">
                    {item?.description}
                </p>
                <Link href={`/service/detail/${item?.slug}`}>
                    <div className="flex items-center space-x-1 group">
                        <button className="text-green-dark cursor-pointer group-hover:underline transition-all duration-300">
                            Read More
                        </button>
                        <MdOutlineArrowRightAlt
                            size={24}
                            className="text-green-dark cursor-pointer transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}
