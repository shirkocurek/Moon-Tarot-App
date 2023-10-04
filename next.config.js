/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  theme: {
    extend: {
      fontFamily: {
        lusitana: ["Lusitana", "serif"],
      },
    },
  },
}

module.exports = nextConfig
