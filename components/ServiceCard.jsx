import React from "react";
import Link from "next/link";
import AdminRoutes from "@/pages/api/AdminRoutes";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

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
      className="bg-white rounded-[25px] shadow overflow-hidden flex flex-col items-center relative"
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

      <div className="w-full h-70 rounded-lg overflow-hidden mb-4 relative">
        <Link href={`/service/detail/${item?._id}`}>
          <img
            src={item?.bannerImg}
            alt={item?.name}
            className="object-cover w-full h-full"
          />
        </Link>
      </div>

      <div className="p-6 text-left">
        <h2 className="font-bold text-xl text-black mb-2 line-clamp-1">
          {item?.name}
        </h2>
        <p className="mb-8 text-[15px] font-medium line-clamp-3 text-gray-600">
          {item?.description1}
        </p>
        <button className="button md:w-[200px]">Learn More</button>
      </div>
    </div>
  );
}

export default ServiceCard;
