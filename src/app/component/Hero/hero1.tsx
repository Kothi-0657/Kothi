"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "@/app/component/Form/Cxform";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import CityBand from "../CityBand/cityband";
import WorkflowTimeline from "@/app/component/WorkflowTimeline/WorkflowTimeline";


function Hero1() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const serviceKeywords = [
    "Home Maintenance",
    "Home Renovation",
    "Civil Repairs",
    "Interiors",
    "Landscaping",
    "Plumbing",
    "Electrical",
  ];

  // ✅ Rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % serviceKeywords.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pb-24">
      {/* ✅ Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

        <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20 h-full">
        {/* left + right content ... */}
        </div>

      {/* ✅ White City Band at bottom */}
      <div className="absolute bottom-0 w-full">
        <CityBand />
      </div>
      
      {/* ✅ Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20 h-full">
        
        {/* ✅ Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 text-center lg:text-left text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight">
            Professional{" "}
            <span className="textcolor2dark font-semibold">
              {serviceKeywords[currentWordIndex]}
            </span>{" "}
            Services for Your Property
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            From routine maintenance to complete renovations, we help clients
            keep their residential and commercial properties in top condition.
            Trusted and experienced teams, transparent process, and guaranteed quality.
          </p>

          {/* ✅ Only Explore Services Button (keep old design) */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link href="/service">
              <HoverBorderGradient>
                <span className="font-semibold">Explore Services</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </motion.div>

        {/* ✅ Right Side: Contact Form (No Duplicate Heading) */}
        {/* ✅ Floating Contact Form — Top Right Below Navbar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute right-2 z-30"
            style={{ top: "92px" }} // 👈 navbar height + gap
          >
            {/* 🔽 Scale wrapper */}
            <div
              className="origin-top-right"
              style={{ transform: "scale(0.89)" }} // adjust 0.6–0.75
            >
              <div className="bg-white/30 backdrop-blur-lg rounded-4xl p-9 shadow-md border border-white/20 hover:bg-white/40 transition duration-300 w-[400px] h-[660px] translate-x-29 -translate-y-39">
                <ContactForm />
              </div>
            </div>
          </motion.div>
      </div>
<div className="absolute top-1 right-34 z-50 hidden lg:block mt-26">
  <a
    href="tel:+918064522200"
    className="px-4 py-1.5 text-sm font-semibold rounded-full
    bg-white/10 backdrop-blur-md border border-white/20
    text-white hover:bg-white/20 transition shadow-md"
  >
   Toll-Free Support 📞 +91 8064522200
  </a>
</div>
      {/* ✅ Workflow Timeline */}
      <div className="absolute bottom-30 w-full">
        <WorkflowTimeline />
      </div>
    </section>
  );
}

export default Hero1;
