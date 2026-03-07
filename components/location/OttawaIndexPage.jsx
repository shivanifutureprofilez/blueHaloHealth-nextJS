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
    "Virtual Autism & Developmental Services in Ottawa | Blue Halo Health",
  description:
    "Accessible virtual autism, counselling, speech therapy & ADHD support across Ottawa and surrounding communities.",
};

export default function OttawaPage() {
  return (
    <Layout>
      <SectionBanner title={"Serving Families Across Ottawa, Kanata, Nepean, Barrhaven & Orleans"} />

      <div className="bg-[#F7F4F0]">
        <section className="py-14 container mx-auto">

          <div className="flex justify-between items-center gap-4">
            <div className="w-full max-w-[35%] hidden lg:block">
              <Image
                src="/images/about2.png"
                alt="Virtual mental health services in Ottawa"
                className="w-full object-cover"
                width={400}
                height={300}
              />
            </div>

            <div className="w-full lg:max-w-[65%] text-center lg:text-left">
              <h2 className="heading font-bold text-2xl md:text-3xl mb-3">
                Virtual Mental Health & Developmental Services for
                <span className="text-[#009C4A]"> Ottawa Families</span>
              </h2>

              <p className="text-gray-500 font-medium text-[15px] mb-4">
                Blue Halo Health supports families across Ottawa and surrounding communities, including Kanata, Nepean, Barrhaven, Orleans, and Stittsville, with comprehensive virtual developmental and mental health services in Ottawa. Our clinicians provide autism services, counselling for children and teens, speech therapy, ADHD support, executive functioning support, and parent coaching through secure online sessions.              </p>

              <p className="text-gray-500 font-medium text-[15px]">
                Families across the Ottawa region can begin services sooner without travelling long distances or waiting for limited specialist availability.              </p>
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
              Start accessing expert care from home with flexible scheduling for Ottawa families.            </p>
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

          {/* In person and virtual */}
          <section className="py-10 bg-[#F7F4F0]">
            <div className="container mx-auto px-4 max-w-6xl">

              {/* Section Heading */}
              <div className="text-center mb-12">
                <h2 className="heading text-green-dark">
                  Our Care Delivery: Virtual-First, Guided by Your Clinician
                </h2>

                <p className="mt-3 text-gray-700 max-w-[700px] mx-auto">
                  Our model is designed to make expert support easier to access for Ottawa families.
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
                    Ottawa’s large geographic area can make attending regular appointments challenging, especially for families living in suburban communities. Our virtual-first model helps ensure that families can connect with clinicians without travelling across the city.

                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Families in Kanata, Nepean, Barrhaven, Orleans, and Stittsville can access coordinated care while maintaining consistent therapy sessions from home.

                  </p>
                </div>

                {/* In Person Support */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e3da]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    In-Person Support (When Clinically Needed)
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    If your clinician determines that in-person support is required for specific goals, they will guide that decision during the intake process and help connect families with appropriate local resources if needed.

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
                  How BlueHaloHealth Virtual Care Improves Access for Ottawa Families
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Even within a large metropolitan region like the Ottawa,
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
                  with clinicians online, families across the Ottawa can maintain consistent
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
                    Supporting Families Across the Ottawa with Virtual Autism, Counselling & Speech Therapy
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Families from across Ottawa reach out to us for accessible care that fits around busy schedules. Whether raising a family in Kanata, balancing school routines in Barrhaven, or living in growing neighbourhoods like Orleans or Stittsville, many parents prefer flexible support that doesn’t require travelling across the city for every appointment.
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
                  Services Available for Ottawa Families
                </h3>
                <p className="text-gray-700 mt-3 pb-6">
                  Families throughout Ottawa region can access our
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
              heading1={"Why Ottawa Families Choose"}
              heading2={" Blue Halo Health"}
            />
            <p className="mb-6 md:mb-2 font-medium text-[15px] text-center text-gray-700 max-w-[650px] mx-auto">
              Families choose Blue Halo Health because our clinicians provide coordinated, strengths-based care designed to support both children and parents. With virtual access across Ottawa, flexible scheduling, and reduced wait times, families can access professional support sooner while maintaining consistent therapy.
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
                  long clinic waitlists common across the Ottawa region.
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
                heading2={" Across Ottawa"}
              />

              <p className="text-gray-700 font-medium text-[15px] leading-relaxed mb-4">
                Families across Ottawa, Kanata, Nepean, Barrhaven, Orleans, and Stittsville are supported by clinicians specializing in autism services in Ottawa, speech therapy for children in Ottawa, and child and teen counselling in Ottawa. Families can also access ADHD and executive functioning support for children and teens through secure virtual mental health services in Ottawa.
              </p>

              <p className="text-gray-700 font-medium text-[15px] leading-relaxed">
                Our team also offers ADHD and executive functioning support for children,
                helping families across the Ottawa access reliable developmental and mental
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
                  Experienced in autism services in Ottawa
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Specialized speech therapy in the Ottawa region
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Support for child and teen counselling in Ottawa
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Practical strategies for children’s daily development
                </p>
              </div>

              <div className="bg-[#F7F4F0] rounded-xl p-5 flex items-start gap-3 sm:col-span-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6F4EA] text-green-dark font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-[15px] font-medium">
                  Consistent virtual developmental and mental health services in Ottawa

                </p>
              </div>

            </div>

          </div>
        </section>
        <BookingTab
          title="Start Your Child’s Support Journey in Ottawa"
          description="Families across Ottawa can access secure virtual therapy without travel or long waitlists."
          tagline="Ottawa Families – 15 Min Consultation On Us."
        />
      </div>
    </Layout>
  );
}