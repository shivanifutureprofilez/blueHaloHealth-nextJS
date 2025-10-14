import React from 'react'
import Heading from './Heading';
import Image from 'next/image';

function Resource() {
    const features = [
        {
            "image": "/resourceImg.png",
            "category": "Parenting",
            "title": "5 Simple Ways to Strengthen",
            "description": "Discover easy, everyday strategies to build trust, improve listening, and create stronger bonds with your child."
        },
        {
            "image": "/resourceImg.png",
            "category": "Parenting",
            "title": "5 Simple Ways to Strengthen",
            "description": "Discover easy, everyday strategies to build trust, improve listening, and create stronger bonds with your child."
        },
        {
            "image": "/resourceImg.png",
            "category": "Parenting",
            "title": "5 Simple Ways to Strengthen",
            "description": "Discover easy, everyday strategies to build trust, improve listening, and create stronger bonds with your child."
        },
    ]
    return (
        <div className='bg-[#F7F4F0] py-12'>
            <div className='container mx-auto'>
                <Heading
                    className="text-black"
                    heading1={"Insights &"}
                    heading2={" Resources for Families"}
                    //content={"Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more."}
                />
                 <p className="text-center mb-8 text-[18px] text-gray-700 p-8 md:p-0">
                    Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                    {features?.map((item, indx) => (
                        <div key={indx} className="bg-white rounded-2xl shadow p-3 m-3 md:m-0 md:p-0 flex flex-col overflow-hidden">
                            <div className="relative">
                                <Image
                                    src={`${item?.image}?8787`}
                                    alt={item?.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-[250px] object-cover rounded-t-2xl"
                                />
                                <span className="absolute left-6 bottom-4 bg-green-600 text-white px-4 py-1 rounded font-semibold text-sm shadow">
                                    {item?.category}
                                </span>
                            </div>
                            <div className="p-6">
                                <h2 className='font-bold text-lg text-black mb-2'>
                                    {item?.title}
                                </h2>
                                <p className=' mb-8 text-[18px] text-gray-700'>
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resource;