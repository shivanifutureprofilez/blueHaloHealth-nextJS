import React, { useEffect, useState } from 'react'
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa";
import RoutesLists from '../api/RoutesLists';
import toast from 'react-hot-toast';

function ContactForm() {
  const [items, setItems] = useState({
    fullName: "",
    age: "",
    phone: "",
    email: "",
    message: "",
    smsCheckbox: false, // default unchecked

  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setItems((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [selectedService, setSelectedService] = useState(null);

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(items.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (selectedService == undefined || selectedService == '' || selectedService == null) {
      toast.error("Please choose a service.");
      return;
    }
    if (items.message == '' || items.message == null || items.message == undefined) {
      toast.error("Message can not be empty.");
      return;
    }
    if (items.message.length < 20) {
      toast.error("Message can not be too short. Type at least 20 characters.");
      return;
    }

    setLoading(true);
    const lists = new RoutesLists();
    const response = lists.getEnquiry({ ...items, service: selectedService });
    response.then((res) => {
      if (res.data?.status) {
        toast.success(res.data.message);
        setItems({
          fullName: "",
          age: "",
          phone: "",
          service: "",
          email: "",
          message: "",
          smsCheckbox: false,
        });
        setMessageSent(true);
      } else {
        toast.error(response.data.message);
      }
      setLoading(false);
    }).catch((err) => {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
    })
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
    <div className="bg-[#F7F4F0] py-[20px] md:py-[40px] lg:py-[60px]  ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className=' md:p-4 '>
            <div className='bg-white p-4 rounded-[20px]'>

              <h2 className="font-bold text-2xl mb-4 text-left text-black">Contact us</h2>
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
          {/* Message Form */}
          <div className="bg-[#E6EBE3] p-4 rounded-[20px] shadow md:p-8">
            {messageSent ?
              <div className='thankyou-wrap min-h-[300px] flex items-center justify-center'>
                <div className="flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-2xl shadow-md max-w-md mx-auto">
                  <h2 className="text-2xl font-extrabold text-green-600 mb-3">Thank You!</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We appreciate your interest in <span className="font-semibold text-green-700">Blue Halo Health</span>.
                    Our team has received your enquiry and will get back to you shortly with the information you need.
                  </p>
                </div>
              </div>
              :
              <>
                <h2 className="font-bold text-2xl mb-3 md:mb-6 text-black flex items-center gap-2">
                  <FaPaperPlane className="text-green-600" /> Send Us a Message
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input onChange={handleChange}
                    value={items?.fullName}
                    name='fullName'
                    required
                    type="text" placeholder="Full Name" className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />

                  <input onChange={handleChange}
                    value={items?.age}
                    name='age'
                    type="number" placeholder="Age" required className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) {
                          handleChange({
                            target: { name: "phone", value },
                          });
                        }
                      }}
                      value={items.phone}
                      name="phone"
                      maxLength={10}
                      minLength={10}
                      type="text"
                      placeholder="Phone number"
                      className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none"
                    />

                    <input onChange={handleChange}
                      value={items?.email}
                      name='email'
                      type="Email"
                      placeholder="Email"
                      required
                      className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />
                  </div>
                  <div>
                    <select onChange={(e) => setSelectedService(e.target.value)} className='bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none'>
                      <option  className='text-gray-400' value="" >Choose a Service</option>
                      {ageGroupsLists && ageGroupsLists.map((age, i) => {
                        return <>
                          {age && age?.services.map((s, i) => {
                            return <option value={`${s.name} - (${age.title})`} >{s.name} - ({age.title})</option>
                          })}
                        </>
                      })}
                    </select>
                  </div>
                  <textarea onChange={handleChange}
                    value={items?.message}
                    name='message'
                    placeholder="Message" rows={3} className="bg-white rounded-lg border border-gray-300 px-4 py-3 w-full outline-none" />


                  <div className="flex items-center gap-2">
                    <input
                      onChange={handleChange}
                      checked={items.smsCheckbox} // ✅ use "checked" not "value"
                      name="smsCheckbox"
                      type="checkbox"
                      id="sms"
                      className="accent-green-600"
                    />
                    <label className="text-gray-700 text-sm text-left">I agree to receive SMS / Text communication</label>
                  </div>


                  <button
                    type="submit"
                    disabled={loading} className="bg-green-dark text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition w-full mt-2">
                    {loading ? "Loading..." : "Submit Enquiry"}
                  </button>
                </form>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;