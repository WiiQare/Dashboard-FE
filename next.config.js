/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // distDir: 'dist',
  images: { unoptimized: true },
  env: {
    WIIQARE_URI: 'https://api.wiiqare-app.com/api/v1',
  },
};

module.exports = nextConfig;
