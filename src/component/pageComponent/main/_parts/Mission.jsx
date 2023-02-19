import { BodyText1, TitleText2, TitleText4 } from '@/component/style/TextStyle';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { black } from '@/component/style/StyleTheme';
import { Box, Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Mission() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer backgroundColor="#00F2C3" ptPc="120px" pbMob="120px">
      <TitleText4 component="div" color="secondary" align="center">
        Mission
      </TitleText4>
      <TitleText2 color={black} align="center" sx={{ mt: '28px', mb: '48px' }}>
        더 많은 금융 기회를 연결하고 수호합니다.
      </TitleText2>
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

      <BodyText1 color={black} align="center" sx={{ mt: '36px' }}>
        {`블록체인 금융 서비스들은 특정 체인 안에\n고립되어 있어 접근성이 떨어집니다.`}
      </BodyText1>
    </BodyContainer>
  );
}
