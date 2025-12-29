"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/app/component/Form/Cxform";

/* ===================== SERVICES DATA ===================== */

const services = [
  {
    title: "Construction",
    type: "construction",
    image: "/ServiceIcons/conb.png",
    popular: true,
    description:
      "End-to-end home construction with transparent pricing, structured execution, and reliable delivery.",
  },
  {
    title: "Renovation",
    type: "renovation",
    image: "/ServiceIcons/renov.png",
    popular: true,
    description:
      "Thoughtfully planned renovations that enhance comfort, functionality, and long-term value.",
  },
  {
    title: "Home Inspection",
    type: "inspection",
    image: "/kothi.png",
    popular: true,
    description:
      "Detailed inspection reports covering structure, seepage, electricals, and finishes.",
  },
  {
    title: "Packers & Movers",
    type: "packersAndMovers",
    image: "/Blogpandm.png",
    description:
      "Safe, organized, and stress-free home shifting with professional packing and handling.",
  },
  {
    title: "Home Services",
    type: "homeServices",
    image: "/main1.png",
    description:
      "Reliable everyday home services delivered by verified professionals.",
  },
];

/* ===================== PAGE ===================== */

export default function ServicePage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenForm = (service: string) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="relative min-h-screen">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay */}
      <div className="fixed inset-0 bg-white/70 backdrop-blur-sm -z-10"></div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 px-6 py-20 space-y-24 max-w-7xl mx-auto">
        {/* ===================== HEADER ===================== */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#b04400]">
            Kothi India Services
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700">
            Reliable, transparent, and professionally managed services for every
            stage of your home journey.
          </p>
        </div>

        {/* ===================== MOST BOOKED ===================== */}
        <section>
          <h2 className="text-3xl font-semibold text-center text-[#b04400] mb-10">
            Most Booked Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.popular)
              .map((s) => (
                <div
                  key={s.type}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/80 backdrop-blur-md shadow-md"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={90}
                    height={90}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {s.description}
                    </p>

                    <button
                      onClick={() => handleOpenForm(s.title)}
                      className="text-sm text-[#b04400] font-medium hover:underline"
                    >
                      Get Quote →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ===================== ALL SERVICES ===================== */}
        <section className="space-y-8">
          {services.map((s, index) => (
            <motion.div
              key={s.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col md:flex-row items-center gap-8 
                         p-6 rounded-2xl bg-white/75 backdrop-blur-md shadow-md"
            >
              {/* Image */}
              <Image
                src={s.image}
                alt={s.title}
                width={180}
                height={140}
                className="rounded-xl object-cover"
              />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-700 max-w-2xl mb-4">
                  {s.description}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleOpenForm(s.title)}
                    className="px-5 py-2 rounded-full bg-[#b04400] text-white hover:bg-[#993300] transition"
                  >
                    Get Quote
                  </button>

                  <Link
                    href={`/services/${s.type}`}
                    className="px-5 py-2 rounded-full border border-[#b04400] text-[#b04400] hover:bg-[#b04400]/10 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>

      {/* ===================== POPUP FORM ===================== */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={handleCloseForm}
              >
                ✖
              </button>

              <h2 className="text-2xl font-bold mb-6 text-[#b04400] text-center">
                Get a Quote for {selectedService}
              </h2>

              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
