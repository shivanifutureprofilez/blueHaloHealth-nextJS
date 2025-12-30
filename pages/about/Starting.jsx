import Heading from '@/components/Heading';
import React from 'react'

function Starting() {
  return (
    <div className='bg-[#F7F4F0] p-3'>
      <div className='container mx-auto px-8 py-8 md:py-16 md:px-16 '>
        <Heading
          className="text-black text-center text-2xl md:text-3xl"
          heading1={"Discover Blue Halo Health: "}
          heading2={"Pioneering Tomorrow’s Care Today"}
          pClass="text-center"
        // content={"At Blue Halo Health, we’re revolutionizing Ontario’s healthcare landscape with a bold vision: a seamless, province-spanning ecosystem where healing happens on your terms."}
        />
        <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-center pt-2 leading-snug'>At Blue Halo Health, we’re revolutionizing Ontario’s healthcare landscape with a bold vision: a seamless, province-spanning ecosystem where healing happens on your terms.</p>
        <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-center pt-2 leading-snug'>Picture a collaborative team of Ontario’s skilled psychologists, therapists,
          behavioral experts, and wellness professionals led by senior
          clinicians with extensive supervisory experience — uniting under one
          dynamic platform. This isn’t fragmented care; it’s a unified force,
          blending seasoned leadership with qualified specialists to democratize
          premium support for every Ontarian, no matter your background or
          location.</p>
        <p className='mt-4 text-gray-600  mx-auto max-w-[1000px] text-[18px] mb-2 lg:mb-4 text-center pt-2 leading-snug'>Forget traditional clinics—we’re crafting an intelligent, virtual-first
          network that orbits around a single guiding star: <span className='font-bold'>delivering care
            precisely when and where it’s needed most.</span></p>


      </div>
    </div>
  )
}

export default Starting;