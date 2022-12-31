/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space','placeimg.com','www.pexels.com'],
  },
}

const withPWA = require('next-pwa')({//se importa next PWA
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});


module.exports = withPWA(nextConfig)
