"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Popup from "../component/PopupBox/popup";
import ContactForm from "@/app/component/Form/Cxform";

/* ------------------ DATA ------------------ */
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

const interiorPlans = [
  { name: "Basic Interior", price: "₹1.25 Lakhs" },
  { name: "Premium Interior", price: "₹2.40 Lakhs" },
  { name: "Luxury Interior", price: "₹4.80 Lakhs" },
];

const inspectionPlans = [
  { name: "Basic Home Inspection", price: "₹1999" },
  { name: "Premium Inspection", price: "₹3499" },
  { name: "Complete Structural Check", price: "₹4999" },
];

/* ------------------ PAGE ------------------ */
export default function DealsPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-75"
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 bg-clip-text text-transparent">
            Exclusive Deals & Pricing
          </h1>

          <Image
            src="/Kothi8.png"
            alt="Premium Homes"
            width={350}
            height={220}
            className="rounded-2xl shadow-2xl opacity-90"
          />
        </motion.div>

        {/* ================= PLANS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          <PlanSection
            title="Construction Plans"
            image="/Kothi1.png"
            items={constructionPlans}
            itemKey="name"
          />

          <PlanSection
            title="Painting Plans"
            image="/Kothi9.png"
            items={paintingPlans}
            itemKey="type"
          />

          <PlanSection
            title="Interior Plans"
            image="/Kothi11.png"
            items={interiorPlans}
            itemKey="name"
          />

          <PlanSection
            title="Inspection Offers"
            image="/Kothi4.png"
            items={inspectionPlans}
            itemKey="name"
          />
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <ContactForm />
        </Popup>
      )}
    </div>
  );
}

/* ------------------ PLAN SECTION ------------------ */
function PlanSection({ title, image, items, itemKey }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-orange-300">
          {title}
        </h2>
        {image && (
          <Image
            src={image}
            alt={title}
            width={110}
            height={90}
            className="rounded-xl opacity-90"
          />
        )}
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="group relative bg-black/40 rounded-2xl p-5 border border-white/10 hover:border-orange-400/40 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">
                {item[itemKey]}
              </h3>

              <span className="text-orange-300 font-bold text-lg">
                {item.price}
              </span>
            </div>

            {item.cleaning && (
              <p className="mt-2 text-sm text-green-300">
                ✨ Cleaning Included
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
