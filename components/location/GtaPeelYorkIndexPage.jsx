import BookingTab from "@/components/BookingTab";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import SectionBanner from "@/components/SectionBanner";
import Importance from "@/pages/home/Importance";
import Image from 'next/image';
import ServiceByLocation from "./ServiceByLocation";

export const metadata = {
    title:
        "Virtual Autism & Developmental Services in GTA | Blue Halo Health",
    description:
        "Accessible virtual autism, counselling, speech therapy & ADHD support across Toronto, Peel & York Region.",
};

export default function GTAPeelYorkIndexPage({ location }) {
    return (
        <Layout>
            <SectionBanner title={"Serving Families Across the Greater Toronto Area (GTA), Peel & York Region"} />
            <div className=" bg-[#F7F4F0]">
                {/* INTRO */}
                <section className="py-14 container mx-auto">
                    {/* <div className='container mx-auto px-8  md:px-16 '>
                        <Heading
                            className="text-black text-center"
                            heading1={"Accessible Virtual Mental Health & Developmental Services Across the "}
                            heading2={"GTA / Peel / York"}
                            pClass="text-center"
                        />
                        <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-center pt-2 leading-snug'>
                            Blue Halo Health proudly serves families across the Greater Toronto Area, Peel Region, and York Region with comprehensive, virtual-first mental health and developmental care. Our licensed clinicians provide autism & ASD services, psychological counselling, speech therapy, ADHD and executive functioning support, and parent coaching — all delivered securely online across Ontario.
                        </p>
                        <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-center pt-2 leading-snug'>FWhether you’re located in downtown Toronto or in surrounding communities like Vaughan or Mississauga, families can access high-quality care without the burden of travel, traffic, or long clinic waitlists.<span className='font-bold'><br/>Delivering care
                                precisely when and where it’s needed most.</span></p>
                    </div> */}
                    <div className="flex justify-between items-center gap-4 ">

                        <div className='w-full max-w-[35%] hidden lg:block'>

                            <Image
                                src="/images/about2.png"
                                alt="Learn about Blue Halo Health’s mission, values, and our expert team dedicated to holistic health and wellness."
                                // data-aos="flip-up"
                                className="w-full lg:max-w-[580px] object-cover "
                                width={400}
                                height={300}
                                placeholder="blur"
                                blurDataURL={`/about.png.png?w=400&q=5`}
                            />
                        </div>


                        {/* Right Text */}
                        <div className="w-full lg:max-w-[65%] text-center lg:text-left" >
                            {/* <div className='container mx-auto px-8  md:px-16 '>
                                <Heading
                                    className="text-black text-center"
                                    heading1={"Accessible Virtual Mental Health & Developmental Services Across the "}
                                    heading2={"GTA / Peel / York"}
                                    pClass="text-center"
                                />
                                <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-center pt-2 leading-snug'>
                                    Blue Halo Health proudly serves families across the Greater Toronto Area, Peel Region, and York Region with comprehensive, virtual-first mental health and developmental care. Our licensed clinicians provide autism & ASD services, psychological counselling, speech therapy, ADHD and executive functioning support, and parent coaching — all delivered securely online across Ontario.
                                </p>
                                <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-center pt-2 leading-snug'>Whether you’re located in downtown Toronto or in surrounding communities like Vaughan or Mississauga, families can access high-quality care without the burden of travel, traffic, or long clinic waitlists.<span className='font-bold'><br />Delivering care
                                    precisely when and where it’s needed most.</span></p>
                            </div> */}
                            <div className="leading-snug">
                                <h2 className="heading poppins text-black tracking-tighter leading-tight font-bold text-2xl md:text-3xl  mb-3" >
                                    Accessible Virtual Mental Health & Developmental Services Across <span className="text-[#009C4A]">GTA / Peel / York</span>
                                </h2>
                                <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4" >
                                    Blue Halo Health proudly serves families across the Greater Toronto Area, Peel Region, and York Region with comprehensive, virtual-first mental health and developmental care. Our licensed clinicians provide autism & ASD services, psychological counselling, speech therapy, ADHD and executive functioning support, and parent coaching — all delivered securely online across Ontario.
                                </p>
                                <p className="text-gray-500 font-medium text-[15px] mb-2 lg:mb-4" >
                                    Whether you’re located in downtown Toronto or in surrounding communities like Vaughan or Mississauga, families can access high-quality care without the burden of travel, traffic, or long clinic waitlists.              </p>
                                {/* <p className='text-gray-500 font-medium text-[15px]' >From developmental milestones to life’s most complex challenges, BlueHaloHealth delivers the guidance, connection, and care needed to help individuals and families thrive—virtually, together.              </p> */}
                            </div>
                        </div>
                    </div>



                    <div className="py-10">
                        <Heading heading1={"How Virtual Care Improves"} heading2={" Access in the GTA"} className="" />
                        <p className="mb-6 md:mb-2 font-medium text-[15px] text-center  text-gray-700 max-w-[600px] mx-auto">
                            Timely, coordinated care — delivered virtually to families across Toronto, Peel, and York Region.</p>
                        <div className="space-y-4 py-5">
                            {[
                                "Avoid cross-city travel and traffic delays",
                                "Access experienced clinicians without location restrictions",
                                "Reduce wait times for assessments and therapy",
                                "Maintain consistent appointments around school and work schedules",
                                "Receive care in a familiar, comfortable environment",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-white rounded-lg px-5 py-4"
                                >
                                    <span className="text-green-dark font-bold text-lg">✔</span>
                                    <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pb-10">
                        <Heading heading1={"Services Available to"} heading2={" Families in the GTA"} />
                        <p className="mb-6 md:mb-2 font-medium text-[15px] text-center  text-gray-700 max-w-[600px] mx-auto">
                            Comprehensive virtual support tailored to the needs of families across the GTA.                        </p>
                        <div className="grid md:grid-cols-3 gap-3 mt-12">
                            <ServiceByLocation categorySlug={'autism-developmental-therapy-services'}/>
                            <ServiceByLocation serviceSlug={'school-age-autism-neurobehavioral-programs-6-12-years'}/>
                            <ServiceByLocation subServiceSlug={'speech-language-therapy-slp-for-children'}/>
                            <ServiceByLocation serviceSlug={'adhd-assessment'}/>
                            <ServiceByLocation serviceSlug={'parent-coaching-education'}/>
                            {/* {[
                                {
                                    title: "Autism & ASD Services in the GTA",
                                    desc: "Comprehensive autism assessment and therapy support.",
                                    link: "/service/autism-developmental-therapy-services",
                                },
                                {
                                    title: "Child & Teen Counselling in the GTA",
                                    desc: "Evidence-based therapy for emotional and behavioural needs.",
                                    link: "/service/detail/school-age-autism-neurobehavioral-programs-6-12-years",
                                },
                                {
                                    title: "Speech Therapy Services in the GTA",
                                    desc: "Virtual speech-language therapy for communication development.",
                                    link: "/service/school-age-autism-neurobehavioral-programs-6-12-years/speech-language-therapy-slp-for-children",
                                },
                                {
                                    title: "ADHD & Executive Function Support",
                                    desc: "Structured strategies for focus, organization and school success.",
                                    link: "/service/detail/adhd-assessment",
                                },
                                {
                                    title: "Parent Coaching & Family Support",
                                    desc: "Guidance and support to help families feel confident and empowered.",
                                    link: "/service/detail/parent-coaching-education",
                                    span: "md:col-span-2",
                                },
                            ].map((service, index) => (
                                <a
                                    key={index}
                                    href={service.link}
                                    className={`group relative overflow-hidden rounded-2xl bg-white p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${service.span || ""}`}
                                >
                                    <div className="absolute top-0 left-0 h-full w-1 bg-green-dark transition-all duration-500 group-hover:w-2"></div>
                                    <div className="pl-4">
                                        <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3 group-hover:text-green-dark transition">
                                            {service.title}
                                        </h3>
                                        <p className="text-[15px] text-gray-600 leading-relaxed font-medium ">
                                            {service.desc}
                                        </p>
                                        <div className="mt-6 text-green-dark font-medium flex items-center gap-2 ">
                                            Learn More →
                                        </div>
                                    </div>
                                </a>
                            ))} */}
                        </div>
                    </div>
                </section>
                <Importance />
                <BookingTab
                    title="Start Your Child’s Support Journey in the GTA"
                    description="Families across Toronto, Peel, and York Region can access secure virtual therapy without travel delays or long clinic waitlists."
                    tagline="GTA Families – 15 Min Consultation On Us."
                />
            </div>
        </Layout>
    );
}