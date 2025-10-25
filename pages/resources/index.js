import Layout from '@/components/Layout'
import SectionBanner from '@/components/SectionBanner'
import React, { useState } from 'react'
import ContactForm from '../contact-us/ContactForm'
import Faq from '@/components/Faq'
import BookingTab from '@/components/BookingTab'
import ResourceCard from '@/components/ResourceCard'
import Link from 'next/link'

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
  const [selectedAudience, setSelectedAudience] = useState(null) // 'parent' | 'physician' | 'care' | null

  const toggleAudience = (aud) => {
    setSelectedAudience((prev) => (prev === aud ? null : aud))
  }

  const filtered = selectedAudience
    ? features.filter((f) => f.tags && f.tags.includes(selectedAudience))
    : features

  return (
    <Layout>
      <SectionBanner title={"Resources"} />

      <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 md:mt-4 md:mb-8">
        {/* Left sidebar: I Am */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">I Am</h3>

          <div className="space-y-4">
            <button
              onClick={() => toggleAudience('parent')}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border text-sm ${selectedAudience === 'parent' ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200 bg-white'} hover:shadow-sm`}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full">👪</span>
              <span className="text-gray-700">A parent or Caregiver</span>
            </button>

            <button
              onClick={() => toggleAudience('physician')}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border text-sm ${selectedAudience === 'physician' ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200 bg-white'} hover:shadow-sm`}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full">👨‍⚕️</span>
              <span className="text-gray-700">A Physician</span>
            </button>

            <button
              onClick={() => toggleAudience('care')}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border text-sm ${selectedAudience === 'care' ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200 bg-white'} hover:shadow-sm`}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full">🏥</span>
              <span className="text-gray-700">Care with BlueHaloHealth</span>
            </button>
          </div>
        </div>

        {/* Right: resources grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((item) => (
            <Link key={item.id} href={item.link}>
              <ResourceCard label={item.label} title={item.title} date={item.date} tags={item.tags} />
            </Link>
          ))}
        </div>
      </div>

      <BookingTab />
    </Layout>
  )
}

export default index;