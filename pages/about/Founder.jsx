import React from "react";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl mb-2">
            Dr. Jane Doe
          </h3>
          <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed mb-4">
            Dr. Jane Doe founded <span className="font-semibold">BlueHaloHealth</span> 
            with a vision to create an inclusive, compassionate, and 
            research-driven environment for individuals on the autism spectrum.
            Her leadership continues to guide our mission to empower families 
            through evidence-based therapy and innovation.
          </p>

          <p className="italic text-gray-700 text-[15px] md:text-[16px]">
            “Every small step toward understanding brings us closer to a world 
            where every child thrives.”
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/founder.png" 
            alt="Founder"
            width={350}
            height={350}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
