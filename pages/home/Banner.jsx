import Button from '@/components/Button'
import Heading from '@/components/Heading'
import React from 'react'

export default function Banner() {
  return (
    <div className="container mx-auto">
      <section className="bg-[#F5F5F5] rounded-2xl flex flex-col lg:flex-row items-center justify-between px-8 py-12 mt-8 shadow">
        {/* Left Side: Text & Buttons */}
        <div className="flex-1 flex flex-col justify-center">
          <Heading
            className="text-black font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
            heading1={"Empowering Families Through"}
            heading2={<span className="text-green-600">Expert Therapy</span>}
            content={"Individualized programs for children, teens, and adults with developmental or behavioral challenges."}
          />
          <div className="flex gap-4 mt-6">
            <Button title={"Book Free Consultation"} className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition" />
            <Button title={"Explore Our Services"} className="bg-white text-black font-semibold px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 transition" />
          </div>
        </div>
        {/* Right Side: Illustration */}
        <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="/homeBanner2.png"
            alt="Therapy Illustration"
            className="w-full max-w-md rounded-xl object-contain"
          />
        </div>
      </section>
    </div>
  )
}