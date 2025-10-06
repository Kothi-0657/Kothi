"use client";

import React, { JSX } from "react";
import { FaMapMarkerAlt, FaCity } from "react-icons/fa";

/** ✅ City data type */
interface CityItem {
  name: string;
  icon?: JSX.Element; // ✅ Use JSX.Element (not ReactNode)
}

/** ✅ List of cities */
const cities: CityItem[] = [
  { name: "Bangalore", icon: <FaCity /> },
  { name: "Chennai", icon: <FaMapMarkerAlt /> },
  { name: "Hyderabad", icon: <FaMapMarkerAlt /> },
  { name: "Mumbai", icon: <FaMapMarkerAlt /> },
  { name: "Pune", icon: <FaMapMarkerAlt /> },
  { name: "Delhi", icon: <FaMapMarkerAlt /> },
  { name: "Kolkata", icon: <FaMapMarkerAlt /> },
  { name: "Cuttak", icon: <FaMapMarkerAlt /> },
  { name: "Patna", icon: <FaMapMarkerAlt /> },
  { name: "Puri", icon: <FaMapMarkerAlt /> },
  { name: "Jamshedpur", icon: <FaMapMarkerAlt /> },
  { name: "Uttar Pradesh", icon: <FaMapMarkerAlt /> },
  { name: "Nagpur", icon: <FaMapMarkerAlt /> },
  { name: "Raipur", icon: <FaMapMarkerAlt /> },
  { name: "Chattishgarh", icon: <FaMapMarkerAlt /> },
  { name: "Ranchi", icon: <FaMapMarkerAlt /> },
  { name: "Mujaffarpur", icon: <FaMapMarkerAlt /> },
  { name: "Nasik", icon: <FaMapMarkerAlt /> },
];

/** ✅ Component */
export default function CityBand(): JSX.Element {
  return (
    <div className="w-full bg-white shadow-inner overflow-hidden mb-62 mt-1">
      <div className="flex animate-marquee whitespace-nowrap py-1.5">
        {/* Duplicate cities for seamless loop */}
        {[...cities, ...cities].map((c, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 mx-8 text-gray-800 font-semibold text-lg"
            aria-hidden={idx >= cities.length ? "true" : "false"}
          >
            <span className="text-[#b04400] text-xl">
              {c.icon || <FaMapMarkerAlt />}
            </span>
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
