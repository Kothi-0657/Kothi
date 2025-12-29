"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaPaintRoller,
  FaBroom,
  FaTools,
  FaCouch,
  FaBuilding,
  FaFaucet,
  FaBolt,
  FaHammer,
  FaDraftingCompass,
  FaIndustry,
} from "react-icons/fa";
import type { IconType } from "react-icons";

/* ---------- Services ---------- */
const services: {
  title: string;
  href: string;
  icon: IconType;
  description: string;
  points: string[];
}[] = [
  {
    title: "Home Painting",
    icon: FaPaintRoller,
    href: "/services/homeServices",
    description: "Premium interior & exterior painting solutions.",
    points: ["Interior & exterior", "Waterproof coatings", "Color consultation"],
  },
  {
    title: "Home Cleaning",
    icon: FaBroom,
    href: "/services/homeServices",
    description: "Professional deep cleaning services.",
    points: ["Kitchen & bathroom", "Sofa & carpet", "Full home cleaning"],
  },
  {
    title: "Home Renovations",
    icon: FaTools,
    href: "/services/renovation",
    description: "Complete renovation & upgrades.",
    points: ["Layout changes", "Material upgrade", "End-to-end execution"],
  },
  {
    title: "Home Interiors",
    icon: FaCouch,
    href: "/services/homeServices",
    description: "Modern interior design & execution.",
    points: ["Modular kitchen", "Wardrobes", "False ceiling"],
  },
  {
    title: "Home Construction",
    icon: FaBuilding,
    href: "/services/construction",
    description: "Turnkey construction solutions.",
    points: ["Planning & design", "Execution", "Quality assurance"],
  },
  {
    title: "Plumbing",
    icon: FaFaucet,
    href: "/services/homeServices",
    description: "Reliable plumbing services.",
    points: ["Leak fixes", "New fittings", "Maintenance"],
  },
  {
    title: "Electrical",
    icon: FaBolt,
    href: "/services/homeServices",
    description: "Safe & professional electrical work.",
    points: ["Wiring", "Lighting", "Load management"],
  },
  {
    title: "Carpentry",
    icon: FaHammer,
    href: "/services/homeServices",
    description: "Custom carpentry solutions.",
    points: ["Furniture", "Repairs", "Custom designs"],
  },
  {
    title: "Civil",
    icon: FaDraftingCompass,
    href: "/services/construction",
    description: "Structural & civil works.",
    points: ["RCC", "Masonry", "Structural repairs"],
  },
  {
    title: "Fabrication",
    icon: FaIndustry,
    href: "/services/construction",
    description: "Metal & industrial fabrication.",
    points: ["Gates & grills", "Steel work", "Custom fabrication"],
  },
];

/* ---------- Component ---------- */
export default function ServicesQuickAccess() {
  const [activeService, setActiveService] =
    useState<(typeof services)[0] | null>(null);

  return (
    <section className="py-14 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Services at a Glance
        </h2>

        {/* 🔹 HOVER WRAPPER (IMPORTANT FIX) */}
        <div
          className="relative"
          onMouseLeave={() => setActiveService(null)}
        >
          {/* SERVICES GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveService(service)}
                  className="cursor-pointer group rounded-xl bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center p-6"
                >
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3 transition-all group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <span className="text-sm font-semibold text-center">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 🔹 EXPANDABLE PANEL */}
          <div
            className={`mt-8 transition-all duration-500 ${
              activeService ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {activeService && (
              <Link
                href={activeService.href}
                className="block bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:bg-gray-700 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <activeService.icon size={28} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {activeService.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {activeService.description}
                    </p>

                    <ul className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-gray-400">
                      {activeService.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <span className="text-orange-400 font-medium self-start md:self-center">
                    Explore →
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
