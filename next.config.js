/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY, // pulls from .env file
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**/**/**",
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
