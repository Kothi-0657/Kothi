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
  per: string;
  sections: PackageSection[];
  exclusions: string[];
}

/** Data (Basic plan filled out; copy/adjust for others) */
const packages: PackageItem[] = [
  {
    name: "Basic Package",
    price: "₹ 1999",
    per: "per sqft",
    sections: [
      {
        title: "Design",
        items: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer : One Visit Per Day",
          "Project Manager : Visit site Once in a Week",
          "Android/IOS App : Access to APP for Site Status update.",
        ],
      },
      {
        title: "Structure",
        items: [
          "Basement Height : Upto 2 feet",
          "Steel : Any ISI Brand",
          "AAC : For Partition walls. 8-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
          "Cement : Penna / Priya",
          "M Sand : Blockwork & All Masonry Works",
          "P Sand : Plastering Works",
          "Concrete Grade : M20 (Manual Mix)",
          "Ceiling Height : 10 Feet",
          "Steel Reinforcement : As per Standard",
          "Parapet Wall : 3 Feet Height | 4\" Thick (Only for Floor with Headroom)",
        ],
      },
      {
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles : Upto 7' Height. Size 2'X1' Vitrified Tile. Upto ₹40/Sqft",
          "Bath & CP Fittings : Cera | Upto ₹12000 Per Bathroom | Floor Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Any ISI Brand",
          "Overhead Tank : 1000 litres Sintex | 3 Layered | UV Protected | White Colour",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 2'X2' | Vitrified Tiles Upto ₹45/Sqft. Anuj / Sparrow",
          "Balcony & Utility : Size 1'X1' | Upto ₹35/Sqft",
          "Staircase : Size 1'X1' Tile : Upto ₹35/sqft",
          "Car Parking : 1'X1' Parking Tile | Upto ₹35/Sqft",
          "Terrace Flooring : Screed Concreting with Waterproofing",
        ],
      },
      {
        title: "Kitchen & Dining",
        items: [
          "Wall Tile : Vitrified Tile (2'X1') | Upto ₹45/Sqft",
          "Sink Faucet : Upto ₹900 / No",
          "Kitchen Sink : Stainless Steel single bowl Upto ₹2800",
          "Dining : Wall Mounted Wash Basin",
          "Kitchen Granite Top : Upto ₹90/Sqft",
        ],
      },
      {
        title: "Door, Windows and Railing",
        items: [
          "Main Door : Malaysian Teak Door & Teak Frame | 32mm Thickness | 7' Height",
          "Room Doors : White Panel Door | Sal Wood Frame | 7'X3'",
          "Bathroom Door : PVC Door | 7'X2.5'",
          "Windows : Aluminium Sliding window | Max 4' X 4' | One Window Per Room | 5mm Clear Glass",
          "Staircase Railing : MS Railing",
          "Balcony Railing : MS Railing",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Any ISI Brand",
          "Wall Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Ace | Any ISI Brand",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires – Essar",
          "Switches – Fybros",
          "Bedroom : 2 Switch Box(8-Module). One at Entrance and one at Bed-side",
          "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
          "Living Room : Upto 4 Switch Box (8 Module)",
          "Dining : 1 Switch (8-Module)",
          "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
          "Utility : 1 Switch Box (4-Module)",
          "AC Points : 1 for Each Bedroom.",
          "Entrance : 1 Switch Box (6-Module)",
          "Balconies : 1 Switch Box (3-Module)",
        ],
      },
    ],
    exclusions: [
      "Compound Wall @ 425/Sqft & Gate",
      "Sump & Septic Tank @ 24/Litre",
      "Lift, Lift Pit and Shaft",
      "Electricity Connection",
      "Building Plan Approval",
      "Elevation Special Materials",
    ],
  },

  // For Standard / Premium / Ultra Luxury: currently reusing Basic sections.
  // Replace or customize sections array below for each plan as needed.
  {
    name: "Standard Package",
    price: "₹ 2199",
    per: "per sqft",
    sections: [
      {
        title: "Design",
        items: [
          "2199 per sqft",
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer : Dedicated Full-Time Site Engineer",
          "Project Manager : Visit site Twice in a Week",
          "Android/IOS App : Daily Photo Upload. Project Status Monitoring",
          "Architect : Support Till Design Completion",
        ],
      },
      {
        title: "Structure",
items: [
  "Basement Height : Upto 3 feet",
  "Steel : Arun TMT / GBR or Equivalent",
  "Chamber Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
  "Cement : Ramco / Dalmia",
  "M Sand : Blockwork & All Masonry Works",
  "P Sand : Plastering Works",
  "Concrete Grade : M20 | RMC for Roof",
  "Ceiling Height : 10 Feet",
  "Steel Reinforcement : As per Standard",
  "Parapet Wall : 3' Feet Height | 6\' Thick (Only for Floor with Headroom)",
],
      },
      {
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles : Upto Ceiling (Full Height). Size 2'X2' Vitrified Tile. Upto ₹50/Sqft. 1 Colour for 2 Bathrooms",
"Bath & CP Fittings : Parryware | Upto ₹17000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer.",
"Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Any ISI Brand",
"Overhead Tank : 2000 litres Sintex | 3 Layered | UV Protected | White Colour"
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 4'X2' | Vitrified Tiles Upto ₹65/Sqft. 1 Model for Living, Dining and Kitchen. KAG / Sunheart or Equivalent",
"Balcony & Utility : Size 2'X2' | Upto 50/Sqft | Antiskid",
"Staircase : Full Body Tile : Upto ₹110/sqft",
"Car Parking : 1'X1' Heavy Duty Tile | Upto ₹50/Sqft",
"Terrace Flooring : Screed Concreting with Waterproofing"
        ],
      },
      {
        title: "Kitchen & Dining",
        items: [
          "Wall Tile : Vitrified Tile (2'X2') | Upto ₹55/Sqft",
"Sink Faucet : Upto ₹2000 / No",
"Kitchen Sink : Stainless Steel sink with Drain Upto ₹4000",
"Dining : Wall Mounted Wash Basin",
"Kitchen Granite Top : Upto ₹140/Sqft"
        ],
      },
      {
        title: "Door, Windows and Railing",
        items: [
          "Main Door : Malaysian Teak Door & Teak Frame - Readymade | 35mm Thickness | 5\"X3\" Thick Frame | 7' Height 3.5 Feet Width | Upto 22000/nos | 1 Nos only.",
"Room Doors : Flush Door| Sal Wood Frame | 7'X3'",
"Bathroom Door : WPC Door & Frame | 7'X2.5'",
"Windows : UPVC Sliding White | Max 5' X 5' | One Window Per Room | 5mm Clear Glass",
"Staircase Railing : SS 304 Grade Railing",
"Balcony Railing : SS 304 Grade Railing with 8mm Toughened Glass with Posts",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Nippon",
"Wall Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
"Ceiling Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
"Exterior Paint : 1 coat of Primer | 2 Coats of Sumo Xtra | Nippon",
"Elevation Putty : 2 Coat of Putty for Front Elevation | Nippon Exterior Putty"
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires – Orbit (FRLS)",
          "Switches – Legrand",
          "Bedroom : 3 Switch Box(8-Module)", 
          "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
          "Living Room : Upto 4 Switch Box (8 Module)",
          "Dining : 1 Switch (8-Module)",
          "Pooja : 1 Switch (3-Module)",
          "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
          "Utility : 1 Switch Box (4-Module)",
          "AC Points : 1 for Each Bedroom. 1 for Living Room",
          "Entrance : 1 Switch Box (6-Module)",
          "Balconies : 1 Switch Box (3-Module)"
        ],
      },
    ], // <-- copy the Basic sections here or customize
    exclusions: [
      "Compound Wall @ 425/Sqft & Gate",
      "Sump & Septic Tank @ 24/Litre",
      "Lift, Lift Pit and Shaft",
      "Electricity Connection",
    ],
  },
  {
    name: "Premium Package",
    price: "₹ 2499",
    per: "per sqft",
    sections: [
      {
        title: "Design",
        items: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
          "SOIL TEST REPORT",
          "STRUCTURAL DRAWINGS",
          "FURNITURE LAYOUT : ALL FLOORS (2D)",
          "ELEVATION DETAIL DRAWING : (2D)"
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer : One Visit Per Day",
          "Project Manager : Visit site Once in a Week",
          "Android/IOS App : Access to APP for Site Status update.",
        ],
      },
      {
        title: "Structure",
        items: [
          "Basement Height : Upto 2 feet",
          "Steel : Any ISI Brand",
          "AAC : For Partition walls. 8-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
          "Cement : Penna / Priya",
          "M Sand : Blockwork & All Masonry Works",
          "P Sand : Plastering Works",
          "Concrete Grade : M20 (Manual Mix)",
          "Ceiling Height : 10 Feet",
          "Steel Reinforcement : As per Standard",
          "Parapet Wall : 3 Feet Height | 4\" Thick (Only for Floor with Headroom)",
        ],
      },
      {
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles : Upto 7' Height. Size 2'X1' Vitrified Tile. Upto ₹40/Sqft",
          "Bath & CP Fittings : Cera | Upto ₹12000 Per Bathroom | Floor Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Any ISI Brand",
          "Overhead Tank : 1000 litres Sintex | 3 Layered | UV Protected | White Colour",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 2'X2' | Vitrified Tiles Upto ₹45/Sqft. Anuj / Sparrow",
          "Balcony & Utility : Size 1'X1' | Upto ₹35/Sqft",
          "Staircase : Size 1'X1' Tile : Upto ₹35/sqft",
          "Car Parking : 1'X1' Parking Tile | Upto ₹35/Sqft",
          "Terrace Flooring : Screed Concreting with Waterproofing",
        ],
      },
      {
        title: "Kitchen & Dining",
        items: [
          "Wall Tile : Vitrified Tile (2'X1') | Upto ₹45/Sqft",
          "Sink Faucet : Upto ₹900 / No",
          "Kitchen Sink : Stainless Steel single bowl Upto ₹2800",
          "Dining : Wall Mounted Wash Basin",
          "Kitchen Granite Top : Upto ₹90/Sqft",
        ],
      },
      {
        title: "Door, Windows and Railing",
        items: [
          "Main Door : Malaysian Teak Door & Teak Frame | 32mm Thickness | 7' Height",
          "Room Doors : White Panel Door | Sal Wood Frame | 7'X3'",
          "Bathroom Door : PVC Door | 7'X2.5'",
          "Windows : Aluminium Sliding window | Max 4' X 4' | One Window Per Room | 5mm Clear Glass",
          "Staircase Railing : MS Railing",
          "Balcony Railing : MS Railing",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Any ISI Brand",
          "Wall Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Ace | Any ISI Brand",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires – Essar",
          "Switches – Fybros",
          "Bedroom : 2 Switch Box(8-Module). One at Entrance and one at Bed-side",
          "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
          "Living Room : Upto 4 Switch Box (8 Module)",
          "Dining : 1 Switch (8-Module)",
          "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
          "Utility : 1 Switch Box (4-Module)",
          "AC Points : 1 for Each Bedroom.",
          "Entrance : 1 Switch Box (6-Module)",
          "Balconies : 1 Switch Box (3-Module)",
        ],
      },
    ], // customize
    exclusions: ["Compound Wall @ 425/Sqft & Gate"],
  },
  {
    name: "Ultra Luxury",
    price: "₹ 2999",
    per: "per sqft",
    sections: [
      {
        title: "Design",
        items: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
          "SOIL TEST REPORT",
          "STRUCTURAL DRAWINGS",
          "FURNITURE LAYOUT : ALL FLOORS (2D)",
          "ELEVATION DETAIL DRAWING : (2D)",
          "SITE ASSESSMENT & SITE PLAN",
          "INTERIOR VIEWS : ALL FLOORS (3D)",
          "INTERIOR DETAILING : ALL ROOMS (2D)",
          "INTERIOR 3D WALK-THROUGH",
          "APPROVAL DRAWING",
          "LANDSCAPING ARCHITECTURAL DESIGNS",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer : One Visit Per Day",
          "Project Manager : Visit site Once in a Week",
          "Android/IOS App : Access to APP for Site Status update.",
        ],
      },
  {
    title: "Structure",
    items: [
      "Basement Height : Upto 5 feet",
      "Steel : TATA Steel",
      "Wire-Cut Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
      "Cement : Ramco / Dalmia / Coramandel",
      "River Sand : Blockwork & All Masonry Works",
      "River Sand : Plastering Works",
      "Concrete Grade : M25 | RMC for Roof",
      "Ceiling Height : 11 Feet (FFL to FFL)",
      "Steel Reinforcement : 1.5 times Strength, all as per DEEJOS Structural Drawings and Detailing by DEEJOS Structural Engineer",
      "Parapet Wall : 3.5 Feet Height | 6\" Thick (Or) Toughened Glass Railing if Required",
      "RCC Lift Pit: Included (If Required)",
      "RCC Concrete Slab for Base, Lift Pit & Shaft: Included (If Required)"
    ],
  },
      {
        title: "Bathroom & Plumbing",
items: [
  "Wall Tiles : Upto Ceiling (Full Height). 4'X2' Vitrified Tile. Upto ₹120/Sqft",
  "Bath & CP Fittings : Kohler | Upto ₹60000 Per Bathroom | Concealed EWC, Counter Top Wash Basin, Marble Counter Slab, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
  "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. HDPE flexible pipe. Brands: Ashirwad / Finolex / Jindal",
  "RCC Overhead Tank : Upto 6000 litres with Waterproofing.",
  "Solar Heater Plumbing Lines : Included (If Required)",
],
      },
{
  title: "Flooring",
  items: [
    "Living, Dining, Bedrooms & Kitchen : 6'X6' | Quarts Tiles Upto ₹200/Sqft",
    "Balcony & Utility : Size 2'X2' | Upto 60/Sqft",
    "Staircase : Marble Upto ₹350/sqft",
    "Car Parking : Granite| Upto ₹120/Sqft",
    "Terrace Flooring : 2'X2' Exterior Grade Vitrified Tile. (Any Grade) | with Waterproofing"
  ],
},
      {
        title: "Kitchen & Dining",
        items: [
          "Wall Tile : Vitrified Designer Tile (4'X2') | Upto ₹125/Sqft",
"Sink Faucet : Floor Mounter Pull-Out | Upto ₹8000 / No",
"Kitchen Sink : Multifunction Sink Upto ₹15000",
"Dining : Premium Designer Collection Wash Basin with Marble Counter and Designer Tap.",
"Kitchen Top : Quarts Stone Upto ₹350/Sqft",
        ],
      },
      {
        title: "Door, Windows and Railing",
        items: [
          "Main Door : Designer Wood Door of Height upto 8Feet X 5Feet (or) Security Steel Door of Size (8'X4.5') Pure Stainless Steel with Digital Lock.",
"Room Doors : Flush Door with Laminate | Ghana Wood Frame | 8'X3.5'",
"Water Proof Flush Door with Designer Laminates | 8'X3'",
"Windows : Openable Type | UPVC Coloured | No Restriction on Size and Quantity | Toughened Glass",
"Staircase Railing : Toughened Glass with SS or Wood Railing or Aluminium",
"Balcony Railing : 10mm Full Toughened Glass with Aluminium Railing."
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Any ISI Brand",
          "Wall Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Ace | Any ISI Brand",
        ],
      },
      {
        title: "Electrical",
items: [
  "Wires – Finolex / Havells (FRLS)",
  "Switches – Touch Switches with Glass Plates.",
  "No Restriction on Number of Points. Required power points will be provided for Lifts, DG, Curtain Motors, Swimming Pool, Ro Plant, Pressure Pump, Intercom, Surveillance System, Exterior Light Points, Gate Automation, lightening arrester, Hybrid Solar Heater, Water Fountain, HVAC Systems.",
  "Electricity Panel Board - Upto 2 Service Connection with RLCB Exterior Grade"
],
      },
    ], // customize
  exclusions: [
    "Compound Wall @ 425/Sqtft & Gate",
    "Sump & Septic Tank @ 24/Litre",
    "Lift",
    "Electricity Connection",
    "Building Plan Approval",
    "Elevation Special Materials"
  ],
},
];

