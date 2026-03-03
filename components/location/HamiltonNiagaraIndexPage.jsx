import React from 'react'
import BookingTab from "@/components/BookingTab";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import SectionBanner from "@/components/SectionBanner";
import Importance from "@/pages/home/Importance";
import Image from "next/image";
import ServiceByLocation from "./ServiceByLocation";

export const metadata = {
  title:
    "Virtual Autism & Developmental Services in Hamilton–Niagara | Blue Halo Health",
  description:
    "Accessible virtual autism, counselling, speech therapy & ADHD support across Hamilton and the Niagara Region.",
};

export default function HamiltonNiagaraIndexPage() {
  return (
    <Layout>
      <SectionBanner title={"Serving Families Across Hamilton and the Niagara Region"} />

      <div className="bg-[#F7F4F0]">
        <section className="py-14 container mx-auto">

          {/* INTRO */}
          <div className="flex justify-between items-center gap-4">
            <div className="w-full max-w-[35%] hidden lg:block">
              <Image
                src="/images/about2.png"
                alt="Virtual mental health services in Hamilton and Niagara"
                className="w-full lg:max-w-[580px] object-cover"
                width={400}
                height={300}
              />
            </div>

            <div className="w-full lg:max-w-[65%] text-center lg:text-left">
              <h2 className="heading font-bold text-2xl md:text-3xl mb-3">
                Virtual Mental Health & Developmental Services for
                <span className="text-[#009C4A]"> Hamilton–Niagara Families</span>
              </h2>

              <p className="text-gray-500 font-medium text-[15px] mb-4">
                Blue Halo Health supports families across Hamilton and the Niagara Region with comprehensive virtual mental health and developmental services including autism & ASD support, counselling, speech therapy, ADHD care, and parent coaching.
              </p>

              <p className="text-gray-500 font-medium text-[15px]">
                Families can access high-quality care without cross-region travel, parking challenges, or long clinic waitlists.
              </p>
            </div>
          </div>

          {/* ACCESS SECTION */}
          <div className="py-10">
            <Heading heading1={"Making Specialized Care More Accessible in"} heading2={" Hamilton–Niagara"} />
            <div className="space-y-4 py-5">
              {[
                "Avoid cross-region travel",
                "Access experienced clinicians without geographic barriers",
                "Maintain consistent therapy schedules",
                "Coordinate multidisciplinary care efficiently",
                "Receive support within a familiar home environment",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg px-5 py-4">
                  <span className="text-green-dark font-bold text-lg">✔</span>
                  <p className="text-[15px] text-gray-600 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="pb-10">
            <Heading heading1={"Services Available to"} heading2={" Families in Hamilton–Niagara"} />
            <div className="grid md:grid-cols-3 gap-3 mt-12">
              <ServiceByLocation categorySlug="autism-developmental-therapy-services" />
              <ServiceByLocation serviceSlug="school-age-autism-neurobehavioral-programs-6-12-years" />
              <ServiceByLocation subServiceSlug="speech-language-therapy-slp-for-children" />
              <ServiceByLocation serviceSlug="adhd-assessment" />
              <ServiceByLocation serviceSlug="parent-coaching-education" />
            </div>
          </div>

        </section>

        <Importance />

        <BookingTab
          title="Start Your Child’s Support Journey in Hamilton–Niagara"
          description="Families across Hamilton and Niagara can access secure virtual therapy without travel delays."
          tagline="Hamilton–Niagara Families – 15 Min Consultation On Us."
        />
      </div>
    </Layout>
  );
}