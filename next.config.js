// SSG 배포로 인한 주석처리.
// SSR 배포 시 nextjs 내 i18, getStaticProps, serverSideTranslations를 이용하면 동적 라우팅 없이 단일 페이지로 서브할 수 있습니다.

// const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig}*/
const nextConfig = {
  trailingSlash: true,
  // exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   const paths = {
  //     '/': { page: '/' },
  //     '/contact': { page: '/contact' },
  //     '/news': { page: '/news' },
  //     '/product': { page: '/product' },
  //     '/solution': { page: '/solution' },
  //     '/recruit': { page: '/recruit' },
  //     '/solution': { page: '/solution' },
  //     '/solution/audit': { page: '/solution/audit' },
  //   };
  //   // Add language prefixes to all paths
  //   Object.keys(paths).forEach(path => {
  //     console.log(path);
  //     paths[`/ko${path}`] = {
  //       page: paths[path].page,
  //       query: { __nextLocale: 'ko', __nextDefaultLocale: 'ko' },
  //     };
  //     paths[`/en${path}`] = {
  //       page: paths[path].page,
  //       query: { __nextLocale: 'en', __nextDefaultLocale: 'ko' },
  //     };
  //   });
  //   return paths;
  // },
  // i18n,
};

module.exports = nextConfig;
