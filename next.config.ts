import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // ← important for refresh to work
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
