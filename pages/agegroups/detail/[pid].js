import BookingTab from '@/components/BookingTab'
import Faq from '@/components/Faq'
import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import SectionBanner from '@/components/SectionBanner'
import RoutesLists from '@/pages/api/RoutesLists'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ageGroupDetail() {
//     const pid = useParams();
//   const [service,setService] = useState([]);

   const [loading, setLoading ] = useState(true);
    const pid = useParams();
    const [services, setServices] = useState([]);
    const ShowAgeGroupDetails = () => {
        const lists = new RoutesLists();
        const data = lists.getServicesByAge(pid);
        data.then((res)=>{
            console.log("res ",res);
            setServices(res?.data?.allServices || null);
            setTimeout(()=>{
                setLoading(false);
            },1000)
        }).catch((error)=>{
            console.log("error",error);
            setTimeout(()=>{
                setLoading(false);
            },1000);
        });
    };
    useEffect(() => {
        if(pid){
            ShowAgeGroupDetails(pid);
        }
    }, [pid]);
  return (
    <Layout>
      <div className='bg-[#F7F4F0]'>
        {loading ? <Loading /> 
        : 
        <>
        <SectionBanner title={services?.allServices?.agegroup?.title || 'Service Detail'} />
        <Faq/>
        <BookingTab/>
        </>}
        
      </div>
    </Layout>
  )
}