import './App.css';
import './font.css';
import NavBar from '@/component/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { StyleTheme } from '../component/style/StyleTheme';
import Footer from '@/component/Footer';
import { DeviceProvider } from '@/module/ContextAPI/DeviceContext';

export default function App({ Component, pageProps }) {
  return (
    <DeviceProvider>
      <ThemeProvider theme={StyleTheme}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </DeviceProvider>
  );
}
