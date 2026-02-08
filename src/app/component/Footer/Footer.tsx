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
  FaRegIdCard,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import "@/app/globals.css";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-black text-gray-200 pt-14 pb-8 overflow-hidden">
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/patterns/luxury-pattern.svg')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7.5xl mx-auto px-9 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-14 h-14 mr-3" />
            <span
              className="text-xl  text-white uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", color: "#bda79aff" }}
            >
              KothiIndia private Limited
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            At KothiIndia Pvt. Ltd., we redefine luxury living with premium home
            improvement and renovation solutions. Our dedicated team ensures
            excellence, elegance, and trust in every project.
          </p>
          <div className="flex space-x-9 mt-12 text-lg"> {/* size of icons */}
            <a href="https://www.linkedin.com/in/kothi-india-2538b238a/" className="hover:text-white transition">
              <FaLinkedinIn className="text-3xl hover:text-blue-400 transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580038401547" className="hover:text-white transition">
              <FaFacebookF className="text-3xl hover:text-blue-400 transition" />
            </a>
            <a href="https://x.com/Kothiindia" className="hover:text-white transition">
              <FaTwitter className="text-3xl hover:text-gray-500 transition" />
            </a>
            <a
              href="https://www.instagram.com/kothiindia/" className="hover:text-white transition">
              <FaInstagram className="text-3xl hover:text-orange-400 transition" />
            </a>
            <a href="https://www.youtube.com/@Kothiindia" className="hover:text-white transition">
              <FaYoutube className="text-3xl hover:text-red-800 transition" />
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
            <li>
              <Link href="/blog" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/Gallerypage" className="hover:text-white">
                Gallery
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
            <li className="flex items-center gap-3 font-semibold">
              KothiIndia Private Limited
            </li>
            <li className="flex items-center gap-3">
              <FaRegIdCard className="text-[#b04400]" />
              CIN : U43303JH2026PTC026867
            </li>
            <li className="flex items-center gap-3">
              <FaRegIdCard className="text-[#b04400]" />
              GST : AA200126025266T  
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#b04400]" />
              Main office - Kalpanapuri ,Jamshedpur, Jharkhand pincode:832109
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#b04400]" />
              Branch office - Sector 1 HSR Layout, Bangalore pincode:560106
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b04400]" />
              <Link href="tel:+919972225551" className="hover:text-white">
                +91 997 222 5551
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
          KothiIndia Private Limited ™
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
