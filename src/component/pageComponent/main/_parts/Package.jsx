import { gray, borderRadiusMob, borderRadiusPc } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Package() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();
  const { t } = useTranslation('main');

  const packageList = [
    { title: 'Bridge', contents: t('package.bridgeContents'), img: 'bridge' },
    { title: 'Dapp', contents: t('package.dappContents'), img: 'dapp' },
    { title: 'Audit', contents: t('package.auditContents'), img: 'audit' },
  ];

  const goToPackage = () => {
    router.push('/solution');
  };
  return (
    <Container maxWidth="false" sx={{ pt: { xs: '42px', sm: '88px' }, backgroundColor: '#131313' }}>
      <BodyContainer>
        <ObserverAnimation>
          <Typography
            className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
            color="primary"
            align="center"
            fontWeight={600}
          >
            {t('package.packageTitle')}
          </Typography>

          <Typography
            component="div"
            className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
            align="center"
            sx={{ fontWeight: 300, mt: { xs: '16px', sm: '32px' } }}
          >
            <Box sx={{ maxWidth: '1050px', mx: 'auto' }}>
              {isMob ? t('package.packageDescriptionMob') : t('package.packageDescription')}
            </Box>
          </Typography>

          {/* 패키지 에셋 */}
          <Grid
            container
            justifyContent="center"
            sx={{ mt: { xs: '15px', sm: '32px' }, mb: { xs: '18px', sm: '24px' } }}
          >
            <CardMedia
              image={`/image/pageImage/home/packageAsset.png`}
              sx={{
                width: 1,
                maxWidth: { xs: '360px', sm: '644px' },
                aspectRatio: { xs: '360/190', sm: '644/349' },
              }}
            />
          </Grid>
        </ObserverAnimation>
      </BodyContainer>

      {/* Container 백그라운드 */}
      <Container
        maxWidth={false}
        sx={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)' }}
      >
        <BodyContainer pbPc="94px" pbMob="42px" backgroundColor="transparent">
          <Typography
            className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
            align="center"
            color={gray}
            fontWeight={500}
            sx={{ mb: { xs: '16px', sm: '38px' } }}
          >
            {t('package.defiComposition')}
          </Typography>

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
            {packageList.map(function (each, index) {
              return (
                <ObserverAnimation
                  key={each.title}
                  animationName="fadeInSlow"
                  delay={!isMob && index * 200}
                  sx={{ width: { xs: 1, sm: '426px' } }}
                >
                  <Box
                    sx={{
                      width: { xs: 1, sm: '426px' },
                      height: { xs: '100px', sm: '150px' },
                      borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
                      backgroundColor: '#1C1C1C',
                      display: 'inline-block',
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      sx={{ position: 'relative' }}
                    >
                      <Box sx={{ pl: { xs: '16px', sm: '32px' }, py: { xs: '12px', sm: '24px' } }}>
                        <Typography
                          className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                          fontWeight={600}
                        >
                          {each.title}
                        </Typography>
                        <Typography
                          component="div"
                          className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                          sx={{ fontWeight: { xs: 300, sm: 300 }, mt: { xs: '8px', sm: '16px' } }}
                        >
                          <Box sx={{ maxWidth: { xs: '160px', sm: '195px' } }}>{each.contents}</Box>
                        </Typography>
                      </Box>
                      <CardMedia
                        image={`/image/pageImage/home/${each.img}.png`}
                        sx={{
                          width: { xs: '144px', sm: '207px' },
                          height: { xs: '100px', sm: '150px' },
                          position: 'absolute',
                          right: 0,
                        }}
                      />
                    </Grid>
                  </Box>
                </ObserverAnimation>
              );
            })}
          </Stack>

          <Grid container justifyContent="center">
            <MUIOutlinedButton
              onClick={goToPackage}
              text={t('package.button')}
              sx={{ width: { xs: 1, sm: 'auto' }, mt: { xs: '42px', sm: '88px' } }}
            />
          </Grid>
        </BodyContainer>
      </Container>
    </Container>
  );
}
