/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["image.tmdb.org", "themoviedb.org"],
  },
}

module.exports = nextConfig
