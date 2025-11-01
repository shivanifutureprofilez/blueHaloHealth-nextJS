import React from "react";
import Link from "next/link";
import AdminRoutes from "@/pages/api/AdminRoutes";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { LuMoveUpRight } from "react-icons/lu";

function ServiceCardSmall({ item, idx, isAdmin = false, fetchServices }) {
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
  const markAsFeatured = () => {
    const main = new AdminRoutes();
    main.featureService(item?._id)
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
      className="bg-white rounded-[25px]  shadow overflow-hidden flex flex-col items-center relative"
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
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer"
          title="Delete service"
        >
          <FaTrash size={14} />
        </button>
      )}
    <div className="flex p-4 ">
      <div className=" rounded-lg overflow-hidden  relative">
        <Link href={`/service/detail/${item?._id}`}>
          <img
            src={item?.bannerImg}
            alt={item?.name}
            className="object-cover rounded-[25px] h-full w-[580px]"
          />
        </Link>
      </div>
        
      <div className="text-left ps-4">
        <h2 className="font-bold text-xl text-black mb-2 line-clamp-1">
          {item?.name}
        </h2>
        <p className="mb-4 text-[15px] font-medium line-clamp-3 text-gray-600">
          {item?.description}
        </p>
        <div className="flex gap-2">


        { !isAdmin &&   <Link href={`/service/detail/${item?._id}`} className="text-green-dark flex gap-2">
           <LuMoveUpRight className=" p-1 rounded-full text-green-dark text-2xl bg-[#E6F4EA]"/>   Learn More
        </Link>}
      
        </div> 

        {isAdmin && (
        <button
          onClick={markAsFeatured}
          className={`
            ${item?.featured && isAdmin  ? "bg-red-900 hover:bg-red-900" : "bg-green-500 hover:bg-green-500"} 
            
            text-white px-2 py-1 w-full mt-2  rounded-full shadow-md transition-colors duration-200 z-10 cursor-pointer
               flex items-center justify-center text-sm`}
          title="Edit service"
        >
         {item?.featured ? "Remove From Featured" :" Mark As Featured"}
        </button>
      )}

      </div>
    </div>
    </div>
  );
}

export default ServiceCardSmall;
