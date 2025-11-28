"use client";

import React, { useEffect, useRef } from "react";
import galleryFiles from "@/../gallery2.json";

const items = (galleryFiles as unknown as string[]).map((f, i) => ({
  id: i,
  src: `/gallery2/${f}`,
}));

export default function LinearHomeGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    // width of first set
    const firstSetWidth = track.scrollWidth / 2;

    // Set CSS variable for animation distance
    track.style.setProperty("--scroll-width", `-${firstSetWidth}px`);
  }, []);

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="marquee">
        <div className="marquee-track" ref={trackRef}>
          {/* first set */}
          {items.map((img) => (
            <div key={`A-${img.id}`} className="marquee-item">
              <img src={img.src} className="img" alt="" />
            </div>
          ))}

          {/* duplicate set */}
          {items.map((img) => (
            <div key={`B-${img.id}`} className="marquee-item">
              <img src={img.src} className="img" alt="" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: scroll 25s linear infinite;
        }

        .marquee-item {
          flex: 0 0 auto;
          margin-right: 20px;
        }

        .img {
          width: 390px;
          height: 430px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--scroll-width));
          }
        }
      `}</style>
    </div>
  );
}
