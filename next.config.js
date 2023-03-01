/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '.',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/news': { page: '/news' },
      '/product': { page: '/product' },
      '/solution': { page: '/solution' },
      '/solution/audit': { page: '/solution/audit' },
    };
  },
};

module.exports = nextConfig;