export default function ConstructionPage(): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (pkgIndex: number, secIndex: number): void => {
    const key = `${pkgIndex}-${secIndex}`;
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isSectionOpen = (pkgIndex: number, secIndex: number): boolean =>
    !!openSections[`${pkgIndex}-${secIndex}`];

  const whyFeatures: string[] = [
    "Custom home design and planning",
    "High-quality materials and finishes",
    "End-to-end project management",
    "On-time delivery assurance",
    "Vastu-compliant layouts",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden m-0 p-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3d] via-[#0c2a5a] to-[#122d4a]" />
      <div className="absolute inset-0 bg-[url('/patterns/geometry.svg')] opacity-10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-orange-500 text-center py-16 px-4 bg-gradient-to-br from-[#0b1e3d] to-[#122d4a] shadow-lg">
          <FaHardHat className="mx-auto text-6xl mb-6 drop-shadow-lg animate-bounce" />
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            Home Construction Services
          </h1>
          <p className="mt-4 text-white text-lg font-light max-w-2xl mx-auto opacity-90">
            Build your dream home with <span className="font-semibold">quality</span>,{" "}
            <span className="font-semibold">transparency</span>, and{" "}
            <span className="font-semibold">trust</span>.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-white/50 mb-12">
            Why Choose Our Services?
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
            Home Construction Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-orange-500">
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
                  <p className="text-sm font-medium ">{pkg.per}</p>
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

          {/* CTA Button */}
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowForm(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0b1e3d] to-[#122d4a] text-white font-semibold shadow-xl hover:shadow-2xl transition"
            >
              Book Now
            </motion.button>
          </div>
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
                Book Construction Service
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
