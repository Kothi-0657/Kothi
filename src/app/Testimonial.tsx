"use client";

import React from "react";
import "./globals.css";
import { InfiniteMovingTestimonials } from "./component/testomonial/Testomonial";

export default function Testimonial() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          Hear from our clients about their experience working with us. We value every partnership and strive for excellence.
        </p>
      </div>

      {/* Background floating shapes / subtle animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-60 h-60 bg-orange-500 rounded-full absolute top-10 left-10 animate-pulseSlow" />
        <div className="w-40 h-40 bg-yellow-400 rounded-full absolute bottom-20 right-20 animate-pulseSlow" />
      </div>

      {/* Testimonials Carousel */}
      <div className="relative z-10">
        <InfiniteMovingTestimonials
          {...({
            cardClassName: "bg-gray-600/80 backdrop-blur-md rounded-2xl p-6 shadow-lg w-80 m-4 flex-shrink-0 flex flex-col justify-between",
            textClassName: "text-gray-200 text-base leading-relaxed mb-4",
            nameClassName: "text-orange-500 font-semibold text-lg",
            roleClassName: "text-gray-400 text-sm",
          } as any)}
        />
      </div>

      {/* Optional Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}
