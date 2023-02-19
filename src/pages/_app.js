import './App.css';
import './Font.css';
import NavBar from '@/component/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { StyleTheme } from '../component/style/StyleTheme';
import FooterPc from '@/component/Footer/FooterPc';
import { DeviceProvider } from '@/module/ContextAPI/DeviceContext';
import FooterMob from '@/component/Footer/FooterMob';

export default function App({ Component, pageProps }) {
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
