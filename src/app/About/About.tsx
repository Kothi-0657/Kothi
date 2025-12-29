"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaTools, FaRocket } from "react-icons/fa";

export default function About() {
  const blocks = [
    {
      icon: FaSeedling,
      img: "/main1.png",
      title: "Where It Began",
      description:
        "Kothi India was founded on a simple belief — homeowners deserve reliable, transparent, and well-executed services under one roof.",
      offset: "md:ml-0",
    },
    {
      icon: FaTools,
      img: "/main2.png",
      title: "Building with Purpose",
      description:
        "By combining modern tools, skilled craftsmanship, and thoughtful planning, we began shaping homes that are practical and enduring.",
      offset: "md:ml-32",
    },
    {
      icon: FaRocket,
      img: "/main3.png",
      title: "Looking Ahead",
      description:
        "Today, our focus is on scale, trust, and simplicity — delivering dependable home solutions across India, one family at a time.",
      offset: "md:ml-64",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-6 text-white">
        {/* Header */}
        <motion.div
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
            Our Story
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            A journey shaped by trust, craftsmanship, and a commitment to
            simplifying home services.
          </p>
        </motion.div>

        {/* Diagonal Timeline */}
        <div className="relative space-y-24">
          {/* Vertical guide line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          {blocks.map((block, idx) => {
            const Icon = block.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-start gap-16 ${block.offset}`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center ring-1 ring-orange-500/30">
                    <Icon className="text-orange-500 text-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-start gap-2 max-w-xl">
                  {/* Text */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-orange-500">
                      {block.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {block.description}
                    </p>
                  </div>

                  {/* Image (NO BOX) */}
                  <img
                    src={block.img}
                    alt={block.title}
                    className="w-50 h-50 object-contain opacity-90 hidden sm:block"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
