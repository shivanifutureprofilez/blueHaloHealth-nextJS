import Link from 'next/link';
import React from 'react'

function ServiceCard({item, idx}) {
    return (
        <div key={idx} className="bg-white rounded-[25px] shadow overflow-hidden flex flex-col items-center">
            <div className="w-full h-70 rounded-lg overflow-hidden mb-4 relative">
                <Link href={`/service/detail/${item?._id}`} ><img
                    src={item?.bannerImg}
                    alt={item?.name}
                    className="object-cover w-full h-full"
                /></Link>
                {/* <h3 className="  mb-3 text-start py-[20px] px-[30px] text-white text-xl font-semibold absolute top-0 left-0 w-full">{item.title}</h3> */}
            </div>
            <div className="p-6 text-left">
                <h2 className='font-bold text-xl text-black mb-2 line-clamp-1'>
                    {item?.name}
                </h2>
                <p className=' mb-8 text-[15px] font-medium line-clamp-3 text-gray-600'>
                    {item?.description1}
                </p>
                <button className='button md:w-[200px]'>Learn More</button>
            </div>
            
        </div>
    )
}

export default ServiceCard;