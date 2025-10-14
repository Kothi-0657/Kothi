// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',          // enable static export
  trailingSlash: true,       // important for page refresh to work
  images: {
    unoptimized: true,       // avoid image optimization for static export
  },
};

export default nextConfig;
