import Layout from '@/components/Layout'
import SectionBanner from '@/components/SectionBanner'
import React from 'react'
import ContactForm from '../contact-us/ContactForm'
import Faq from '@/components/Faq'
import BookingTab from '@/components/BookingTab'

function index() {
  return (
    <Layout>
        <SectionBanner title={"Resources"}/>
        <BookingTab/>
    </Layout>
  )
}

export default index;