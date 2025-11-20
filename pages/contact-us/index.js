import BookingTab from '@/components/BookingTab';
import Layout from '@/components/Layout';
import SectionBanner from '@/components/SectionBanner';
import React from 'react'
import ContactForm from './ContactForm';
import Banner from '../home/Banner';
import Faq from '@/components/Faq';
import Head from "next/head";
import ContactInfo from './ContactInfo';

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
             {/* PRIVACY & COMMUNICATION NOTICE STARTS HERE */}
      <div className="bg-white p-5 md:p-8 rounded-xl shadow mb-8 text-left">
        <h2 className="text-xl font-semibold mb-3">
          Important Privacy & Communication Notice
        </h2>

        <p className="mb-3">
          Blue Halo Health welcomes your inquiries and values your privacy.
        </p>

        <p className="mb-3">
          Please note that <strong>email and website forms are for general communication only</strong> 
          and are not PHIPA-secure. Do not include personal health information or details about 
          your care in these messages.
        </p>

        <p className="mb-3">
          For your safety and confidentiality, <strong>all clinical communication, appointment details,
          and therapeutic updates must be shared through our secure JaneApp platform.</strong>
        </p>

        <p className="mb-3">
          Our care providers do not respond to clinical questions by email or phone outside JaneApp.
          Intake staff may collect basic health information by phone only when booking appointments 
          or confirming service needs.
        </p>

        <p className="mb-3">
          By contacting us, you acknowledge and consent to Blue Halo Health collecting and using 
          your contact information solely for administrative and scheduling purposes, 
          in accordance with our Privacy Policy.
        </p>

        <p className="font-semibold">
          Please note this form is <strong>not</strong> for medical emergencies or urgent clinical concerns.
          If you are in crisis, please contact 911 or your nearest emergency department.
        </p>
      </div>
      {/* PRIVACY & COMMUNICATION NOTICE ENDS HERE */}
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