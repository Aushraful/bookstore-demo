const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  experimental: {
    scrollRestoration: true,
    // newNextLinkBehavior: false,
  },
  images: {
    domains: [
      's3.amazonaws.com',
      'localhost',
      '127.0.0.1',
    ],
  },
}

module.exports = withMarkdoc()(nextConfig)
