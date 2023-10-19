/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // distDir: 'dist',
  images: { unoptimized: true },
  env: {
    WIIQARE_URI: 'https://api.wiiqare.com/api/v1',
    NEXT_PUBLIC_API_URL: 'https://api.wiiqare.com',
    NEXT_PUBLIC_BASE_URL: 'https://app.wiiqare.com',
    NEXTAUTH_URL: 'https://app.wiiqare.com',
  },
};

module.exports = nextConfig;
