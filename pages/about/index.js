import Layout from '@/components/Layout'
import React from 'react'
import Founder from './Founder'
import SectionBanner from '@/components/SectionBanner'
import Mission from './Mission'
import Team from './Team'
import BookingTab from '@/components/BookingTab'
import VirtualTherapy from '@/components/VirtualTherapy'
import Head from "next/head";
import Mission2 from './Mission2'
import AnnimationTry from './AnnimationTry'
import Values from './Values'
import Starting from './Starting'
import Differentiator from './Differentiator'
export default function AboutPageIndex() {
  return (
    <>
     <Head>
  <title>About Blue Halo Health | Our Mission & Team</title>
  <meta name="description" content="Learn about Blue Halo Health’s mission, values, and our expert team dedicated to holistic health and wellness." />
  <meta name="keywords" content="about Blue Halo Health, wellness experts, holistic health team, company mission" />
  <meta property="og:url" content="https://bluehalohealth.com/about" />
  <meta property="og:title" content="About Blue Halo Health | Our Mission & Team" />
  <meta property="og:description" content="Meet the experts behind Blue Halo Health and our mission to empower holistic wellness." />
  <meta property="og:image" content="/summary.png" />
  <meta name="twitter:title" content="About Blue Halo Health | Our Mission & Team" />
  <meta name="twitter:description" content="Learn about our mission to redefine holistic health and wellness." />
  <meta name="twitter:image" content="/summary.png" />
  <link rel="canonical" href="https://bluehalohealth.com/about" />
</Head>
    <Layout>
      <div className='bg-[#F7F4F0]'>
        <SectionBanner title={"About"} />
        {/* <Founder /> */}
        {/* <Mission /> */}
        {/* <AnnimationTry/> */}
        <Starting/>
        <Differentiator/>
        <Mission2/>
        <Values/>
        {/* <VirtualTherapy/> */}
        {/* <Team /> */}
        <BookingTab/>
      </div>
    </Layout>
    </>
  )
}
