"use client";

import React from "react";
import { motion } from "framer-motion";

type BlogPostClientProps = {
  post: { title: string; content: string };
};

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-[#fffaf5] via-[#fef3eb] to-[#fff5ee] py-20 px-6 md:px-12"
    >
      {/* Title Section */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-[#FE904E] leading-tight mb-4">
          {post.title}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FE904E] to-[#FDBA74] mx-auto rounded-full"></div>
      </header>

      {/* Content Section */}
      <article className="max-w-5xl mx-auto bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-10 prose prose-lg prose-slate dark:prose-invert">
        <div
          className="blog-content prose-headings:font-bold prose-headings:text-[#FE904E] prose-headings:mt-6 prose-table:table-auto prose-table:border prose-table:border-gray-300 prose-th:bg-gray-100 prose-th:font-semibold prose-th:border prose-td:border prose-td:p-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Footer / CTA */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <p className="text-gray-700 mb-4">
          Enjoyed this article? Explore more of our expert insights on home services!
        </p>
        <a
          href="/blog"
          className="inline-block px-6 py-3 rounded-full bg-[#FE904E] text-white font-semibold hover:bg-[#FDBA74] transition-colors duration-300"
        >
          Back to Blog
        </a>
      </div>
    </motion.div>
  );
}
