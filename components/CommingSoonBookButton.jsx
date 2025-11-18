import React, { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import Popup from './Popup';
import AdminRoutes from '@/pages/api/AdminRoutes';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import ContactForm from '@/pages/contact-us/ContactForm';
import RoutesLists from '@/pages/api/RoutesLists';


export default function CommingSoonBookButton({ classes, action, btnText }) {


    const check1 = useRef(null);
    const check2 = useRef(null);

    const router = useRouter();
    const [messageSent, setMessageSent] = useState(false);
    const [items, setItems] = useState({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        service: "",
        consent1: false,
        consent2: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setItems((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const [selectedService, setSelectedService] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        try {
            e.preventDefault();  
            if (!items.fullName || !items.email || !items.phone || !items.age || !consent1 || !consent2) {
                toast.error("All fields are required");
                return false;
            }
            if (selectedService == undefined || selectedService == '' || selectedService == null) {
                toast.error("Please choose a service.");
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(items.email)) {
                toast.error("Please enter a valid email address.");
                return;
            }
            setLoading(true);
            const lists = new AdminRoutes();
            const data = lists.addtoWaitlist({ ...items, service: selectedService });
            data.then((res) => {
                toast.success("Our Team Will Contact You Soon");
                router.push("/");
                setItems({
                    fullName: "",
                    email: "",
                    phone: "",
                    age: "",
                    service: "",
                    consent1: false,
                    consent2: false
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
    const [ageGroupsLists, setAgeGroupsLists] = useState([]);
    const fetchGroups = async () => {
        const lists = new RoutesLists();
        const data = lists.getAgeGroups();
        data.then((res) => {
            setAgeGroupsLists(res?.data?.ageGroupList || []);
        }).catch((err) => {
            setAgeGroupsLists([]);
            console.log("err", err)
        });
    }
    useEffect(() => {
        fetchGroups();
    }, []);
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
            <div className=" p-0 rounded-[20px]  md:p-8">
                {messageSent ?
                    <div className='thankyou-wrap min-h-[300px] flex items-center justify-center'>
                        <div className="flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-2xl shadow-md max-w-md mx-auto">
                            <h2 className="text-2xl font-extrabold text-green-600 mb-3">Thank You!!!</h2>
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
                        </p>



                        <form className=" " onSubmit={handleSubmit}>

                            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4'>
                                {/* <label className="text-sm md:text-lg font-medium  block mb-2">Email</label> */}
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={items?.fullName}
                                    name='fullName'
                                    placeholder="Enter Your Full Name"
                                    className=" w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    value={items?.email}
                                    name='email'
                                    placeholder="Enter Your Email Id"
                                    className=" w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    value={items?.phone}
                                    name='phone'
                                    placeholder="Enter Your Phone no"
                                    className=" w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    value={items?.age}
                                    name='age'
                                    placeholder="Enter Your Age"
                                    className=" w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <select onChange={(e) => setSelectedService(e.target.value)} className='bg-gray-50 border border-gray-300 rounded-lg mt-4 px-4 py-3 w-full outline-none text-gray-900 text-sm '>
                                    <option className='text-gray-300' value="" >Choose a Service</option>
                                    {ageGroupsLists && ageGroupsLists.map((age, i) => {
                                        return <>
                                            {age && age?.services.map((s, i) => {
                                                return <option value={`${s.name} - (${age.title})`} >{s.name} - ({age.title})</option>
                                            })}
                                        </>
                                    })}
                                </select>
                            </div>
                            <div className="flex items-center pt-4 gap-2">
                                <input
                                    onChange={handleChange}
                                    checked={items.consent1} 
                                    name="consent1" ref={check1}
                                    type="checkbox"
                                    id="consent1"
                                    className="accent-green-600"
                                />
                                <label className="text-gray-700 text-sm text-left">I consent to being placed on the Blue Halo Health waitlist.</label>
                            </div>
                            <div className="flex items-center pt-2 gap-2">
                                <input
                                    onChange={handleChange}
                                    checked={items.consent2} 
                                    name="consent2" ref={check2}
                                    type="checkbox"
                                    id="consent2"
                                    className="accent-green-600"
                                />
                                <label className="text-gray-700 text-sm text-left">I consent to being contacted when appointments open.</label>
                            </div>
                            <button 
                                onClick={handleSubmit}
                                type="submit"
                                disabled={loading}
                                className={`${check1.current?.checked && check2.current?.checked ? "" : "disabled"} bg-[#009C4A] cursor-pointer w-full md:w-[160px] button flex justify-center items-center mx-auto   mt-6    py-3`}
                            >
                                {loading ? "Loading..." : "Join Waitlist"}
                            </button>
                        </form>

                    </>
                }
            </div>
            {/* </div> */}
        </Popup >
    )
}
