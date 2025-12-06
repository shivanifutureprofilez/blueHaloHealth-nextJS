import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SectionBanner({ title = "Blue Halo Health" , img = "/sectionBanner.png"}) {
  return (
    <section className="relative w-full h-[200px] md:h-[280px] lg:h-[300px] flex items-center justify-center overflow-hidden bg-[#F7F4F0]">
      <Image
        src={img || "/sectionBanner.png"}
        alt={`${title} banner`}
        fill
        className="object-cover opacity-90 w-full"
        priority
      />

      <div className="absolute inset-0 bg-[#F7F4F0]/60 mix-blend-multiply"></div>

      <div className="relative text-center z-10 px-4">
        <h1 className="text-[#00A859] font-bold text-2xl md:text-4xl  tracking-tight mb-3">
          {title}
        </h1>

        <div className="hidden md:flex justify-center items-center space-x-2 text-[15px] md:text-[16px] font-medium">
          <Link
            href="/"
            className="text-gray-700 hover:text-[#00A859] transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-500">{">"}</span>
          <span className="text-[#00A859]">{title}</span>
        </div>
      </div>
    </section>
  );
}
