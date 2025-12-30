import type { NextConfig } from 'next';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  ...(isDev && {
    turbopack: {
      root: path.join(__dirname, '..'),
    },
  }),
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      { protocol: 'https', hostname: 'www.rubbermaidcommercialoficial.com.mx' },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
