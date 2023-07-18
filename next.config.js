/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    // distDir: 'dist',
    images: { unoptimized: true },
    env: {
        WIIQARE_URI: "https://wiiqare.neema.co.za/api/v1",
        NEXTAUTH_SECRET: 'A-very-long-string',
        NEXTAUTH_URL: 'http://localhost:3000'
    },
};


module.exports = nextConfig;
