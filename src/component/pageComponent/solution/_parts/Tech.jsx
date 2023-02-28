import { RoundOutlinedButton } from '@/component/ui/Button';
import { Box, CardMedia, Container, Stack, Typography, useTheme } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { black, black_dark, gray } from '@/component/style/StyleTheme';
import {
  paddingHorMob,
  paddingHorPC,
  borderRadiusMob,
  borderRadiusPc,
} from '../../../style/StyleTheme';
import Draggable from 'react-draggable';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function Tech() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [screenSize, setScreenSize] = useState(300);

  // const maximum = (100 * window.innerWidth) / 100 - theme.spacing(37.5);
  const leftLimit = isPc ? 0 : screenSize;
  const contentsSize = isMob ? 300 * 2 : 656 * 2;
  const padding = isMob ? 25 : 65;

  const defiList = [
    {
      name: 'Tealswap',
      contents: 'Oasys 체인 유일의 탈중앙화 거래소(DEX)로\n수호의 기술 지원을 받았습니다.',
      buttonLabel: 'View website',
      img: 'tealswap',
      patch: ['Dapp', 'Audit'],
    },
    {
      name: 'Purple Bridge & Swap',
      contents: `카카오게임즈의 블록체인 플랫폼 Bora와 협업하여\n브릿지와 탈중앙화 거래소(DEX)를 구축했습니다.`,
      buttonLabel: 'Comming soon',
      img: 'purpleBridge',
      patch: ['Bridge', 'Dapp', 'Audit'],
    },
  ];

  const ref = useRef(null);

  useEffect(() => {
    console.log(window.innerWidth - contentsSize - 2 * padding);
    setScreenSize(window.innerWidth - contentsSize - 2 * padding);
  }, [isMob, isTablet, isPc]);

  return (
    <Container
      maxWidth={false}
      sx={{
        pt: { xs: '42px', sm: '128px' },
        pb: { xs: '42px', sm: '128px' },
        backgroundColor: black,
        overflow: 'auto',
      }}
    >
      <Container
        sx={{
          backgroundColor: black,
          pl: { xs: paddingHorMob },
          px: { sm: paddingHorPC },
          overflow: 'visible !important',
        }}
      >
        {/* 타이틀 */}
        <ObserverAnimation>
          <Typography
            component="div"
            className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
            color="primary"
            align="center"
            fontWeight={600}
          >
            <Box
              sx={{ mb: { xs: '50px', sm: '64px' } }}
            >{`수호의 기술, 제품을 넘어\n생태계의 수준을 변화시킵니다.`}</Box>
          </Typography>
        </ObserverAnimation>

        {/* 카드 영역 */}
        <Draggable axis="x" nodeRef={ref} bounds={{ left: leftLimit, right: 0 }}>
          <Stack
            ref={ref}
            direction="row"
            spacing={{ xs: '8px', sm: '16px' }}
            sx={{ overflow: 'visible', position: 'relative' }}
          >
            {defiList.map(function (each, index) {
              return (
                <ObserverAnimation key={each.name} delay={index * 250}>
                  <Box
                    sx={{
                      p: { xs: '16px', sm: '32px' },
                      minWidth: { xs: '300px', sm: '656px' },
                      width: { xs: '300px', sm: '656px' },
                      heigth: '252px',
                      backgroundColor: black_dark,
                      borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* 로고 및 이미지 */}
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Stack direction="row" spacing={{ sm: '16px' }} alignItems="flex-end">
                        <CardMedia
                          image={`/image/pageImage/solution/${each.img}.png`}
                          sx={{
                            width: { xs: '40px', sm: '64px' },
                            height: { xs: '40px', sm: '64px' },
                          }}
                        />
                        {/* PC & 태블릿 서비스명 */}
                        <Typography
                          component="div"
                          className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                          color="#FFFFFF"
                          align="center"
                          fontWeight={600}
                          sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                          <Box>{each.name}</Box>
                        </Typography>
                      </Stack>

                      {/* 패치 */}
                      <Typography
                        component="div"
                        align="center"
                        className={isMob ? 'mobBody12KR' : 'pcBody14KR'}
                        fontWeight={300}
                        color="#5F5F5F"
                      >
                        <Stack direction="row" spacing="8px">
                          {each.patch.map(function (eachPatch) {
                            return (
                              <Box
                                key={each.name + eachPatch}
                                sx={{
                                  width: { xs: '43px', sm: '56px' },
                                  py: '0px',
                                  border: '1px solid #5F5F5F',
                                  borderRadius: '4px',
                                }}
                              >
                                {eachPatch}
                              </Box>
                            );
                          })}
                        </Stack>
                      </Typography>
                    </Stack>

                    {/* 모바일 서비스명 */}
                    <Typography
                      component="div"
                      className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                      color="#FFFFFF"
                      fontWeight={600}
                      sx={{ display: { sm: 'none' }, mt: { xs: '12px', sm: '0px' } }}
                    >
                      <Box>{each.name}</Box>
                    </Typography>

                    {/* 설명 */}
                    <Typography
                      className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                      fontWeight={300}
                      color="#EEEEEE"
                      sx={{
                        mt: { xs: '6px', sm: '24px' },
                        mb: { xs: '16px', sm: '36px' },
                      }}
                    >
                      {each.contents}
                    </Typography>

                    <RoundOutlinedButton
                      text={each.buttonLabel}
                      // coming soon 전
                      // px={{ xs: '24px', sm: '56px' }}
                      px={{ xs: '11px', sm: '10px' }}
                      py={{ xs: '7px', sm: '18px' }}
                      sx={{ width: { sm: '202px' }, boxSizing: 'border-box' }}
                      color={each.name === 'Tealswap' ? '#FFFFFF' : gray}
                    />
                  </Box>
                </ObserverAnimation>
              );
            })}
          </Stack>
        </Draggable>
      </Container>
    </Container>
  );
}
