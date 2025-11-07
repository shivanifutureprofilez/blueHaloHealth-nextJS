import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import AdminRoutes from "@/pages/api/AdminRoutes";
import Tooltip from "@/components/ToolTip";
import NoResultFound from "@/components/NoResult";
import Loading from "@/components/Loading";
import { AiOutlineDelete } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
export default function index() {


  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGroups = async () => {
    const lists = new AdminRoutes();
    const data = lists.getcontactlist();
    data.then((res) => {
      setContacts(res?.data?.enquiryData || []);
      setLoading(false)
    }).catch((err) => {
      setContacts([]);
      console.log("err", err)
      setLoading(false)
    });
  }
  useEffect(() => {
    fetchGroups();
  }, []);

  const deleteWrongEnquiry = async (pid) => {
    try {
      const lists = new AdminRoutes();
      const data = lists.deleteEnquiries(pid);
      data.then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
          fetchGroups();
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
        <h1 className="text-[22px] lg:text-4xl font-bold text-white">Enquiries</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        contacts && contacts?.length > 0 ? (
          <>
            <div className="mytable ">
              <table cellPadding={10} className=" w-full table-auto whitespace-nowrap text-[10px]">
                <thead>
                  <tr className="bg-theme ">
                    <th className="!px-2 border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] mb-[10px]">
                      S.No.
                    </th>
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] ">
                      Name - Age 
                      <p>Promotional Activities</p>
                    </th>
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                      Email/Phone no
                    </th>
                    {/* <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Phone no
                </th> */}
                    {/* <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Age
                </th> */}
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                      Service
                    </th>
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                      Message
                    </th>
                    <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                      Action
                    </th>
                  
                  </tr>
                </thead>
                <tbody>

                  {contacts?.map((contacts, index) => (
                    <tr key={index}>
                      <td className="!px-2  text-white text-[16px] text-left pcenter] py-[16px]  border-b border-[#ffffff1a]">
                        {index + 1}
                      </td>
                      <td className="capitalize  text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left  ">
                        <p>{contacts?.fullName} ({contacts?.age} yrs)</p>
                        <p>{contacts?.smsCheckbox === true ? "Agree" : "Disagree"}</p>
                      </td>
                      <td className="  text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                        {contacts?.email} <br /> {contacts?.phone}
                      </td>
                      {/* <td className="  text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {contacts?.phone}
                  </td> */}
                      {/* <td className="  text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {contacts?.age}
                  </td> */}
                      <td className=" capitalize  text-white text-[16px] px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                        <Tooltip content={contacts?.service}>
                          <span className=" max-w-[100px] block overflow-hidden underline cursor-pointer text-white">
                            {contacts?.service}
                          </span>
                        </Tooltip>
                      </td>
                      {/* <td className="  text-white text-[16px]  px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {contacts?.service}
                  </td> */}
                      <td className=" capitalize  text-white text-[16px] px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                        <Tooltip content={contacts?.message}>
                          <span className=" max-w-[100px] block overflow-hidden underline cursor-pointer text-white">
                            {contacts?.message}
                          </span>
                        </Tooltip>

                      </td>
                      <td className="  text-left  text-white text-[16px] px-[10px] py-[16px] center  ">
                        {/* {contacts?.smsCheckbox === true ? "Agree" : "Disagree"} */}
                        <button
                          onClick={() => {
                            deleteWrongEnquiry(contacts?._id);
                          }}
                          className=" bg-red-600 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer"
                          title="Delete enquiry"
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
