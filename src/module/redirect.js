import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './languageDetector';

// 기본 도메인 접속 시, 언어에 따라 리다이렉트합니다. (현재 사용하지 않는 모듈입니다. 향후 필요 시, 적용)
export const useRedirect = to => {
  const router = useRouter();
  to = to || router.asPath;

  // 언어 감지
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    console.log(detectedLng);
    // if (to.startsWith('/' + detectedLng) && router.route === '/404') {
    //   // prevent endless loop
    //   router.replace('/' + detectedLng + router.route);
    //   return;
    // }

    // languageDetector.cache(detectedLng);
    // router.replace('/' + detectedLng + to);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = to => () => {
  useRedirect(to);
  return <></>;
};
