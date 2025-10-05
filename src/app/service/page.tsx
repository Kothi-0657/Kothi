"use client";

import Link from "next/link";
import Image from "next/image";


const services = [
  { title: "Construction", type: "construction", icon: "/icons/iconcons.png", description: "Expert construction solutions tailored for your needs." },
  { title: "Renovation", type: "renovation", icon: "/icons/iconinterior.png", description: "Transform your space with our renovation services." },
  { title: "Home Inspection", type: "inspection", icon: "/icons/iconinspections.png", description: "Comprehensive home inspection for peace of mind." },
  { title: "Packers & Movers", type: "packersAndMovers", icon: "/icons/iconpnm.png", description: "Reliable packers and movers for hassle-free relocation." },
  { title: "Home Services", type: "homeServices", icon: "/icons/iconhm.png", description: "Wide range of home services to maintain your property." },
];

export default function ServicePage() {
  return (
    <div className="relative min-h-screen p-12">
      {/* 🔹 Background video */}
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

      {/* 🔹 Overlay to make text readable */}
      <div className="absolute inset-0 bg-white/50 -z-10"></div>

      {/* 🔹 Foreground Content */}
      <div className="relative z-1">
        <h1 className="text-6xl font-extrabold text-center text-[#b04400] mb-20 mt-20">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.type}
              className="rounded-2xl shadow-xl overflow-hidden border-2 border-transparent 
                         bg-white/60 backdrop-blur-md hover:shadow-2xl transition-all duration-300
                         hover:border-4 hover:border-[#b04400] p-6 flex flex-col justify-between"
            >
              {/* Top Icon Section */}
              <div className="mb-5 flex items-center justify-center rounded-xl p-4">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={420}
                  height={500}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">{s.title}</h2>
                <p className="text-gray-700 mb-6 flex-grow">
                  {s.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center mt-auto">
                  <Link
                    href={`/booking?service=${encodeURIComponent(s.title)}`}
                    className="px-5 py-2 rounded-full bg-[#b04400] text-white font-medium hover:bg-[#993300] transition shadow-md"
                  >
                    Book Now
                  </Link>

                  <Link
                    href={`/services/${s.type}`}
                    className="px-5 py-2 rounded-full border border-[#b04400] text-[#b04400] font-medium hover:bg-[#b04400]/10 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
