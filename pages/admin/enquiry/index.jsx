import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import AdminRoutes from "@/pages/api/AdminRoutes";
import Tooltip from "@/components/ToolTip";
import NoResultFound from "@/components/NoResult";
import Loading from "@/components/Loading";
export default function index() {
   
  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  
    const fetchGroups = async () => {
      const lists = new AdminRoutes();
      const data = lists.getcontactlist();
      data.then((res)=>{ 
        setContacts(res?.data?.enquiryData || []);
        setLoading(false)
      }).catch((err)=>{ 
        setContacts([]);
        console.log("err",err)
        setLoading(false)
      });
    }
    useEffect(()=>{
      fetchGroups();
    },[]);
  return ( 
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Enquiries</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        contacts && contacts?.length > 0 ? (
      <>
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
                  Phone no
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Age
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Message
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Promotion Agreement
                </th>
              </tr>
            </thead>
            <tbody>

          { contacts?.map((contacts , index)=>(
                <tr key={index}>
                  <td className=" font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a]">
                    {index+1}
                  </td>
                  <td className="font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left  ">
                   {contacts?.fullName}
                  </td>
                  <td className=" font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {contacts?.email}
                  </td>
                  <td className=" font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {contacts?.phone}
                  </td>
                  <td className=" font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {contacts?.age}
                  </td>
                  <td className=" font-[600] text-white text-[16px] px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    <Tooltip content={contacts?.message}>
                      <span className=" max-w-[100px] block overflow-hidden underline cursor-pointer text-white">
                        {contacts?.message}
                      </span>
                    </Tooltip>

                  </td>
                   <td className=" font-[600] text-white text-[16px] px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {contacts?.smsCheckbox === true ? "Agree" : "Disagree"}
                  </td>
                </tr>
          )
              
          )}
           </tbody>
          </table>
          </div>  
          </>
        ) : (
          <NoResultFound />
        )
      )}
    </AuthLayout>
  );
}
