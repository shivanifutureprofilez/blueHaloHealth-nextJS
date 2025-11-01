import BookingTab from '@/components/BookingTab'
import Faq from '@/components/Faq'
import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import SectionBanner from '@/components/SectionBanner'
import ServiceCard from '@/components/ServiceCard'
import ServiceCardSmall from '@/components/ServiceCardSmall'
import RoutesLists from '@/pages/api/RoutesLists'
import Head from 'next/head'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ageGroupDetail() {
    const pid = useParams();

 

  // Default/fallback metadata

//     const pid = useParams();
//   const [service,setService] = useState([]);

   const [loading, setLoading ] = useState(true);
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
    <>
   
    <Head>
        <title>Age-Based Wellness Programs | Blue Halo Health</title>
        <meta name="description" content="Discover Blue Halo Health’s holistic wellness programs for every age group — from children to seniors — tailored to your health needs." />
        <meta name="keywords" content="age-based health, child wellness, adult wellness, senior wellness, Blue Halo Health programs, holistic health" />
      </Head>
    <Layout>
      <div className='bg-[#F7F4F0]'>
        {loading ? <Loading /> 
        : 
        <>
        <SectionBanner title={data.title || 'Service Detail'} />
        <div className='container mx-auto'>
           <p className='mb-4 md:mb-2 mt-8 font-medium text-[15px] text-center  text-gray-700 md:max-w-[1000px] mx-auto'>The early years from birth to six are a crucial time for a child’s growth and development. During this stage, therapy plays an essential role in supporting children who may face challenges in areas such as speech, movement, behavior, or social interaction. Early intervention helps children build important skills, boosts confidence, and encourages positive emotional and physical development. With the right guidance and therapeutic support, children can reach their full potential and enjoy a strong foundation for future learning and well-being.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-[15px] md:py-[30px]'>
              {data && data?.services && data?.services.map((s,i)=>{
                return <>
                    <ServiceCardSmall item={s}  idx={i}  />
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
    </>
  )
}