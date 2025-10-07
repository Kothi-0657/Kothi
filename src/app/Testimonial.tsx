import React from "react";
import "./globals.css";
import { InfiniteMovingTestimonials } from "./component/testomonial/Testomonial";

function Testimonial() {
  return (
    <section className="backgroundcolor py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#b04400] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-white text-lg mb-32">
          Hear from our clients about their experience working with us. We value
          every partnership and strive for excellence.
        </p>
      </div>
      <InfiniteMovingTestimonials />
    </section>
  );
}

export default Testimonial;
