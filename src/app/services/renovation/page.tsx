"use client";

import React, { useState } from "react";
import { FaTools, FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/app/component/Form/Cxform";

export default function RenovationPage() {
  const [showForm, setShowForm] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const features = [
    "Complete home & office remodeling",
    "Modular kitchens & wardrobes",
    "Flooring, tiling & painting upgrades",
    "False ceiling & lighting solutions",
    "Bathroom & plumbing renovations",
  ];

  const renovationCategories = [
    {
      category: "Foundation & Structural Work",
      services: [
        "Foundation strengthening & reinforcement",
        "Structural beam repair",
        "Slab restoration",
        "Column replacement",
        "Wall re-structuring",
        "Load-bearing wall modifications",
        "Earthquake retrofitting",
        "Concrete crack repairs",
        "Foundation waterproofing",
      ],
    },
    {
      category: "Exterior Renovations",
      services: [
        "Roof replacement & repair",
        "Terrace waterproofing",
        "Exterior wall painting",
        "Facade restoration",
        "Brickwork repairs",
        "Stone cladding installation",
        "Exterior waterproof coating",
        "Balcony renovation",
        "Terrace garden setup",
        "Boundary wall reconstruction",
      ],
    },
    {
      category: "Interior Renovations",
      services: [
        "Complete home remodeling",
        "False ceiling renovation",
        "Drywall & plaster repair",
        "Floor leveling",
        "Marble & tile replacement",
        "Wood flooring installation",
        "Carpet installation",
        "Wall texture finishes",
        "Interior wall painting",
        "Accent wall creation",
        "Decorative molding & cornices",
        "Skirting & dado installation",
        "Room partitioning",
        "Custom cabinetry installation",
      ],
    },
    {
      category: "Kitchen Renovations",
      services: [
        "Modular kitchen design",
        "Kitchen cabinet replacement",
        "Countertop upgrades",
        "Backsplash installation",
        "Kitchen flooring renovation",
        "Sink & faucet replacement",
        "Kitchen island installation",
        "Pantry remodeling",
        "Lighting redesign",
        "Appliance integration",
        "Ventilation system upgrade",
        "Smart kitchen automation",
      ],
    },
    {
      category: "Bathroom Renovations",
      services: [
        "Complete bathroom remodeling",
        "Shower enclosure installation",
        "Bathtub replacement",
        "Vanity installation",
        "Wall tile replacement",
        "Floor tile upgrades",
        "Plumbing fixture upgrades",
        "Mirror & lighting upgrades",
        "Waterproofing for bathrooms",
        "Smart bathroom fittings",
        "Exhaust fan installation",
        "Heated towel rail installation",
      ],
    },
    {
      category: "Bedroom & Living Room Renovations",
      services: [
        "Bedroom layout redesign",
        "Wardrobe customization",
        "Flooring upgrades",
        "Lighting design",
        "Feature wall creation",
        "False ceiling design",
        "Window treatment upgrades",
        "Soundproofing",
        "Built-in storage solutions",
        "Smart bedroom automation",
        "Living room layout redesign",
        "False ceiling & lighting design",
        "Feature wall renovation",
        "Flooring upgrades",
        "Custom TV unit installation",
        "Fireplace installation",
        "Curtain & blind upgrades",
        "Smart home integration",
        "Acoustic wall treatments",
      ],
    },
    {
      category: "Specialty Renovations",
      services: [
        "Laundry room renovation",
        "Garage remodeling",
        "Home office renovation",
        "Basement finishing",
        "Attic conversion",
        "Home theater setup",
        "Smart lighting renovation",
        "Energy-efficient upgrades",
        "Solar panel integration",
        "Rainwater harvesting setup",
        "Home insulation upgrades",
        "Security system installation",
      ],
    },
    {
      category: "Outdoor Renovations",
      services: [
        "Outdoor patio remodeling",
        "Garden landscaping",
        "Driveway paving",
        "Deck & pergola construction",
        "Swimming pool renovation",
        "Fence & gate replacement",
        "Outdoor lighting upgrades",
        "Pergola & gazebo installation",
        "Outdoor kitchen setup",
        "Terrace garden creation",
        "BBQ area construction",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Luxury Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/luxury-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-orange=500 text-center py-16 px-4 bg-black/40 backdrop-blur-lg shadow-lg mb-10 mt-10">
          <FaTools className="mx-auto text-6xl mb-6 drop-shadow-lg animate-bounce" />
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            Home Renovation Services
          </h1>
          <p className="mt-4 text-lg font-light max-w-2xl mx-auto opacity-90">
            Transform your spaces with expert <span className="font-semibold">renovation</span> and{" "}
            <span className="font-semibold">remodeling</span>.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:scale-105 transition-transform"
              >
                <span className="bg-[#b04400] text-white p-3 rounded-full shadow-md">
                  <FaCheck size={16} />
                </span>
                <span className="text-white font-medium">{f}</span>
              </motion.div>
            ))}
          </div>

          {/* Renovation Categories */}
          <div className="space-y-6">
            {renovationCategories.map((cat) => (
              <motion.div
                key={cat.category}
                className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 text-orange-100"
              >
                <button
                  onClick={() => toggleCategory(cat.category)}
                  className="flex items-center justify-between text-orange-300 font-medium w-full text-lg"
                >
                  {cat.category}
                  {openCategories[cat.category] ? <FaMinus /> : <FaPlus />}
                </button>

                <AnimatePresence>
                  {openCategories[cat.category] && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="list-disc pl-5 mt-4 space-y-1 text-white text-sm"
                    >
                      {cat.services.map((srv, idx) => (
                        <li key={idx}>{srv}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
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
                Book Renovation Service
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
