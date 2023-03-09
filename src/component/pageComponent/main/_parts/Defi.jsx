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
import { useTranslation } from 'next-i18next';
import { BodyContainer } from '@/component/ui/BodyContainer';
import CustomLinkComponent from '@/module/CustomLink';

export default function Defi() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('main');

  const [screenSize, setScreenSize] = useState(1440);

  const leftLimit = isPc ? -676 : screenSize;
  const contentsSize = isMob ? 300 * 3 : 656 * 3;
  const padding = isMob ? 40 : 70;

  const defiList = [
    {
      title: 'KLEVA',
      contents: isMob ? t('defi.klevaMob') : t('defi.kleva'),
      buttonLabel: t('defi.button'),
      img: '/',
      link: '/product',
    },
    {
      title: 'StayKing',
      contents: isMob ? t('defi.stayKingMob') : t('defi.stayKing'),
      buttonLabel: t('defi.button'),
      img: '/',
      link: '/product',
    },
    {
      title: 'Martian',
      contents: isMob ? t('defi.martianMob') : t('defi.martian'),
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

  return (
    <>
      <BodyContainer ptMob="42px" ptPc="152px">
        <Typography
          className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
          color="primary"
          align="center"
          fontWeight={600}
        >
          {t('defi.title')}
        </Typography>

        <Typography
          className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
          align="center"
          sx={{ fontWeight: 300, mt: { xs: '16px', sm: '32px' }, pb: { xs: '20px', sm: '42px' } }}
        >
          {isMob ? t('defi.descriptionMob') : t('defi.description')}
        </Typography>
      </BodyContainer>

      <Container
        maxWidth={false}
        sx={{
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
          <Draggable
            axis="x"
            nodeRef={ref}
            // 카드 사이즈에 따라 드래그 최대 리미트를 설정
            bounds={{ left: leftLimit, right: 0 }}
            cancel="button"
            handle=".dragSection"
          >
            <Stack
              className="dragSection"
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
                      backgroundColor: '#060606',
                      borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
                    }}
                  >
                    <Box
                      sx={{
                        pl: { xs: '16px', sm: '48px' },
                        py: { xs: '12px', sm: '48px' },
                        pb: { xs: '16px', sm: '48px' },
                        minWidth: { xs: '300px', sm: '656px' },
                        width: { xs: '300px', sm: '656px' },
                        backgroundImage: `url(/image/pageImage/home/${each.title.toLowerCase()}Background${
                          isMob ? 'Mob' : ''
                        }.png)`,
                        backgroundSize: { xs: '300px 168px', sm: 'cover' },
                        backgroundRepeat: 'no-repeat',
                        borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
                        boxSizing: 'border-box',
                      }}
                    >
                      <Stack direction="column" justifyContent="space-between" sx={{ height: 1 }}>
                        <Box>
                          <Typography
                            className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'}
                            fontWeight={600}
                          >
                            {each.title}
                          </Typography>
                          {/* 여기는 -0.023em... */}
                          <Typography
                            component="div"
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
                            <Box sx={{ maxWidth: { xs: '185px', sm: '330px' } }}>
                              {each.contents}
                            </Box>
                          </Typography>
                        </Box>
                        <Box>
                          {each.buttonLabel === 'Coming soon' ? (
                            <RoundOutlinedButton
                              text={each.buttonLabel}
                              px={{ xs: '11px', sm: '10px' }}
                              py={{ xs: '7px', sm: '18px' }}
                              sx={{ width: { sm: '202px' }, boxSizing: 'border-box' }}
                              color={gray}
                            />
                          ) : (
                            <CustomLinkComponent
                              href={{
                                pathname: each.link,
                                query: { currentProduct: each.title },
                              }}
                            >
                              <MUIOutlinedButton
                                noClass={true}
                                text={each.buttonLabel}
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
                            </CustomLinkComponent>
                          )}
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Draggable>
        </Container>
      </Container>
    </>
  );
}
