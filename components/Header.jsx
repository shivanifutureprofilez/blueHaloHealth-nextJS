import { FiSearch, FiHeart, FiShoppingCart, FiMoon, FiMenu, FiX } from "react-icons/fi";

import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Pages", href: "/pages" },
    { name: "Services", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: '/contact-us' },
    // { name: "AgeGroups", href: '/agegroups'}
    //{ name: "Register", href: '/register' },
  ];

  return (
    <div className="bg-[#F7F4F0] ">
      <div className="container mx-auto">
        <div className="flex !z-[99] rounded-tr-xl rounded-tl-xl  justify-center sticky top-0  w-full">
          <div className="w-full flex items-center   py-4  justify-between">
            {/* Logo */}
            <div className=" flex items-center  justify-between">
              {/* <span className="block text-2xl font-bold text-gray-800"> */}
              <Link href='/' className="text-green-dark text-[24px] font-bold ">
                {/* <img className="max-w-[230px] w-[230px]" src='/logo.png'/> */}
                BlueHaloHealth
              </Link>


              <div className="lg:hidden">
              {isMobileMenuOpen ? (
                <FiX
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ) : (
                <FiMenu
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(true)}
                />
              )}
            </div>
              {/* </span> */}
            </div>

              <ul className="hidden lg:flex space-x-13 text-gray-700 font-semibold">
                {navLinks && navLinks?.map((link) => (
                  <li key={link.name}>
                    <Link href={link?.href} className="text-black hover:text-[#00D967]">
                      {link?.name}
                    </Link>
                  </li>
                ))}
                
              </ul>
              <div className="hidden lg:flex items-center">
              <Button title={"Book Free Consultation"} className={`button bg-green-dark text-[14px] md:text-[16px]`} />
            </div> 
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4">
            <ul className="space-y-4 text-gray-700 font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block hover:text-yellow-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>


      <div className="flex justify-center items-center space-x-4 mt-4">
                <div className="flex items-center">
              <Button title={"Book Free Consultation"} className={`button bg-green-dark text-[14px] md:text-[16px]`} />
            </div> 
     </div> 
       </div> 
       ) 
       }
    </div>
  );
}

export default Header;