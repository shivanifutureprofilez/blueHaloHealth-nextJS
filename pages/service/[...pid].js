// import { useParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import RoutesLists from '../api/RoutesLists';
// import BookingTab from '@/components/BookingTab';
// import Faq from '@/components/Faq';
// import Importance from '../home/Importance';
// import Loading from '@/components/Loading';
// import SectionBanner from '@/components/SectionBanner';
// import Layout from '@/components/Layout';
// import Head from 'next/head';
// import ServiceEnding from './ServiceEnding';
// import HowItWorks from '@/components/HowItWorks';
// import SubLists from '../admin/service/sub/SubLists';

// export default function SubSericeDetailsPage() {
//     const router = useParams();
//     const pidArray = router?.pid;
//     const subserviceId = router?.pid?.at(-1);

//     const [service, setService] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     const ShowSubServiceDetails = () => {
//       const lists = new RoutesLists();
//       lists.singleSubServiceDetail(subserviceId)
//         .then((res) => {
//           setService(res?.data?.subServiceData || null);
//           setLoading(false);
//         })
//         .catch(() => {
//           setLoading(false);
//         });
//     };
    
//     useEffect(() => {
//       if (subserviceId) {
//           setLoading(true);
//           setService(null);
//           ShowSubServiceDetails();
//       }
//   }, [subserviceId]);

//     return (
//       <Layout key={subserviceId}>
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
//             <SectionBanner title={service?.name || 'Service Detail'} />
            
//             {/* Main Content Section - Uniform spacing */}
//             <div className="py-16">
//               <div className="mx-auto container px-4">
//                 <div className=" mx-auto">
//                   <img src={service?.bannerImg} className='rounded-xl max-h-[500px] w-full object-cover mb-[30px]' />

//                   <div
//                     className="services mb-12"
//                     dangerouslySetInnerHTML={{ __html: service?.content }}
//                   />
//                   <ServiceEnding/>
//                   <h2 className='mt-6 border-gray-500/40 border-t pt-6 text-2xl font-bold text-black mb-4 text-start'>Some More Similar Services</h2>
//                   <SubLists pageID={subserviceId} serviceid={service?.service?._id} service={service?.service}  />
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
//     )
// }


import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import RoutesLists from '../api/RoutesLists';
import BookingTab from '@/components/BookingTab';
import Faq from '@/components/Faq';
import Importance from '../home/Importance';
import Loading from '@/components/Loading';
import SectionBanner from '@/components/SectionBanner';
import Layout from '@/components/Layout';
import Head from 'next/head';
import ServiceEnding from './ServiceEnding';
import HowItWorks from '@/components/HowItWorks';
import SubLists from '../admin/service/sub/SubLists';
import Popup1 from '@/components/Popup1';

export default function SubServiceDetailsPage() {
    const router = useParams();
    const pidArray = router?.pid;
    const subserviceId = router?.pid?.at(-1);
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const ShowSubServiceDetails = () => {
      const lists = new RoutesLists();
      lists.singleSubServiceDetail(subserviceId)
        .then((res) => {
          setService(res?.data?.subServiceData || null);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    };
    
    useEffect(() => {
      if (subserviceId) {
          setLoading(true);
          setService(null);
          ShowSubServiceDetails();
      }
    }, [subserviceId]);

    return (
      <Layout key={subserviceId}>
        <Head>
          <title>{service?.name || 'Service'} | Blue Halo Health</title>
          <meta name="description" content={service?.description || "Explore holistic health services"} />
          <meta property="og:image" content={service?.bannerImg || `/summary.png`} />
        </Head>
        
        <div className='bg-[#F7F4F0]'>
          {loading ? <Loading />
            :
            <>
              <SectionBanner title={service?.name || 'Service Detail'} />
              
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
                        {service?.service?.agegroup?.title && (
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 font-medium">Age Group</p>
                              <p className="text-lg font-semibold text-gray-900">{service.service.agegroup.title}</p>
                            </div>
                          </div>
                        )}
                        
                        {service?.service?.name && (
                          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 font-medium">Program Type</p>
                              <p className="text-lg font-semibold text-gray-900">{service.service.name}</p>
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
                        
                        <Popup1 classes={`button w-full mt-6 bg-green-dark text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition duration-300 shadow-md`}>
                          Book Now
                        </Popup1>
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

                  {/* Similar Services Section */}
                  <div className="mt-16">
                    <ServiceEnding />
                    <h2 className='text-[24px]  font-semibold text-gray-900    mt-6  pt-6'>
                      Some More Similar Services
                    </h2>
                    <p className="mb-4">All services below are available for {service.service.name}.</p>
                    <SubLists pageID={subserviceId} serviceid={service?.service?._id} service={service?.service} />
                  </div>
                </div>
              </div>
              
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