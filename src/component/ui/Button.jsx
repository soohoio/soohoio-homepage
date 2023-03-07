import { Box, Button, Stack, Typography } from '@mui/material';
import { black, black_dark, primary } from '../style/StyleTheme';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useContext } from 'react';
import { useTranslation } from 'next-i18next';

/** MUI Button 대신 Box로 만든 Outlined 버튼  */
export function RoundOutlinedButton({ onClick, text, color, icon, py, px, sx }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  return (
    <Box
      className="buttonHover"
      onClick={onClick}
      sx={[
        {
          border: { xs: `1px solid ${color}`, sm: `2px solid ${color}` },
          borderRadius: '120px',
          py: py,
          px: px,
          display: 'inline-block',
        },
        sx,
      ]}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" spacing="8px">
        {icon}
        <Typography
          className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
          color={color}
          align="center"
          sx={{ fontWeight: 500 }}
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  );
}

RoundOutlinedButton.defaultProps = {
  onClick: () => {},
  color: '#00F2C3',
  py: { xs: '10px', sm: '20px' },
  px: { xs: '24px', sm: '80px' },
};

/** MUI Button 대신 Box로 만든 contained 버튼  */
export function RoundContainedButton({
  onClick,
  text,
  backgroundColor,
  color,
  px,
  py,
  sx,
  fontSx,
}) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  return (
    <Box
      className="buttonHover"
      onClick={onClick}
      sx={[
        {
          backgroundColor: backgroundColor,
          borderRadius: '120px',
          py: py,
          px: px,
          display: 'inline-block',
        },
        sx,
      ]}
    >
      <Typography
        className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
        color={color}
        align="center"
        sx={[{ fontWeight: 600 }, fontSx]}
      >
        {text}
      </Typography>
    </Box>
  );
}

RoundContainedButton.defaultProps = {
  onClick: () => {},
  backgroundColor: primary,
  color: black_dark,
  py: { xs: '10px', sm: '16px' },
  px: { sm: '40px' },
};

/** MUI outlined 버튼  */
export function MUIOutlinedButton({ onClick, text, color, hoverColor, noClass, sx }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const noneClass = noClass ? 'XXX' : '';

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <Button
      // 폰트 사이즈 변경 시
      className={isMob ? `mobBody14KR${noneClass}` : `pcPoint20KR${noneClass}`}
      onClick={onClick}
      variant="outlined"
      sx={[
        {
          borderRadius: '120px',
          px: { sm: '78px' },
          py: { xs: '10px', sm: '20px' },
          border: { xs: `1px solid ${color}`, sm: `2px solid ${color}` },
          color: color,
          ':hover': {
            borderWidth: { sm: '2px' },
            fontWeight: '600 !important',
            backgroundColor: hoverColor,
            border: { xs: `1px solid ${hoverColor}`, sm: `2px solid ${hoverColor}` },
            color: black,
          },
          zIndex: 100,
          boxSizing: 'border-box',
          fontFamily: currentLanguage === 'ko' ? 'Pretendard' : 'Druk Text Web',
        },
        sx,
      ]}
    >
      {text}
    </Button>
  );
}

MUIOutlinedButton.defaultProps = {
  onClick: () => {},
  text: '텍스트를 입력해주세요',
  color: primary,
  noClass: false,
  hoverColor: primary,
};
