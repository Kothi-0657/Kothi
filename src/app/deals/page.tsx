"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronCircleDown } from "react-icons/fa";
import Popup from "../component/PopupBox/popup";
import ContactForm from "@/app/component/Form/Cxform";

const constructionPlans = [
  { name: "Budget Plan", price: "₹1650 / Sq.ft" },
  { name: "Basic Plan", price: "₹1780 / Sq.ft" },
  { name: "Classic Plan", price: "₹1980 / Sq.ft" },
  { name: "Royal Plan", price: "₹2172 / Sq.ft" },
  { name: "Luxury Plan", price: "₹2700 / Sq.ft" },
];

const paintingPlans = [
  { type: "1 BHK", price: "₹5999", cleaning: "Free" },
  { type: "2 BHK", price: "₹10999", cleaning: "Free" },
  { type: "3 BHK", price: "₹16999", cleaning: "Free" },
  { type: "4 BHK", price: "₹23999", cleaning: "Free" },
];

export default function DealsPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* 🎥 Luxury Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-75"
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>

      {/* 💎 Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 bg-clip-text text-transparent tracking-wide"
        >
          Exclusive Deals & Plans
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* 🏗️ Construction Plans */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-orange-400">Construction Plans</h2>
              <Image
                src="/Kothi1.png"
                alt="Blueprint"
                width={300}
                height={200}
                className="rounded-xl"
              />
            </div>

            <div className="space-y-5">
              {constructionPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  whileHover={{ scale: 1.03 }}
                  className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <FaChevronCircleDown className="text-orange-500 text-2xl" />
                    <span className="font-semibold text-white">{plan.name}</span>
                  </div>
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-1 rounded-md font-semibold text-black">
                    {plan.price}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="italic text-sm mt-5 text-gray-300">
              * All India Service Available
            </p>
          </motion.div>

          {/* 🎨 Painting Plans */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-3xl font-bold text-orange-400">Painting Plans</h2>
              <Image
                src="/Kothi9.png"
                alt="Painting"
                width={320}
                height={240}
                className="rounded-xl"
              />
            </div>

            <div className="rounded-xl overflow-hidden border border-orange-300/30">
              <div className="grid grid-cols-3 text-center font-semibold bg-gradient-to-r from-orange-600 to-amber-500 text-white">
                <div className="p-3">Sale</div>
                <div className="p-3">Painting</div>
                <div className="p-3">Cleaning</div>
              </div>
              {paintingPlans.map((plan) => (
                <div
                  key={plan.type}
                  className="grid grid-cols-3 text-center bg-black/40 text-white border-t border-white/10 hover:bg-black/60 transition-all"
                >
                  <div className="p-3">{plan.type}</div>
                  <div className="p-3">{plan.price}</div>
                  <div className="p-3">
                    <span className="bg-orange-500 text-white px-3 py-0.5 rounded-full text-sm">
                      {plan.cleaning}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(true)}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-xl"
              >
                Get Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <ContactForm />
      </Popup>
    </div>
  );
}
