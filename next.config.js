/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/roti-king-fine-dining/' : '',
  basePath: isProd ? '/roti-king-fine-dining' : '',
}

module.exports = nextConfig

