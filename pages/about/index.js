import Layout from '@/components/Layout'
import React from 'react'
import Founder from './Founder'
import SectionBanner from '@/components/SectionBanner'
import Mission from './Mission'
import Team from './Team'
import BookingTab from '@/components/BookingTab'
import VirtualTherapy from '@/components/VirtualTherapy'
export default function AboutPageIndex() {
  return (
    <Layout>
      <div className='bg-[#F7F4F0]'>
        <SectionBanner title={"About"} />
        {/* <Founder /> */}
        <Mission />
        <VirtualTherapy/>
        <Team />
        <BookingTab/>
      </div>
    </Layout>
  )
}
