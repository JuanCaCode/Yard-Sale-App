/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

// const withPWA = require('next-pwa')({//se importa next PWA
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   register: true,
// });


module.exports =nextConfig
