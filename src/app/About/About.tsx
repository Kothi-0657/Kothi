"use client";

import { motion } from "framer-motion";
import { FaSeedling, FaTools, FaRocket } from "react-icons/fa";

const blocks = [
  {
    icon: FaSeedling,
    img: "/main1.png",
    title: "Where It Began",
    description:
      "Kothi India was founded with a clear purpose — to bring trust, transparency, and accountability into home services. We identified a gap where homeowners struggled with fragmented vendors, unclear pricing, and inconsistent execution. Our goal was simple: create a single, reliable platform that homeowners could depend on with confidence.",
  },
  {
    icon: FaTools,
    img: "/main2.png",
    title: "Building with Purpose",
    description:
      "From the start, our mission has been to deliver quality through process, not promises. By combining skilled professionals, modern tools, and structured planning, we ensure every project is executed with precision and care. Each home we work on reflects our commitment to durability, functionality, and thoughtful design.",
  },
  {
    icon: FaRocket,
    img: "/main3.png",
    title: "Looking Ahead",
    description:
      "As we grow, our focus remains on scale without compromise. We aim to expand across India while maintaining consistent quality, clear communication, and dependable delivery. Our vision is to simplify home services nationwide — building long-term trust with every family we serve.",
  },
];


export default function About() {
  return (
    <section className="py-24 bg-black text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-12 space-y-12 md:space-y-16 
">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-orange-500">Our Story</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey shaped by trust, craftsmanship, and thoughtful execution.
          </p>
        </div>

        {blocks.map((block, i) => {
          const Icon = block.icon;
          const reverse = i % 2 !== 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Icon className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  {block.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {block.description}
                </p>
              </div>

              {/* Image */}
              <img
                src={block.img}
                className="w-60 h-60 max-w-md mx-auto opacity-90"
                alt={block.title}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
