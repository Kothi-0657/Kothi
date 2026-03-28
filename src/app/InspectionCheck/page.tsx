"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


/* ------------------ PLAN DATA ------------------ */

const plans = [
  {
    name: "Basic Home Health Plan",
    price: "₹9,999 / Year (Incl. GST)",
    paymentLink:"https://rzp.io/rzp/6LRnlWk",
    validity: "1 Year from date of subscription",
    services: [
      "Quarterly full house inspection (4 times a year)",
      "Quarterly repairables assessment",
      "Quarterly full house inventory verification",
    ],
    benefits: [
      "Owner-only confidential inspection reports",
      "No tenant visibility or access to reports",
      "Early detection of structural & maintenance issues",
      "Dedicated Relationship Manager (RM)",
      "Dedicated Field RM for site inspections",
    ],
    highlight: false,
  },
  {
    name: "Combo Home Health Plan",
    price: "₹14,999 / Year (Incl. GST)",
    paymentLink:"https://rzp.io/rzp/Z7ZLH1c5",
    validity: "1 Year from date of subscription",
    services: [
      "Quarterly full house inspection (4 times a year)",
      "Quarterly repairables assessment",
      "Quarterly full house inventory verification",
    ],
    benefits: [
      "Owner-only confidential inspection reports",
      "Dedicated RM & Field RM",
      "2 Deep cleaning services (Half-Yearly)",
      "24×7 on-call Carpenter, Plumber & Electrician",
      "Priority scheduling for repairs & support",
    ],
    highlight: true,
  },
  {
    name: "Damage Protection Plan",
    price: "₹24,999 / Year (Incl. GST)",
    paymentLink:"https://rzp.io/rzp/HqRSKbz",
    validity: "1 Year from date of subscription",
    services: [
      "Quarterly full house inspection (4 times a year)",
      "Quarterly repairables assessment",
      "Quarterly full house inventory verification",
    ],
    benefits: [
      "Owner-only confidential inspection reports",
      "Dedicated RM & Field RM",
      "2 Deep cleaning services",
      "Free painting (1 living hall + 1 bedroom)",
      "Electrical, plumbing & carpentry repair checks",
      "24×7 on-call Carpenter, Plumber, Electrician & Civil support",
    ],
    highlight: false,
  },
];

/* ------------------ PAGE ------------------ */

export default function InspectionPlansPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-75"
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-28">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Annual Home Inspection & Protection Plans
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Built for homeowners who want complete visibility, control, and
            protection of their property — especially when tenants are living.
          </p>
        </motion.div>

        {/* ================= WHY OWNERS NEED THIS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
            Why Homeowners Should Take Yearly Inspection Plans
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/80 text-sm">
            <li>✔ Tenants rarely report early-stage damages</li>
            <li>✔ Small leakages & cracks turn into expensive repairs</li>
            <li>✔ Unauthorized electrical or plumbing changes go unnoticed</li>
            <li>✔ Inventory misuse is difficult to prove later</li>
            <li>✔ Regular inspections protect long-term asset value</li>
            <li>✔ Inspection reports act as legal & documentation proof</li>
          </ul>
        </motion.div>

        {/* ================= PLANS ================= */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl p-8 border backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                ${plan.highlight
                  ? "border-orange-400 bg-orange-500/10"
                  : "border-white/20 bg-white/10"}`}
            >
              {plan.highlight && (
                <span className="inline-block mb-4 text-xs font-semibold bg-orange-400 text-black px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-orange-300">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold mt-3">
                {plan.price}
              </p>

              <p className="mt-2 text-sm text-white/70">
                {plan.validity}
              </p>

              {/* SERVICES */}
              <div className="mt-6">
                <p className="font-semibold text-orange-200 text-sm mb-2">
                  Plan Services
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  {plan.services.map((s, idx) => (
                    <li key={idx}>✔ {s}</li>
                  ))}
                </ul>
              </div>

              {/* BENEFITS */}
              <div className="mt-6">
                <p className="font-semibold text-orange-200 text-sm mb-2">
                  Plan Benefits
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  {plan.benefits.map((b, idx) => (
                    <li key={idx}>✔ {b}</li>
                  ))}
                </ul>
              </div>

              <a
                  href={plan.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-8 py-3 rounded-full
                  bg-gradient-to-r from-orange-500 to-yellow-400
                  text-black font-semibold hover:scale-105 transition"
                >
                Subscribe Now
              </a>
            </motion.div>
          ))}
          
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >

          <p className="mt-4 text-sm text-white/60">
            Owner-first • Confidential • Verified by KothiIndia
          </p>
        </motion.div>
        {/* ================= TERMS & POLICY ================= */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center mt-10 text-sm text-white/70"
>
  <p>
    By subscribing, you agree to our{" "}
    <Link
      href="/terms-and-conditions"
      className="text-orange-400 underline hover:text-orange-300"
    >
      Terms & Conditions
    </Link>{" "}
    and{" "}
    <Link
      href="/InspectionTermsPage"
      className="text-orange-400 underline hover:text-orange-300"
    >
      Inspection Terms of Use
    </Link>.
  </p>
</motion.div>    

      </div>
    </div>
  );
}
