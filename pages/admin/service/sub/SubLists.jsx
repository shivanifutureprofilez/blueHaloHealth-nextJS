import AdminRoutes from '@/pages/api/AdminRoutes';
import RoutesLists from '@/pages/api/RoutesLists';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md';

function SubLists({ serviceid }) {
  const [loading, setLoading] = useState(true);
  const [list, setLists] = useState([]);
  const fetchSubServices = async () => {
    setLoading(true)
    const lists = new AdminRoutes();
    const data = lists.allSubServices(serviceid);
    data
      .then((res) => {
        setLists(res?.data?.subServiceList || []);
        setLoading(false)
      })
      .catch((err) => {
        setLists([]);
        setLoading(false)
        console.log("err ", err);
      });
  };


  useEffect(() => {
    fetchSubServices();
  }, [])
  return (

    <div
      className=" "
    >
      {/* {isAdmin && (
        <Link
        //   onClick={() => handleEdit(item?._id)}
        href={`/admin/service/${item?._id}`}
          className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-10 cursor-pointer
               flex items-center justify-center"
          title="Edit service"
        >
          <FaEdit size={18} />
        </Link>
      )} */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:mt-4 md:mb-8"> */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-4 md:mt-4 md:mb-8">
        {list && list.map((item, i) => {
          return <Link href={`/service/detail/${item?._id}`} className=' transition-[1s] bg-[#e5dfd73d] rounded-xl hover:scale-[1.02]' >
            <div className=" w-full h-[200px] rounded-lg overflow-hidden  relative">
              <img
                src={item?.bannerImg}
                alt={item?.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="font-bold text-normal text-black mb-2 line-clamp-1">
                {item?.name}
              </h2>
              <p className="mb-4 text-[14px] font-medium line-clamp-3 text-gray-600">
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
          </Link>
        })}
      </div>
      {/* </div> */}
    </div>

  )
}

export default SubLists;