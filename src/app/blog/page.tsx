// app/blog/page.tsx
import Link from "next/link";

// Replace image URLs with your own hosted images
const services = [
  {

    title: "Home Renovation Services",
    description:
      "Complete guide on modern home renovation, remodeling, design trends, and cost estimation in India.",
    href: "../blog/homerenovationsservice",
    image: "/Blogr1.mp4",
  },
  {
    title: "Home Construction Services",
    description:
      "Professional construction solutions for building, civil works, and complete home setup with expert project management.",
    href: "../blog/homeconstructionservice",
    image: "/Blog2.png",
  },
  {
    title: "Home Interior Painting",
    description:
      "Expert interior painting services, color selection, dampness solutions, and luxurious finishes for your home.",
    href: "../blog/homeinteriorpainting",
    image: "/Blogp1.mp4",
  },
  {
    title: "Home Exterior Painting",
    description:
      "Premium exterior painting services with weatherproof coatings, vibrant colors, and long-lasting finishes.",
    href: "../blog/homeexteriorpainting",
    image: "/Blog3.png",
  },
  {
    title: "Home Plumbing Services",
    description:
      "Professional plumbing solutions including leak repairs, pipe installation, water-saving systems, and emergency services.",
    href: "../blog/homeplumbingservices",
    image: "/Blogplum.mp4",
  },
  {
    title: "Home Electrical Services",
    description:
      "Expert electrical services for wiring, fixtures, panels, and smart home automation with safety compliance.",
    href: "../blog/homeelectricalservices",
    image: "/Blog1.png",
  },
  {
    title: "Home Civil Services",
    description:
      "Complete civil solutions including structural repairs, flooring, masonry, and renovation support.",
    href: "../blog/homecivilservices",
    image: "/Blog4.png",
  },
  {
    title: "Home Handyman Services",
    description:
      "Reliable handyman services for small repairs, installations, maintenance, and quick fixes at home.",
    href: "../blog/homehandymanservices",
    image: "/Blog1.png",
  },
  {
    title: "Home Interior Services",
    description:
      "Interior design, furniture layout, decor, and space optimization services for elegant living spaces.",
    href: "../blog/homeinteriorservices",
    image: "/Blog5.png",
  },
  {
    title: "Intercity Packers and Movers",
    description:
      "Long-distance relocation services with packing, transportation, insurance, and office shifting across cities.",
    href: "../blog/intercitypackersandmovers",
    image: "/Blogpandm.png",
  },
  {
    title: "Intracity Packers and Movers",
    description:
      "Local moving services within city limits, including packing, loading, transport, and unpacking.",
    href: "../blog/intracitypackersandmovers",
    image: "/Blogpandm.png",
  },
  {
    title: "Home Inspection Services",
    description:
      "Professional home inspection services for structural, electrical, plumbing, and overall safety checks.",
    href: "../blog/homeinspectionservices",
    image: "/Bloginsp.mp4",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
        Our Blogs
      </h1>

      {/* Blog Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-white"
          >
            {/* Image */}
            <div className="relative h-64 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <Link
                href={service.href}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
