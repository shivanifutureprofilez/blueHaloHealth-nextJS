import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { Toaster } from "react-hot-toast";

function Footer({bg,text}) {
  return (
    <div>
    <footer className={`py-8 px-4 ${bg} `}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start min-w-[180px]">
          <div className="flex items-center space-x-2 mb-2">
            {/* <img src="/logo.svg" alt="Furnixar" className="h-8 w-8" /> */}
            <span className={`text-2xl font-bold ${text}`}>BlueHaloHealth</span>
          </div>
          <p className={`text-xs max-w-[180px] ${text}`}>
            Comprehensive therapy and support for children, teens, adults with autism, speech delays and developmental challenges.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-0">
          <div className="px-6 border-r border-dotted border-gray-300">
            <h4 className={`font-bold mb-2 ${text}`}>Quick Links</h4>
            <ul className={`space-y-1 text-xs text-gray-300 `} >
              <li>Services</li>
              <li>Ages</li>
              <li>Resources</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div className="px-6 border-r border-dotted border-gray-300">
            <h4 className={`font-bold mb-2 ${text}`} >Contact Info</h4>
            <ul className={`space-y-1 text-xs flex flex-col text-gray-300`}>
              <li className="flex items-center gap-2"><IoLocationOutline size={16}/>123, Therapy Lane</li>
              <li className="flex items-center gap-2"><CiPhone size={16} /> 9876543218</li>
              <li className="flex items-center gap-2"><IoMailOpenOutline size={16} /> hello@blueHaloHealth.com</li>
            </ul>
          </div>
          {/* Shop */}
          <div className="px-6 border-r border-dotted border-gray-300">
            <h4 className={`font-bold mb-2 ${text}`}>Connect With Us</h4>
            <ul className={`space-y-1 text-xs text-gray-300`}>
              <li> <div className="flex gap-2"> <FaFacebookF/>  <FaTwitter/> <FaInstagram/> <FaLinkedinIn/></div></li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */} 
      <div className={`mt-8 text-center text-xs ${text}`}>
        © 2025 BlueHaloHealth Develop with <FaHeart className="inline text-red-500 mx-1" /> By FutureProfilez Pvt. Ltd.
      </div>
    </footer>
    <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
  )
}

export default Footer;