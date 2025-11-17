import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import Popup from './Popup';
import AdminRoutes from '@/pages/api/AdminRoutes';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';


export default function CommingSoonBookButton({ classes, action, btnText }) {

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
        <Popup action={action} size='max-w-[700px] max-h-[900px] h-full' bg="bg-green-50" space={"p-6 md:p-10"} btnclasses={classes || 'button cursor-pointer'} btntext={btnText || "Book Free Consultation"} >
            {/* <div className="space-y-3 text-black text-medium  p-4 rounded-lg">
                <p>Hello, thank you for contacting Blue Halo Health.</p>
                <p>
                    Bookings are currently unavailable at <strong>Blue Halo Health</strong>.
                    We’ll reopen this service in a few weeks.
                </p>
                <p>
                    In the meantime, you can reach us through our contact form:
                    {' '}
                    <Link
                        href="https://blue-halo-health-next-js.vercel.app/contact-us"
                        className="text-sky-600 hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        bluehalohealth.com/contact
                    </Link>
                </p>
            </div> */}
            {/* <div className="flex flex-col w-full items-center justify-center text-center p-6  rounded-2xl  shadow-md max-w-md mx-auto"> */}
            <div className=" p-4 rounded-[20px]  md:p-8">
                {messageSent ?
                    <div className='thankyou-wrap min-h-[300px] flex items-center justify-center'>
                        <div className="flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-2xl shadow-md max-w-md mx-auto">
                            <h2 className="text-2xl font-extrabold text-green-600 mb-3">Thank You!</h2>
                            <p className="text-gray-700 leading-relaxed">
                                
                                
                            </p>
                        </div>
                    </div>

                    :
                    <>
                        <h2 className="text-2xl md:text-3xl text-center font-extrabold mt-3  text-green-600 mb-3">Join Our Waitlist!!</h2>
                        <p className="text-gray-700 text-sm md:text-lg leading-relaxed pb-6">
                            We appreciate your interest in <span className="font-semibold text-green-700">Blue Halo Health</span>.
                            Bookings are currently closed, but you can join our waitlist to be notified as soon as we reopen.
                            {/* We appreciate your interest in <span className="font-semibold text-green-700">Blue Halo Health</span>.
                    Bookings are currently unavailable at <strong>Blue Halo Health</strong>.
                    We’ll reopen this service in a few weeks.</p> */}
                            <p className='text-sm italic pt-4 md:text-lg'>
                                Enter your email below to join the waitlist and stay updated!</p>
                            {/* In the meantime, you can reach us through our contact form:
                    {' '}
                    <Link
                        href="https://blue-halo-health-next-js.vercel.app/contact-us"
                        className="text-sky-600 hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        bluehalohealth.com/contact
                    </Link> */}

                            <form className="mt-6 " onSubmit={handleSubmit}>

                                <div className='flex justify-center items-center gap-4'>
                                    {/* <label className="text-sm md:text-lg font-medium  block mb-2">Email</label> */}
                                    <input
                                        type="email"
                                        onChange={handleChange}
                                        value={items?.email}
                                        name='email'
                                        placeholder="Enter Your Email Id"
                                        className=" w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                    />
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    disabled={loading}
                                    className=" bg-[#009C4A] cursor-pointer w-full md:w-[160px] button flex justify-center items-center mx-auto   mt-6    py-3"
                                >
                                    {loading ? "Loading..." : "Join Waitlist"}
                                </button>
                            </form>
                        </p>
                    </>
                }
            </div>
            {/* </div> */}
        </Popup>
    )
}
