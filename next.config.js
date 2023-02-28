/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function () {
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
