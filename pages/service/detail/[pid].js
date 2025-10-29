import Benefits from '@/components/Benefits';
import BookingTab from '@/components/BookingTab';
import Button from '@/components/Button';
import Faq from '@/components/Faq';
import HowItWorks from '@/components/HowItWorks';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import SectionBanner from '@/components/SectionBanner';
import RoutesLists from '@/pages/api/RoutesLists';
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
      <div className='bg-[#F7F4F0]'>
        {loading ? <Loading />
          :
          <>
            <SectionBanner title={service?.name || 'Service Detail'} />
            <div className="bg-[#F7F4F0] py-[20px] md:py-[40px] lg:py-[60px]">
              <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
             <div
                  className=" text-center services mb-4  max-w-[900px] mx-auto"
                  dangerouslySetInnerHTML={{ __html: service?.content }}
                />
              </div>
            </div>
            
            <div className="bg-[#E6EBE3] py-[20px] md:py-[40px] lg:py-[60px]">
              <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service?.benefits?.map((item) => (
                    <Benefits title={item?.title} description={item?.description} />
                  ))}
                </div>
                <div className="flex justify-center px-4 py-4">
                  <Button
                    title="Book Consultation"
                    className="button bg-green-dark text-[14px] "
                  />
                </div>
              </div>
            </div>

            <HowItWorks />
            <Faq />
            <BookingTab />
          </>}

      </div>
    </Layout>
  )
}

