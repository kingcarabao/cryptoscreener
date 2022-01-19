/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    API_URL: 'https://cryptoscreenerapi-4acs9t87l-kingcarabao.vercel.app/'
  },
}

module.exports = nextConfig
