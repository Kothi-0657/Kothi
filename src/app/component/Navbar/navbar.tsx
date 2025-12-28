"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "@/app/globals.css";
import Popup from "../PopupBox/popup";
import ContactForm from "@/app/component/Form/Cxform";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const navItems = [
    { tab: "Home", destination: "/" },
    { tab: "Services", destination: "/service" },
    { tab: "Deals", destination: "/deals" },
    { tab: "Gallery", destination: "/Gallerypage" },
    { tab: "Blog", destination: "/blog" },
  ];

  const handleNavClick = (destination: string) => {
    setIsOpen(false);
    if (destination === "#Contact-popup") setShowPopup(true);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-gray-900/95 to-gray-800/90 shadow-lg">
        <div className="flex items-center justify-between px-2 md:px-11 py-2">
          {/* Logo + Brand (unchanged) */}
          <Link href="/" className="flex items-end">
            <Image src="/logo.png" width={90} height={90} alt="brandlogo" />
            <span className="ml-3 lg:text-[40px] text-[40px] textcolor uppercase leading-none navbar-logo">
              Kothi INDIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 font-medium mb-0">
            {navItems.map((navItem, idx) => (
              <li key={idx} className="relative group">
                <Link
                  onClick={() => handleNavClick(navItem.destination)}
                  href={navItem.destination}
                  className="px-4 py-2 text-white font-semibold relative transition-all duration-300"
                >
                  {navItem.tab}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#FE904E] to-[#FDBA74] rounded-full transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setShowPopup(true)}
                className="px-5 py-2 font-semibold text-white border-2 border-[#FE904E] rounded-md
                          hover:shadow-[0_0_20px_rgba(254,144,78,0.7)]
                          hover:bg-white/10 transition-all duration-300"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative w-8 h-8 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block absolute w-6 h-0.5 bg-white left-1/2 -translate-x-1/2 transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : "top-2"
              }`}
            />
            <span
              className={`block absolute w-6 h-0.5 bg-white left-1/2 -translate-x-1/2 transition-opacity ${
                isOpen ? "opacity-0" : "top-4"
              }`}
            />
            <span
              className={`block absolute w-6 h-0.5 bg-white left-1/2 -translate-x-1/2 transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : "top-6"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col gap-4 px-6 pb-4 font-medium text-white">
            {token && (
              <li>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gradient-to-r hover:from-[#FE904E] hover:to-[#FDBA74] transition-all duration-300 rounded-md"
                >
                  <span>Profile</span>
                  {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </li>
            )}
            {navItems.map((navItem, idx) => (
              <li key={idx}>
                <Link
                  onClick={() => handleNavClick(navItem.destination)}
                  href={navItem.destination}
                  className="block px-4 py-2 hover:bg-gradient-to-r hover:from-[#FE904E] hover:to-[#FDBA74] transition-all duration-300 rounded-md"
                >
                  {navItem.tab}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setShowPopup(true);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 hover:bg-gradient-to-r hover:from-[#FE904E] hover:to-[#FDBA74] transition-all duration-300 rounded-md"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Popup */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <ContactForm onSuccess={() => setShowPopup(false)} />
      </Popup>
    </>
  );
}

export default Navbar;
