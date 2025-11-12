import React from 'react'

export default function  TeamItem({t}) {
  return (
    <>
        <div className="flex h-full p-2 md:p-1 flex-col items-start justify-start min-h-[450px]">
            <div className=" w-full h-[450px] rounded-2xl overflow-hidden group">
                <img
                    src={t?.imageLink}
                    width={500}
                    height={400}
                    alt={t?.name}
                    className="object-cover w-full h-full rounded-2xl transform transition-transform duration-1000 group-hover:-translate-y-1"
                />
                <div className="absolute inset-0  flex items-center text-center justify-center duration-1000  hover:bg-green-500/60">
                    <div className=" text-white p-4 rounded-md opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <h2 className="text-[20px] font-bold">
                            {t?.name}
                        </h2>
                        <p className="pb-2  ">- {t?.designation}</p>
                        <p className="max-h-[300px] overflow-auto">{t?.description}</p>
                        {/* <p>{team?.parah2}</p> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
