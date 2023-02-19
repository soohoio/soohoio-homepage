import { gray } from '@/component/style/StyleTheme';
import {
  BodyText1,
  BodyText2,
  PointText1,
  TitleText4,
  TitleText5,
} from '@/component/style/TextStyle';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/BoxButton';
import { Box, Stack } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Package() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const packageList = [
    { title: 'Bridge', contents: `기업 고객의\n생태계 확장성 확보`, img: '/' },
    { title: 'Dapp', contents: `생태계 맞춤형\nDeFi 서비스`, img: '/' },
    { title: 'Audit', contents: `안전한 생태계를 위한\n필수 보안 감사`, img: '/' },
  ];
  return (
    <BodyContainer ptPc="88px" pbPc="94px">
      <TitleText4 color="primary" align="center">
        기업 고객을 위한 패키지 솔루션
      </TitleText4>

      <BodyText1 align="center" sx={{ fontWeight: 300, mt: '32px' }}>
        {`기업들이 쉽고 안전하게 DeFi 생태계를 구축하고 활성화할 수 있도록\n브릿지, 디앱, 보안 감사 서비스를 제공합니다.`}
      </BodyText1>

      <Box sx={{ backgroundColor: '#DDDDDD', width: 1, height: '500px', my: '20px' }} />

      <PointText1 align="center" color={gray} sx={{ mb: '38px' }}>
        DeFi 패키지 구성
      </PointText1>

      <Stack
        direction="row"
        columnGap="16px"
        rowGap="16px"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {packageList.map(function (each) {
          return (
            <Box
              key={each.title}
              sx={{
                width: '400px',
                height: '102px',
                pl: '32px',
                py: '24px',
                borderRadius: '16px',
                backgroundColor: '#1C1C1C',
                display: 'inline-block',
              }}
            >
              <TitleText5>{each.title}</TitleText5>
              <BodyText2 sx={{ fontWeight: 400, mt: '16px' }}>{each.contents}</BodyText2>
            </Box>
          );
        })}
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <RoundOutlinedButton text="패키지 자세히 보기" sx={{ mt: '88px' }} />
      </Box>
    </BodyContainer>
  );
}
