"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// -----------------------------
// CONFIG: replace these paths with your actual image URLs
// -----------------------------
const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: `Short description for project ${i + 1}`,
  image: `/Gallerypage/project ${i + 1}.jpeg`,
}));

// -----------------------------
// Lightbox (shared)
// -----------------------------
function Lightbox({ selected, onClose }: { selected: any; onClose: () => void }) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId={`card-${selected.id}`}
            className="relative max-w-[95%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <motion.div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-semibold">{selected.title}</h3>
              <p className="text-gray-300 mt-2">{selected.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// -----------------------------
// Hero: Parallax Full-screen Slider
// -----------------------------
function HeroSlider({ onOpen }: { onOpen: (p: any) => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % 4), 6000);
    return () => clearInterval(t);
  }, []);

  const visible = projects.slice(0, 4);

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {visible.map((p, i) => (
        <motion.div
          key={p.id}
          className={`absolute inset-0 ${i === index ? "z-20" : "z-10"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.4 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
            <div className="max-w-3xl">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold"
              >
                {p.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-gray-300 max-w-xl"
              >
                {p.description}
              </motion.p>

              <div className="mt-6 flex gap-4">
                <button
                  className="bg-white text-black px-5 py-3 rounded-md font-medium shadow-lg"
                  onClick={() => onOpen(p)}
                >
                  View Project
                </button>
                <button
                  className="border border-white/30 text-white px-5 py-3 rounded-md"
                  onClick={() => setIndex((idx) => (idx + 1) % visible.length)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* nav dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {visible.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// -----------------------------
// Scroll Reveal Masonry Grid
// -----------------------------
function MasonryGrid({ onOpen }: { onOpen: (p: any) => void }) {
  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Project Grid</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              layoutId={`card-${p.id}`}
              className="mb-4 rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => onOpen(p)}
            >
              <img src={p.image} alt={p.title} className="w-full object-cover rounded-xl" />
              <div className="p-3 bg-black/40">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Horizontal Coverflow + Small Thumbnails
// -----------------------------
function Coverflow({ onOpen }: { onOpen: (p: any) => void }) {
  const [index, setIndex] = useState(0);
  const len = projects.length;

  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Featured</h2>
        <div className="relative flex items-center justify-center">
          <button onClick={prev} className="absolute left-0 -translate-x-1/2 bg-black/40 p-2 rounded-full">
            <FaArrowLeft />
          </button>

          <div className="w-full overflow-hidden">
            <div className="relative h-64">
              {projects.map((p, i) => {
                // position relative to index
                const offset = ((i - index + len) % len);
                const centered = offset === 0;
                const left = offset === len - 1 || offset === len - 2; // wrap-around

                const x = (offset - 1) * 260; // spacing
                const scale = centered ? 1 : 0.8 - Math.min(offset, 2) * 0.06;
                const rot = (offset - 1) * 8;
                const opacity = Math.abs(offset - 1) > 2 ? 0 : 1;

                return (
                  <motion.img
                    key={p.id}
                    src={p.image}
                    alt={p.title}
                    onClick={() => onOpen(p)}
                    className="absolute top-0 left-1/2 w-[380px] h-64 object-cover rounded-xl shadow-2xl cursor-pointer"
                    style={{ x, translateX: '-50%' }}
                    animate={{ x, scale, rotate: rot, opacity }}
                    transition={{ type: "spring", stiffness: 90, damping: 18 }}
                  />
                );
              })}
            </div>
          </div>

          <button onClick={next} className="absolute right-0 translate-x-1/2 bg-black/40 p-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>

        {/* thumbnails */}
        <div className="mt-6 flex items-center gap-3 overflow-x-auto py-2">
          {projects.map((p) => (
            <button key={p.id} onClick={() => onOpen(p)} className="w-20 h-14 rounded-md overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Combined Page
// -----------------------------
export default function PremiumPortfolioGallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="font-sans antialiased">
      <HeroSlider onOpen={setSelected} />

      <main className="-mt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-2">Welcome to Our Work</h2>
            <p className="text-gray-300">A unified gallery combining hero slider, masonry grid, coverflow and lightbox.</p>
          </div>
        </div>

        <MasonryGrid onOpen={setSelected} />

        <Coverflow onOpen={setSelected} />

        <section className="py-16 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Horizontal Swipe</h2>
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-4">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  className="min-w-[320px] snap-center rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  onClick={() => setSelected(p)}
                >
                  <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                  <div className="p-3 bg-black/40">
                    <h3 className="font-semibold">{p.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Lightbox selected={selected} onClose={() => setSelected(null)} />

      {/* small sticky CTA */}
      <div className="fixed right-6 bottom-6 z-40">
        <a href="#" className="bg-white text-black px-4 py-2 rounded-full shadow-lg">Contact</a>
      </div>
    </div>
  );
}
