import { MUIOutlinedButton, RoundOutlinedButton } from '@/component/ui/Button';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { gray } from '@/component/style/StyleTheme';
import {
  paddingHorMob,
  paddingHorPC,
  borderRadiusMob,
  borderRadiusPc,
} from '../../../style/StyleTheme';
import Draggable from 'react-draggable';
import { useRouter } from 'next/router';

export default function Defi() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [screenSize, setScreenSize] = useState(1440);

  const router = useRouter();

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
      link: '/product',
    },
    {
      title: 'StayKing',
      contents: isMob
        ? `Evmos와 같이 스테이킹 이율이 높은\n신생 체인에서 레버리지 투자 기회를\n제공합니다.`
        : `Evmos와 같이 스테이킹 이율이 높은\n신생 체인에서 레버리지 투자 기회를\n제공합니다.`,
      buttonLabel: '자세히 보기',
      img: '/',
      link: '/product',
    },
    {
      title: 'Martian',
      contents: isMob
        ? `블록체인과 실물경제를 연결하여\nNFT 홀더 및 투자자들에게\n안정적인 수익을 분배합니다.`
        : `블록체인과 실물경제를 연결하여\nNFT 홀더 및 투자자들에게 안정적인\n수익을 분배합니다.`,
      buttonLabel: 'Coming soon',
      img: '/',
      link: '/',
    },
  ];

  const ref = useRef(null);

  const updateScreenSize = useCallback(() => {
    setScreenSize(window.innerWidth - contentsSize - 2 * padding);
  }, [contentsSize, padding]);

  // 스크린 사이즈에 따라 재적용
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, [updateScreenSize, contentsSize, padding]);

  const goToPage = (link, title) => {
    router.push({ pathname: link, query: { currentProduct: title } });
  };

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
        >
          개인 투자자를 위한 DeFi 프로덕트
        </Typography>

        <Typography
          className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
          align="center"
          sx={{ fontWeight: 300, mt: { xs: '16px', sm: '32px' }, mb: { xs: '20px', sm: '42px' } }}
        >
          {isMob && `유저에게 새로운 투자 기회를 제공하는\n다양한 금융 서비스를 만들고 연결합니다.`}
          {!isMob &&
            `유저에게 새로운 투자 기회를 제공하는\n다양한 금융 서비스를 만들고 연결합니다.`}
        </Typography>

        <Draggable axis="x" nodeRef={ref} bounds={{ left: leftLimit, right: 0 }} cancel="button">
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
                    pb: { xs: '16px', sm: '48px' },
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
                  {each.buttonLabel === 'Coming soon' ? (
                    <RoundOutlinedButton
                      text={each.buttonLabel}
                      onClick={() => goToPage(each.link, each.title)}
                      // coming soon 전
                      // px={{ xs: '24px', sm: '56px' }}
                      px={{ xs: '11px', sm: '10px' }}
                      py={{ xs: '7px', sm: '18px' }}
                      sx={{ width: { sm: '202px' }, boxSizing: 'border-box' }}
                      color={gray}
                    />
                  ) : (
                    <MUIOutlinedButton
                      noClass={true}
                      text={each.buttonLabel}
                      onClick={() => goToPage(each.link, each.title)}
                      // coming soon 전
                      sx={{
                        width: { xs: '102px', sm: '202px' },
                        boxSizing: 'border-box',
                        px: { xs: '10px', sm: '10px' },
                        py: { xs: '5px', sm: '15px' },
                        fontSize: { xs: '12px', sm: '20px' },
                      }}
                      color="#FFFFFF"
                      hoverColor="#FFFFFF"
                    />
                  )}
                </Box>
              );
            })}
          </Stack>
        </Draggable>
      </Container>
    </Container>
  );
}
