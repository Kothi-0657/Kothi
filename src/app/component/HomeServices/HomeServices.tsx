"use client";

import Image from "next/image";
import Popup from "../PopupBox/popup";
import ContactForm from "../Form/Cxform";
import { useState } from "react";

const services = [
  {
    title: "Home Painting",
    icon: "/ServiceIcons/painb.png",
  },
  {
    title: "Home Cleaning",
    icon: "/ServiceIcons/cleab.png",
  },
  {
    title: "Home Renovations",
    icon: "/ServiceIcons/renov.png",
  },
  {
    title: "Home Interiors",
    icon: "/ServiceIcons/inteb.png",
  },
  {
    title: "Home Construction",
    icon: "/ServiceIcons/conb.png",
  },
  {
    title: "Plumbing",
    icon: "/ServiceIcons/plumb.png",
  },
  {
    title: "Electrical",
    icon: "/ServiceIcons/elecb.png",
  },
  {
    title: "Carpentry",
    icon: "/ServiceIcons/carb.png",
  },
  {
    title: "Civil Works",
    icon: "/ServiceIcons/civilb.png",
  },
  {
    title: "Fabrication",
    icon: "/ServiceIcons/fab.png",
  },
];

export default function HomeServices() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our <span className="text-[#FE904E]">Home Services</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Complete home solutions — from construction to interiors and maintenance
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-xl p-6
                           border border-white/10 hover:border-[#FE904E]
                           hover:shadow-[0_0_50px_rgba(254,144,78,0.25)]
                           transition-all duration-100 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-34 h-34 mb-4 flex items-center justify-center rounded-full
                                bg-white/10 group-hover:bg-[#FE904E]/20 transition">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={142}
                    height={142}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Live Chat Button */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-auto text-sm font-semibold text-[#FE904E]
                             hover:text-white transition"
                >
                  Live Chat →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <ContactForm onSuccess={() => setShowPopup(false)} />
      </Popup>
    </>
  );
}
