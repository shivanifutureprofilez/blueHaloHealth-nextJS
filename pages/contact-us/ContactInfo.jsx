import React from 'react'
import { CiPhone } from 'react-icons/ci'
import { IoLocationOutline, IoMailOpenOutline } from 'react-icons/io5'

function ContactInfo() {
  return (
    // <div>
          <div className=' md:p-4 '>
                    <div className='bg-white p-4 rounded-[20px]'>
        
                      <h2 className="font-bold text-xl md:text-2xl mb-4 text-left text-black">Contact us</h2>
                      <ul className="space-y-6 text-base">
                        <li className="flex items-center text-left gap-3 text-gray-700">
                          <span className="bg-green-100 rounded-full p-2">
                            <IoLocationOutline size={22} className="text-green-600" />
                          </span>
                          123 Therapy Lane, Toronto, ON M5V 3A8
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="bg-green-100 rounded-full p-2">
                            <CiPhone size={22} className="text-green-600" />
                          </span>
                          <a href="tel:9876543218" className=" text-gray-700 hover:underline">
                            (416) 555-BLUE
                          </a>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="bg-green-100 rounded-full p-2">
                            <IoMailOpenOutline size={22} className="text-green-600" />
                          </span>
                          <a href="mailto:hello@blueHaloHealth.com" className=" text-gray-700 hover:underline">
                            hello@bluehalohealth.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
    // </div>
  )
}

export default ContactInfo