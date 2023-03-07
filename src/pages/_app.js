import './App.css';
import './Font.css';
import './Animation.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NavBar from '@/component/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { StyleTheme } from '../component/style/StyleTheme';
import FooterPc from '@/component/Footer/FooterPc';
import { DeviceProvider } from '@/module/ContextAPI/DeviceContext';
import FooterMob from '@/component/Footer/FooterMob';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import LoadingScreen from '@/component/ui/Loading';

import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  // 페이지 전환 로딩 화면 구현
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  }, []);

  return (
    <DeviceProvider>
      <ThemeProvider theme={StyleTheme}>
        <NavBar />
        <Component {...pageProps} />
        <FooterPc />
        <FooterMob />
      </ThemeProvider>
    </DeviceProvider>
  );
}

// 다국어 지원을 위한
export default appWithTranslation(App);
