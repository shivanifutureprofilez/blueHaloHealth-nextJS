import React from 'react'
import Heading from './Heading';
import Card from './Card';
import Image from 'next/image';

function Resource() {
    const features = [
        {
            "image": "/resourceImg.png",
            "title": "Experienced Certified Therapists",
            "description": "Evidence-based behavioral interventions for skill development",
            //"icon": <GrCertificate className=" bg-[#4B9B711A]  text-5xl min-h-[55px] rounded-full min-w-[55px]  mb-2 border border-primary round-[10px]  p-2" />
        },
        {
            "image": "/resourceImg.png",
            "title": "Age Specific, Individualized Care",
            "description": "Evidence-based behavioral interventions for skill development",
            //"icon": <TiSpiral className=" bg-[#4B9B711A]  text-5xl min-h-[55px] rounded-full min-w-[55px]  mb-2 border border-primary round-[10px]  p-2" />
        },
        {
            "image": "/resourceImg.png",
            "title": "School & Healthcare Partnerships",
            "description": "Evidence-based behavioral interventions for skill development",
            //"icon": <FaRegHandshake className=" bg-[#4B9B711A]  text-5xl min-h-[55px] rounded-full min-w-[55px]  mb-2 border border-primary round-[10px]  p-2" />
        },
    ]
    return (
        <div className='bg-[#F7F4F0] p-4'>
            <div className='container mx-auto '>
                <div className=''>
                    <Heading className="text-black " heading1={"Insights &"} heading2={" Resources for Families"} content={"Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more."} />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-3'>
                    {features?.map((item, indx) => (
                        <div>
                            <Image src={item?.image} className="w-full object-cover pb-3 " width={400} height={300}/>
                            <h2 className='font-semibold text-black align-left pt-4.'>
                                 {item?.title}
                            </h2>
                            <p className='text-black space-x-4'>
                                {item?.description}
                            </p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Resource;