import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

function Footer() {
  return (
    <div className="bg-[#2B333B] text-white py-10">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
         
          <div className="max-w-[700px]">
            <h3 className="text-2xl font-bold mb-4">BlueHaloHealth</h3>
            <p className="text-base text-gray-300 mb-4">
              Comprehensive therapy and support for children, teens, and adults with autism,
              speech delays, and developmental challenges.
            </p>
            <p className="text-sm text-white hover:text-white">
              PHIPA Compliant | Funding Options Available
            </p>
          </div>

         
          <div className="pl-0 lg:pl-18">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
           
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/service" className=" hover:text-white">Services</Link></li>
                {/* <li><Link href="/agegroups" className="">Ages</Link></li> */}
                {/* <li><Link href="/resources" className="">Resources</Link></li> */}
                <li><Link href="/about" className=" hover:text-white">About</Link></li>
                <li><Link href="/contact-us" className=" hover:text-white">Contact</Link></li>
                <li><Link href="https://phpdemo.futureprofilez.com/wp/blue-halo-health-blog/" className=" hover:text-white">Blogs</Link></li>
              </ul>
            
          </div>

          
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-base">
                            <li className="flex items-center gap-3 text-gray-300">
                              <span className="">
                                <IoLocationOutline size={20}  className="hover:text-white"/>
                              </span>
                              <span className="text-gray-300 hover:text-white">
                              320 Bay Street Toronto, ON M5H 4A6
                              </span>
                            </li>
                            {/* <li className="flex items-center gap-3 text-gray-300 ">
                              <span className="">
                                <CiPhone size={20}  className="hover:text-white"/>
                              </span>
                              <a href="tel:9876543218" className="text-gray-300  hover:text-white">
                              (416) 555-BLUE
                              </a>
                            </li> */}
                            <li className="flex items-center hover:cursor-default gap-3 hover:text-white">
                              <span className="">
                                <IoMailOpenOutline size={20}  className="text-gray-300 hover:text-white"/>
                              </span>
                              <a href="mailto:hello@bluehalohealth.com" className="text-gray-300 hover:text-white">
                                info@bluehalohealth.com 
                              </a>
                            </li>
                          </ul> 
              {/* <p className="text-gray-300 mb-2">123 Therapy Lane, Toronto, ON M5V 3A8</p>
              <p className="text-gray-300 mb-2">(416) 555-BLUE</p>
              <p className="text-gray-300">hello@bluehalohealth.ca</p> */}
           
          </div>

          
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <Link href="/privacy/policy" className=" text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/privacy/policy" className=" text-gray-300 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/aoda" className=" text-gray-300 hover:text-white">
                AODA
              </Link>
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-700 mt-4 pt-4 md:flex justify-center md:justify-center gap-10 lg:justify-between  md:items-center text-sm text-white">
          <p className="">©2025 BlueHaloHealth. All rights reserved.</p>
          <p className=" pt-2 md:pt-0 ">Developed By <a href="https://futureprofilez.com/" target="_blank">FutureProfilez Pvt. Ltd.</a></p>
        </div>
      </div>
    </div>
  )
};

export default Footer;