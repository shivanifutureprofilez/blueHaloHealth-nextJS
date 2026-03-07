import BookingTab from "@/components/BookingTab";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import SectionBanner from "@/components/SectionBanner";
import Importance from "@/pages/home/Importance";
import Image from "next/image";
import ServiceByLocation from "./ServiceByLocation";
import Popup1 from "../Popup1";

export const metadata = {
  title:
    "Virtual Autism & Developmental Services in Eastern Ontario | Blue Halo Health",
  description:
    "Accessible virtual autism, counselling, speech therapy & ADHD support across Kingston and Eastern Ontario.",
};

export default function EasternOntarioPage() {
  return (
    <Layout>
      <SectionBanner title={"Serving Families Across Kingston and Eastern Ontario"} />

      <div className="bg-[#F7F4F0]">
        <section className="py-14 container mx-auto">

          <div className="flex justify-between items-center gap-4">
            <div className="w-full max-w-[35%] hidden lg:block">
              <Image
                src="/images/about2.png"
                alt="Virtual mental health services in Eastern Ontario"
                className="w-full object-cover"
                width={400}
                height={300}
              />
            </div>

            <div className="w-full lg:max-w-[65%] text-center lg:text-left">
              <h2 className="heading font-bold text-2xl md:text-3xl mb-3">
                Virtual Autism, Counselling & Developmental Services for
                <span className="text-[#009C4A]"> Eastern Ontario Families</span>
              </h2>

              <p className="text-gray-500 font-medium text-[15px] mb-4">
                Blue Halo Health supports families across Kingston, Belleville, Brockville, Cornwall, and surrounding communities through accessible virtual autism services, counselling, and developmental therapy in Eastern Ontario. Our clinicians provide autism and ASD services, child and teen counselling, speech therapy, ADHD support, and parent coaching through secure online sessions.
              </p>

              <p className="text-gray-500 font-medium text-[15px]">
                Families throughout Eastern Ontario can access specialized support without needing to travel to larger urban centres, making it easier to maintain regular therapy schedules for children and families.              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="my-10 bg-[#f2ede8] rounded-2xl p-8 md:p-10 shadow-sm text-center relative overflow-hidden">

            {/* Decorative background circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#009C4A]/8 rounded-full pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#009C4A]/5 rounded-full pointer-events-none" />

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#009C4A]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#009C4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>

            <h3 className="text-[24px] md:text-[26px] font-semibold text-gray-900 mb-4">
              Book Your Free Consultation Today
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-[650px] mx-auto mb-4">
              Start accessing expert care from home with flexible virtual appointments.
            </p>
            <p className="font-semibold text-gray-900 mb-6">
              You get clarity — without extra work on your part.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-7 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#009C4A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Virtual</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#009C4A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Waitlist</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#009C4A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#009C4A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free First Call</span>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Popup1
                classes={`button bg-[#009C4A] flex justify-center cursor-pointer px-6 py-3`}
                content={`Thank you so much but we are not available right now`}
              />
            </div>
          </div>

          {/* Virtual and in person */}
          <section className="py-10 bg-[#F7F4F0]">
            <div className="container mx-auto px-4 max-w-6xl">

              {/* Section Heading */}
              <div className="text-center mb-12">
                <h2 className="heading text-green-dark">
                  Our Care Delivery: Virtual-First, Guided by Your Clinician
                </h2>

                <p className="mt-3 text-gray-700 max-w-[700px] mx-auto">
                  Our model is designed to make expert support easier to access for Ontario families.
                </p>
              </div>

              {/* Cards */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* Virtual First */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e3da]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Virtual-First Therapy
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Families across regional communities often face longer travel distances when seeking specialized services. Our virtual-first model helps reduce these challenges by connecting families with experienced clinicians through secure online sessions.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Families in Kingston, Belleville, Brockville, and Cornwall can access coordinated care while maintaining consistent therapy schedules from home.
                  </p>
                </div>

                {/* In Person Support */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e3da]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    In-Person Support (When Clinically Needed)
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    If in-person support is required for specific clinical goals, your clinician will guide this recommendation and help connect you with appropriate resources if needed.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    This decision is made during intake based on what will best support
                    your child or family.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual care */}
          <section className="py-16 ">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div className="relative w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/banner6.jpg" // replace with your image
                  alt="Virtual mental health and developmental care for GTA families"
                  fill
                  className="object-cover"
                />

                {/* Soft brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#009C4A]/20 to-transparent"></div>
              </div>


              {/* Content */}
              <div>
                <h2 className="heading text-green-dark mb-4">
                  How BlueHaloHealth Virtual Care Improves Access for Ontario Families
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Even within a large metropolitan region like the Ontario,
                  families often encounter long waitlists, scheduling conflicts, and
                  travel challenges when seeking specialized care.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Busy highways, packed school schedules, and commuting time can make
                  attending regular appointments difficult.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our virtual mental health and developmental care model helps families
                  access support sooner while reducing logistical barriers. By connecting
                  with clinicians online, families across the Ontario can maintain consistent
                  therapy schedules while receiving structured, evidence-informed support
                  from home.
                </p>

                {/* Optional CTA */}
                <div className="mt-6">
                  <Popup1
                    classes={`button bg-[#009C4A] flex justify-center cursor-pointer px-6 py-3`}
                    content={`Thank you so much but we are not available right now`}
                  />
                </div>
              </div>

            </div>
          </section>
          <section className="py-8 bg-[#F7F4F0]">
            <div className="container mx-auto px-4">

              {/* Top Section : Image + Content */}
              <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
                <div>
                  <h2 className="heading text-green-dark mb-4">
                    Supporting Families Across the Ontario with Virtual Autism, Counselling & Speech Therapy
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Families from communities across Eastern Ontario connect with us for reliable support that fits into everyday life. Whether living in Kingston, raising children in Belleville, or residing in communities like Brockville or Cornwall, many families appreciate the flexibility of receiving care from home without travelling to larger cities.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Our virtual therapy services allow families throughout the region to
                    connect with experienced clinicians while staying in the comfort of
                    their home.
                  </p>
                </div>

                <div className="relative h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/banner10.jpg"
                    alt="Virtual therapy for families across Toronto and surrounding regions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>


              {/* Middle Section : Center Heading */}
              <div className="text-center max-w-[720px] mx-auto pt-3 mb-8">
                <h3 className="heading text-black">
                  Services Available Across Eastern Ontario
                </h3>
                <p className="text-gray-700 mt-3 pb-6">
                  Families throughout eastern ontario region can access our
                  full range of developmental and mental health services through secure
                  virtual care designed to support both emotional well-being and
                  developmental progress.
                </p>
              </div>


              {/* Services Grid */}
              <div className="grid md:grid-cols-5 gap-3 mt-8">
                <ServiceByLocation categorySlug={'autism-developmental-therapy-services'} />
                <ServiceByLocation serviceSlug={'school-age-autism-neurobehavioral-programs-6-12-years'} />
                <ServiceByLocation subServiceSlug={'speech-language-therapy-slp-for-children'} />
                <ServiceByLocation serviceSlug={'adhd-assessment'} />
                <ServiceByLocation serviceSlug={'parent-coaching-education'} />
              </div>

            </div>
          </section>
        </section>

        <section className="bg-[#4B9B711A] py-14 ">
          <div className="mx-auto container px-4 text-center">
            <Heading
              className="heading text-center poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl mb-3"
              heading1={"Why Families in Eastern Ontario Choose"}
              heading2={" Blue Halo Health"}
            />
            <p className="mb-6 md:mb-2 font-medium text-[15px] text-center text-gray-700 max-w-[650px] mx-auto">
              Families across the region choose Blue Halo Health because we focus on improving access to specialized care while maintaining a compassionate, strengths-based approach. Our clinicians work collaboratively to ensure families receive coordinated support that adapts to their needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-[15px] md:py-[30px]">

              {/* Card 1 */}
              <div className="bg-white rounded-2xl flex flex-col items-center p-5 md:p-8 text-center">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E6F4EA] mb-4">
                  🧑‍⚕️
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Licensed Clinicians
                </h3>
                <p className="text-gray-600 font-medium text-[15px]">
                  Experienced professionals providing autism services, counselling,
                  and developmental therapy for children and teens.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl flex flex-col items-center p-5 md:p-8 text-center">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E6F4EA] mb-4">
                  🤝
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Coordinated Care
                </h3>
                <p className="text-gray-600 font-medium text-[15px]">
                  Our clinicians collaborate to provide integrated care supporting
                  both emotional well-being and developmental progress.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl flex flex-col items-center p-5 md:p-8 text-center">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E6F4EA] mb-4">
                  ⏱
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Faster Access
                </h3>
                <p className="text-gray-600 font-medium text-[15px]">
                  Virtual care helps families begin therapy sooner while avoiding
                  long clinic waitlists common across the ontario region.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl flex flex-col items-center p-5 md:p-8 text-center">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E6F4EA] mb-4">
                  💚
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Compassionate Support
                </h3>
                <p className="text-gray-600 font-medium text-[15px]">
                  A strengths-based approach that ensures every child and family
                  receives personalized, supportive care.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section className="pt-20 pb-5">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <Heading
                className="heading poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl mb-4"
                heading1={"Our Clinicians Supporting Families"}
                heading2={" Across Eastern Ontario"}
              />

              <p className="text-gray-700 font-medium text-[15px] leading-relaxed mb-4">
                Families across Kingston, Belleville, Brockville, and Cornwall are supported by clinicians experienced in autism services in Eastern Ontario, speech therapy for children in Kingston, and child counselling in Belleville and Cornwall. Families can also access virtual developmental and mental health services in Eastern Ontario from home.
              </p>

              <p className="text-gray-700 font-medium text-[15px] leading-relaxed">
                Our team also offers ADHD and executive functioning support for children,
                helping families across the eastern ontario access reliable developmental and mental
                health care from the comfort of their home.
              </p>
            </div>


            {/* Right Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Experienced in autism services in Eastern Ontario
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Specialized speech therapy for children in Kingston
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Support for child counselling in Belleville and Cornwall
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Focus on children’s emotional and developmental growth
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3 sm:col-span-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Accessible virtual developmental and mental health services in Eastern Ontario
                </p>
              </div>

            </div>

          </div>
        </section>
        <BookingTab
          title="Start Your Child’s Support Journey in Eastern Ontario"
          description="Families across Kingston and Eastern Ontario can access coordinated virtual therapy without geographic barriers."
          tagline="Eastern Ontario Families – 15 Min Consultation On Us."
        />
      </div>
    </Layout>
  );
}