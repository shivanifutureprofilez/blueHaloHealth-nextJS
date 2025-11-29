import Layout from '@/components/Layout'
import React from 'react'
import Banner from './Banner'
import About from './About'
import Importance from './Importance'
import Feedback from './Feedback'
import Resource from '@/components/Resource'
import Event from '@/components/Event'
import BookingTab from '@/components/BookingTab'
import AgeMatrix from './AgeMatrix'
import FeaturedServices from './FeaturedServices'
import HeroBanner from './HeroBanner'
import VirtualTherapy from '@/components/VirtualTherapy'
import VirtualTherapy2 from '@/components/VirtualTherapy2'
import VirtualTherapy3 from '@/components/VirtualTherapy3'
import Categories from './Categories'
import HowItWorks from '@/components/HowItWorks'
import AgeMatrix2 from './AgeMatrix2'
import AgeMatrix3 from './AgeMatrix3'
// import About from './About'

export default function Main() {
  return (
    <Layout>
      <div className='bg-[#F7F4F0]'>
        {/* <Banner/> */}
        <HeroBanner/>
        <AgeMatrix/>
        {/* <AgeMatrix2/> */}
        <AgeMatrix3/>
        {/* <HowItWorks/> */}
        {/* <Categories /> */}
        {/* <FeaturedServices/> */}
        <About/>
        <VirtualTherapy2/>
        <Importance/>
        {/* <Feedback/> */}
        {/* <Resource/>
        <Event/> */}
        <BookingTab/>
        {/* 
         */}
      </div>
   </Layout>
  )
}
