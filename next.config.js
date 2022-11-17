/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'spoonacular.com',
      pathname: '/recipeImages/**'
    }]
  }
}

module.exports = nextConfig
