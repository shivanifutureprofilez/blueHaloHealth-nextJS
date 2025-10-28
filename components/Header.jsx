"use client";
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
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="bg-[#F7F4F0] sticky top-0 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-green-dark text-[22px] sm:text-[24px] font-bold"
          >
            BlueHaloHealth
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-[#00D967] font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <Button
              title="Book Free Consultation"
              className="button bg-green-dark text-[15px] px-5 py-2"
            />
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
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
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
          </ul>
          <div className="flex justify-left px-2 py-2">
            <Button
              title="Book Free Consultation"
              className="button bg-green-dark text-[14px] px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
