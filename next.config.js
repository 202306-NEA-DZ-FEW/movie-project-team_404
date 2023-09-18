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
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**/**/**",
      },
    ],
    domains: ["image.tmdb.org", "themoviedb.org"],
  },
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
}

module.exports = nextConfig
