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
           <p className='mb-4 md:mb-2 mt-8 font-medium text-[15px] text-center  text-gray-700 md:max-w-[1000px] mx-auto'>The early years from birth to six are a crucial time for a child’s growth and development. During this stage, therapy plays an essential role in supporting children who may face challenges in areas such as speech, movement, behavior, or social interaction. Early intervention helps children build important skills, boosts confidence, and encourages positive emotional and physical development. With the right guidance and therapeutic support, children can reach their full potential and enjoy a strong foundation for future learning and well-being.</p>
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