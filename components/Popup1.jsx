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
                            <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-4">
                                Choose Your Preferred Method
                            </h3>

                            {/* Contact Options Grid */}
                            <div className="space-y-3 mb-5">
                                {/* Phone Option */}
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
                                </div>

                                {/* VRS Option */}
                                <div className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:border-blue-500 rounded-xl p-4 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <FaVideo className="text-white text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-gray-800 mb-1">Video Relay Service (VRS)</h4>
                                            <p className="text-xs text-gray-600">
                                                We accept VRS calls for deaf and hard-of-hearing clients
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Jane App Booking */}
                                <div className="group bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 hover:border-purple-500 rounded-xl p-4 transition-all duration-300 hover:shadow-lg">
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
                                </div>
                            </div>

                            {/* Footer Note */}
                            <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
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
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Popup>
    )
}