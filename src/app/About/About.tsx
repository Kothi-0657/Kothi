import React from "react";

function About() {
  return (
    <section className="relative py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-extrabold text-orange-700">
            Our Story
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            Kothi India has grown from a small team of passionate builders to a
            trusted brand in home improvement, transforming spaces with design,
            trust, and innovation.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Block 1 */}
          <div>
            <img
              src="/Kothi4.png"
              className="rounded-2xl shadow-xl object-cover"
              alt="Foundation"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#b04400]">Our Foundation</h3>
            <p className="text-gray-700 mt-4">
              Established with the vision of redefining renovation in India,
              Kothi India started with small but impactful projects.
            </p>
          </div>

          {/* Block 2 */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[#b04400]">Growth & Innovation</h3>
            <p className="text-gray-700 mt-4">
              Our growing team embraced modern design, modular solutions, and
              cutting-edge tools to deliver excellence.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/kothi11.png"
              className="rounded-2xl shadow-xl object-cover"
              alt="Growth"
            />
          </div>

          {/* Block 3 */}
          <div>
            <img
              src="/kothi12.png"
              className="rounded-2xl shadow-xl object-cover"
              alt="Vision"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#b04400]">The Future</h3>
            <p className="text-gray-700 mt-4">
              With a client-first mindset, our goal is to become the most trusted
              name in Indian home improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
