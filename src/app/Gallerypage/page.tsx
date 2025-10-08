"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// -----------------------------
// GALLERY CONFIG
// -----------------------------
const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: `An exclusive glimpse into our premium project ${i + 1}`,
  image: `/gallery/project ${i + 1}.jpeg`,
}));

// -----------------------------
// LIGHTBOX
// -----------------------------
function Lightbox({ selected, onClose }: { selected: any; onClose: () => void }) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId={`card-${selected.id}`}
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-[0_0_40px_rgba(255,215,0,0.2)]"
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition"
            >
              <FaTimes size={18} />
            </button>

            <motion.div
              className="mt-4 text-center text-white px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide">
                {selected.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm md:text-lg">{selected.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// -----------------------------
// COVERFLOW CAROUSEL
// -----------------------------
function Coverflow({ onOpen }: { onOpen: (p: any) => void }) {
  const [index, setIndex] = useState(0);
  const len = projects.length;

  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  return (
    <section className="bg-gradient-to-b from-[#0c0c0c] via-[#101010] to-[#1a1a1a] text-white py-12 md:py-20 relative overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-wide mb-10 md:mb-14 bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent">
          Signature Showcase
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-2 md:left-0 -translate-x-1/2 bg-gradient-to-r from-black/70 to-black/30 p-3 md:p-4 rounded-full hover:scale-110 transition"
          >
            <FaArrowLeft className="text-yellow-400" />
          </button>

          <div className="relative w-full overflow-hidden py-8 md:py-12">
            <div className="relative h-56 md:h-80">
              {projects.map((p, i) => {
                const offset = (i - index + len) % len;
                const centered = offset === 0;
                const x = (offset - 1) * 180;
                const scale = centered ? 1.4 : 0.8 - Math.min(offset, 2) * 0.05;
                const rot = (offset - 1) * 6;
                const opacity = Math.abs(offset - 1) > 2 ? 0 : 1;

                return (
                  <motion.img
                    key={p.id}
                    src={p.image}
                    alt={p.title}
                    onClick={() => onOpen(p)}
                    className={`absolute top-0 left-1/2 w-[220px] md:w-[360px] h-40 md:h-64 object-cover rounded-xl cursor-pointer shadow-[0_0_30px_rgba(255,215,0,0.15)] ${
                      centered ? "z-30" : "z-10"
                    }`}
                    style={{ x, translateX: "-50%" }}
                    animate={{ x, scale, rotate: rot, opacity }}
                    transition={{ type: "spring", stiffness: 90, damping: 18 }}
                  />
                );
              })}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-2 md:right-0 translate-x-1/2 bg-gradient-to-l from-black/70 to-black/30 p-3 md:p-4 rounded-full hover:scale-110 transition"
          >
            <FaArrowRight className="text-yellow-400" />
          </button>
        </div>

        <div className="mt-6 md:mt-10 flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-2 md:py-3">
          {projects.map((p) => (
            <motion.button
              whileHover={{ scale: 1.15 }}
              key={p.id}
              onClick={() => onOpen(p)}
              className="w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden border border-yellow-500/20 flex-shrink-0"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// MAIN PAGE
// -----------------------------
export default function PremiumPortfolioGallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="font-serif antialiased bg-black text-white">
      <main className="min-h-screen">
        <Coverflow onOpen={setSelected} />

        <section className="py-16 md:py-24 bg-gradient-to-b from-[#0b0b0b] to-[#111] text-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10 tracking-widest bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent">
              Explore More
            </h2>

            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 pb-4 justify-center">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  className="min-w-[240px] md:min-w-[320px] snap-center rounded-xl overflow-hidden cursor-pointer bg-gradient-to-b from-[#222] to-[#111] border border-yellow-500/20 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
                  whileHover={{ scale: 1.06 }}
                  onClick={() => setSelected(p)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 md:h-56 object-cover opacity-90 hover:opacity-100 transition"
                  />
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-base md:text-lg">{p.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Lightbox selected={selected} onClose={() => setSelected(null)} />

      {/* Floating CTA */}
      <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50">
        <a
          href="#"
          className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.7)] transition text-sm md:text-base"
        >
          Let’s Connect →
        </a>
      </div>
    </div>
  );
}
