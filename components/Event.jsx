import React from 'react'
import Heading from './Heading';
import Image from 'next/image';
import Icon from './Icon';
import { LuCalendarDays } from "react-icons/lu";
import { GrWorkshop } from "react-icons/gr";
import features from "../public/events.json";
import Link from 'next/link';
import Button from './Button';

function Event() {

    return (
        <div className='bg-white'>
            <div className='container mx-auto '>
                <div className='pt-8'>
                    <Heading className="text-black " heading1={"Workshops &"} heading2={" Community Events"} content={"Join our community events designed to support families and build connections"} />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 mt-4 text-center '>
                    {features?.map((item, indx) => (
                        <div className={`text-center p-5 bg-white  text-green-dark rounded-lg border border-gray-200 shadow-md overflow-hidden  h-auto justify-center items-center`}>
                            <div className='flex '>
                                <div className=' rounded-xl min-w-[20px] min-h-[200px] flex p-2 justify-center items-center'>
                                    {item?.tag == 'event' ? <LuCalendarDays size={30} className='text-blue-400 bg-blue-100' /> : <GrWorkshop  size={30} className='bg-green-100 text-green' />}
                                    {/* <Icon icon={item?.icon} /> */}
                                </div>
                                <div>
                                    <p className='text-green text-left pl-6'>
                                        {item?.date}
                                    </p>
                                    <h2 className='font-bold text-xl text-green-dark pt-2'>
                                        {item?.title}
                                    </h2>
                                    <p className='text-black space-x-4 '>
                                        {item?.description}
                                    </p>
                                    <Link href="/">
                                        {item?.link}
                                    </Link>
                                </div>
                            </div>
                            {/* <Heading className="text-black" heading1={feature.title} content={feature.description}/> */}
                        </div>
                    ))}
                   
                </div>
                <div className='flex justify-center items-center pb-8'>
                 <Button title={"View All Events"} className={`button-transparent mt-4`}/>
                </div>
            </div>
        </div >
    )
}

export default Event;