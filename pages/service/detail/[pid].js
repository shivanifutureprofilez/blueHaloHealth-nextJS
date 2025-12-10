// import BookingTab from '@/components/BookingTab';
// import Button from '@/components/Button';
// import Faq from '@/components/Faq';
// import HowItWorks from '@/components/HowItWorks';
// import Layout from '@/components/Layout';
// import Loading from '@/components/Loading';
// import Popup1 from '@/components/Popup1';
// import SectionBanner from '@/components/SectionBanner';
// import RoutesLists from '@/pages/api/RoutesLists';
// import Head from 'next/head';
// import { useParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
// import BenefitsLists from './BenifitsLists';
// import SubLists from '@/pages/admin/service/sub/SubLists';
// import ServiceEnding from '../ServiceEnding';
// import Importance from '@/pages/home/Importance';
// import SimilarService from './SimilarService';

// export default function ServiceDetails() {

//   const pid = useParams();
//   const [service, setService] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const ShowServiceDetails = () => {
//     const lists = new RoutesLists();
//     const data = lists.getServiceDetail(pid);
//     data.then((res) => {
//         console.log("res", res);
//         setService(res?.data?.serviceData || null);
//         setLoading(false);
//     }).catch((error) => {
//         setLoading(false);
//     });
//   };

//   useEffect(() => {
//     if(pid){
//       setLoading(true);
//       setService(null);
//       ShowServiceDetails();
//     }
//   }, [pid]);

//   console.log("loadng  : ", loading);

//   return (
//     <Layout key={pid} >
//       <Head>
//         <title>{service?.name || 'Service'} | Blue Halo Health</title>
//         <meta name="description" content={service?.description|| "Explore holistic health services including functional medicine, nutrition, and personalized wellness programs from Blue Halo Health."} />
//         <meta name="keywords" content="wellness services, holistic therapy, nutrition, functional medicine, Blue Halo Health services" />
//         <meta property="og:title" content={`${service?.name || 'Service'} | Blue Halo Health`} />
//         <meta property="og:description" content="Transform your health with our personalized wellness services and functional medicine solutions." />
//         <meta property="og:image" content={service?.bannerImg || `/summary.png`} />
//         <meta name="twitter:title" content={service?.name || "Our Services | Blue Halo Health"} />
//         <meta name="twitter:description" content={service?.description|| "Discover holistic wellness services designed for your total well-being."} />
//         <meta name="twitter:image" content={service?.bannerImg || `/summary.png`} />
//       </Head>

//       <div className='bg-[#F7F4F0]'>
//         {loading ? <Loading />
//           :
//           <>
//             <SectionBanner title={service?.name || "Service Detail"} />
//             {/* Main Content Section - Uniform spacing */}
//             <div className="py-16">
//               <div className="mx-auto container px-4">
//                 <div className=" mx-auto">
//                   <img src={service?.bannerImg} className='rounded-xl max-h-[500px] w-full object-cover mb-[30px]' />
//                   <div
//                     className="services mb-12"
//                     dangerouslySetInnerHTML={{ __html: service?.content }}
//                   />
//                   <SubLists service={service} serviceid={pid?.pid || null} />
//                   <ServiceEnding/>
//                   <h2 className='text-[24px]  font-semibold text-gray-900  nb-2 mt-6 border-gray-500/40 border-t pt-6 text-2xl   text-start'>Similar Programs</h2>
//                   <p className='mb-4'>Some other programs of {service?.agegroup?.title} that you might be interested in</p>
//                   {/* <SubLists pageID={subserviceId} serviceid={service?.service?._id} service={service?.service}  /> */}
//                   <SimilarService  categoryTitle={service?.agegroup?.title || null} ageId={service?.agegroup?._id} pageID={pid?.pid || null} />
//                 </div>
//               </div>
//             </div>
//               <HowItWorks />
//             <div className="py-16">
//               <Importance/>
//             </div>
//             <div className="py-16">
//               <Faq />
//             </div>
//             <BookingTab />
//           </>
//         }
//       </div>
//     </Layout>
//   )
// }


import BookingTab from '@/components/BookingTab';
import Button from '@/components/Button';
import Faq from '@/components/Faq';
import HowItWorks from '@/components/HowItWorks';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import SectionBanner from '@/components/SectionBanner';
import RoutesLists from '@/pages/api/RoutesLists';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SubLists from '@/pages/admin/service/sub/SubLists';
import ServiceEnding from '../ServiceEnding';
import Importance from '@/pages/home/Importance';
import SimilarService from './SimilarService';
import { LuHandHelping } from "react-icons/lu";

