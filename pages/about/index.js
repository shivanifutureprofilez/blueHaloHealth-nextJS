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
export default function AboutPageIndex(props) {
  console.log("props",props)
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          About Blue Halo Health | Virtual Mental Health Care Ontario
        </title>

        <meta
          name="description"
          content="Discover Blue Halo Health’s mission, values, and expert-led, virtual-first healthcare model delivering inclusive mental, developmental, and behavioural care across Ontario."
        />

        <meta
          name="keywords"
          content="about Blue Halo Health, virtual healthcare Ontario, mental health Ontario, developmental care, behavioural therapy, psychology services Canada"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Blue Halo Health" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Blue Halo Health | Expert-Led Virtual Care in Ontario"
        />
        <meta
          property="og:description"
          content="Learn how Blue Halo Health is redefining Ontario’s healthcare through expert-led, virtual-first mental and developmental care—built on trust, inclusivity, and clinical excellence."
        />
        <meta
          property="og:image"
          content="/summary.png"
        />
        
        <meta
          name="twitter:title"
          content="About Blue Halo Health | Ontario Virtual Healthcare Leaders"
        />
        <meta
          name="twitter:description"
          content="Meet the team and vision behind Blue Halo Health—delivering inclusive, expert-led virtual mental and developmental care across Ontario."
        />
        <meta
          name="twitter:image"
          content="/summary.png"
        />

        {/* UX */}
        <meta name="theme-color" content="#009C4A" />
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



