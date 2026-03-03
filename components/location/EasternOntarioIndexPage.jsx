import BookingTab from "@/components/BookingTab";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import SectionBanner from "@/components/SectionBanner";
import Importance from "@/pages/home/Importance";
import Image from "next/image";
import ServiceByLocation from "./ServiceByLocation";

export const metadata = {
  title:
    "Virtual Autism & Developmental Services in Eastern Ontario | Blue Halo Health",
  description:
    "Accessible virtual autism, counselling, speech therapy & ADHD support across Kingston and Eastern Ontario.",
};

export default function EasternOntarioPage() {
  return (
    <Layout>
      <SectionBanner title={"Serving Families Across Eastern Ontario — Kingston and Surrounding Communities"} />

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
                Accessible Virtual Autism, Counselling & Developmental Services in
                <span className="text-[#009C4A]"> Eastern Ontario</span>
              </h2>

              <p className="text-gray-500 font-medium text-[15px] mb-4">
                Blue Halo Health supports families across Eastern Ontario including Kingston with secure virtual mental health and developmental services.
              </p>

              <p className="text-gray-500 font-medium text-[15px]">
                Our coordinated virtual model reduces geographic barriers and improves access to specialized care for regional communities.
              </p>
            </div>
          </div>

          <div className="py-10">
            <Heading heading1={"How Virtual Care Improves Access in"} heading2={" Eastern Ontario"} />
            <div className="space-y-4 py-5">
              {[
                "Avoid long-distance travel to major cities",
                "Access multidisciplinary care within one team",
                "Begin therapy and assessments sooner",
                "Maintain consistent sessions regardless of distance",
                "Receive professional support in a familiar setting",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg px-5 py-4">
                  <span className="text-green-dark font-bold text-lg">✔</span>
                  <p className="text-[15px] text-gray-600 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-10">
            <Heading heading1={"Services Available to"} heading2={" Families in Eastern Ontario"} />
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
          title="Start Your Child’s Support Journey in Eastern Ontario"
          description="Families across Kingston and Eastern Ontario can access coordinated virtual therapy without geographic barriers."
          tagline="Eastern Ontario Families – 15 Min Consultation On Us."
        />
      </div>
    </Layout>
  );
}