// 

// import Benefits from '@/components/Benefits';
import BookingTab from '@/components/BookingTab';
import Button from '@/components/Button';
import Faq from '@/components/Faq';
import HowItWorks from '@/components/HowItWorks';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import Popup1 from '@/components/Popup1';
import SectionBanner from '@/components/SectionBanner';
import RoutesLists from '@/pages/api/RoutesLists';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import BenefitsLists from './BenifitsLists';
import SubLists from '@/pages/admin/service/sub/SubLists';
import ServiceEnding from '../ServiceEnding';
import Importance from '@/pages/home/Importance';
import SimilarService from './SimilarService';

export default function ServiceDetails() {
  const pid = useParams();
 
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const ShowServiceDetails = () => {
    const lists = new RoutesLists();
    const data = lists.getServiceDetail(pid);
    data.then((res) => {
      console.log("res", res)
      setService(res?.data?.serviceData || null);
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }).catch((error) => {
      setTimeout(() => {
        setLoading(false)
      }), 1000
    });
  };
  
  useEffect(() => {
    if (pid) {
      ShowServiceDetails();
    }
  }, [pid]);
  
  console.log("service : ", service);
  
  return (
    <Layout key={pid}>
      <Head>
        <title>{service?.name || 'Service'} | Blue Halo Health</title>
        <meta name="description" content={service?.description|| "Explore holistic health services including functional medicine, nutrition, and personalized wellness programs from Blue Halo Health."} />
        <meta name="keywords" content="wellness services, holistic therapy, nutrition, functional medicine, Blue Halo Health services" />
        <meta property="og:title" content={`${service?.name || 'Service'} | Blue Halo Health`} />
        <meta property="og:description" content="Transform your health with our personalized wellness services and functional medicine solutions." />
        <meta property="og:image" content={service?.bannerImg || `/summary.png`} />
        <meta name="twitter:title" content={service?.name || "Our Services | Blue Halo Health"} />
        <meta name="twitter:description" content={service?.description|| "Discover holistic wellness services designed for your total well-being."} />
        <meta name="twitter:image" content={service?.bannerImg || `/summary.png`} />
      </Head>
      
      <div className='bg-[#F7F4F0]'>
        {loading ? <Loading />
          :
          <>
            <SectionBanner title={service?.name || 'Service Detail'} />
            
            {/* Main Content Section - Uniform spacing */}
            <div className="py-16">
              <div className="mx-auto container px-4">
                <div className=" mx-auto">
                  <img src={service?.bannerImg} className='rounded-xl max-h-[500px] w-full object-cover mb-[30px]' />
                  <div
                    className="services mb-12"
                    dangerouslySetInnerHTML={{ __html: service?.content }}
                  />
                  
                  <SubLists service={service} serviceid={pid?.pid || null} />
                  <ServiceEnding/>
                  <h2 className='mt-6 border-gray-500/40 border-t pt-6 text-2xl font-bold text-black mb-4 text-start'>Some More Similar Services</h2>
                  {/* <SubLists pageID={subserviceId} serviceid={service?.service?._id} service={service?.service}  /> */}
                  <SimilarService ageId={service?.agegroup} pageID={pid?.pid || null} />
                </div>
              </div>
            </div>
            
            {/* One Pathway Section - Uniform spacing */}
            {/* <ServiceEnding/> */}
            
            {/* How It Works - Uniform spacing */}
            {/* <div className="py-16"> */}
            
              <HowItWorks />
            {/* </div> */}
            
            {/* Importance - Uniform spacing */}
            <div className="py-16">
              <Importance/>
            </div>
            
            {/* FAQ - Uniform spacing */}
            <div className="py-16">
              <Faq />
            </div>
            
            {/* Service Ending and Booking Tab */}
            
            <BookingTab />
          </>
        }
      </div>
    </Layout>
  )
}