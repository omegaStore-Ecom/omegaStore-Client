/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
        'localhost'
    ]
  }
};

module.exports = nextConfig
