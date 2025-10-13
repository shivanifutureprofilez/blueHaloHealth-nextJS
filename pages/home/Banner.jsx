import Button from '@/components/Button'
import Heading from '@/components/Heading'
import React from 'react'

export default function Banner() {
  return (
    <div className="container mx-auto pb-3">
      <section className="!bg-[#edeee8] ml-3 mr-3 mb-3 md:m-0 p-3 rounded-2xl flex flex-col lg:flex-row items-center justify-between px-8 py-2 md:py-[150px] shadow">
        <div className="flex-1 flex flex-col justify-center">
          <Heading
            className="text-black tracking-tighter font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
            heading1={"Empowering Families Through"}
            heading2={"Expert Therapy & Support"}
            content={"Individualized programs for children, teens, and adults with developmental or behavioral challenges."}
          />
          <div className="flex gap-4 mt-6">

            <button className='button'>Book Free Consultation</button>
            <button className='button-white border-0'>Explore Our Services</button>
            {/* <Button title={"Book Free Consultation"} className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700" />
            <Button title={"Explore Our Services"} className="bg-white text-black font-semibold px-6 py-3 rounded border border-gray-300 hover:bg-gray-100" /> */}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="/homeBanner2.png"
            alt="Illustration"
            className="w-full rounded-xl"
          />
        </div>
      </section>
    </div>
  )
}