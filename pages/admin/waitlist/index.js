import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import AdminRoutes from "@/pages/api/AdminRoutes";
import Tooltip from "@/components/ToolTip";
import NoResultFound from "@/components/NoResult";
import Loading from "@/components/Loading";
import RoutesLists from "@/pages/api/RoutesLists";
import FormattedDate from "@/components/FormattedDate";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
export default function index() {


  const [waitlist, setWaitlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWaitlist = async () => {
    const lists = new RoutesLists();
    const data = lists.getWaitList();
    data.then((res) => {
      setWaitlist(res?.data?.waitlistData || []);
      setLoading(false)
    }).catch((err) => {
      setWaitlist([]);
      console.log("err", err)
      setLoading(false)
    });
  }
  useEffect(() => {
    fetchWaitlist();
  }, []);
  const delWaitlist = async (pid) => {
    try {
      const lists = new AdminRoutes();
      const data = lists.deleteWaitList(pid);
      data.then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
          fetchWaitlist();
        }
        else {
          toast.error(res.data.message);
        }
      }).catch((err) => {
        console.log("error : ", err);
      })
    } catch (error) {
      console.log("error : ", error);
    }
  }
  return (
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-[22px] lg:text-4xl font-bold text-white">Waitlist</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        waitlist && waitlist?.length > 0 ? (
          <>
            <div className="mytable">
              <table className="w-full table-auto whitespace-nowrap">
                <thead>
                  <tr className="bg-theme ">
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] mb-[10px]">
                      S.No.
                    </th>
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] ">
                      Date
                    </th>
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                      Email
                    </th>
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {waitlist?.map((waitlist, index) => (
                    <tr key={index}>
                      <td className="  text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a]">
                        {index + 1}
                      </td>
                      <td className="capitalize  text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left  ">
                        <FormattedDate date={waitlist?.createdAt} />
                      </td>
                      <td className="  text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                        {waitlist?.email}
                      </td>
                      <td className="  text-left  text-white text-[16px] px-[10px] py-[16px] center  ">
                        {/* {contacts?.smsCheckbox === true ? "Agree" : "Disagree"} */}
                        <button
                          onClick={() => {
                            delWaitlist(waitlist?._id);
                          }}
                          className=" bg-red-600 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer"
                          title="Delete Waitlist Data"
                        >
                          <FaTrash size={18} />
                        </button>
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
