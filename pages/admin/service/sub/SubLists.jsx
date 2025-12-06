import AdminRoutes from '@/pages/api/AdminRoutes';
import RoutesLists from '@/pages/api/RoutesLists';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

function SubLists({ serviceid, service, pageID, isAdmin }) {
  const router = useRouter();
  const { pid } = router.query;
  const [items, setItems] = useState({
    name: "",
    description: "",
    bannerImg: "",
    service: pid,
    content: "",
  });
  const [loading, setLoading] = useState(true);
  const [list, setLists] = useState([]);
   
  const fetchSubServices = async () => {
    setLoading(true)
    const lists = new AdminRoutes();
    const data = lists.allSubServices(serviceid);
    data
      .then((res) => {
        const data = res?.data?.subServiceList || [];
        if (pageID) {
          const temp = data.filter((i) => i._id !== pageID);
          console.log("temp", temp)
          setLists(temp);
        } else {
          setLists(data);
        }

        setLoading(false)
      })
      .catch((err) => {
        setLists([]);
        setLoading(false)
        console.log("err ", err);
      });
  };


  const toSlug = (str) => {
    if (str) {
      return str
        .toLowerCase()
        .trim()
        .normalize("NFD")                 // split accented letters
        .replace(/[\u0300-\u036f]/g, "")  // remove accents
        .replace(/[^a-z0-9]+/g, "-")      // remove non-alphanumerics
        .replace(/^-+|-+$/g, "");         // trim hyphens
    } else {
      return ''
    }
  };

  useEffect(() => {
    fetchSubServices();
  }, [])

  

 const handleDelete = (id) => {
    const main = new AdminRoutes();
    main
      .DeleteSubService(id)
      .then((r) => {
        toast.success(r?.data?.message);
        fetchSubServices(); 
      })
      .catch((err) => {
        console.log("error", err);
        toast.error(err?.response?.data?.message);
      });
  };
  return (
    <div
      // key={idx}
      className=""
    >
      {/* {isAdmin && (
        <Link
          onClick={() => handleUpdate(pid)}
          // href={`/admin/service/${item?._id}`}
          href={`/admin/service/sub/add/${pid}`}
          className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-10 cursor-pointer
               flex items-center justify-center"
          title="Edit service"
        >
          <FaEdit size={18} />
        </Link>
      )}
      {isAdmin && (
        <button
          // onClick={() => {
          //   // handleDelete(item?._id);
          // }}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-2 cursor-pointer"
          title="Delete service"
        >
          <FaTrash size={18} />
        </button>
      )} */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:mt-4 md:mb-8"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-4 md:mt-4 md:mb-8">
        {list && list.map((item, i) => {
          return <div className={`${isAdmin ? 'bg-white' : 'bg-[#e5dfd73d]'} transition-[1s] rounded-xl hover:scale-[1.02] relative`}>
              {isAdmin && (
                <Link
                  // onClick={(e) => handleUpdate(e, item?._id)}
                  href={`/admin/service/sub/add/${item?._id}`}
                  className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition-colors duration-200 z-10 cursor-pointer
               flex items-center justify-center"
                  title="Edit service"
                >
                  <FaEdit size={18} />
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
                  <FaTrash size={18} />
                </button>
              )}
            <Link href={`/service/${toSlug(service?.name)}/${toSlug(item?.name)}/${item?._id}`} className={``}>
              <div className=" w-full h-[200px] rounded-lg overflow-hidden relative">
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

                <div className="flex items-center space-x-1 group">
                  <button className="text-green-dark cursor-pointer group-hover:underline transition-all duration-300">
                    Read More
                  </button>
                  <MdOutlineArrowRightAlt
                    size={24}
                    className="text-green-dark cursor-pointer transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

              </div>
            </Link>
          </div>
        })}
      </div>
      {/* </div> */}
    </div>

  )
}

export default SubLists;