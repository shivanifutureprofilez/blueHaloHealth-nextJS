
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Events", href: "/events" },
    // { name: "Blogs", href: "/https://phpdemo.futureprofilez.com/wp/blue-halo-health-blog/" },
    // { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="bg-[#F7F4F0] sticky top-0 z-50  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-green-dark text-[24px] md:text-[26px] font-bold"
          >
            BlueHaloHealth
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 lg:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-[#00D967] font-medium transition"
              >
                {link.name}
              </Link>
            ))}
            <a href="https://phpdemo.futureprofilez.com/wp/blue-halo-health-blog/" className="text-gray-800 hover:text-[#00D967] font-medium transition">Blogs</a>
            <Link
                href='/contact-us'
                className="text-gray-800 hover:text-[#00D967] font-medium transition"
              >
                Contact
              </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden gap-4 lg:flex">
            <Button
              title="Book Free Consultation"
              className="button bg-green-dark text-[15px] px-5 py-2"
            />
            {/* <Button
              title="Patient Portal"
              className="button bg-green-dark text-[15px] px-5 py-2"
            /> */}
             <Link
                  // title="Patient Portal"
                  href="/"
                  className="bg-white border !border-[#009C4A]  text-center  text-black  rounded-lg font-semibold 
              hover:bg-green-50 transition inline-block text-[15px] px-5 py-2"
                  // onClick={() => setIsMobileMenuOpen(false)}
                  
                >
                Patient Portal
                </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {isMobileMenuOpen ? (
              <FiX
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl cursor-pointer text-gray-800"
              />
            ) : (
              <FiMenu
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-2xl cursor-pointer text-gray-800"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
          <div className="p-6 fixed md:relative top-[50px] w-full md:block">
            <div className=" rounded-2xl  w-full max-w-[100%]  lg:hidden bg-white shadow-lg border-t border-gray-100">
              <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-800 font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block hover:text-[#00D967] transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <a href="https://phpdemo.futureprofilez.com/wp/blue-halo-health-blog/" className="block hover:text-[#00D967] transition">Blogs</a>
                <Link
                    href='/contact-us'
                    className="block hover:text-[#00D967] transition"
                  >
                    Contact
                  </Link>
              </ul>
              <div className="p-4 grid gap-2 justify-left ">
                <Button
                  title="Book Free Consultation"
                  className="button w-full bg-green-dark text-[14px] px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <Link
                  // title="Patient Portal"
                  href="/"
                  className=" text-center w-full border border-green-600 text-green-600  rounded-lg font-semibold  w-full hover:bg-green-50 transition inline-block text-[14px] px-4 py-2"
                  // onClick={() => setIsMobileMenuOpen(false)}
                  
                >
                Patient Portal
                </Link>

              </div>
            </div>
          </div>        
      )}
    </header>
  );
}

export default Header;
