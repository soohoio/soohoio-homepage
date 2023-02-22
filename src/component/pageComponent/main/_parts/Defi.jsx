import { RoundOutlinedButton } from '@/component/ui/Button';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { gray } from '@/component/style/StyleTheme';
import {
  paddingHorMob,
  paddingHorPC,
  borderRadiusMob,
  borderRadiusPc,
} from '../../../style/StyleTheme';
import Draggable from 'react-draggable';

export default function Defi() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [screenSize, setScreenSize] = useState(1440);

  const theme = useTheme();

  // const maximum = (100 * window.innerWidth) / 100 - theme.spacing(37.5);
  const leftLimit = isPc ? -676 : screenSize;
  const contentsSize = isMob ? 300 * 3 : 656 * 3;
  const padding = isMob ? 40 : 70;

  const defiList = [
    {
      title: 'KLEVA',
      contents: isMob
        ? `클레이튼 생태계 내부의\n다양한 투자 기회와 레버리지\n기능을 제공합니다.`
        : `클레이튼 생태계 내부의 다양한\n투자 기회와 레버리지 기능을\n제공합니다.`,
      buttonLabel: '자세히 보기',
      img: '/',
    },
    {
      title: 'StayKing',
      contents: isMob
        ? `EVMOS와 같은 신생 체인의 높은\n스테이킹 이율을 레버리지하여\n투자 수익을 극대화합니다.`
        : `EVMOS와 같은 신생 체인의 높은\n스테이킹 이율을 레버리지하여\n투자 수익을 극대화합니다.`,
      buttonLabel: '자세히 보기',
      img: '/',
    },
    {
      title: 'Martian',
      contents: isMob
        ? `블록체인과 실물경제를 연결하여\nNFT 홀더 및 투자자들에게\n안정적인 수익을 분배합니다.`
        : `블록체인과 실물경제를 연결하여\nNFT 홀더 및 투자자들에게 안정적인\n수익을 분배합니다.`,
      buttonLabel: 'Comming soon',
      img: '/',
    },
  ];

  const ref = useRef(null);

  useEffect(() => {
    setScreenSize(window.innerWidth - contentsSize - 2 * padding);
    console.log(window.innerWidth - contentsSize - 2 * padding);
  }, [isMob, isTablet, isPc]);

  return (
    <Container
      maxWidth={false}
      sx={{
        pt: { xs: '42px', sm: '152px' },
        pb: { xs: '42px', sm: '184px' },
        backgroundColor: '#131313',
        overflow: 'auto',
      }}
    >
      <Container
        sx={{
          backgroundColor: '#131313',
          pl: { xs: paddingHorMob },
          px: { sm: paddingHorPC },
          overflow: 'visible !important',
        }}
      >
        <Typography
          className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
          color="primary"
          align="center"
          fontWeight={600}
          sx={{ mb: { xs: '16px', sm: '56px' } }}
        >
          수호 자체 운영 DeFi 프로덕트
        </Typography>

        <Draggable axis="x" nodeRef={ref} bounds={{ left: leftLimit, right: 0 }}>
          <Stack
            ref={ref}
            direction="row"
            spacing="16px"
            sx={{ overflow: 'visible', position: 'relative' }}
          >
            {defiList.map(function (each) {
              return (
                <Box
                  key={each.title}
                  sx={{
                    pl: { xs: '16px', sm: '48px' },
                    py: { xs: '12px', sm: '48px' },
                    minWidth: { xs: '300px', sm: '656px' },
                    width: { xs: '300px', sm: '656px' },
                    heigth: '252px',
                    backgroundImage: `url(/image/pageImage/home/${each.title.toLowerCase()}Background${
                      isMob ? 'Mob' : ''
                    }.png)`,
                    backgroundSize: { xs: '300px 168px', sm: 'cover' },
                    borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
                    boxSizing: 'border-box',
                  }}
                >
                  <Typography className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'} fontWeight={600}>
                    {each.title}
                  </Typography>
                  {/* 여기는 -0.023em... */}
                  <Typography
                    sx={{
                      fontWeight: { xs: 300, sm: 300 },
                      color: '#EEEEEE',
                      mt: { xs: '8px', sm: '16px' },
                      mb: { xs: '16px', sm: '42px' },
                      fontSize: { xs: '14px', sm: '18px' },
                      lineHeight: { xs: '20px', sm: '28px' },
                      letterSpacing: { xs: '-0.023em !important', sm: '-0.02em;' },
                    }}
                  >
                    {each.contents}
                  </Typography>
                  <RoundOutlinedButton
                    text={each.buttonLabel}
                    px={{ xs: '24px', sm: '56px' }}
                    py={{ xs: '7px', sm: '20px' }}
                    color={each.title === 'Martian' ? gray : '#FFFFFF'}
                  />
                </Box>
              );
            })}
          </Stack>
        </Draggable>
      </Container>
    </Container>
  );
}
