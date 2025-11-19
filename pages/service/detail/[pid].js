import Benefits from '@/components/Benefits';
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
      //console.log("error",error);
      setTimeout(() => {
        setLoading(false)
      }), 1000        // toast.error("Unable To Fetch Service Details. Please Try Again Later");
    });
  };

  useEffect(() => {
    if (pid) {
      ShowServiceDetails(pid);
    }
  }, [pid]);

  console.log("service : ", service);
  return (
    <Layout>
      <Head>
        <title>{service?.name || 'Service'} | Blue Halo Health</title>
        <meta name="description" content={service?.description|| "Explore holistic health services including functional medicine, nutrition, and personalized wellness programs from Blue Halo Health."} />
        <meta name="keywords" content="wellness services, holistic therapy, nutrition, functional medicine, Blue Halo Health services" />

        {/* <meta property="og:url" content={window &&window.location.href} /> */}
        <meta property="og:title" content={`${service?.name || 'Service'} | Blue Halo Health`} />
        <meta property="og:description" content="Transform your health with our personalized wellness services and functional medicine solutions." />
        <meta property="og:image" content={service?.bannerImg || `/summary.png`} />
        <meta name="twitter:title" content={service?.name || "Our Services | Blue Halo Health"} />
        <meta name="twitter:description" content={service?.description|| "Discover holistic wellness services designed for your total well-being."} />
        <meta name="twitter:image" content={service?.bannerImg || `/summary.png`} />
        {/* <link rel="canonical" href={window && window.location.href} /> */}
      </Head>
      
      
      <div className='bg-[#F7F4F0]'>
        {loading ? <Loading />
          :
          <>
            <SectionBanner title={service?.name || 'Service Detail'} />
            <div className="bg-[#F7F4F0]s py-[20px] md:py-[40px] lg:py-[60px]">
              <div className="mx-auto container  px-4 text-center">
             <div
                  className="  services mb-4  max-w-[1100px] mx-auto"
                  dangerouslySetInnerHTML={{ __html: service?.content }}
                />
              </div>
              
            </div>
            <div className='flex item-center justify-center'>
               <Popup1 classes={`button bg-[#009C4A] flex justify-center cursor-pointer mt-4 mb-16 w-full md:w-[230px] `} content={`Thankyou so much but we are not available right now`} />
            </div>
            {service?.benefits && service?.benefits.length > 0 
            && service?.benefits && service?.benefits[0]?.title !== '' && service?.benefits[0]?.description !== ''
            ? 
            
            <div className=" ">
              <div className="mx-auto container  px-4 text-center">
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service?.benefits?.map((item) => (
                    <Benefits title={item?.title} description={item?.description} />
                  ))}
                </div>
                <div className="flex justify-center px-4 py-14">
                  <Button
                    title="Book Consultation"
                    className="button bg-green-dark text-[14px] "
                  />
                </div>
              </div>
            </div> 
            
            : ''}
            {/* <Popup1 classes={`button bg-[#009C4A] cursor-pointer w-full md:w-[230px] `} content={`Thankyou so much but we are not available right now`} /> */}
            <HowItWorks />
            <Faq />
            <BookingTab />
          </>}

      </div>
    </Layout>
  )
}

