import BookingTab from '@/components/BookingTab';
import Layout from '@/components/Layout';
import SectionBanner from '@/components/SectionBanner';
import React from 'react'
import ContactForm from './contactform';

function index() {
  return (
    <Layout>
        <SectionBanner/>
        <ContactForm/>
        <BookingTab/>
    </Layout>
  )
}

export default index;