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

export default function SubSericeDetailsPage() {
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
                  <ServiceEnding/>
                  <h2 className='mt-6 border-gray-500/40 border-t pt-6 text-2xl font-bold text-black mb-4 text-start'>Some More Similar Services</h2>
                  <SubLists pageID={subserviceId} serviceid={service?.service?._id} service={service?.service}  />
                </div>
              </div>
            </div>
            
     
              <HowItWorks /> 
            <div className="py-16">
              <Importance/>
            </div>
            <div className="py-16">
              <Faq />
            </div>
            <BookingTab />
          </>
        }
      </div>
    </Layout>
    )
}
