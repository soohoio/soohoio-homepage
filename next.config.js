const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig}*/
const nextConfig = {
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/news': { page: '/news' },
      '/product': { page: '/product' },
      '/solution': { page: '/solution' },
      '/solution/audit': { page: '/solution/audit' },
    };

    // Add language prefixes to all paths
    Object.keys(paths).forEach(path => {
      console.log(path);
      paths[`/ko${path}`] = {
        page: paths[path].page,
        query: { __nextLocale: 'ko', __nextDefaultLocale: 'ko' },
      };
      paths[`/en${path}`] = {
        page: paths[path].page,
        query: { __nextLocale: 'en', __nextDefaultLocale: 'ko' },
      };
    });

    return paths;
  },
  i18n,
};

module.exports = nextConfig;
