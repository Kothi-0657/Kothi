/*//"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GoogleReviews({ placeId, apiKey, interval = 4000 }) {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
      );
      const data = await res.json();

      if (data?.result?.reviews) {
        setReviews(data.result.reviews);
      }
    }

    fetchReviews();
  }, [placeId, apiKey]);

  // Auto rotate review
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, interval);

    return () => clearInterval(timer);
  }, [reviews, interval]);

  if (!reviews.length) return null;

  const review = reviews[index];

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-4 rounded-xl shadow-lg bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={review.time}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src={review.profile_photo_url}
              className="w-12 h-12 rounded-full"
              alt="user"
            />
            <div>
              <h3 className="font-semibold text-lg">{review.author_name}</h3>

              {/* ⭐ Star Ratings */
              /*
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-700">{review.text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
*/
