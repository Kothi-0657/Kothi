"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaShieldAlt, FaStar } from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket className="text-[#b04400] w-10 h-10" />,
    title: "Fast & Efficient",
    description:
      "We deliver results quickly without compromising on quality, helping your business grow faster.",
  },
  {
    icon: <FaUsers className="text-[#b04400] w-10 h-10" />,
    title: "Expert Team",
    description:
      "Our skilled professionals understand your needs and provide customized solutions every time.",
  },
  {
    icon: <FaShieldAlt className="text-[#b04400] w-10 h-10" />,
    title: "Trusted & Reliable",
    description:
      "We prioritize trust and transparency, ensuring your projects are handled with the utmost care.",
  },
  {
    icon: <FaStar className="text-[#b04400] w-10 h-10" />,
    title: "Proven Results",
    description:
      "Our clients consistently see improved performance and satisfaction from our services.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative bg-gray-50 py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/building.png"
          alt="Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
