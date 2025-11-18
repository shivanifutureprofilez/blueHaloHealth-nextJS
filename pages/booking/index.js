import CommingSoonBookButton from "@/components/CommingSoonBookButton";
import Layout from "@/components/Layout";
import { useRef } from "react";

export default function BookingConsentPage() {
    const check1 = useRef(null);
  return (
    <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
            <div className=" ">
                <h1 className="text-xl md:text-3xl font-extrabold text-start text-green-700 mb-6">
                    Before You Continue to Our Booking System
                </h1>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    Blue Halo Health uses Jane, a secure, PHIPA-compliant third-party platform, to
                    manage scheduling, reminders, and patient accounts.
                </p>

                <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4 font-semibold">
                    By continuing, you acknowledge and consent to the following:
                </p>

                {/* Section 1 */}
                <div className="mb-6">
                    <h2 className="text-lg md:text-xl font-bold text-green-700 mb-2">
                        1️⃣ Third-Party Platform Consent
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>I understand that I will be redirected to Jane, a secure third-party health platform.</li>
                        <li>I agree to create an account or sign in to book services.</li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div className="mb-6">
                    <h2 className="text-lg md:text-xl font-bold text-green-700 mb-2">
                        2️⃣ Privacy & Data Collection Notice
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>I understand that Jane will collect my basic personal information (name, email, phone, date of birth) in order to create my profile.</li>
                        <li>No clinical information will be collected at this stage.</li>
                        <li>All information is stored in accordance with Ontario PHIPA standards.</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-6">
                    <h2 className="text-lg md:text-xl font-bold text-green-700 mb-2">
                        3️⃣ Communication Consent
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>I consent to Blue Halo Health contacting me by:</li>
                    </ul>

                    <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                        <li>email</li>
                        <li>phone</li>
                        <li>SMS/text (optional checkbox if you want)</li>
                    </ul>

                    {/* <p className="text-gray-700 mt-4">
                        Contact may include appointment reminders, scheduling support, and relevant service updates.
                    </p> */}

                        <div className="flex mt-4  gap-2">
                        <input
                        //   onChange={handleChange}
                        // checked={check1} // ✅ use "checked" not "value"
                        ref={check1}
                        name="check1"
                        type="checkbox"
                        id="sms"
                        className="accent-green-600"
                        />
                        <label className="text-gray-700 text-sm text-left ">I agree to receive information about new services, group programs, or special rates at Blue Halo Health.</label>
                    </div>
                    {/* <p className="text-gray-700 mt-3">
                        I agree to receive information about new services, group programs, or special rates at Blue Halo Health.
                    </p> */}
                </div>

            {/* Button */}
            <div className="text-center mt-8">
                <div className="flex justify-center flex-wrap gap-4">


                <button 
                className=
                // {`${check1.current ? "" : "disabled"}
                 'bg-green-600 hover:bg-green-700 cursor-pointer text-white font-bold px-6 py-3 rounded-xl shadow-md w-full md:w-auto transition'
                //  `}
                 >
                I Agree - Continue to Jane
                </button>
                {/* <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-5 py-2 rounded-lg shadow w-full md:w-auto transition">
                    Join Waitlist
                </button> */}
                <CommingSoonBookButton classes={`w-full md:w-auto bg-white border !border-[#009C4A]  text-center  text-black  rounded-lg font-semibold 
                hover:bg-green-50 transition inline-block text-[15px] px-5 py-2 cursor-pointer`}  btnText={`Join Our Waitlist`} />
                </div>

                <div className="flex flex-col items-center gap-3 mt-6">
                <a href="/" className="text-sm text-gray-600 hover:text-gray-800 underline">
                    ← Back to Home Page
                </a>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                (Users who do not agree will be redirected back to the website.)
                </p>
            </div>
            </div>
        </div>
    </Layout>
    )
  }
