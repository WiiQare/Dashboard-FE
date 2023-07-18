/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    // distDir: 'dist',
    images: { unoptimized: true },
    env: {
        WIIQARE_URI: "https://wiiqare.neema.co.za/api/v1",
        NEXTAUTH_SECRET: 'zlllsF/Yd69mfgrytLewlmmk4Z7FmjY6ST7He8Xhbpc=',
        NEXTAUTH_URL: 'http://localhost:3000'
    },
};


module.exports = nextConfig;
