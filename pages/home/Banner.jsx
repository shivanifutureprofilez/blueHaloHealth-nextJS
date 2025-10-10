import Button from '@/components/Button'
import Heading from '@/components/Heading'
import React from 'react'

export default function Banner() {
  return (
    <div className=" container mx-auto   ">
      <section className="rounded-[30px] overflow-hidden relative  flex items-center justify-center pt-6 ">
        {/* mt-24 remove */}
        <div className=" px-4 text-white flex  items-center justify-between gap-12">
          <img
            src='/homeBanner.png'
            alt="banner" className="absolute inset-0 w-full max-h-[700px]  h-full object-cover z-[-1]"
          />
          <div className="w-full py-[160px] px-12">
            <Heading className="!text-white !font-[700] !text-6xl pb-2" heading1={"Empowering Families Through"} heading2={" Expert Therapy  & Support  "} content={"Individualized programs for children, teens, and adults with developmental or behavioral challenges. "} />
            <div className="flex items-center space-x-4 mt-4 pt-4">
              <Button title={"Book Free Consultation"} className={`button`} />
              <Button title={"Explore Our Services"} className={`button-white`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}