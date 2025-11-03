import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Sidebar({ toggle, handleLogout }) {
  const pathname = usePathname();
  return (
    <>
      <div
        id="sidebar"
        className={`mobilesidebar fixed top-0 z-[49] max-h-[100vh] h-screen overflow-hidden bg-black border-r  pb-22 w-full max-w-[300px] min-w-[300px] border-gray-800 transition-transform duration-300 ease-in-out transform ${toggle ? "bg-black translate-x-0 z-[9999] min-h-screen p-4 pt-[30px]" : "-translate-x-full p-8 pt-[140px]"
          } md:sticky md:translate-x-0`}
      >
        <div className="max-h-[76vh] overflow-auto hidescroll">

        <div className=" flex md:hidden items-center mb-8 ">
          <div>
            <HiOutlineUserCircle color="white" size="2.5rem" />
          </div>
          <div className="text-start me-4 ps-2">
            <h2 className="capitalize font-bold text-white">Admin</h2>
            <p className="capitalize text-sm mt-[-3px] text-gray-400">
              Co-Founder
            </p>
          </div>
        </div>
        <ul>
         
          <li>
            <Link
              className={`hover:opacity-[0.7] hover:text-white focus:!text-white bg-dark text-gray-200 mb-2 py-[13px] px-[13px] ${pathname === "/admin/podcast" ? "bg-theme" : ""} border border-gray-700 rounded-2xl  flex items-center`}
              href={"/admin/enquiry"}
            >
              <MdOutlineSpaceDashboard className="me-2" size={"1.4rem"} />{" "}
              Enquiries
            </Link>
          </li>
          <li>
            <Link
              className={`hover:opacity-[0.7] hover:text-white focus:!text-white bg-dark text-gray-200 mb-2 py-[13px] px-[13px] ${pathname === "/admin/agegroups/list" ? "bg-theme" : ""} border border-gray-700 rounded-2xl  flex items-center`}
              href={"/admin/agegroups/list"}
            >
              <MdOutlineSpaceDashboard className="me-2" size={"1.4rem"} />{" "}
              Age Groups
            </Link>
          </li>
           <li>
            <Link
              className={`hover:opacity-[0.7] hover:text-white focus:!text-white bg-dark text-gray-200 mb-2 py-[13px] px-[13px] ${pathname === "/admin/service/list" ? "bg-theme" : ""} border border-gray-700 rounded-2xl  flex items-center`}
              href={"/admin/service/list"}
            >
              <MdOutlineSpaceDashboard className="me-2" size={"1.4rem"} />{" "}
              Services
            </Link>
          </li>
          <li>
            <Link
              className={`hover:opacity-[0.7] hover:text-white focus:!text-white bg-dark text-gray-200 mb-2 py-[13px] px-[13px] ${pathname === "/admin/service/list" ? "bg-theme" : ""} border border-gray-700 rounded-2xl  flex items-center`}
              href={"/admin/event"}
            >
              <MdOutlineSpaceDashboard className="me-2" size={"1.4rem"} />{" "}
              Events
            </Link>
          </li>
          <li>
            <Link
              className={`hover:opacity-[0.7] hover:text-white focus:!text-white bg-dark text-gray-200 mb-2 py-[13px] px-[13px] ${pathname === "/admin/service/list" ? "bg-theme" : ""} border border-gray-700 rounded-2xl  flex items-center`}
              href={"/admin/resource"}
            >
              <MdOutlineSpaceDashboard className="me-2" size={"1.4rem"} />{" "}
              Resources
            </Link>
          </li>

          

          <li>
            <button className="hover:opacity-[0.7] hover:text-white focus:!text-white text-gray-200 w-full mb-2 py-[13px] px-[13px] border border-gray-700 rounded-2xl bg-dark flex items-center" onClick={handleLogout}>
              <MdOutlineLogout className="me-2" size={"1.4rem"} /> Logout
            </button>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
