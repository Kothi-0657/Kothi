"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import galleryFiles from "@/../galleryData.json";
import type { JSX } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/app/component/Form/Cxform";
import LinearHomeGallery from "../component/Linergallery/LinearGalleryHome";
import LinearGalleryHome from "../component/Linergallery/LinearGalleryHome";

/* ---------------------------------------------
   PROJECT LISTS
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-[70vh] object-contain"
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/70 p-2 rounded-full"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-4 text-center text-white bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2">
                Premium interior & architecture showcase project.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------
   3D CIRCULAR WHEEL GALLERY
----------------------------------------------*/
function CircularWheel({ items, onOpen }: { items: any[]; onOpen: (i: any) => void }) {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const radius = 1050; // Bigger wheel
  const count = items.length;

  // Auto-rotation
  useEffect(() => {
    const int = setInterval(() => setAngle((a) => a + 0.2), 40);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-[2000px] mt-10 mb-20">
      <div
        ref={wheelRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg)`,
        }}
      >
        {items.map((p, i) => {
          const theta = (360 / count) * i;
          const transform = `
            rotateY(${theta}deg)
            translateZ(${radius}px)
          `;
          return (
            <div
              key={p.id}
              className="absolute w-[190px] h-[190px] rounded-xl overflow-hidden cursor-pointer
                         border border-yellow-400/60 shadow-[0_0_80px_rgba(255,200,0,0.25)] bg-gray-900/30 backdrop-blur-lg"
              style={{ transform }}
              onClick={() => onOpen(p)}
            >
              <img src={p.src} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>

      {/* Bottom shadow fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
}


/* ---------------------------------------------
   TILE DESIGN C — Tilt Hover Motion Grid
----------------------------------------------*/
function TiltGrid({ items, onOpen }: { items: any[]; onOpen: (i: any) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-16">
      {items.map((p) => (
        <motion.div
          key={p.id}
          whileHover={{ scale: 1.05, rotateZ: 1.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          onClick={() => onOpen(p)}
          className="cursor-pointer rounded-xl overflow-hidden shadow-xl bg-black/40 backdrop-blur-lg border border-white/10"
        >
          <img src={p.src} className="w-full h-48 md:h-56 object-cover" />
          <div className="p-3 text-center text-white text-sm bg-black/40">
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
    <div className="w-full min-h-screen bg-black text-white">
      {/* HEADER */}
      <h1 className="text-center text-4xl md:text-5xl font-serif pt-16 mb-10 text-orange-400">
        Kothi India Gallery Showcase
      </h1>

      {/* 1️⃣ Circular Wheel */}
      <CircularWheel items={projects} onOpen={setSelected} />
<LinearGalleryHome />

      {/* 3️⃣ Tilt Hover Grid */}
      <TiltGrid items={projects} onOpen={setSelected} />
        
      {/* Lightbox */}
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
   
