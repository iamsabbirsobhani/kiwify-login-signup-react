/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dashboard.kiwify.com.br'],
  },
}

module.exports = nextConfig
