"use client";

import React from "react";
import { motion } from "framer-motion";

function About() {
  const blocks = [
    {
      img: "/Kothi4.png",
      title: "Our Foundation",
      description:
        "Established with the vision of redefining renovation in India, Kothi India started with small but impactful projects.",
    },
    {
      img: "/kothi11.png",
      title: "Growth & Innovation",
      description:
        "Our growing team embraced modern design, modular solutions, and cutting-edge tools to deliver excellence.",
    },
    {
      img: "/kothi.png",
      title: "The Future",
      description:
        "With a client-first mindset, our goal is to become the most trusted name in Indian home improvement.",
    },
  ];

  return (
    <section className="relative py-30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 m-0 p-0">
      <div className="max-w-6xl mx-auto px-6 space-y-20 text-white">
        {/* Heading */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-orange-500">Our Story</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
            Kothi India has grown from a small team of passionate builders to a
            trusted brand in home improvement, transforming spaces with design,
            trust, and innovation.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {blocks.map((block, idx) => (
            <React.Fragment key={idx}>
              {/* Image */}
              <motion.div
                className="rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={block.img}
                  className="w-full h-full object-cover"
                  alt={block.title}
                  loading="lazy"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.3 }}
              >
                <h3 className="text-2xl font-bold text-orange-500">{block.title}</h3>
                <p className="text-gray-300">{block.description}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
