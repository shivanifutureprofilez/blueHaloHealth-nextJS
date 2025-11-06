import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import AdminRoutes from "@/pages/api/AdminRoutes";
import Tooltip from "@/components/ToolTip";
import NoResultFound from "@/components/NoResult";
import Loading from "@/components/Loading";
import RoutesLists from "@/pages/api/RoutesLists";
import FormattedDate from "@/components/FormattedDate";
export default function index() {
   
  
  const [waitlist, setWaitlist] = useState([]);
  const [loading, setLoading] = useState(true);
  
    const fetchWaitlist = async () => {
      const lists = new RoutesLists();
      const data = lists.getWaitList();
      data.then((res)=>{ 
        setWaitlist(res?.data?.waitlistData || []);
        setLoading(false)
      }).catch((err)=>{ 
        setWaitlist([]);
        console.log("err",err)
        setLoading(false)
      });
    }
    useEffect(()=>{
      fetchWaitlist();
    },[]);
  return ( 
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Enquiries</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        waitlist && waitlist?.length > 0 ? (
      <>
      <div className="">
        <table className="w-full table-auto whitespace-nowrap">
            <thead>
              <tr className="bg-theme">
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] mb-[10px]">
                  S.No.
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] ">
                  Date
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>

          { waitlist?.map((waitlist , index)=>(
                <tr key={index}>
                  <td className=" font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a]">
                    {index+1}
                  </td>
                  <td className="capitalize font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left  ">
                   <FormattedDate date={waitlist?.createdAt}/>
                  </td>
                  <td className=" font-[600] text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {waitlist?.email}
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
