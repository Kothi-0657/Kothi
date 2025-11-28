"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {
  images: string[];
  isVisible?: boolean;
};

export default function LinearGalleryStrip({ images, isVisible = true }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }} // slide INTO page
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }} // slide OUT of page
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full overflow-hidden py-4"
        >
          <div className="flex gap-4 animate-scroll">
            {images.map((img, index) => (
              <motion.div key={index} className="min-w-[200px] h-[130px] relative">
                <Image
                  src={img}
                  alt="strip"
                  fill
                  className="rounded-lg object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
