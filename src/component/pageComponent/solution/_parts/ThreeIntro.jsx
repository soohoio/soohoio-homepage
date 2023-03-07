import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { black, borderRadiusMob, borderRadiusPc, gray } from '@/component/style/StyleTheme';
import { MUIOutlinedButton } from '@/component/ui/Button';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function ThreeIntro() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('solution');

  const dataList = [
    {
      name: '01 Bridge',
      intro: t('threeIntro.bridgeIntro'),
      img: 'bridge',
      point1: 'Cross-chain',
      description1: isTablet
        ? t('threeIntro.bridgeDescription1Tablet')
        : t('threeIntro.bridgeDescription1'),
      point1Image: 'bridge1',
      point2: 'Optimization',
      description2: isTablet
        ? t('threeIntro.bridgeDescription2Tablet')
        : t('threeIntro.bridgeDescription2'),
      point2Image: 'bridge2',
      point3: 'Security-oriented',
      description3: isTablet
        ? t('threeIntro.bridgeDescription3Tablet')
        : t('threeIntro.bridgeDescription3'),
      point3Image: 'bridge3',
    },
    {
      name: '02 Dapp',
      intro: t('threeIntro.dappIntro'),
      img: 'dapp',
      point1: 'Customizable',
      description1: isTablet
        ? t('threeIntro.dappDescription1Tablet')
        : t('threeIntro.dappDescription1'),
      point1Image: 'dapp1',
      point2: 'Operational Expert',
      description2: isTablet
        ? t('threeIntro.dappDescription2Tablet')
        : t('threeIntro.dappDescription2'),
      point2Image: 'dapp2',
      point3: 'Extensible',
      description3: isTablet
        ? t('threeIntro.dappDescription3Tablet')
        : t('threeIntro.dappDescription3'),
      point3Image: 'dapp3',
    },
    {
      name: '03 Audit',
      intro: isMob ? t('threeIntro.auditIntroMob') : t('threeIntro.auditIntro'),
      img: 'audit',
      point1: 'Top-tier Experts',
      description1: isTablet
        ? t('threeIntro.auditDescription1Tablet')
        : t('threeIntro.auditDescription1'),
      point1Image: 'audit1',
      point2: 'State-of-the-art',
      description2: isTablet
        ? t('threeIntro.auditDescription2Tablet')
        : t('threeIntro.auditDescription2'),
      point2Image: 'audit2',
      point3: 'Improved with Industry Cases',
      description3: isTablet
        ? t('threeIntro.auditDescription3Tablet')
        : t('threeIntro.auditDescription3'),
      point3Image: 'audit3',
    },
  ];
  const dataNum = [1, 2, 3];

  return (
    <BodyContainer ptPc="128px" ptMob="60px" pbPc="4px" pbMob="42px">
      {dataList.map(function (each) {
        return (
          <Box key={each.name} sx={{ mb: { xs: '60px', sm: '124px' } }}>
            <ObserverAnimation>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box sx={{ minWidth: { sm: '390px' } }}>
                  <Typography
                    className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
                    color="primary"
                    fontWeight={600}
                  >
                    {each.name}
                  </Typography>
                  <Typography
                    component="div"
                    className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                    color={gray}
                    fontWeight={300}
                  >
                    <Box
                      sx={{
                        mt: { xs: '12px', sm: '24px' },
                        mb: { xs: '56px', sm: '40px' },
                        height: { lg: '52px' },
                      }}
                    >
                      {each.intro}
                    </Box>
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    image={`/image/pageImage/solution/${each.img}.png`}
                    sx={{
                      width: { xs: '157px', sm: '287px' },
                      aspectRatio: { xs: '157/135', sm: '287/246' },
                      position: 'absolute',
                      right: 0,
                      bottom: { xs: -150, sm: -123 },
                    }}
                  />
                </Box>
              </Stack>
            </ObserverAnimation>

            {/* 포인트 3가지 부분 */}
            <Grid
              container
              columnSpacing={{ sm: '24px', lg: '0px' }}
              sx={{
                backgroundColor: black,
                borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                p: { xs: '16px', sm: '42px' },
              }}
            >
              {dataNum.map(function (num, index) {
                return (
                  <Grid
                    key={each.name + num}
                    item
                    xs={12}
                    sm={4}
                    sx={[num !== 3 && { mb: { xs: '32px', sm: '0px' } }]}
                  >
                    <ObserverAnimation delay={index * 200}>
                      <CardMedia
                        image={`/image/pageImage/solution/${each[`point${num}Image`]}.png`}
                        sx={{
                          width: { xs: '32px', sm: '42px' },
                          height: { xs: '32px', sm: '42px' },
                        }}
                      />
                      <Typography
                        component="div"
                        className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                        color={gray}
                        fontWeight={300}
                      >
                        <Box sx={{ mt: { xs: '16px', sm: '22px' }, mb: { xs: '8px', sm: '8px' } }}>
                          {each[`point${num}`]}
                        </Box>
                      </Typography>

                      <Typography
                        component="div"
                        className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                        color="#FFFFFF"
                        fontWeight={300}
                      >
                        <Box>{each[`description${num}`]}</Box>
                      </Typography>
                    </ObserverAnimation>
                  </Grid>
                );
              })}

              {each.name === '03 Audit' && (
                <ObserverAnimation delay={500} sx={{ width: 1 }}>
                  <Link href="/solution/audit">
                    <MUIOutlinedButton
                      text={t('threeIntro.button')}
                      color="#FFFFFF"
                      hoverColor="#FFFFFF"
                      sx={{
                        width: 1,
                        mt: { xs: '42px', sm: '44px' },
                        py: { xs: '10px', sm: '18px' },
                        mb: { xs: '26px', sm: '10px' },
                      }}
                    />
                  </Link>
                </ObserverAnimation>
              )}
            </Grid>
          </Box>
        );
      })}
    </BodyContainer>
  );
}
