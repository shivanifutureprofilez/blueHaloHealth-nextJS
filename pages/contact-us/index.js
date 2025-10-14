import BookingTab from '@/components/BookingTab';
import Layout from '@/components/Layout';
import SectionBanner from '@/components/SectionBanner';
import React from 'react'
import ContactForm from './ContactForm';
import Banner from '../home/Banner';
import Faq from '@/components/Faq';

function index() {
  return (
    <Layout>
        <SectionBanner title={"Contact Us"}/>
        <ContactForm/>
        <Faq/>
        <BookingTab/>
    </Layout>
  )
}

export default index;