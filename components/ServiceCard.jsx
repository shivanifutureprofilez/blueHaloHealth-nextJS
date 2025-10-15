import React from 'react'

function ServiceCard({item, idx}) {
    return (
        <div key={idx} className="bg-white rounded-[25px] shadow overflow-hidden flex flex-col items-center">
            <div className="w-full h-70 rounded-lg overflow-hidden mb-4 relative">
                <img
                    src={item?.image}
                    alt={item?.title}
                    className="object-cover w-full h-full"
                />
                {/* <h3 className="  mb-3 text-start py-[20px] px-[30px] text-white text-xl font-semibold absolute top-0 left-0 w-full">{item.title}</h3> */}
            </div>
            <div className="p-6 text-left">
                <h2 className='font-bold text-xl text-black mb-2'>
                    {item?.title}
                </h2>
                <p className=' mb-8 text-[15px] font-medium text-gray-600'>
                    {item?.description}
                </p>
                <button className='button md:w-[200px]'>Learn More</button>
            </div>
            
        </div>
    )
}

export default ServiceCard;