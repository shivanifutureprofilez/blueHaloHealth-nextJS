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
// import About from './About'

export default function Main() {
  return (
    <Layout>
      <div className='bg-[#F7F4F0]'>
        {/* <Banner/> */}
        <HeroBanner/>
        <AgeMatrix/>
        <FeaturedServices/>
        <About/>
        <Importance/>
        <Feedback/>
        <Resource/>
        <Event/>
        <BookingTab/>
      </div>
   </Layout>
  )
}
