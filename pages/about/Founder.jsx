import React from "react";
import Image from "next/image";

export default function Founder() {
  return (
    <div className='bg-[#F7F4F0] p-3'>
      <div className='container mx-auto px-8 py-8 md:py-16 md:px-16 bg-white'>
        <div className=' md:flex'>
          <div className="w-full md:w-2/3 text-center md:m-8 md:text-left">
            <h3 className="text-black font-semibold text-2xl p-6 md:p-0 mt-2 ">
              Sanya Modi
            </h3>
            <p className=" text-black text-[14px] mb-2 md:text-[16px]">Founder, Speech Therapist</p>
            <p className=" text-green-dark text-[14px] md:text-[16px] mb-2">Empowering voices and connections!</p>
            <p className="text-black text-[14px] md:text-[16px] p-6 md:p-0 leading-relaxed md:mb-4">
             Sanya has completed her Bachelors & Masters in Audiology and Speech Language Pathology from AYJNISHD(D), Mumbai. She is certified in tele-therapy, specialising in Dysphagia, Autism communication, and bedside speech therapy for Neurological speech disorders
 Extensive experience with children in special education settings for Autism, Cerebral Palsy, and Learning disabilities. Also, a seasoned professional in private practice, specialising in diverse speech & hearing disorders among adults. She has a keen interest in research & has presented papers at national conferences.
            </p>

            <p className=" text-black p-6 md:p-0 text-[14px] md:text-[16px]">
             "Nothing was my heart more than seeing a family enjoy conversations at the der table seeing a mother bonding with her baby, helping a parent cope and cove forward when they get to know about the child's diagnosis."
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center p-3">
            <Image
              src="/founder.png"
              alt="Founder"
              width={350}
              height={350}
              className="rounded-xl shadow-md object-cover "
            />
          </div>
        </div>
      </div>

    </div>
   
    // <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
    //   <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    //     <div className="w-full md:w-2/3 text-center md:text-left">
    //       <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl mb-2">
    //         Dr. Jane Doe
    //       </h3>
    //       <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed mb-4">
    //         Dr. Jane Doe founded <span className="font-semibold">BlueHaloHealth</span> 
    //         with a vision to create an inclusive, compassionate, and 
    //         research-driven environment for individuals on the autism spectrum.
    //         Her leadership continues to guide our mission to empower families 
    //         through evidence-based therapy and innovation.
    //       </p>

    //       <p className="italic text-gray-700 text-[15px] md:text-[16px]">
    //         “Every small step toward understanding brings us closer to a world 
    //         where every child thrives.”
    //       </p>
    //     </div>
    //     <div className="w-full md:w-1/3 flex justify-center">
    //       <Image
    //         src="/founder.png" 
    //         alt="Founder"
    //         width={350}
    //         height={350}
    //         className="rounded-2xl shadow-md object-cover"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
