import BookingTab from '@/components/BookingTab'
import Faq from '@/components/Faq'
import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import SectionBanner from '@/components/SectionBanner'
import ServiceCard from '@/components/ServiceCard'
import RoutesLists from '@/pages/api/RoutesLists'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ageGroupDetail() {
//     const pid = useParams();
//   const [service,setService] = useState([]);

   const [loading, setLoading ] = useState(true);
    const pid = useParams();
    const [data, setData] = useState(null);

    const getAgeData = () => {
        const lists = new RoutesLists();
        const data = lists.getGroupData(pid);
        data.then((res)=>{
            //console.log("res ",res);
            setData(res?.data?.ageGroupData || null);
                setLoading(false); 
        }).catch((error)=>{
              console.log("error",error);
              setLoading(false);
        });
    };


    useEffect(() => {
        if(pid){
            getAgeData(pid);
        }
    }, [pid]);
  return (
    <Layout>
      <div className='bg-[#F7F4F0]'>
        {loading ? <Loading /> 
        : 
        <>
        <SectionBanner title={data.title || 'Service Detail'} />
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-[15px] md:py-[30px]'>
              {data && data?.services && data?.services.map((s,i)=>{
                return <>
                    <ServiceCard item={s}  idx={i}  />
                </>
              })}
          </div>
        <Faq/>
        <BookingTab/>
        </div>
        </>
        }
        
      </div>
    </Layout>
  )
}