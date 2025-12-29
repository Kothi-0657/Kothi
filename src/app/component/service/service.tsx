"use client";

import Link from "next/link";
import { FaHome, FaTools, FaSearch, FaTruck, FaBroom } from "react-icons/fa";

interface ServiceComponentProps {
  type: string;
}

const serviceData: Record<
  string,
  { title: string; description: string; icon?: JSX.Element }[]
> = {
  construction: [
    { title: "Home Constructions", description: "Build your dream home with us.", icon: <FaHome size={28} /> },
    { title: "Commercial Constructions", description: "We handle office and retail builds.", icon: <FaTools size={28} /> },
  ],
  renovation: [
    { title: "Kitchen Renovation", description: "Modern kitchen designs.", icon: <FaTools size={28} /> },
    { title: "Bathroom Renovation", description: "Stylish and functional bathrooms.", icon: <FaTools size={28} /> },
  ],
  inspection: [
    { title: "Property Inspection", description: "Ensure property safety.", icon: <FaSearch size={28} /> },
  ],
  packersAndMovers: [
    { title: "House Shifting", description: "Safe and reliable moving.", icon: <FaTruck size={28} /> },
  ],
  homeServices: [
    { title: "Cleaning", description: "Professional cleaning service.", icon: <FaBroom size={28} /> },
  ],
};

export default function ServiceComponent({ type }: ServiceComponentProps) {
  const subServices = serviceData[type] || [];

  if (subServices.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No services found for "{type}".</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
  <h1 className="text-3xl font-bold mb-10 text-center capitalize">{type} Services</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {subServices.map((s) => (
      <div
        key={s.title}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform duration-300"
      >
        <h2 className="text-xl font-semibold mb-3 text-white">{s.title}</h2>
        <p className="text-gray-200 mb-5">{s.description}</p>

        <div className="flex gap-3">
          <Link
            href={`/booking?service=${encodeURIComponent(s.title)}`}
            className="flex-1 text-center py-2 rounded-full bg-gradient-to-r from-[#b04400] to-[#ff6a00] text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Book Now
          </Link>
          <Link
            href={`/servicedetails?type=${encodeURIComponent(type)}&q=${encodeURIComponent(s.title)}`}
            className="flex-1 text-center py-2 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition"
          >
            Learn More
          </Link>
        </div>

            {/* subtle accent */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-[#b04400]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
