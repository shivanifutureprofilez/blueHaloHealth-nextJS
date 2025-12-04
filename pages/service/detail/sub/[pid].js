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
import Importance from '@/pages/home/Importance';
import ServiceEnding from '../../ServiceEnding';

export default function ServiceDetails() {
  const pid = useParams();
 
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const ShowSubServiceDetails = () => {
    const lists = new RoutesLists();
    const data = lists.singleSubServiceDetail(pid);
    data.then((res) => {
      console.log("res", res)
      setService(res?.data?.subServiceData || null);
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
     ShowSubServiceDetails();
    }
  }, [pid]);
  
  console.log("service : ", service);
  
  return (
    <Layout>
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
                  <div
                    className="services mb-12"
                    dangerouslySetInnerHTML={{ __html: service?.content }}
                  />
                  
                  {/* <SubLists serviceid={pid?.pid || null} /> */}
                  <ServiceEnding/>
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