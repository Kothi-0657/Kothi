"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

export default function DealsPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-75"
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 -z-10"></div>

      {/* PAGE CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* PAGE TITLE */}
{/* PAGE TITLE WRAPPER */}
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
  
  {/* TITLE */}
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 bg-clip-text text-transparent text-center md:text-left"
  >
    Kothi Exclusive Deals & Plans
  </motion.h1>

  {/* IMAGE */}
  <Image
    src="/Kothi8.png"
    alt="Premium Home Design"
    width={400}
    height={250}
    className="w-32 md:w-52 lg:w-72 h-auto object-cover rounded-xl"
  />

</div>



        {/* WRAPPER FOR ALL PLAN SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ================================
              1. CONSTRUCTION PLANS
          ================================= */}
          <PlanSection
            title="Construction Plans"
            image="/Kothi1.png"
            items={constructionPlans}
            itemKey="name"
          />

          {/* ================================
              2. PAINTING PLANS
          ================================= */}
          <PlanSection
            title="Painting Plans"
            image="/Kothi9.png"
            items={paintingPlans}
            itemKey="type"
          />

          {/* ================================
              3. INTERIOR PLANS
          ================================= */}
          <PlanSection
            title="Interior Plans"
            image="/Kothi11.png"
            items={interiorPlans}
            itemKey="name"
          />

          {/* ================================
              4. INSPECTION OFFERS
          ================================= */}
          <PlanSection
            title="Inspection Offers"
            image="/Kothi4.png"
            items={inspectionPlans}
            itemKey="name"
          />

        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <ContactForm />
        </Popup>
      )}
    </div>
  );
}

/* -----------------------------------
   REUSABLE SECTION COMPONENT
------------------------------------ */
function PlanSection({ title, image, items, itemKey }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20"
    >
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-orange-300">{title}</h2>
        {image && (
          <Image
            src={image}
            alt={title}
            width={120}
            height={100}
            className="rounded-xl"
          />
        )}
      </div>

      <div className="space-y-4">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="bg-black/30 p-4 rounded-xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold">{item[itemKey]}</h3>
            <p className="text-orange-300 text-lg font-bold">{item.price}</p>
            {item.cleaning && (
              <p className="text-green-300 text-sm">Cleaning: {item.cleaning}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
