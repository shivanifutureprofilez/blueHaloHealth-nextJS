import BookingTab from '@/components/BookingTab';
import Layout from '@/components/Layout';
import SectionBanner from '@/components/SectionBanner';
import React from 'react'
import ContactForm from './ContactForm';
import Banner from '../home/Banner';
import Faq from '@/components/Faq';
import Head from "next/head";
import ContactInfo from './ContactInfo';
import Notice from './Notice';

function index() {
  return (
    <>
      <Head>
        <title>Contact Us | Blue Halo Health</title>
        <meta name="description" content="Get in touch with Blue Halo Health for consultations, appointments, or wellness program inquiries." />
        <meta name="keywords" content="contact Blue Halo Health, book consultation, wellness inquiry, health support" />
        <meta property="og:url" content="https://bluehalohealth.com/contact-us" />
        <meta property="og:title" content="Contact Us | Blue Halo Health" />
        <meta property="og:description" content="Reach out to Blue Halo Health for expert health and wellness guidance." />
        <meta property="og:image" content="https://bluehalohealth.com/images/contact.jpg" />
        <meta name="twitter:title" content="Contact Us | Blue Halo Health" />
        <meta name="twitter:description" content="Connect with Blue Halo Health for holistic wellness support." />
        <meta name="twitter:image" content="https://bluehalohealth.com/images/contact.jpg" />
        <link rel="canonical" href="https://bluehalohealth.com/contact-us" />
      </Head>
      <Layout>
        <SectionBanner title={"Contact Us"} />
        <div className="bg-[#F7F4F0] py-[20px] md:py-[40px] lg:py-[60px]  ">
          <div className="mx-auto container  px-4 text-center">
             <Notice/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <ContactInfo/>
              <ContactForm />

            </div>
          </div>
        </div>
        <Faq />
        <BookingTab />
      </Layout>
    </>
  )
}

export default index;