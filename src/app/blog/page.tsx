"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Home Renovation Services",
    date: "October 2025",
    description:
      "From concept to completion — our renovation experts help you redesign, rebuild, and refresh your home interiors and exteriors effortlessly.",
    image: "/Blogr1.mp4",
    slug: "homerenovationsservice",
  },
  {
    id: 2,
    title: "Home Construction Services",
    date: "October 2025",
    description:
      "We handle everything from demolition to a fully built dream home — reliable, transparent, and on time.",
    image: "/Blog2.png",
    slug: "homeconstructionservice",
  },
  {
    id: 3,
    title: "Home Interior Painting",
    date: "October 2025",
    description:
      "Bring life to your walls with premium-quality paints and professional interior painters who deliver a flawless finish.",
    image: "/Blogp1.mp4",
    slug: "homeinteriorpainting",
  },
  {
    id: 4,
    title: "Home Exterior Painting",
    date: "October 2025",
    description:
      "Protect and beautify your home with durable, weather-resistant exterior paints applied by experts.",
    image: "/Blog3.png",
    slug: "homeexteriorpainting",
  },
  {
    id: 5,
    title: "Home Plumbing Services",
    date: "October 2025",
    description:
      "Fix leaks, replace fittings, or upgrade your bathroom — our skilled plumbers deliver quick and reliable service.",
    image: "/Blogplum.mp4",
    slug: "homeplumbingservices",
  },
  {
    id: 6,
    title: "Home Electrical Services",
    date: "October 2025",
    description:
      "From rewiring to new installations, our certified electricians ensure safety and seamless operation throughout your home.",
    image: "/Blog1.png",
    slug: "homeelectricalservices",
  },
  {
    id: 7,
    title: "Home Civil Services",
    date: "October 2025",
    description:
      "Get expert help with flooring, tiling, masonry, and all civil works handled by experienced professionals.",
    image: "/Blog2.png",
    slug: "homecivilservices",
  },
  {
    id: 8,
    title: "Home Handyman Services",
    date: "October 2025",
    description:
      "Quick fixes and small repairs done right — book trusted handymen for all your household maintenance needs.",
    image: "/Kothi4.png",
    slug: "homehandymanservices",
  },
  {
    id: 9,
    title: "Home Interior Services",
    date: "October 2025",
    description:
      "Design your dream space with our interior experts — from furniture and lighting to décor and layout planning.",
    image: "/Blog5.png",
    slug: "homeinteriorservices",
  },
  {
    id: 10,
    title: "Intercity Packers and Movers",
    date: "October 2025",
    description:
      "Move between cities with ease — we offer professional packing, secure transport, and timely delivery.",
    image: "/Blogpandm.png",
    slug: "intercitypackersandmovers",
  },
  {
    id: 11,
    title: "Intracity Packers and Movers",
    date: "October 2025",
    description:
      "Shifting homes within your city? Our local movers make relocation quick, organized, and stress-free.",
    image: "/Blogpandm.png",
    slug: "intracitypackersandmovers",
  },
  {
    id: 12,
    title: "Home Inspection Services",
    date: "October 2025",
    description:
      "Ensure your property is safe and sound — our inspection team checks structure, plumbing, electrical, and more.",
    image: "/Bloginsp.mp4",
    slug: "homeinspectionservices",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] via-[#fef3eb] to-[#fff5ee] py-20 px-6 md:px-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#FE904E] tracking-wide mb-4">
          Explore Our Expert Insights
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-[#FE904E] to-[#FDBA74] mx-auto rounded-full"></div>
      </header>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="group bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden border border-[#f9dcc4] hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {/* Image Section */}
            <div className="relative w-full h-56 md:h-64 lg:h-72">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#FE904E] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3 italic">{post.date}</p>
              <p className="text-gray-700 mb-6 line-clamp-3">{post.description}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-block px-5 py-2 rounded-full border border-[#FE904E] text-[#FE904E] font-semibold hover:bg-[#FE904E] hover:text-white transition-all duration-300"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional Footer CTA */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <p className="text-gray-700 mb-4 text-lg md:text-xl">
          Discover more insights, tips, and expert advice to enhance your home services experience.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-[#FE904E] text-white font-semibold hover:bg-[#FDBA74] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
