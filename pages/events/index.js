import Layout from '@/components/Layout'
import SectionBanner from '@/components/SectionBanner'
import React, { useEffect, useState } from 'react'
import EventCard from '@/components/EventCard'
import features from "../../public/events.json";
import Heading from '@/components/Heading';
import BookingTab from '@/components/BookingTab';
import HowItWorks from '@/components/HowItWorks';
import RoutesLists from '../api/RoutesLists';
import Loading from '@/components/Loading';
import NoResultFound from '@/components/NoResult';
import Head from 'next/head';

function index() {

     const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState("");

    const fetchData = async () => {
        try {
            setLoading(true);
            const lists = new RoutesLists();
            const data = lists.getEvents();
            data.then((res) => {
                setEvents(res?.data?.eventList || []);
                setLoading(false)
            }).catch((err) => {
                setEvents([]);
                console.log("error : ", err);
                setLoading(false);
            })
        } catch (error) {
            setLoading(false);
            setEvents([]);
            console.log("error :", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
        <Head>
  <title>Events & Workshops | Blue Halo Health</title>
  <meta name="description" content="Join Blue Halo Health’s upcoming events, retreats, and workshops focused on holistic wellness and mindfulness." />
  <meta name="keywords" content="health events, wellness workshops, retreats, Blue Halo Health events" />
  <meta property="og:url" content="https://bluehalohealth.com/events" />
  <meta property="og:title" content="Events & Workshops | Blue Halo Health" />
  <meta property="og:description" content="Stay updated with Blue Halo Health events and workshops designed for your holistic growth." />
  <meta property="og:image" content="https://bluehalohealth.com/images/events.jpg" />
  <meta name="twitter:title" content="Events & Workshops | Blue Halo Health" />
  <meta name="twitter:description" content="Join our upcoming wellness events and retreats." />
  <meta name="twitter:image" content="https://bluehalohealth.com/images/events.jpg" />
  <link rel="canonical" href="https://bluehalohealth.com/events" />
</Head>
        <Layout>

            <div className='bg-[#F7F4F0]'>
                <SectionBanner title={"Events"} />
                <section className="bg-[#F7F8F9] py-[20px] md:py-[40px] lg:py-[60px]  ">
                    <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
                           <div className='p-2 md:p-4'>
                            <Heading
                                className="heading text-center poppins !text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
                                heading1={"Event  Highlights"}
                            />
                           </div>
                           {loading ? <Loading /> :
                                           <>
                                               {events && events.length > 0 ? <>
                                                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-[15px] md:py-[30px] ">
                                                       {events?.map((item, index) => (
                                                          
                                                           <EventCard item={item} index={index} />
                                                       ))}
                                                   </div>
                           
                                               </> : <NoResultFound/> }
                                           </>
                                           }
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-[15px] md:py-[30px] ">
                            {features?.map((item, index) => (
                                <EventCard item={item} index={index} />
                            ))}
                        </div> */}
                    </div>
                </section>
                <BookingTab />
            </div>
        </Layout>
        </>
    )
}

export default index;