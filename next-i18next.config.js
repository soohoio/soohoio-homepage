const path = require('path');
const { i18n } = require('next-i18next');

module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localePath: path.resolve('./public/locales'),
  },
};

// 테스트 후 삭제
// const { i18n } = require('next-i18next');

// module.exports = {
//   i18n: {
//     defaultLocale: 'ko',
//     locales: ['ko', 'en'],
//     localePath: 'public/locales',
//   },
// };
