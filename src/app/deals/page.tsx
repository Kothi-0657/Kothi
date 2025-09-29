"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronCircleDown } from "react-icons/fa";
import Popup from "../component/PopupBox/popup";
import ContactForm from "@/app/component/Form/Cxform"; // ✅ Import reusable form

type Plan = { name: string; price: string };
type PaintPlan = { type: string; price: string; cleaning: string };

const constructionPlans: Plan[] = [
  { name: "Budget Plan", price: "1650/- Sq.ft" },
  { name: "Basic Plan", price: "1780/- Sq.ft" },
  { name: "Classic Plan", price: "1980/- Sq.ft" },
  { name: "Royal Plan", price: "2172/- Sq.ft" },
  { name: "Luxury Plan", price: "2700/- Sq.ft" },
];

const paintingPlans: PaintPlan[] = [
  { type: "1 BHK", price: "5999/-", cleaning: "Free" },
  { type: "2 BHK", price: "10999/-", cleaning: "Free" },
  { type: "3 BHK", price: "16999/-", cleaning: "Free" },
  { type: "4 BHK", price: "23999/-", cleaning: "Free" },
];

export default function DealsPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen text-black">
      {/* 🔥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 px-6 py-10 bg-black/50 min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto">
          {/* Left: Construction Plans */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-bold text-orange-500 flex items-center gap-2">
                Constructions Plans
              </h2>
              <Image
                src="/Kothi1.png"
                alt="Blueprint"
                width={420}
                height={320}
                className="object-contain"
              />
            </div>

            <div className="space-y-5">
              {constructionPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex justify-between items-center bg-gradient-to-r from-white/80 to-gray-100/70 text-black p-2 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-5">
                    <FaChevronCircleDown className="text-red-500 text-xl" />
                    <span className="font-semibold">{plan.name}</span>
                  </div>
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm shadow-md">
                    {plan.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="italic text-sm mt-5 text-gray-200 mt-20">
              * All India Service Available
            </p>
          </div>

          {/* Right: Painting Plans */}
          <div className="w-full lg:w-1/4">
            <div className="flex items-center gap-8 mb-22 mt-23">
              <h2 className="text-4xl font-bold text-orange-500 flex items-center gap-2">
                Painting Plans
              </h2>
              <Image
                src="/Kothi9.png"
                alt="Painting Illustration"
                width={420}
                height={520}
                className="object-contain"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-3 text-center font-semibold bg-orange-500 text-white">
                <div className="p-3 mb-1 mt-1">Sale</div>
                <div className="p-3 mb-1 mt-1">Painting</div>
                <div className="p-3 mb-1 mt-1">Cleaning</div>
              </div>

              {paintingPlans.map((plan) => (
                <div
                  key={plan.type}
                  className="grid grid-cols-3 text-center border-t border-gray-300 bg-black/70 text-white mb-2 mt-2"
                >
                  <div className="p-3.5 mb-1 mt-1">{plan.type}</div>
                  <div className="p-3.5 mb-1 mt-1">{plan.price}</div>
                  <div className="p-3.5 mb-1 mt-1">
                    <span className="bg-red-500 text-white px-3 py-0.5 rounded-full text-sm font-semibold">
                      {plan.cleaning}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowPopup(true)}
                className="inline-block"
              >
                <Image
                  src="/Kothi5.png"
                  alt="Get Started Now"
                  width={220}
                  height={60}
                  className="mx-auto cursor-pointer hover:scale-105 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal with Reusable Form */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <ContactForm /> {/* ✅ Reuse the same form everywhere */}
      </Popup>
    </div>
  );
}
