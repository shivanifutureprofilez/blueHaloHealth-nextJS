import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";

function ContactForm() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-white text-green-dark rounded-lg border border-gray-200 shadow-md overflow-hidden h-auto justify-center items-center p-3 '>
          <ul className={`space-y-1 text-xs flex flex-col text-gray-300`}>
            <li className="flex items-center gap-2"><IoLocationOutline size={16} />123, Therapy Lane</li>
            <li className="flex items-center gap-2"><CiPhone size={16} /> 9876543218</li>
            <li className="flex items-center gap-2"><IoMailOpenOutline size={16} /> hello@blueHaloHealth.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;