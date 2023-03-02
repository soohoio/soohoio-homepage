/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
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
