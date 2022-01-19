/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    API_URL: 'http://localhost:4321/'
  },
}

module.exports = nextConfig
