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
    { name: "Services", href: "/shop" },
    { name: "About", href: "/portfolio" },
    { name: "Resources", href: "/contact-us" },
    { name: "Events", href: "/cart" },
    { name: "Contact", href: '/login' },
    //{ name: "Register", href: '/register' },
  ];

  return (
      <div className="flex !bg-white !z-[99] rounded-tr-xl rounded-tl-xl  justify-center sticky top-0  w-full">
        <div className="flex items-center gap-24 px-2 md:px-8 py-1 md:py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* <span className="block text-2xl font-bold text-gray-800"> */}
            <Link href='/' className="text-green-dark text-[24px] font-semibold">
              {/* <img className="max-w-[230px] w-[230px]" src='/logo.png'/> */}
              BlueHaloHealth
            </Link>
            {/* </span> */}
          </div>

          <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold">
            {navLinks && navLinks?.map((link) => (
              <li key={link.name}>
                <Link href={link?.href} className="text-black hover:text-[#00D967]">
                  {link?.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Button title={"Book Free Consultation"} className={`button bg-green-dark`} />
          </div>


          <div className="md:hidden">
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


            {/* <div className="flex items-center space-x-4 mt-4">
                {/* <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" /> */}
            {/* <Link to="/myprofile"> <CgProfile  className="text-xl cursor-pointer hover:text-yellow-600" /></Link>
                <Link to="/cart"> <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" /></Link> */}
            {/* <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" /> */}
            {/* </div> */} */
          </div>
        )}
      </div>
  );
}

export default Header;