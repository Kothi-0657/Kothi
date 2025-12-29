"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    city: "Bangalore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Kothi handled our home renovation end-to-end with complete transparency. Timelines were met and the quality exceeded expectations.",
  },
  {
    name: "Anita Sharma",
    city: "Delhi",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "The inspection and quotation process was very professional. Everything was explained clearly before starting the work.",
  },
  {
    name: "Suresh Rao",
    city: "Hyderabad",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    feedback:
      "From planning to execution, the experience was smooth. A reliable platform for construction and home services.",
  },
  {
    name: "Neha Verma",
    city: "Pune",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "What I loved most was the regular updates and clear communication. No hidden costs, no surprises.",
  },
  {
    name: "Amit Patel",
    city: "Mumbai",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "Professional team and well-managed workflow. The project delivery was on time as promised.",
  },
  {
    name: "Kavya Iyer",
    city: "Chennai",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback:
      "Kothi simplified everything for us. One point of contact and a stress-free experience throughout.",
  },
  {
    name: "Rohit Singh",
    city: "Patna",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    feedback:
      "Very organized process. The inspection report helped us understand the scope clearly before approving the work.",
  },
  {
    name: "Priya Nair",
    city: "Kochi",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    feedback:
      "Excellent workmanship and great attention to detail. Would definitely recommend Kothi to others.",
  },
  {
    name: "Vikram Joshi",
    city: "Indore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    feedback:
      "Reliable, transparent, and efficient. The team delivered exactly what was promised.",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-orange-500 font-semibold tracking-wide">
            10 / 250+ Satisfied Customers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real experiences from homeowners who trusted Kothi for their
            construction and home service needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:border-orange-500/30 transition"
            >
              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.city}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-orange-500 text-sm" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-300 leading-relaxed text-sm">
                “{t.feedback}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
