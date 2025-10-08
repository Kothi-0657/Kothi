"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import galleryFiles from "@/../galleryData.json";

/* -------------------------------------------
   DYNAMIC PROJECTS FROM GENERATED JSON
------------------------------------------- */
const projects = galleryFiles.map((filename, index) => ({
  id: index + 1,
  title: filename.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
  description: `An exclusive glimpse into our premium project: ${filename
    .replace(/\.[^/.]+$/, "")
    .replace(/_/g, " ")}.`,
  image: `/gallery/${filename}`,
}));

/* -------------------------------------------
   🪟 LIGHTBOX
------------------------------------------- */
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
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-[0_0_40px_rgba(255,215,0,0.25)]"
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/70 p-2 rounded-full text-white hover:bg-black/90 transition"
            >
              <FaTimes size={18} />
            </button>

            <motion.div
              className="mt-4 text-center text-white px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide capitalize">
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

/* -------------------------------------------
   🎠 COVERFLOW CAROUSEL
------------------------------------------- */
function Coverflow({ onOpen }: { onOpen: (p: any) => void }) {
  const [index, setIndex] = useState(0);
  const len = projects.length;

  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  return (
    <section className="bg-gradient-to-b from-black via-neutral-900 to-black text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wide mb-10 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Luxury Showcase
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-2 md:left-0 -translate-x-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaArrowLeft className="text-yellow-400" />
          </button>

          <div className="relative w-full overflow-hidden py-8 md:py-12">
            <div className="relative h-60 md:h-80">
              {projects.map((p, i) => {
                const offset = (i - index + len) % len;
                const centered = offset === 0;
                const x = (offset - 1) * 180;
                const scale = centered ? 1.4 : 0.9 - Math.min(offset, 2) * 0.05;
                const rot = (offset - 1) * 5;
                const opacity = Math.abs(offset - 1) > 2 ? 0 : 1;

                return (
                  <motion.img
                    key={p.id}
                    src={p.image}
                    alt={p.title}
                    onClick={() => onOpen(p)}
                    className={`absolute top-0 left-1/2 w-[220px] md:w-[360px] h-44 md:h-64 object-cover rounded-xl cursor-pointer shadow-[0_0_30px_rgba(255,215,0,0.15)] ${
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
            className="absolute right-2 md:right-0 translate-x-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaArrowRight className="text-yellow-400" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
   🖤 MAIN GALLERY PAGE
------------------------------------------- */
export default function GalleryPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="bg-black text-white font-serif">
      <main className="min-h-screen">
        <Coverflow onOpen={setSelected} />

        <section className="py-16 md:py-24 bg-gradient-to-b from-[#0b0b0b] to-[#111] text-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 tracking-widest bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent">
              Explore More
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ scale: 1.06 }}
                  onClick={() => setSelected(p)}
                  className="rounded-xl overflow-hidden cursor-pointer bg-gradient-to-b from-[#222] to-[#111] border border-yellow-500/20 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 md:h-56 object-cover opacity-90 hover:opacity-100 transition"
                  />
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-base md:text-lg capitalize">{p.title}</h3>
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
          href="/contact"
          className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-semibold px-5 md:px-7 py-2.5 md:py-3 rounded-full shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:shadow-[0_0_45px_rgba(255,215,0,0.7)] transition text-sm md:text-base"
        >
          Let’s Connect →
        </a>
      </div>
    </div>
  );
}
