"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "@/app/globals.css";
import Popup from "../PopupBox/popup";
import ContactForm from "@/app/component/Form/Cxform"; // ✅ Import reusable form

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // (optional) if you want to check auth token later
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const navItems = [
    { tab: "Home", destination: "/" },
    { tab: "Services", destination: "/service" },
    { tab: "Deals", destination: "/deals" },
  ];

  const handleNavClick = (destination: string) => {
    setIsOpen(false);
    if (destination === "/Contact") {
      setShowPopup(true);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-40 backgroundcolor">
        <div className="flex items-center justify-between px-6 md:px-16 lg:py-2 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-end">
            <Image src="/logo.png" width={110} height={90} alt="brandlogo" />
            <span className="ml-3 lg:text-[50px] text-[54px] textcolor uppercase leading-none navbar-logo">
              Kothi INDIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 font-medium">
  {navItems.map((navItem, index) => (
    <li key={index}>
      <Link
        onClick={() => handleNavClick(navItem.destination)}
        href={navItem.destination}
        className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-white hover:bg-[#FE904E] transition"
      >
        {navItem.tab}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setShowPopup(true)}
                className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-white hover:bg-[#FE904E] transition"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white relative w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white absolute top-2 left-1/2 -translate-x-1/2 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white absolute top-4 left-1/2 -translate-x-1/2 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white absolute top-6 left-1/2 -translate-x-1/2 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="flex flex-col gap-4 px-6 pb-4 font-medium text-white lg:hidden">
            {token && (
              <li>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center justify-between w-full px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all"
                >
                  <span>Profile</span>
                  {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </li>
            )}
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  onClick={() => handleNavClick(navItem.destination)}
                  href={navItem.destination}
                  className="block px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all"
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
                className="block px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Popup Modal */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <ContactForm onSuccess={() => setShowPopup(false)} />
      </Popup>
    </>
  );
}

export default Navbar;
