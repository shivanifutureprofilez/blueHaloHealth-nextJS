import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from 'next/link';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import RoutesLists from '../api/RoutesLists';
import { FaCircleCheck } from 'react-icons/fa6';

function FeaturedServices() {


    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchGroups = async () => {
        const lists = new RoutesLists();
        const data = lists.getFeaturedServices();
        data.then((res) => {
            setFeatured(res?.data?.allServices || []);
            setLoading(false)
        }).catch((err) => {
            setFeatured([]);
            console.log("err", err)
            setLoading(false)
        });
    }
    useEffect(() => {
        fetchGroups();
    }, []);


    return (
        <>
            {featured && featured.length ? <div className='bg-[#F7F4F0] '>
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px] mt-[18] md:mt-2 mb-6 md:mb-6 px-4 text-center">

                    <section className="overflow-hidden w-full relative  flex items-center justify-center ">
                        {/* mt-24 remove */}
                        <div className="bg-green-dark relative text-white w-full flex items-center justify-center gap-6 md:gap-12 
                      rounded-2xl overflow-hidden">
                            <div className='flex items-center w-full '>
                                <div data-aos="fade-right" className="w-full z-[1] text-left  p-[30px] md:p-[30px]  xl:p-[50px]  " >
                                    <Heading className="!text-white heading  !text-left poppins   font-bold text-2xl md:text-5xl md:mb-3" heading1={"Now Offering Specialized Assessments"} />
                                    {featured && featured.map((s, i) => {
                                        return <div className='flex gap-1 pt-2  md:text-left' data-aos="fade-right">
                                            <span className="mr-2 mt-1">
                                                <FaCircleCheck className="text-center md:text-left text-white rounded-xl" />
                                            </span>
                                            <Link href={`/service/detail/${s?._id}`} className='text-white  md:text-left'>{s.name}</Link>
                                        </div>

                                    })}
                                    <div className='  md:justify-start md:text-left flex'>
                                        {/* <Button title={"Read More"} className={`button-transparent mt-4 !border-white !text-white`} /> */}
                                        <Link
                                            href="/service"
                                            className="button-transparent mt-4 !border-white !text-white"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                                <div className='!h-full max-w-[60%]'>
                                    <img className='object-cover !h-full hidden lg:block' src='/featured.png' width={1655} height={1450} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div> : ''}
        </>
    )
}

export default FeaturedServices;