"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ------------------ DATA (UNCHANGED) ------------------ */
const services = [
  {
    title: "Home Renovation Services",
    description:
      "Complete guide on modern home renovation, remodeling, design trends, and cost estimation in India.",
    href: "../blog/homerenovationsservice",
    image: "/Blogr1.mp4",
  },
  {
    title: "Home Construction Services",
    description:
      "Professional construction solutions for building, civil works, and complete home setup with expert project management.",
    href: "../blog/homeconstructionservice",
    image: "/Blog2.png",
  },
  {
    title: "Home Interior Painting",
    description:
      "Expert interior painting services, color selection, dampness solutions, and luxurious finishes for your home.",
    href: "../blog/homeinteriorpainting",
    image: "/Blogp1.mp4",
  },
  {
    title: "Home Exterior Painting",
    description:
      "Premium exterior painting services with weatherproof coatings, vibrant colors, and long-lasting finishes.",
    href: "../blog/homeexteriorpainting",
    image: "/Blog3.png",
  },
  {
    title: "Home Plumbing Services",
    description:
      "Professional plumbing solutions including leak repairs, pipe installation, water-saving systems, and emergency services.",
    href: "../blog/homeplumbingservices",
    image: "/Blogplum.mp4",
  },
  {
    title: "Home Electrical Services",
    description:
      "Expert electrical services for wiring, fixtures, panels, and smart home automation with safety compliance.",
    href: "../blog/homeelectricalservices",
    image: "/Blog1.png",
  },
  {
    title: "Home Civil Services",
    description:
      "Complete civil solutions including structural repairs, flooring, masonry, and renovation support.",
    href: "../blog/homecivilservices",
    image: "/Blog4.png",
  },
  {
    title: "Home Handyman Services",
    description:
      "Reliable handyman services for small repairs, installations, maintenance, and quick fixes at home.",
    href: "../blog/homehandymanservices",
    image: "/Blog1.png",
  },
  {
    title: "Home Interior Services",
    description:
      "Interior design, furniture layout, decor, and space optimization services for elegant living spaces.",
    href: "../blog/homeinteriorservices",
    image: "/Blog5.png",
  },
  {
    title: "Intercity Packers and Movers",
    description:
      "Long-distance relocation services with packing, transportation, insurance, and office shifting across cities.",
    href: "../blog/intercitypackersandmovers",
    image: "/Blogpandm.png",
  },
  {
    title: "Intracity Packers and Movers",
    description:
      "Local moving services within city limits, including packing, loading, transport, and unpacking.",
    href: "../blog/intracitypackersandmovers",
    image: "/Blogpandm.png",
  },
  {
    title: "Home Inspection Services",
    description:
      "Professional home inspection services for structural, electrical, plumbing, and overall safety checks.",
    href: "../blog/homeinspectionservices",
    image: "/Bloginsp.mp4",
  },
];

/* ------------------ PAGE ------------------ */
export default function BlogPage() {
  return (
    <main className="relative max-w-7xl mx-auto px-6 py-24 bg-gray-200">


      {/* ========= PAGE HEADER ========= */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 bg-clip-text text-transparent">
          Insights & Expertise
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore expert guides, service insights, and professional advice
          to help you make confident decisions for your home.
        </p>
      </motion.div>

      {/* ========= BLOG GRID ========= */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all duration-500"
          >
            {/* Media */}
            <div className="relative h-60 w-full overflow-hidden">
              {service.image.endsWith(".mp4") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={service.image} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6 md:p-7 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 leading-snug">
                {service.title}
              </h2>

              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
              >
                Read Article
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
