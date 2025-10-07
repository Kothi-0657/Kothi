import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ✅ Enables static HTML export (replaces next export)
  images: {
    unoptimized: true, // ✅ Needed for GoDaddy or any static hosting
  },
};

export default nextConfig;
