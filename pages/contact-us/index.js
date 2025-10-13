import BookingTab from '@/components/BookingTab';
import Layout from '@/components/Layout';
import SectionBanner from '@/components/SectionBanner';
import React from 'react'
import ContactForm from './contactform';
import Banner from '../home/Banner';

function index() {
  return (
    <Layout>
        <SectionBanner title={"Contact Us"}/>
        <ContactForm/>
        <BookingTab/>
    </Layout>
  )
}

export default index;