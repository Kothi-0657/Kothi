"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const cities = ["Bangalore", "Chennai", "Hyderabad", "Mumbai", "Pune", "Delhi", "Kolkata", "Patna"];

export default function CityBand() {
  return (
    <div className="w-full py-9 overflow-hidden perspective-[1200px]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        {[...cities, ...cities].map((city, i) => (
          <motion.div
            key={i}
            whileHover={{ rotateY: 15, scale: 1.05 }}
            className="mx-6 px-9 py-3 bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200 rounded-4xl shadow-lg flex items-center gap-5 text-gray-800 font-semibold transition-transform"
          >
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            {city}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
