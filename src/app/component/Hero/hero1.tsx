"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "@/app/component/Form/Cxform";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Hero1() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const serviceKeywords = [
    "Maintenance",
    "Renovation",
    "Repairs",
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
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

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
            Trusted teams, transparent process, and guaranteed quality.
          </p>

          {/* ✅ Only Explore Services Button (keep old design) */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link href="/services">
              <HoverBorderGradient>
                <span className="font-semibold">Explore Services</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </motion.div>

        {/* ✅ Right Side: Contact Form (No Duplicate Heading) */}
        <motion.div
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.6 }}
          className="mt-15 mb-49 lg:mt-0 w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl p-6 text-black shadow-md border border-white/20 hover:bg-white/40 transition"
          style={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
        

        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero1;
