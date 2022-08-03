/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  trailingSlash: true,
  reactStrictMode: false,
  TrailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
