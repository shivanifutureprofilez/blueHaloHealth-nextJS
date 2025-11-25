import Layout from '@/components/Layout';
import SectionBanner from '@/components/SectionBanner';
import React from 'react'

function index() {
    return (
        <Layout>
            <div className='bg-[#F7F4F0]'>
                <SectionBanner title={"FAQ"} />

                <div className="  text-gray-900 px-6 py-12 container mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Blue Halo Health – AODA Accessibility Statement</h2>


                    <p className="mb-4">
                        Blue Halo Health is committed to providing services that are accessible, inclusive,
                        and equitable in accordance with the Accessibility for Ontarians with Disabilities
                        Act (AODA).
                    </p>


                    <p className="mb-4">We provide accommodations and alternative formats upon request for:</p>


                    <ul className="list-disc pl-6 mb-4">
                        <li>Booking appointments</li>
                        <li>Accessing the patient portal</li>
                        <li>Submitting feedback or complaints</li>
                        <li>Receiving documents or receipts</li>
                        <li>Communication or language support needs</li>
                    </ul>


                    <p>
                        To request an accessible format or support, please contact our team. We will work
                        with you to provide services in a way that meets your accessibility needs.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default index;