import { createTheme } from '@mui/material/styles';

// 가로 패딩 값
export const paddingHorPC = '56px';
export const paddingHorMob = '24px';

// 모서리 값
export const borderRadiusPc = '16px';
export const borderRadiusMob = '8px';

// 색상 값
export const primary = '#00F2C3';
export const secondary = '#00BB97';
export const black = '#1C1C1C';
export const black_dark = '#131313';
export const gray_light = '#EEEEEE';
export const gray = '#5F5F5F';
export const gary_dark = '#323232';
export const error = '#E33535';

// MUI 전체 테마
export const StyleTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    black: {
      main: black,
    },
    black_dark: {
      main: black_dark,
    },
    gray_light: {
      main: gray_light,
    },
    gray: {
      main: gray,
    },
    gary_dark: {
      main: gary_dark,
    },
    error: {
      main: error,
    },
    white: {
      main: '#FFFFFF',
    },
  },
  breakpoints: {
    values: {
      xs: 10,
      sm: 744,
      lg: 1440,
      xl: 9999,
    },
  },
  typography: {
    button: {
      // 텍스트 대문자 방지
      textTransform: 'none',
    },
    body1: {
      color: '#FFFFFF',
    },
    body2: {
      color: '#FFFFFF',
    },
    h5: {
      color: '#FFFFFF',
    },
    h4: {
      color: '#FFFFFF',
    },
    h3: {
      color: '#FFFFFF',
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
      },
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          style: {
            padding: '7px 0px 7px 0px',
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        style: {
          wordBreak: 'keep-all',
        },
      },
    },
  },
});
