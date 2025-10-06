import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTools,
  FaTruckMoving,
  FaPaintRoller,
  FaCouch,
} from "react-icons/fa";
import Link from "next/link";
import "@/app/globals.css";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-black text-gray-200 pt-14 pb-8 overflow-hidden">
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/patterns/luxury-pattern.svg')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-14 h-14 mr-3" />
            <span
              className="text-2xl font-bold text-white uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kothi India
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            At Kothi India, we redefine luxury living with premium home
            improvement and renovation solutions. Our dedicated team ensures
            excellence, elegance, and trust in every project.
          </p>
          <div className="flex space-x-4 mt-6 text-lg">
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/kothiindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
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

        {/* Our Services with Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-b border-gray-700 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaTools className="text-[#b04400]" />
              <Link href="service" className="hover:text-white">
                Renovation
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaTruckMoving className="text-[#b04400]" />
              <Link href="service" className="hover:text-white">
                Packers & Movers
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaPaintRoller className="text-[#b04400]" />
              <Link href="service" className="hover:text-white">
                Painting Services
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaCouch className="text-[#b04400]" />
              <Link href="service" className="hover:text-white">
                Interior Design
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaTools className="text-[#b04400]" />
              <Link href="service" className="hover:text-white">
                Home Inspections
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaTools className="text-[#b04400]" />
              <Link href="service" className="hover:text-white">
                Home Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-b border-gray-700 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#b04400]" />
              Electronic City, Bangalore
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b04400]" />
              <Link href="tel:+919972225551" className="hover:text-white">
                +91 9972225551
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#b04400]" />
              <Link
                href="mailto:service@kothiindia.com"
                className="hover:text-white"
              >
                service@kothiindia.com
              </Link>
            </li>
          </ul>

          {/* WhatsApp CTA */}
          <div className="flex items-center mt-6 bg-black-100 text-white rounded-lg px-4 py-2 w-max hover:bg-[#a03300] transition cursor-pointer shadow-lg">
            <FaWhatsapp size={28} className="mr-2 text-green-400" />
            <Link
              href="https://wa.me/919972225551"
              target="_blank"
              className="font-medium hover:text-gray-200"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span
          className="text-[#b04400] font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Kothi India
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