export default function ServiceDetails() {
  const pid = useParams();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subListsCounts, setSubListsCounts] = useState();
  console.log("subListsCounts", subListsCounts);


  const ShowServiceDetails = () => {
    const lists = new RoutesLists();
    const data = lists.getServiceDetail(pid);
    data.then((res) => {
      setService(res?.data?.serviceData || null);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  };

  useEffect(() => {
    if (pid) {
      setLoading(true);
      setService(null);
      ShowServiceDetails();
    }
  }, [pid]);

  return (
    <Layout key={pid}>
      <Head>
        <title>{service?.name || 'Service'} | Blue Halo Health</title>
        <meta name="description" content={service?.description || "Explore holistic health services"} />
        <meta property="og:image" content={service?.bannerImg || `/summary.png`} />
      </Head>

      <div className='bg-[#F7F4F0]'>
        {loading ? <Loading />
          :
          <>
            <SectionBanner title={service?.name || "Service Detail"} />

            {/* Main Content - Photo and Editor Content in Flex */}
            <div className="py-20">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                  {/* Left Side - Image (Sticky) */}
                  <div className="w-full lg:w-2/5 lg:sticky lg:top-24">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                      <img
                        src={service?.bannerImg}
                        className='relative rounded-2xl w-full h-[500px] object-cover shadow-xl'
                        alt={service?.name}
                      />
                    </div>

                    {/* Quick Info Card Below Image */}
                    <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
                      {service?.agegroup?.title && (
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-gray-900">{service.agegroup.title}</p>
                            <p className="text-sm text-gray-500 font-medium">Like life, we aren't meant to do everything alone - and care shouldn't be either.</p>
                          </div>
                        </div>
                      )}

                      {service?.duration && (
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">Duration</p>
                            <p className="text-lg font-semibold text-gray-900">{service.duration}</p>
                          </div>
                        </div>
                      )}

                      <button className="w-full mt-6 bg-green-dark  text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition duration-300 shadow-md">
                        Book Now
                      </button>
                    </div>
                  </div>

                  {/* Right Side - Editor Content */}
                  <div className="w-full lg:w-3/5">
                    <div
                      className="services bg-white rounded-2xl p-8 md:p-12 shadow-lg"
                      dangerouslySetInnerHTML={{ __html: service?.content }}
                    />
                  </div>
                </div>
                {subListsCounts && subListsCounts?.length > 0 && service && pid?.pid && (
                    <div className="">
                      <h2 className="text-[24px] font-semibold text-gray-900 mb-2 mt-6  pt-6 text-start">
                        Our {service?.name} Services
                      </h2>
                      <p className="mb-4">All services below are available for this age group.</p>
                    </div>
                )}
                <SubLists
                  setSubListsCounts={setSubListsCounts}
                  service={service}
                  serviceid={pid.pid}
                />



                <ServiceEnding />
                <h2 className='text-[24px]  font-semibold text-gray-900  nb-2 mt-6  pt-6 text-2xl   text-start'>Similar Programs</h2>
                <p className='mb-4'>Some other programs of {service?.agegroup?.title} that you might be interested in</p>
                {/* <SubLists pageID={subserviceId} serviceid={service?.service?._id} service={service?.service}  /> */}
                <SimilarService categoryTitle={service?.agegroup?.title || null} ageId={service?.agegroup?._id} pageID={pid?.pid || null} />

              </div>
            </div>

            {/* Sub Programs Section */}
            {/* Service Ending */}
            {/* <div className="py-16">
              <div className="container mx-auto px-4">
                <ServiceEnding />
              </div>
            </div> */}

            {/* Similar Programs */}
            {/* {service?.agegroup && (
              <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className='text-3xl font-bold text-gray-900 mb-2'>Similar Programs</h2>
                  <p className='text-gray-600 mb-8'>
                    Other programs in {service.agegroup.title} that might interest you
                  </p>
                  <SimilarService 
                    categoryTitle={service.agegroup.title} 
                    ageId={service.agegroup._id} 
                    pageID={pid?.pid} 
                  />
                </div>
              </div>
            )} */}

            <HowItWorks />

            <div className="py-16">
              <Importance />
            </div>

            <div className="py-16 bg-white">
              <Faq />
            </div>

            <BookingTab />
          </>
        }
      </div>

      <style jsx>{`
        /* Enhanced editor content styles */
        .services :global(h2) {
          border-left: 4px solid #10b981;
          padding-left: 1rem;
         
          margin-bottom: 1rem;
        }
        
        .services :global(h3) {
          color: #059669;
          margin-top: 1.5rem;
        }
        
        .services :global(ul) {
          background: #f0fdf4;
          padding: 1.5rem 1.5rem 1.5rem 3rem;
          border-radius: 0.75rem;
          margin: 1.5rem 0;
        }
        
        .services :global(ul li::marker) {
          content: '✓ ';
          color: #10b981;
          font-weight: bold;
          font-size: 1.2em;
        }
        
        .services :global(ol) {
          background: #eff6ff;
          padding: 1.5rem 1.5rem 1.5rem 3rem;
          border-radius: 0.75rem;
          margin: 1.5rem 0;
        }
        
        .services :global(blockquote) {
          border-left: 4px solid #10b981;
          background: #f0fdf4;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin: 2rem 0;
          font-style: italic;
        }
        
        .services :global(table) {
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .services :global(table thead) {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }
        
        .services :global(table th) {
          padding: 1rem;
          font-weight: 600;
        }
        
        .services :global(table td) {
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .services :global(table tbody tr:hover) {
          background-color: #f9fafb;
        }
      `}</style>
    </Layout>
  )
}