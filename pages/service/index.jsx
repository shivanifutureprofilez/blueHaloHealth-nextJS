import AgeBanner from '@/components/AgeBanner'
import BookingTab from '@/components/BookingTab'
import Layout from '@/components/Layout'
import ServiceCard from '@/components/ServiceCard'
import React, { useEffect, useState } from 'react'
import SectionBanner from '@/components/SectionBanner'
import RoutesLists from '../api/RoutesLists'

export default function Index() {


  const [ageGroup, setAgeGroup] = useState('all');
  const updateAgeGroup = (e) => {
      setAgeGroup(e);
  }

  const  Filter = () => {
    return (
        <div className='container mt-12 mx-auto'>
            <div className='container mx-auto  pb-2 md:pb-[30px]'>
                <div className='lg:flex justify-between items-center flex-wrap '>

                    <div className='w-full  py-3 '>
                        
                        <div className='flex justify-center items-center flex-wrap gap-2'>
                            <button className={`button-white w-full md:w-[230px] border`} onClick={()=> {updateAgeGroup('all')}}><span className='pl-2 pr-2'>All Services</span></button>

                            <button className={`button-white w-full md:w-[230px] border   `} onClick={() => { updateAgeGroup('0-6') }}><span className="pl-2 pr-2">0-6 (Early Years)</span></button>

                            <button className={`button-white w-full md:w-[230px] border `} onClick={() => { updateAgeGroup('7-12') }}><span className="pl-2 pr-2">7-12 (School Age)</span></button>

                            <button className={`button-white w-full md:w-[230px] border  `} onClick={() => { updateAgeGroup('13-17') }}><span className="pl-2 pr-2">13-17 (Adolescent)</span></button>

                            <button className={`button-white w-full md:w-[230px] border  `} onClick={() => { updateAgeGroup('18+') }}><span className="pl-2 pr-2" >18+ (Adults)</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  const [serviceList, setServiceList] = useState([]);
  const fetchServices = async () => {
    const lists = new RoutesLists();
    const data = lists.getServices();
    console.log("data ",data);
    data.then((res) => {
      console.log("res?.data?.allServices : ", res?.data?.allServices);
      setServiceList(res?.data?.allServices || []);
      console.log("Service List ",serviceList);
    }).catch((err) => {
      setServiceList([]);
      console.log("err ",err);
    })
  }
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <Layout>
      <div className='bg-[#F7F4F0]'>
        {/* <AgeBanner title={"0-6 (Early Years)"} /> */}
        <SectionBanner title={"Services"} />
        <Filter />
        <div className='container mx-auto'>
          <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-6 md:mt-4 md:mb-8">
           
            {serviceList?.map((item, index) => (
              <ServiceCard item={item} ageGroup={ageGroup} idx={index}  />
              
            ))}
          </div>
          <BookingTab />
        </div>
      </div>
    </Layout>
  )
}
