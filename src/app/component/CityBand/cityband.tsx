"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const cities = ["Bangalore", "Chennai", "Hyderabad", "Mumbai", "Pune", "Delhi", "Kolkata", "Patna"];

export default function CityBand() {
  return (
    <div className="w-full py-9 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-9"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...cities, ...cities].map((city, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 
              rounded-full border border-gray-100 
              bg-white shadow-sm text-sm font-medium text-gray-900 
              hover:border-[#b04400] hover:text-[#b04400] transition"
          >
            <FaMapMarkerAlt className="text-[#b04400] text-xs" />
            {city}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
