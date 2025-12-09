import React from "react";
import Link from "next/link";
import AdminRoutes from "@/pages/api/AdminRoutes";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

function ServiceCard({ item, idx, isAdmin = false, fetchServices }) {
  const handleDelete = (id) => {
    const main = new AdminRoutes();
    main
      .deleteService(id)
      .then((r) => {
        toast.success(r?.data?.message);
        fetchServices();
      })
      .catch((err) => {
        console.log("error", err);
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <div
      key={idx}
      className="bg-[#e5dfd73d]  group rounded-[25px] shadow overflow-hidden flex flex-col items-center relative"
      // data-aos="zoom-in-up" 
    >
      {isAdmin && (
        <Link
          //   onClick={() => handleEdit(item?._id)}
          href={`/admin/service/${item?._id}`}
          className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-10 cursor-pointer
               flex items-center justify-center"
          title="Edit service"
        >
          <FaEdit size={14} />
        </Link>
      )}

      {isAdmin && (
        <button
          onClick={() => {
            handleDelete(item?._id);
          }}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer"
          title="Delete service"
        >
          <FaTrash size={14} />
        </button>
      )}

      <div className="w-full h-55 rounded-lg overflow-hidden  relative">
        <Link href={`/service/detail/${item?._id}`}>
          <Image
            src={item?.bannerImg}
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
        <h2 className="font-bold text-xl text-black mb-2 line-clamp-1">
          {item?.name}
        </h2>
        <p className="mb-4 text-[15px] font-medium line-clamp-2 text-gray-600">
          {item?.description}
        </p>
        <Link href={`/service/detail/${item?._id}`}>
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

export default ServiceCard;
