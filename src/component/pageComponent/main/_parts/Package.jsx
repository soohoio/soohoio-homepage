import { gray, borderRadiusMob, borderRadiusPc } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { MUIOutlinedButton, RoundOutlinedButton } from '@/component/ui/Button';
import { Box, Button, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function Package() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const packageList = [
    { title: 'Bridge', contents: `기업 고객의\n생태계 확장성 확보`, img: 'bridge' },
    { title: 'Dapp', contents: `생태계 맞춤형\nDeFi 서비스`, img: 'dapp' },
    { title: 'Audit', contents: `안전한 생태계를 위한\n필수 보안 감사`, img: 'audit' },
  ];
  return (
    <Container maxWidth={false} sx={{ backgroundColor: '#131313' }}>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: {
            xs: 'radial-gradient(50.6% 41.92% at 50% 41.02%, rgba(19, 19, 19, 0) 0%, rgba(0, 0, 0, 0.42) 80.77%), url(/image/pageImage/home/packageBackgroundMob.png);',
            sm: 'radial-gradient(circle, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(/image/pageImage/home/packageBackgroundTablet.png)',
            lg: 'radial-gradient(circle, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(/image/pageImage/home/packageBackgroundPc.png)',
          },
          backgroundSize: { xs: 'cover', sm: 'cover' },
          backgroundPositionX: 'center',
          backgroundPositionY: 'top',
        }}
      >
        <BodyContainer
          ptPc="88px"
          pbPc="94px"
          backgroundColor="transparent"
          ptMob="42px"
          pbMob="42px"
        >
          <Typography
            className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
            color="primary"
            align="center"
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

          {/* 빈 박스 */}
          <Box
            sx={{ width: 1, height: { xs: '225px', sm: '500px', lg: '500px' }, my: { lg: '20px' } }}
          />

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
                      minWidth: '312px',
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

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* <MUIOutlinedButton
              text="패키지 자세히 보기"
              sx={{ width: { xs: 1, sm: 'auto' }, mt: { xs: '42px', sm: '88px' } }}
            /> */}
            <RoundOutlinedButton
              text="Comming soon"
              px={{ xs: '24px', sm: '85px' }}
              py={{ xs: '7px', sm: '16px' }}
              color={gray}
              sx={{
                height: { sm: '30px' },
                mt: { xs: '42px', sm: '88px' },
                width: { xs: 1, sm: 'auto' },
                mt: { xs: '42px', sm: '88px' },
              }}
            />
          </Box>
        </BodyContainer>
      </Container>
    </Container>
  );
}
