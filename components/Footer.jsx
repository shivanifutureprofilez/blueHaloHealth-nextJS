import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-[#31363F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">BlueHaloHealth</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive therapy and support for children, teens, and adults with autism,
              speech delays, and developmental challenges.
            </p>
            <p className="text-sm text-gray-300">
              PHIPA Compliant | Funding Options Available
            </p>
          </div>

          {/* Quick Links */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/services" className="">Services</Link></li>
                <li><Link href="/ages" className="">Ages</Link></li>
                <li><Link href="/resources" className="">Resources</Link></li>
                <li><Link href="/about" className="">About Us</Link></li>
                <li><Link href="/contact" className="">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">123 Therapy Lane, Toronto, ON M5V 3A8</p>
              <p className="text-gray-300 mb-2">(416) 555-BLUE</p>
              <p className="text-gray-300">hello@bluehalohealth.ca</p>
            </address>
          </div>

          {/* Connect With Us */}
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
            <div className="space-y-2">
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="block text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex justify-between items-center text-sm text-gray-400">
          <p>© 2025 BlueHaloHealth. All rights reserved.</p>
          <p className="italic">Designed By FutureProfilez Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;