/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { images: { layoutRaw: true } },
  images: {
    domains: [
      'https://firebasestorage.googleapis.com/',
    ],
  }
};

module.exports = nextConfig
