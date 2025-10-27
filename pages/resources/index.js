import Layout from '@/components/Layout'
import SectionBanner from '@/components/SectionBanner'
import React, { useState } from 'react'
import ContactForm from '../contact-us/ContactForm'
import Faq from '@/components/Faq'
import BookingTab from '@/components/BookingTab'
import ResourceCard from '@/components/ResourceCard'
import Link from 'next/link'
import { FaDownload } from "react-icons/fa";
import { RiParentLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

const features = [
  {
    id: 'start-here',
    title: 'Start Here',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['parent', 'care'],
    link: '/resources/start-here',
  },
  {
    id: 'tennessee-autism-aba-directory',
    title: 'Tennessee Autism & ABA Directory',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['parent', 'physician'],
    link: '/resources/tennessee-autism-aba-directory',
  },
  {
    id: 'utah-support-guide',
    title: 'Utah Support Guide',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['parent', 'care'],
    link: '/resources/utah-support-guide',
  },
  {
    id: 'south-carolina-family-toolkit',
    title: 'South Carolina Family Toolkit',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['parent'],
    link: '/resources/south-carolina-family-toolkit',
  },
  {
    id: 'north-carolina-care-guide',
    title: 'North Carolina Care Guide',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['parent', 'care'],
    link: '/resources/north-carolina-care-guide',
  },
  {
    id: 'california-autism-aba-guide',
    title: 'California Autism & ABA Guide',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['physician', 'care'],
    link: '/resources/california-autism-aba-guide',
  },
  {
    id: 'family-toolkit-example',
    title: 'Family Toolkit (Example)',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['parent'],
    link: '/resources/family-toolkit-example',
  },
  {
    id: 'care-navigation',
    title: 'Care Navigation',
    label: 'Resource',
    date: 'October 3, 2025',
    tags: ['care', 'physician'],
    link: '/resources/care-navigation',
  },
]

function index() {
  const [cats, setCats] = useState(null);

  const changeAudience = (audience) => {
    if (cats === audience) {
      setCats(null);
    } else {
      setCats(audience);
    }
  };

  const filtered = cats
    ? features.filter((f) => f.tags && f.tags.includes(cats))
    : features

  return (
    <Layout>
      <SectionBanner title={"Resources"} />
      <div className='bg-[#F7F8F9]'>
         <div className="container mx-auto  px-4 py-4 md:py-8  md:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mt-4 md:mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">I Am</h3>

              <div className="space-y-4">
                <button
                  onClick={() => changeAudience('parent')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border text-medium ${cats === 'parent' ? 'border-emerald-400 bg-emerald-50' : 'border-[#00000033] bg-transparent'} hover:shadow-sm`}
                >
                  <span className="flex items-center justify-center  bg-emerald-50 text-green-dark rounded-full"><RiParentLine size={20} /></span>
                  <span className="text-gray-700">A parent or Caregiver</span>
                </button>

                <button
                  onClick={() => changeAudience('physician')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border text-medium ${cats === 'physician' ? 'border-emerald-400 bg-emerald-50' : 'border-[#00000033] bg-transparent'} hover:shadow-sm`}
                >
                  <span className="flex items-center justify-center  bg-emerald-50 text-green-dark rounded-full"><FaUserDoctor size={20} /></span>
                  <span className="text-gray-700">A Physician</span>
                </button>

                <button
                  onClick={() => changeAudience('care')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border text-medium ${cats === 'care' ? 'border-emerald-400 bg-emerald-50' : 'border-[#00000033] bg-transparent'} hover:shadow-sm`}
                >
                  <span className="flex items-center justify-center  bg-emerald-50 text-green-dark rounded-full"><FaHandHoldingHeart size={20} /></span>
                  <span className="text-gray-700">Care with BlueHaloHealth</span>
                </button>
              </div>
            </div>


            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filtered.map((item) => (
                <Link key={item.id} href={item.link}>
                  <ResourceCard label={item.label} title={item.title} date={item.date} tags={item.tags} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BookingTab />
    </Layout>
  )
}

export default index;