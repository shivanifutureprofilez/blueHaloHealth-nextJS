import Layout from '@/components/Layout'
import React from 'react'
import Banner from './Banner'
import About from './About'
import Importance from './Importance'
import Feedback from './Feedback'
import Resource from '@/components/Resource'
import Event from '@/components/Event'
import BookingTab from '@/components/BookingTab'
// import About from './About'

export default function Main() {
  return (
    <Layout>
        <Banner/>
    {/* <div class="hero_bg pt-[118px] lg:pt-[128px] pb-[50px] lg:pb-[98px]">
        <div class="mx-auto container sm:container md:container lg:container 
        xl:max-w-[1230px]  px-4">
            </div>
            </div> */}
        <About/>
        <Importance/>
        <Feedback/>
        <Resource/>
        <Event/>
        <BookingTab/>
   </Layout>
  )
}
