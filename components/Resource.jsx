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
        <div className='bg-[#F7F4F0]  py-[20px] md:py-[40px] lg:py-[60px]'>
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
                <Heading
                    className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3"
                    heading1={"Insights &"}
                    heading2={" Resources for Families"}
                //content={"Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more."}
                />
                <p className="font-medium text-[15px] text-center  text-gray-700  max-w-[600px] mx-auto">
                    Stay informed with expert articles, practical tips, and inspiring stories to help families at every stage of life. Our blogs cover child development, parenting strategies, mental health, therapy guidance, and more.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 py-[15px] md:py-[30px]'>
                    {features?.map((item, indx) => (
                        <div key={indx} className="bg-white rounded-3xl shadow  md:m-0 md:p-0 flex flex-col overflow-hidden">
                            <div className="relative">
                                <Image
                                    src={`${item?.image}`}
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
                                <h2 className='font-bold text-left text-xl text-black mb-2'>
                                    {item?.title}
                                </h2>
                                <p className=' mb-8 text-left text-[15px] font-medium text-gray-600'>
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