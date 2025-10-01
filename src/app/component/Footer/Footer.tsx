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
    <footer className="bg-gray-900 text-gray-200 pt-14 pb-8 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-14 h-14 mr-3" />
            <span className="text-2xl font-bold text-white uppercase tracking-wide">
              Kothi India
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            With a skilled and experienced team and a strong client-first
            mindset, Kothi India is setting new standards in home improvement
            and aims to become a trusted name in the Indian renovation
            landscape.
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
            <a href="https://www.instagram.com/kothiindia/" target="_blank">
              <FaInstagram className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
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

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaTools className="text-[#b04400]" /> Renovation
            </li>
            <li className="flex items-center gap-2">
              <FaTruckMoving className="text-[#b04400]" /> Packers & Movers
            </li>
            <li className="flex items-center gap-2">
              <FaPaintRoller className="text-[#b04400]" /> Painting Services
            </li>
            <li className="flex items-center gap-2">
              <FaCouch className="text-[#b04400]" /> Interior Design
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
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
          <div className="flex items-center mt-6 bg-white text-gray-900 rounded-lg px-4 py-2 w-max hover:bg-gray-100 transition cursor-pointer shadow-md">
            <FaWhatsapp size={28} className="mr-2 text-green-500" />
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
      <div className="relative z-10 mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#b04400] font-semibold">Kothi India</span>. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
