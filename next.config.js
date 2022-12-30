/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'api.lorem.space',
  //       port: '',
  //       pathname: '/image//**',
  //     },
  //   ],
  // },
  images: {
    domains: ['api.lorem.space','placeimg.com','www.pexels.com'],
  },
}

module.exports = nextConfig
