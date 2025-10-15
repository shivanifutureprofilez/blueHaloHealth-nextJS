import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AgeBanner({title = "0-6 (Early Years)"}) {
  return (
    <section className="relative w-full h-[300px] md:h-[280px] lg:h-[300px] flex items-center justify-center overflow-hidden bg-[#F7F4F0]">
      <Image
        src="/contactBanner.png"
        alt={`${title} banner`}
        fill
        className="object-cover"
        priority
      />

      {/* <div className="absolute inset-0 bg-[#F7F4F0]/60 mix-blend-multiply"></div> */}

      <div className="relative text-center z-10 px-4">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-5xl tracking-tight mb-3">
          {title}
        </h1>

        <div className="flex justify-center items-center space-x-2 text-[15px] md:text-[16px] font-medium">
          <Link
            href="/"
            className="text-white"
          >
            Home
          </Link>
          <span className="text-white">{">"}</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  )
}

export default AgeBanner