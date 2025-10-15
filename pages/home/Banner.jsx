import Button from '@/components/Button'
import Heading from '@/components/Heading'
import React from 'react'

export default function Banner() {
  return (
    <div className="container mx-auto pb-3">
      <section className=" md:!bg-[#edeee8]   rounded-2xl md:rounded-4xl flex flex-col lg:flex-row items-center justify-between  py-2 md:py-[150px] md:shadow">
        <div className="order-2 md:order-1 flex-1 flex flex-col justify-center">
          <div className='leading-snug'>
            <h2 className={`heading text-center md:text-left pt-12 md:pt-0 poppins text-black tracking-tighter leading-tight font-bold text-4xl md:text-5xl lg:text-5xl mb-3`} >Empowering Families Through <span className='text-[#009C4A]'>Expert Therapy </span><br/>& Support</h2>
            <p className={` text-gray-500 text-center md:text-left font-medium text-[15px]`}>Individualized programs for children, teens, and adults with developmental or behavioral challenges.</p>
          </div>
          {/* <Heading
            className="text-black tracking-tighter font-bold text-4xl md:text-5xl lg:text-5xl mb-4"
            heading1={"Empowering Families Through"}
            heading2={"Expert Therapy"}
          //content={"Individualized programs for children, teens, and adults with developmental or behavioral challenges."}
          />
          <div className='text-left'>
            <Heading
              heading1={"& Support"}
              className="text-black tracking-tighter !text-left font-bold text-4xl md:text-5xl lg:text-5xl mb-4"
              content={"Individualized programs for children, teens, and adults with developmental or behavioral challenges."}
            />
          </div> */}
          <div className="flex flex-wrap gap-4 mt-6">

            <button className='button w-full md:w-[230px]'>Book Free Consultation</button>
            <button className='button-white w-full md:w-[230px] border-0'>Explore Our Services</button>
            {/* <Button title={"Book Free Consultation"} className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700" />
            <Button title={"Explore Our Services"} className="bg-white text-black font-semibold px-6 py-3 rounded border border-gray-300 hover:bg-gray-100" /> */}
          </div>
        </div>
        <div className="order-1 md:order-2 flex-1 flex justify-center items-center mt-8 lg:mt-0">
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