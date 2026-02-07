// import React, { useEffect, useState } from 'react'

// import Link from 'next/link'

// import Popup from './Popup';
// import AdminRoutes from '@/pages/api/AdminRoutes';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/router';
// import { useParams } from 'next/navigation';


// export default function Popup1({ classes, action, btnText }) {

//     const router = useRouter();
//     const [messageSent, setMessageSent] = useState(false);
//     const [items, setItems] = useState({
//         email: "",
//     });


//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setItems(values => ({ ...values, [name]: value }));
//     }
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = (e) => {
//         try {
//             e.preventDefault();
//             if (!items.email) {
//                 toast.error("Email is required");
//                 return false;
//             }
//             setLoading(true);
//             const lists = new AdminRoutes();
//             const data = lists.addtoWaitlist(items);
//             data.then((res) => {
//                 toast.success("Our Team Will Contact You Soon");
//                 router.push("/");
//                 setItems({
//                     email: "",
//                 });
//                 setMessageSent(true);
//                 setLoading(false);
//             }).catch((err) => {
//                 console.error("Error:", err);
//                 toast.error("Something went wrong");
//                 setLoading(false);
//             });
//         } catch (error) {
//             console.error("Error:", error);
//             toast.error("Something went wrong");
//             setLoading(false);
//         }
//     };
//     return (
//         <Popup action={action} size='max-w-[700px] max-h-[900px] h-full' bg="bg-green-50" space={"p-6 md:p-10"} btnclasses={classes || 'button cursor-pointer'} btntext={btnText || "Book Free Consultation"} >
//             {/* <div className="space-y-3 text-black text-medium  p-4 rounded-lg">
//                 <p>Hello, thank you for contacting Blue Halo Health.</p>
//                 <p>
//                     Bookings are currently unavailable at <strong>Blue Halo Health</strong>.
//                     We’ll reopen this service in a few weeks.
//                 </p>
//                 <p>
//                     In the meantime, you can reach us through our contact form:
//                     {' '}
//                     <Link
//                         href="https://blue-halo-health-next-js.vercel.app/contact-us"
//                         className="text-sky-600 hover:underline font-medium"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         bluehalohealth.com/contact
//                     </Link>
//                 </p>
//             </div> */}
//             {/* <div className="flex flex-col w-full items-center justify-center text-center p-6  rounded-2xl  shadow-md max-w-md mx-auto"> */}
//             <div className=" p-4 rounded-[20px]  md:p-8">
//                 {messageSent ?
//                     <div className='thankyou-wrap min-h-[300px] flex items-center justify-center'>
//                         <div className="flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-2xl shadow-md max-w-md mx-auto">
//                             <h2 className="text-2xl font-extrabold text-green-600 mb-3">Thank You!</h2>
//                             <p className="text-gray-700 leading-relaxed">


//                             </p>
//                         </div>
//                     </div>

//                     :
//                     <>
//                         <h2 className="text-2xl md:text-3xl text-center font-extrabold mt-3  text-green-600 mb-3">Book a Free Intake Consultation</h2>
//                         <p className="text-gray-700 text-sm md:text-lg leading-relaxed italic text-center px-4">
//                             We will listen, understand your needs, guide you through registration,
//                             and book your first appointment - all at no cost.
//                         </p>

//                         <div className="mt-6 space-y-4 text-center">

//                             <p className="text-sm md:text-lg font-medium text-gray-800">
//                                 Please choose your preferred communication method:
//                             </p>


//                             <div className="flex flex-col  space-y-1">
//                                 <span className="text-base md:text-lg font-semibold text-gray-900">
//                                      Call us at: <span className="font-bold">xxxxxxxxxxx</span>
//                                 </span>

//                                 {/* <button className="mt-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition text-sm md:text-base shadow-sm">
//                                     Request a Call-Back
//                                 </button> */}
//                             </div>


//                             <p className="text-sm md:text-base text-gray-700">
//                                  We accept Video Relay Service (VRS)
//                             </p>
//                             <Link href={'/booking'} className="w-full md:w-auto px-5 py-2 rounded-lg border border-green-600 text-green-700 font-semibold hover:bg-green-50  text-sm md:text-base shadow-sm">
//                                 Book in Jane App
//                             </Link>

//                             <p className="text-xs md:text-sm text-gray-600 pt-4 ">
//                                 Alternative formats available on <Link href={'/contact-us'} className='text-green-dark'>Contact Us</Link> Page.
//                             </p>
//                         </div>

//                             {/* <form className="mt-6 " onSubmit={handleSubmit}>

//                                 <div className='flex justify-center items-center gap-4'>
//                                     {/* <label className="text-sm md:text-lg font-medium  block mb-2">Email</label> */}
//                                     {/* <input
//                                         type="email"
//                                         onChange={handleChange}
//                                         value={items?.email}
//                                         name='email'
//                                         placeholder="Enter Your Email Id"
//                                         className=" w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
//                             focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
//                                     />
//                                 </div>
//                                 <button
//                                     onClick={handleSubmit}
//                                     type="submit"
//                                     disabled={loading}
//                                     className=" bg-[#009C4A] cursor-pointer w-full md:w-[160px] button flex justify-center items-center mx-auto   mt-6    py-3"
//                                 >
//                                     {loading ? "Loading..." : "Join Waitlist"}
//                                 </button>
//                             </form> */} 

//                     </>
//                 }
//             </div>
//             {/* </div> */}
//         </Popup>
//     )
// }
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Popup from './Popup';
import AdminRoutes from '@/pages/api/AdminRoutes';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { FaPhone, FaVideo, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

export default function Popup1({ classes, action, btnText }) {
    const router = useRouter();
    const [messageSent, setMessageSent] = useState(false);
    const [items, setItems] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (!items.email) {
                toast.error("Email is required");
                return false;
            }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = lists.addtoWaitlist(items);
            data.then((res) => {
                toast.success("Our Team Will Contact You Soon");
                router.push("/");
                setItems({
                    email: "",
                });
                setMessageSent(true);
                setLoading(false);
            }).catch((err) => {
                console.error("Error:", err);
                toast.error("Something went wrong");
                setLoading(false);
            });
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
            setLoading(false);
        }
    };

    return (
        <Popup
            action={action}
            size='max-w-[550px]'
            bg="bg-white"
            space={"p-0"}
            btnclasses={classes || 'button cursor-pointer'}
            btntext={btnText || "Book Free Consultation"}
        >
            <div className="relative">
                {messageSent ? (
                    <div className='min-h-[300px] flex items-center justify-center p-6'>
                        <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <FaCheckCircle className="text-green-600 text-4xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
                            <p className="text-gray-600 text-sm">
                                We've received your request and will be in touch soon.
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Header Section with Gradient Background */}
                        <div className="bg-gradient-to-r from-[#009C4A] to-[#00B856] text-white p-5 md:p-6 rounded-t-[20px]">
                            <div className="text-center">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">
                                    Book a Free Consultation
                                </h2>
                                <p className="text-green-50 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                                    We'll listen, understand your needs, and guide you through registration - all at no cost.
                                </p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-5 md:p-6">
                            {/* <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-4">
                                Choose Your Preferred Method
                            </h3> */}

                            <h3 className='text-base md:text-lg font-bold text-gray-800 text-center mb-4'>Opening this Spring 2026. We are currently accepting expressions of interest. You will be added to our waitlist. Please use the <Link
                                    href={'/contact-us'}
                                    className='text-[#009C4A] font-semibold hover:underline'
                                >Contact Us</Link> form.</h3>

                            {/* Contact Options Grid */}
                            {/* <div className="space-y-3 mb-5">
                                <div className="group bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-[#009C4A] rounded-xl p-4 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-[#009C4A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <FaPhone className="text-white text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-gray-800 mb-1">Call Us Directly</h4>
                                            <a 
                                                href="tel:xxxxxxxxxxx" 
                                                className="text-lg font-bold text-[#009C4A] hover:text-[#007A3A] transition-colors"
                                            >
                                                xxx-xxx-xxxx
                                            </a>
                                            <p className="text-xs text-gray-600 mt-1">
                                                Mon - Fri, 9AM - 5PM
                                            </p>
                                        </div>
                                    </div>
                                </div> */}

                            {/* VRS Option */}
                            {/* <div className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:border-blue-500 rounded-xl p-4 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <FaVideo className="text-white text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-gray-800 mb-1">Video Relay Service (VRS)</h4>
                                            <p className="text-xs text-gray-600">
                                                We accept Video Relay Service (VRS) calls for Deaf, hard-of-hearing, and speech-impaired clients.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}

                            {/* Jane App Booking */}
                            {/* <div className="group bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 hover:border-purple-500 rounded-xl p-4 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <FaCalendarAlt className="text-white text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-gray-800 mb-2">Online Booking</h4>
                                            <Link 
                                                href={'/booking'} 
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white text-xs font-semibold rounded-full hover:bg-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
                                            >
                                                Book in Jane App
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                        </div>

                        {/* Footer Note */}
                        {/* <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                            <p className="text-xs text-gray-600">
                                Need alternative formats? Visit our{' '}
                                <Link
                                    href={'/contact-us'}
                                    className='text-[#009C4A] font-semibold hover:underline'
                                >
                                    Contact Us
                                </Link>
                                {' '}page.
                            </p>
                        </div> */}
                        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                            <p className="text-xs text-gray-600">
                                Visit our{' '}
                                <Link
                                    href={'/contact-us'}
                                    className='text-[#009C4A] font-semibold hover:underline'
                                >
                                    Contact Us
                                </Link>
                                {' '}page now.
                            </p>
                        </div>
                   
            </>
                )}
        </div>
        </Popup >
    )
}