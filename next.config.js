/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  env: {
    API_BASE_URL: 'http://localhost:8080/'
  },
  // pageExtensions: ['js']
}

module.exports = nextConfig
