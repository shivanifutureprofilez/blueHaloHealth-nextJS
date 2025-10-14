import Layout from '@/components/Layout'
import React from 'react'
import Founder from './Founder'
import SectionBanner from '@/components/SectionBanner'
export default function AboutPageIndex() {
  return (
    <Layout>
        <SectionBanner title={"About"}/>
        <Founder/>
   </Layout>
  )
}
