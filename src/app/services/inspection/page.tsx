"use client";

import React, { useState } from "react";
import type { JSX } from "react";
import { FaCheck, FaHardHat, FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/app/component/Form/Cxform";

/** Types */
interface PackageSection {
  title: string;
  items: string[];
}
interface PackageItem {
  name: string;
  price: string;
  sections: PackageSection[];
  exclusions: string[];
}

/** Packages Data */
const packages: PackageItem[] = [
  {
    name: "Crust Inspection",
    price: "₹ 9,999",
    sections: [
      {
        title: "Focus",
        items: ["Visual & Safety"],
      },
      {
        title: "Ideal For",
        items: ["Rentals, Tenants, Handovers"],
      },
      {
        title: "Exterior & Structure",
        items: [
          "Roof condition (visible tiles, gutters, fascia, water flow)",
          "Exterior walls, paint condition, visible cracks or dampness",
          "Balcony, terrace, and railing stability",
        ],
      },
      {
        title: "Interior Spaces",
        items: [
          "Floor, ceiling, and wall surface checks (for cracks, leaks, or stains)",
          "Doors and windows (operation, alignment, sealing)",
          "Basic ventilation and lighting review",
        ],
      },
      {
        title: "Electrical & Plumbing (Basic)",
        items: [
          "Switchboard operation & visible wiring safety",
          "Functionality of lighting and power outlets",
          "Faucets, taps, and visible pipe leaks",
          "Water pressure & basic drainage flow check",
        ],
      },
      {
        title: "Safety Check",
        items: [
          "Fire & electrical hazards (loose wires, unsafe connections)",
          "General accessibility and safety observations",
        ],
      },
    ],
    exclusions: [
      "Hidden structural analysis",
      "Thermal imaging or load testing",
      "Detailed plumbing line tracing",
    ],
  },
  {
    name: "Mantle Inspection",
    price: "₹ 14,999",
    sections: [
      {
        title: "Focus",
        items: ["The 360° Home Review"],
      },
      {
        title: "Ideal For",
        items: ["Structural & Functional Review", "Buyers, Renovations"],
      },
      {
        title: "Exterior & Structure",
        items: [
          "Foundation & load-bearing wall assessment",
          "Roof, slab, and column review for seepage or deformation",
          "External & internal dampness mapping",
        ],
      },
      {
        title: "Interior Spaces",
        items: [
          "Tile alignment, joint sealing, flooring stability",
          "False ceiling integrity & moisture presence",
          "Woodwork inspection (cabinets, wardrobes, termite signs)",
        ],
      },
      {
        title: "Electrical & Plumbing",
        items: [
          "Circuit load testing, earthing validation",
          "Distribution board and MCB testing",
          "Pipeline pressure & leakage test",
          "Drainage flow assessment",
        ],
      },
      {
        title: "Safety Check",
        items: [
          "Structural safety certificate review",
          "Builder warranty verification",
          "Snag list for repair claims",
        ],
      },
    ],
    exclusions: [
      "Thermal imaging",
      "Smart home testing",
      "Advanced energy audit",
    ],
  },
  {
    name: "Core Inspection",
    price: "₹ 29,999",
    sections: [
      {
        title: "Focus",
        items: ["Peace of Mind Package, Builder’s Promise Check"],
      },
      {
        title: "Ideal For",
        items: ["Full Technical Audit", "Homeowners, Luxury, Builders"],
      },
      {
        title: "Exterior & Structure",
        items: [
          "Foundation integrity verification",
          "Roof and slab thermal imaging (detect hidden cracks or leaks)",
          "Waterproofing effectiveness test",
        ],
      },
      {
        title: "Interior & Finishing",
        items: [
          "Paint adhesion, wall dampness mapping",
          "Tile, marble, and woodwork finish inspection",
          "Door/window insulation performance",
        ],
      },
      {
        title: "Electrical & Plumbing (Advanced)",
        items: [
          "Full panel audit with circuit tracing",
          "Thermal imaging for hotspots and overload",
          "Pressure testing of concealed pipelines",
          "Water quality & pump performance audit",
        ],
      },
      {
        title: "Safety & Compliance",
        items: [
          "Fire safety audit (extinguishers, smoke sensors)",
          "Structural and code compliance check",
          "Final handover checklist with certification",
        ],
      },
    ],
    exclusions: ["N/A — complete inspection package"],
  },
];

export default function InspectionPage(): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (pkgIndex: number, secIndex: number): void => {
    const key = `${pkgIndex}-${secIndex}`;
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isSectionOpen = (pkgIndex: number, secIndex: number): boolean =>
    !!openSections[`${pkgIndex}-${secIndex}`];

  const whyFeatures: string[] = [
    "Certified Inspectors with Technical Expertise",
    "Detailed, Illustrated Reports",
    "Thermal Imaging & Moisture Detection (Core Plan)",
    "Compliance with National Building Standards",
    "Fast Reporting & Repair Priority Matrix",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3d] via-[#0c2a5a] to-[#122d4a]" />
      <div className="absolute inset-0 bg-[url('/patterns/geometry.svg')] opacity-10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-orange-500 text-center py-16 px-4 bg-gradient-to-br from-[#0b1e3d] to-[#122d4a] shadow-lg">
          <FaHardHat className="mx-auto text-6xl mb-6 drop-shadow-lg animate-bounce" />
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            Home Inspection Services
          </h1>
          <p className="mt-4 text-white text-lg font-light max-w-2xl mx-auto opacity-90">
            Ensure your home is safe, durable, and built right with{" "}
            <span className="font-semibold">Kothi India’s Signature Inspections</span>.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-white/50 mb-12">
            Why Choose Our Inspections?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 flex items-start gap-4 hover:scale-105 transition-transform border border-white/20"
              >
                <span className="bg-[#0b1e3d] text-white p-3 rounded-full shadow-md">
                  <FaCheck size={16} />
                </span>
                <span className="text-white font-medium">{f}</span>
              </motion.div>
            ))}
          </div>

          {/* Pricing Packages Section */}
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
            Inspection Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-orange-500">
            {packages.map((pkg, pkgIndex) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: pkgIndex * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl hover:scale-105 transition-all"
              >
                <div className="bg-[#0b1e3d] text-white text-center py-6">
                  <h3 className="text-lg font-bold uppercase text-orange-500">{pkg.name}</h3>
                  <p className="text-3xl font-extrabold mt-2">{pkg.price}</p>
                </div>

                <div className="divide-y divide-white/20">
                  {pkg.sections.map((section, secIndex) => {
                    const open = isSectionOpen(pkgIndex, secIndex);
                    return (
                      <div key={secIndex}>
                        <button
                          type="button"
                          onClick={() => toggleSection(pkgIndex, secIndex)}
                          className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/10 text-white"
                        >
                          <span className="font-medium">{section.title}</span>
                          <span>{open ? <FaMinus size={14} /> : <FaPlus size={14} />}</span>
                        </button>

                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              key={`${pkgIndex}-${secIndex}-panel`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 py-3 text-sm text-orange-500 bg-white/5"
                            >
                              <ul className="list-disc pl-5 space-y-1">
                                {section.items.map((it, i) => (
                                  <li key={i}>{it}</li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* Exclusions */}
                  <div className="px-4 py-3">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer text-white">
                        <span className="font-medium">What’s Not Included</span>
                        <span className="ml-2 text-white group-open:hidden">
                          <FaPlus size={14} />
                        </span>
                        <span className="ml-2 text-white hidden group-open:block">
                          <FaMinus size={14} />
                        </span>
                      </summary>
                      <ul className="mt-3 pl-5 list-disc text-sm text-white/80 space-y-1">
                        {pkg.exclusions.map((exc, i) => (
                          <li key={i}>{exc}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button REMOVED */}
        </div>

        {/* Contact Form Popup */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={() => setShowForm(false)}
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-6 text-[#0b1e3d] text-center">
                Book Home Inspection
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
