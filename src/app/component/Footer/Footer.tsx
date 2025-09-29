import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import "@/app/globals.css";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-11">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-35">
        {/* Company Info */}
        <div className="flex flex-col items-start">
          <div className="flex items-end mb-4">
            <img src="/logo.png" alt="Logo" className="w-18 h-18 mr-2" />
            <span className="text-xl textcolor navbar-logo uppercase">
              Kothi India
            </span>
          </div>
          <p className="text-gray-400 mb-6 mt-4">
            With a skilled and experienced team and a strong client-first
            mindset, Kothi India is setting new standards in home improvement
            and aims to become a trusted name in the Indian renovation
            landscape.
          </p>
          <div className="flex space-x-4 mt-4 text-[1.5em]">
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a
              href="https://script.google.com/macros/s/AKfycbzD_w93Eys0tlYNV6W_FauHgZr3U7rQyDsuVGzEacZEeFAcrRZometOPjDeCT38e_Ggbg/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/kothiindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 mt-22">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/refund-policy" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 mt-22">Contact Us</h3>
          <p>Electronic City, Bangalore</p>
          <p>
            Phone:{" "}
            <Link href="tel:+919972225551" className="hover:text-white">
              +91 9972225551
            </Link>
          </p>
          <p>
            Email:{" "}
            <Link
              href="mailto:service@kothiindia.com"
              className="hover:text-white"
            >
              service@kothiindia.com
            </Link>
          </p>
          <div className="flex items-center mt-4 bg-white text-gray-900 rounded-lg px-4 py-2 w-max hover:bg-gray-100 transition cursor-pointer">
            <FaWhatsapp size={32} className="mr-2 text-green-500" />
            <Link
              href="https://wa.me/919972225551"
              target="_blank"
              className="font-medium hover:text-green-600"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#b04400]">Kothi India</span>. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
