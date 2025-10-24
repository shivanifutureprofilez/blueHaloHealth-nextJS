import React, { useContext, useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import { MyContext } from "@/pages/context/UserContext";
export default function index() {
   
  const {name} = useContext(MyContext);
  return ( 
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Enquiries</h1>
      </div>
      <div className="overflow-auto">
        <table className="w-full table-auto whitespace-nowrap">
            <thead>
              <tr className="bg-theme">
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] mb-[10px]">
                  S.No.
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] ">
                  Name{" "}
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Email
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>

                <tr key={index}>
                  <td className=" font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a]">
                    1
                  </td>
                  <td className="font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left  ">
                   Khkjdsdf
                  </td>
                  <td className=" font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    sdfsd@gmail/cp,
                  </td>
                  <td className=" font-[600] text-white text-[16px] px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis et adipisci odit hic, omnis sapiente modi fugit ex voluptatem exercitationem nisi, atque ab dolores repellendus numquam impedit sed tenetur.
                  </td>
                </tr>
           </tbody>
          </table>
      </div>
    </AuthLayout>
  );
}
