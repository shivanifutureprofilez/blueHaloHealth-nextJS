import AgeBanner from "@/components/AgeBanner";
import BookingTab from "@/components/BookingTab";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import React, { useContext, useEffect, useState } from "react";
import SectionBanner from "@/components/SectionBanner";
import RoutesLists from "../api/RoutesLists";
import Loading from "@/components/Loading";
import NoResultFound from "@/components/NoResult";
import Head from "next/head";
import { useParams, useSearchParams } from "next/navigation";
import HowItWorks from "@/components/HowItWorks";
import { motion } from "motion/react";
import { MyContext } from "../context/UserContext";
import ServiceEnding from "./ServiceEnding";
import Image from "next/image";

export default function Index() {
  const searchParams = useSearchParams();
  const activeAgeGroup = searchParams.get('agegroup');
  const [ageGroup, setAgeGroup] = useState(null);
 
  const [loading, setLoading] = useState(true);
  const [serviceList, setServiceList] = useState([]);
  const fetchSingleCategory = async() => {
    try {
      setLoading(true);
      const main = new RoutesLists();
      console.log("activeAgeGroup : ",activeAgeGroup);
      const response = main.getCategoryDetail(activeAgeGroup);
      response.then((res)=>{ 
        if(res.data.status){
          setAgeGroup(res.data.category);
          setServiceList(res.data.services);
        } else { 
          setServiceList(null);
          setAgeGroup(null);
        }
        setLoading(false);
      }).catch((err)=>{
        console.log(err);
        setLoading(false);
      })
    } catch (error) {
      console.log("error : ",error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(activeAgeGroup !== null){
      fetchSingleCategory();
    }
  }, [activeAgeGroup]);
 
  const Filter = () => {
    return (
      <>
      
        {totalAgeGroups?.length === 0 ? (
          <>
          </>
        ) : <div  className=" grid grid-cols-1 md:grid-cols-3 items-center  gap-2">
          {totalAgeGroups && totalAgeGroups?.map((item, index) => (
            <button
              key={index}
              className={`text-normal w-full px-4 py-2 mb-1 !rounded-2xl border cursor-pointer ${ageGroup === item?._id ? 'bg-[#009C4A] border-[#009C4A] text-white transition-[1s]' : ''}`}
              onClick={() => { updateAgeGroup(item?._id) }} 
             >
              <span className="pl-2 pr-2">{item?.title} </span>
            </button>
          ))}
        </div>}
      </>

    );
  };

  return (
    <>
      <Head>
        <title>Our Services | Blue Halo Health</title>
        <meta name="description" content="Explore holistic health services including functional medicine, nutrition, and personalized wellness programs from Blue Halo Health." />
        <meta name="keywords" content="wellness services, holistic therapy, nutrition, functional medicine, Blue Halo Health services" />
        <meta property="og:url" content="https://bluehalohealth.com/service" />
        <meta property="og:title" content="Our Services | Blue Halo Health" />
        <meta property="og:description" content="Transform your health with our personalized wellness services and functional medicine solutions." />
        <meta property="og:image" content="/summary.png" />
        <meta name="twitter:title" content="Our Services | Blue Halo Health" />
        <meta name="twitter:description" content="Discover holistic wellness services designed for your total well-being." />
        <meta property="og:image" content="/summary.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bluehalohealth.com/service" />
      </Head>
      <Layout>
        <SectionBanner title={ageGroup?.title || "Services"} />
        <div className="bg-[#F7F4F0] py-[20px] md:py-[40px] lg:py-[60px]">
          <div className="mx-auto container    text-center">
            {/* <Filter /> */}
            {/* <div  
            // data-aos="fade-right"  
            className="bg-green-50 p-6 rounded-2xl mt-4 shadow-sm  mx-auto">
              {/* <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 * 0.05 }}
                      viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
                    > */}
                    {/* <div className="flex gap-8">
                      <div>
                        <Image
                                    src={ageGroup?.coverImg}
                                    alt={ageGroup?.title}
                                    className="object-cover rounded-2xl w-full h-full transform transition-transform duration-500 "
                                    width={4000}
                                    height={55}
                                    placeholder="blur"
                                    blurDataURL={`${ageGroup?.coverImg}?amp;q=5`}
                                  />
                      </div>
                      <div>
              <h2 className="heading text-left poppins text-black tracking-tighter leading-tight font-semibold text-xl md:text-2xl  mb-3">{ageGroup?.title}</h2>
              <p className="mt-4 text-gray-600 font-medium mx-auto text-[17px] mb-2 lg:mb-4 leading-re text-left">{ageGroup?.description}</p>
               {/* <p className="mt-4 text-gray-600 font-medium mx-auto text-[17px] mb-2 lg:mb-4 leading-re text-left">{ageGroup?.description}</p> */}
              {/* </div>
              </div>  */}
              {/* <div className=" rounded-2xl shadow-lg p-6 md:p-8 mb-8"> */}
  <div className="flex flex-col md:flex-row gap-12">
    {/* Image Section */}
    <div className="md:w-1/3">
      <Image
        src={ageGroup?.coverImg}
        alt={ageGroup?.title}
        className="object-cover rounded-xl w-full h-full"
        width={400}
        height={300}
        placeholder="blur"
        blurDataURL={`${ageGroup?.coverImg}?q=5`}
      />
    </div>

    {/* Content Section */}
    <div className="md:w-2/3">
      <h2 className="text-left text-xl md:text-2xl font-semibold text-gray-900 mb-3">
        {ageGroup?.title}
      </h2>
      
      <p className="text-gray-600 text-left text-base md:text-[17px] leading-relaxed mb-6">
        {ageGroup?.description}
      </p>

      {/* Key Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 rounded-lg p-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-800">Evidence-Based</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="bg-green-100 rounded-lg p-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-800">Personalized Care</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-purple-100 rounded-lg p-2">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-800">Licensed Clinicians</span>
        </div>
      </div>
    </div>
  </div>
{/* </div> */}
              {/* </motion.div> */}
              {/* </div> */} 
              { loading ? 
              <Loading />
              :
              <>

              {serviceList && serviceList.length ? (
                <>
                <div className="">
                    <h2 className="text-[24px] font-semibold text-gray-900 mb-2 mt-6  pt-6 text-start">
                      Our {ageGroup?.title} 
                    </h2>
                    <p className="text-left mb-4">All services below are available for this program.</p>
                  </div>
                  <div className="grid grid-cols-1  lg:grid-cols-5 gap-4 py-[15px] md:py-[30px] ">
                    {serviceList.map((item, index) => (
                      <ServiceCard key={item?._id || index} item={item} ageGroup={ageGroup} idx={index} />
                    ))}
                  </div>
                </>
              ) 
              : 
                <>
                  <div className="mt-3 mb-3">
                    <Loading />
                  </div>
                </>
              }
              </>
            
            }
          </div>
            <div className=" container mx-auto">
             <ServiceEnding/>
             </div>
        </div>
        {/* <HowItWorks/> */}
        <BookingTab />
      </Layout>
    </>
  );
}


// import AgeBanner from "@/components/AgeBanner";
// import BookingTab from "@/components/BookingTab";
// import Layout from "@/components/Layout";
// import ServiceCard from "@/components/ServiceCard";
// import React, { useContext, useEffect, useState } from "react";
// import SectionBanner from "@/components/SectionBanner";
// import RoutesLists from "../api/RoutesLists";
// import Loading from "@/components/Loading";
// import NoResultFound from "@/components/NoResult";
// import Head from "next/head";
// import { useParams, useSearchParams } from "next/navigation";
// import HowItWorks from "@/components/HowItWorks";
// import { motion } from "motion/react";
// import { MyContext } from "../context/UserContext";
// import ServiceEnding from "./ServiceEnding";

// export default function Index() {
//   const searchParams = useSearchParams();
//   const activeAgeGroup = searchParams.get('agegroup');
//   const [ageGroup, setAgeGroup] = useState(activeAgeGroup);
//   const [loading, setLoading] = useState(true); 
//   const [totalAgeGroups, setTotalAgeGroups] = useState([]);
//   const [ageGroup, setageGroup] = useState();
//   const [serviceList, setServiceList] = useState([]);

//   const updateAgeGroup = (e) => {
//     setLoading(true)
//     setAgeGroup(e);
//   };

//   useEffect(() => {
//     if(totalAgeGroups) {
//       const c = totalAgeGroups.filter((e) => e._id == activeAgeGroup);
//       setageGroup(c && c[0])
//     }
//   }, [totalAgeGroups])

//   const fetchData = async () => {
//     try {
//       const main = new RoutesLists();
//       const response = await main.getAgeGroups();
//       if (response.data) {
//         setTotalAgeGroups(response.data.ageGroupList);
//       }
//     } catch (error) {
//       console.log("error", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [activeAgeGroup]);

//   const fetchServices = async (ageGroup) => {
//     console.log("ageGroup", ageGroup)
//     const lists = new RoutesLists();
//     const data = lists.getServices(ageGroup);
//     data
//       .then((res) => {
//         setServiceList(res?.data?.allServices || []);
//         setLoading(false)
//       })
//       .catch((err) => {
//         setServiceList([]);
//         console.log("err ", err);
//         setLoading(false)
//       });
//   };
  
//   useEffect(() => {
//     if (totalAgeGroups && totalAgeGroups.length > 0) {
//       const firstGroupId = totalAgeGroups[0]._id;
//       setAgeGroup(activeAgeGroup || firstGroupId);
//       fetchServices(activeAgeGroup || firstGroupId);
//     }
//   }, [totalAgeGroups]);

//   useEffect(() => {
//     fetchServices(ageGroup);
//   }, [ageGroup]);

//   return (
//     <>
//       <Head>
//         <title>Our Services | Blue Halo Health</title>
//         <meta name="description" content="Explore holistic health services including functional medicine, nutrition, and personalized wellness programs from Blue Halo Health." />
//         <meta name="keywords" content="wellness services, holistic therapy, nutrition, functional medicine, Blue Halo Health services" />
//         <meta property="og:url" content="https://bluehalohealth.com/service" />
//         <meta property="og:title" content="Our Services | Blue Halo Health" />
//         <meta property="og:description" content="Transform your health with our personalized wellness services and functional medicine solutions." />
//         <meta property="og:image" content="/summary.png" />
//         <meta name="twitter:title" content="Our Services | Blue Halo Health" />
//         <meta name="twitter:description" content="Discover holistic wellness services designed for your total well-being." />
//         <meta property="og:image" content="/summary.png" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <link rel="canonical" href="https://bluehalohealth.com/service" />
//       </Head>
      
//       <Layout>
//         {/* Hero Banner Section */}
    
//       <SectionBanner title={ageGroup?.title || "Services"} />
//         <div className="bg-[#F7F4F0] py-12 md:py-16 lg:py-20">
//           <div className="container mx-auto px-4">
            
//             {/* Age Group Selector */}
            
//             {/* Selected Category Description */}
//             {ageGroup && (
//               <motion.div
//                 key={ageGroup._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className=" rounded-2xl p-6 md:p-8 border border-emerald-100 mb-8"
//               >
//                 <div className="flex items-start gap-4">
                  
//                   <div className="flex-1">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-3">
//                       {ageGroup.title}
//                     </h2>
//                     <p className="text-gray-700 text-lg leading-relaxed">
//                       {ageGroup.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             )}

//             {/* Services Grid */}
//             {loading ? (
//               <div className="flex justify-center items-center py-20">
//                 <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
//               </div>
//             ) : (
//               <>
//                 {serviceList && serviceList.length > 0 ? (
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//                     {serviceList.map((item, index) => (
//                       <motion.div
//                         key={item?._id || index}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                       >
//                         <ServiceCard item={item} ageGroup={ageGroup} idx={index} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 ) : (
//                   <NoResultFound />
//                 )}
//               </>
//             )}
//              <div className="mt-16">
//             <ServiceEnding/>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <BookingTab />
//       </Layout>
//     </>
//   );
// }