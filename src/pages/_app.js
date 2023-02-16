import { ThemeProvider } from '@mui/material/styles';
import StyleTheme from '../component/style/StyleTheme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={StyleTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
