import { Box, Stack, Typography } from '@mui/material';
import { black_dark, primary } from '../style/StyleTheme';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useContext } from 'react';

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
