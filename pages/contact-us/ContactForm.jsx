import React, { useState } from 'react'
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  const handleChange = (e) => {r
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }

    const[items , setitems] = useState({

    })
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="bg-white  p-8 flex flex-col justify-start">
          <h2 className="font-bold text-2xl mb-4 text-black">Contact us</h2>
          <ul className="space-y-6 text-base">
            <li className="flex items-center gap-3 text-gray-700">
              <span className="bg-green-100 rounded-full p-2">
                <IoLocationOutline size={22} className="text-green-600" />
              </span>
              123 Therapy Lane, Toronto, ON M5V 3A8
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="bg-green-100 rounded-full p-2">
                <CiPhone size={22} className="text-green-600" />
              </span>
              (416) 555-BLUE
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-green-100 rounded-full p-2">
                <IoMailOpenOutline size={22} className="text-green-600" />
              </span>
              <a href="mailto:hello@bluehalohealth.ca" className="text-green-600 font-semibold hover:underline">
                hello@bluehalohealth.ca
              </a>
            </li>
          </ul>
        </div>
        {/* Message Form */}
        <div className="bg-[#F5F5F5] m-4  rounded-2xl shadow p-8">
          <h2 className="font-bold text-2xl mb-6 text-black flex items-center gap-2">
            <FaPaperPlane className="text-green-600" /> Send Us a Message
          </h2>
          <form className="space-y-4">
            <input onChange={handleChange}
              value={items?.fullName}
              name='fullName'
              type="text" placeholder="Full Name" className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />

            <input onChange={handleChange}
              value={items?.age}
              name='age'
              type="number" placeholder="Age" className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input onChange={handleChange}
                value={items?.phone}
                name='phone'
                type="number" placeholder="Phone number" className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />
              <input onChange={handleChange}
                value={items?.email}
                name='email'
                type="email" placeholder="Email" className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />
            </div>
            <textarea onChange={handleChange}
              value={items?.message}
              name='message'
              placeholder="Message" rows={3} className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />

            <div className="flex items-center gap-2">
              <input onChange={handleChange}
                value={items?.benefits}
                name=''
                type="checkbox" id="sms" className="accent-green-600" />
              <label className="text-gray-700 text-sm">I agree to receive SMS / Text communication</label>
            </div>
            <button type="submit" className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition w-full mt-2">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;