require('dotenv').config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: process.env.LOADER_PATH,
  },
};

module.exports = nextConfig
