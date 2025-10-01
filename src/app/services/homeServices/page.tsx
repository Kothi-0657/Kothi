"use client";

import React, { useState } from "react";
import { FaHome, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactForm from "@/app/component/Form/Cxform";

export default function HomeServicesPage() {
  const [showForm, setShowForm] = useState(false);

  const features = [
    "Plumbing, electrical & carpentry work",
    "Deep cleaning & pest control",
    "Painting & waterproofing",
    "AC repair & appliance servicing",
    "All home services under one roof",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff6f3c]"></div>
      <div className="absolute inset-0 bg-[url('/patterns/geometry.svg')] opacity-10"></div>

      {/* Overlay */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-white text-center py-16 px-4 bg-gradient-to-r from-[#b04400] via-[#ff7b3d] to-[#b04400] shadow-lg">
          <FaHome className="mx-auto text-6xl mb-6 drop-shadow-lg animate-bounce" />
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            All Home Services
          </h1>
          <p className="mt-4 text-lg font-light max-w-2xl mx-auto opacity-90">
            From cleaning to <span className="font-semibold">repairs</span> – everything your 
            <span className="font-semibold"> home needs</span> under one roof.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-[#b04400] mb-12">
            Services We Cover
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:scale-105 transition-transform"
              >
                <span className="bg-[#b04400] text-white p-3 rounded-full shadow-md">
                  <FaCheck size={16} />
                </span>
                <span className="text-gray-800 font-medium">{f}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#b04400] to-[#ff6f3c] text-white font-semibold shadow-xl hover:shadow-2xl transition"
            >
              Book Now
            </motion.button>
          </div>
        </div>

        {/* Contact Form Popup */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={() => setShowForm(false)}
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-6 text-[#b04400] text-center">
                Book Home Service
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
