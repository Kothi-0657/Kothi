"use client";

import React, { useState } from "react";
import { FaHome, FaChevronDown, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/app/component/Form/Cxform";

export default function HomeServicesPage() {
  const [showForm, setShowForm] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "🏗️ Construction Services",
      services: [
        "Kothi Signature Construction",
        "Full Home Construction",
        "Structural Engineering",
        "Foundation & Slab Works",
        "Wall & Partition Construction",
        "Roofing & Waterproofing",
        "Flooring Works",
        "Exterior & Interior Finishing",
        "Civil Work Project Management",
      ],
    },
    {
      title: "🏗️ Design & Construction",
      services: [
        "Architectural Design",
        "Building Construction",
        "Structural Design & Retrofitting",
        "Civil Works",
        "Renovation & Remodeling",
        "Quantity Estimation & BOQ Preparation",
        "Landscaping & Hardscaping",
        "Demolition & Dismantling",
      ],
    },
    {
      title: "🔍 Inspection & Safety",
      services: [
        "Kothi Signature Inspection",
        "The 360° Home Review",
        "Peace of Mind Package",
        "Builder’s Promise Check",
        "Technical & Quality Inspection",
        "Fire & Safety Audit",
        "Energy Efficiency Audit",
        "Vastu Consultation",
      ],
    },
    {
      title: "🧰 Maintenance & Repair",
      services: [
        "Plumbing, Electrical & Carpentry",
        "Painting & Waterproofing",
        "AC Repair & Appliance Servicing",
        "Deep Cleaning & Pest Control",
        "Roof & Wall Repairs",
        "Gutter Cleaning",
        "Annual Maintenance Contracts",
        "Quick Fix Services",
      ],
    },
    {
      title: "🎨 Interiors & Décor",
      services: [
        "Interior Design & Execution",
        "Modular Kitchen & Furniture",
        "False Ceiling & Lighting",
        "Wall Panelling / Cladding",
        "Curtains, Upholstery & Soft Furnishings",
        "Luxury Finishes & Texture Painting",
        "Custom Furniture Design",
        "Kids Room & Theme Interiors",
      ],
    },
    {
      title: "⚡ Smart Home & Tech",
      services: [
        "Home Automation Setup",
        "CCTV & Security Systems",
        "Smart Lighting & Voice Control",
        "Solar Panel Installation",
        "Networking & Wi-Fi Setup",
        "Video Door Phones",
        "Smart Irrigation & Garden Systems",
      ],
    },
    {
      title: "🌿 Outdoor & Utility",
      services: [
        "Terrace Gardening & Green Walls",
        "Outdoor Decking & Pergolas",
        "Pool Construction & Maintenance",
        "Rainwater Harvesting",
        "Waste Management & Recycling",
        "Driveway & Paving Design",
        "Waterproofing Solutions",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffe8cc] via-[#ffb991] to-[#ff6f3c]"></div>
      <div className="absolute inset-0 bg-[url('/patterns/geometry.svg')] opacity-10"></div>

      {/* Overlay Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-white text-center py-16 px-4 bg-gradient-to-r from-[#b04400] via-[#ff7b3d] to-[#b04400] shadow-lg">
          <FaHome className="mx-auto text-6xl mb-6 drop-shadow-lg animate-bounce" />
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            All Home Services
          </h1>
          <p className="mt-4 text-lg font-light max-w-2xl mx-auto opacity-90">
            From cleaning to <span className="font-semibold">repairs</span> — everything your{" "}
            <span className="font-semibold">home needs</span> under one roof.
          </p>
        </div>

        {/* Service Categories */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() =>
                  setOpenCategory(openCategory === category.title ? null : category.title)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left text-[#4b2e05] font-bold text-xl hover:bg-[#b04400]/10 transition"
              >
                <span>{category.title}</span>
                <motion.div
                  animate={{ rotate: openCategory === category.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              {/* Animated Service List */}
              <AnimatePresence>
                {openCategory === category.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {category.services.map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 bg-white/60 hover:bg-white/90 rounded-xl p-3 shadow-sm transition"
                      >
                        <span className="bg-[#b04400] text-white p-2 rounded-full shadow-md">
                          <FaCheck size={12} />
                        </span>
                        <span className="text-gray-800 text-sm font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center pb-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#b04400] to-[#ff6f3c] text-white font-semibold shadow-xl hover:shadow-2xl transition"
          >
            Book a Service
          </motion.button>
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
