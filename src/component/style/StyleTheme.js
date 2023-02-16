import { createTheme } from '@mui/material/styles';

// MUI 전체 테마
const StyleTheme = createTheme({
  palette: {
    primary: {
      main: '#00F2C3',
    },
    secondary: {
      main: '#00BB97',
    },
    black: {
      main: '#1C1C1C',
    },
    black_dark: {
      main: '#131313',
    },
    gray_light: {
      main: '#EEEEEE',
    },
    gary: {
      main: '#5F5F5F',
    },
    gary_dark: {
      main: '#323232',
    },
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 744,
      lg: 1400,
    },
  },
  typography: {
    body1: {
      color: '#333333',
    },
    body2: {
      color: '#333333',
    },
    h5: {
      color: '#333333',
    },
    h4: {
      color: '#333333',
    },
    h3: {
      color: '#333333',
    },
    fontFamily: [
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'system-ui',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
        style: { fontWeight: 600, maxWidth: '400px', padding: 2 },
      },
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          style: { padding: '7px 0px 7px 13px', backgroundColor: '#FFFFFF' },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiTableCell: {
      defaultProps: {
        align: 'center',
      },
    },
  },
});

export default StyleTheme;
