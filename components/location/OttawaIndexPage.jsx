import BookingTab from "@/components/BookingTab";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import SectionBanner from "@/components/SectionBanner";
import Importance from "@/pages/home/Importance";
import Image from "next/image";
import ServiceByLocation from "./ServiceByLocation";

export const metadata = {
  title:
    "Virtual Autism & Developmental Services in Ottawa | Blue Halo Health",
  description:
    "Accessible virtual autism, counselling, speech therapy & ADHD support across Ottawa and surrounding communities.",
};

export default function OttawaPage() {
  return (
    <Layout>
      <SectionBanner title={"Serving Families Across Ottawa and Surrounding Communities"} />

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
                Comprehensive Virtual Mental Health & Developmental Services in
                <span className="text-[#009C4A]"> Ottawa</span>
              </h2>

              <p className="text-gray-500 font-medium text-[15px] mb-4">
                Blue Halo Health supports families across Ottawa with virtual autism services, counselling, speech therapy, ADHD support, and parent coaching.
              </p>

              <p className="text-gray-500 font-medium text-[15px]">
                Whether located in Kanata, Barrhaven, Orleans, or central Ottawa, families can access coordinated care without long travel times.
              </p>
            </div>
          </div>

          <div className="py-10">
            <Heading heading1={"Supporting Ottawa Families with"} heading2={" Flexible, Coordinated Care"} />
            <div className="space-y-4 py-5">
              {[
                "Begin services sooner",
                "Eliminate cross-city travel",
                "Maintain consistent therapy appointments",
                "Coordinate multiple services within one care team",
                "Access support in a comfortable home setting",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg px-5 py-4">
                  <span className="text-green-dark font-bold text-lg">✔</span>
                  <p className="text-[15px] text-gray-600 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-10">
            <Heading heading1={"Services Available to"} heading2={" Families in Ottawa"} />
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
          title="Start Your Child’s Support Journey in Ottawa"
          description="Families across Ottawa can access secure virtual therapy without travel or long waitlists."
          tagline="Ottawa Families – 15 Min Consultation On Us."
        />
      </div>
    </Layout>
  );
}