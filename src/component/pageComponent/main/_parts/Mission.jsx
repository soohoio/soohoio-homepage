import { BodyContainer } from '@/component/ui/BodyContainer';
import { black } from '@/component/style/StyleTheme';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Mission() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer backgroundColor="#00F2C3" ptPc="120px" pbMob="120px">
      <Typography
        className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'}
        component="div"
        color="secondary"
        align="center"
        fontWeight={600}
      >
        Mission
      </Typography>
      <Typography
        className={isMob ? 'mobTitle19KR' : 'pcTitle48KR'}
        color={black}
        align="center"
        fontWeight={600}
        sx={{ mt: '28px', mb: '48px' }}
      >
        더 많은 금융 기회를 연결하고 수호합니다.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#DDDDDD',
            aspectRatio: '1328/720',
            width: 1,
            height: 1,
            maxWidth: { lg: '1328px' },
            maxHeight: { lg: '720px' },
          }}
        />
      </Box>

      <Typography
        className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
        fontWeight={600}
        color={black}
        align="center"
        sx={{ mt: '36px' }}
      >
        {`블록체인 금융 서비스들은 특정 체인 안에\n고립되어 있어 접근성이 떨어집니다.`}
      </Typography>
    </BodyContainer>
  );
}
