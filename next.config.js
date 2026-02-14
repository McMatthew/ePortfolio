/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/ePortfolio',
  assetPrefix: '/ePortfolio/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
