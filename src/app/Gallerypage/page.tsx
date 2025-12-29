"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import galleryFiles from "@/../galleryData.json";
import LinearGalleryHome from "../component/Linergallery/LinearGalleryHome";

/* ---------------------------------------------
   PROJECT LIST
----------------------------------------------*/
const projects = galleryFiles.map((f, i) => ({
  id: i + 1,
  title: f.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
  src: `/gallery/${f}`,
}));

/* ---------------------------------------------
   LIGHTBOX
----------------------------------------------*/
function Lightbox({ item, onClose }: { item: any; onClose: () => void }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.94 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[92vw] max-h-[92vh] rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-[72vh] object-contain"
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full"
            >
              <FaTimes size={18} />
            </button>

            <div className="p-4 text-center text-white bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-medium tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Curated residential project by Kothi India
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------
   CIRCULAR ROTATING GALLERY (ORGANIC)
----------------------------------------------*/
function CircularGallery({
  items,
  onOpen,
}: {
  items: any[];
  onOpen: (i: any) => void;
}) {
  const [angle, setAngle] = useState(0);
  const radius = 900;
  const count = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((a) => a + 0.12);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[620px] flex items-center justify-center perspective-[1800px] my-20">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg)`,
        }}
      >
        {items.map((p, i) => {
          const theta = (360 / count) * i;
          return (
            <div
              key={p.id}
              style={{
                transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
              }}
              className="absolute w-[210px] h-[210px] rounded-2xl overflow-hidden
                         cursor-pointer bg-white/5 backdrop-blur-md
                         border border-white/10 shadow-lg"
              onClick={() => onOpen(p)}
            >
              <img
                src={p.src}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          );
        })}
      </div>

      {/* Ground fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none"></div>
    </div>
  );
}

/* ---------------------------------------------
   ORGANIC GRID
----------------------------------------------*/
function OrganicGrid({
  items,
  onOpen,
}: {
  items: any[];
  onOpen: (i: any) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 pb-24">
      {items.map((p) => (
        <motion.div
          key={p.id}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={() => onOpen(p)}
          className="rounded-xl overflow-hidden cursor-pointer
                     bg-white/5 backdrop-blur-md
                     border border-white/10 shadow-xl"
        >
          <img
            src={p.src}
            className="w-full h-52 md:h-60 object-cover"
          />
          <div className="p-3 text-center text-sm text-gray-300">
            {p.title}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------------------------------------
   MAIN PAGE
----------------------------------------------*/
export default function GalleryPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">

      {/* HEADER */}
      <div className="text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-[#d6a45a]">
          Spaces We’ve Crafted
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A curated collection of homes shaped by thoughtful design,
          craftsmanship, and purpose.
        </p>
      </div>

      {/* CIRCULAR */}
      <CircularGallery items={projects} onOpen={setSelected} />

      {/* LINEAR FLOW */}
      <div className="my-24">
        <LinearGalleryHome />
      </div>

      {/* GRID */}
      <OrganicGrid items={projects} onOpen={setSelected} />

      {/* LIGHTBOX */}
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
