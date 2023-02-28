import { gray, borderRadiusMob, borderRadiusPc } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useRouter } from 'next/router';

export default function Package() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();

  const packageList = [
    { title: 'Bridge', contents: `기업 고객의\n생태계 확장성 확보`, img: 'bridge' },
    { title: 'Dapp', contents: `생태계 맞춤형\nDeFi 서비스`, img: 'dapp' },
    { title: 'Audit', contents: `안전한 생태계를 위한\n필수 보안 감사`, img: 'audit' },
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
            기업 고객을 위한 패키지 솔루션
          </Typography>

          <Typography
            className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
            align="center"
            sx={{ fontWeight: 300, mt: { xs: '16px', sm: '32px' } }}
          >
            {isMob &&
              `기업들이 쉽고 안전하게 DeFi 생태계를\n구축하고 활성화할 수 있도록\n브릿지, 디앱, 보안 감사 서비스를 제공합니다.`}
            {!isMob &&
              `기업들이 쉽고 안전하게 DeFi 생태계를 구축하고 활성화할 수 있도록\n브릿지, 디앱, 보안 감사 서비스를 제공합니다.`}
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
      <Container sx={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)' }}>
        <BodyContainer pbPc="94px" pbMob="42px" backgroundColor="transparent">
          <Typography
            className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
            align="center"
            color={gray}
            fontWeight={500}
            sx={{ mb: { xs: '16px', sm: '38px' } }}
          >
            DeFi 패키지 구성
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
                    <Grid container direction="row" justifyContent="space-between">
                      <Box sx={{ pl: { xs: '16px', sm: '32px' }, py: { xs: '12px', sm: '24px' } }}>
                        <Typography
                          className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                          fontWeight={600}
                        >
                          {each.title}
                        </Typography>
                        <Typography
                          className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                          sx={{ fontWeight: { xs: 300, sm: 300 }, mt: { xs: '8px', sm: '16px' } }}
                        >
                          {each.contents}
                        </Typography>
                      </Box>
                      <CardMedia
                        image={`/image/pageImage/home/${each.img}.png`}
                        sx={{
                          width: { xs: '144px', sm: '207px' },
                          height: { xs: '100px', sm: '150px' },
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
              text="패키지 자세히 보기"
              sx={{ width: { xs: 1, sm: 'auto' }, mt: { xs: '42px', sm: '88px' } }}
            />
          </Grid>
        </BodyContainer>
      </Container>
    </Container>
  );
}
