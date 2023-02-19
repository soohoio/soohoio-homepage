import { gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/BoxButton';
import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

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
            xs: 'radial-gradient(50.6% 41.92% at 50% 41.02%, rgba(19, 19, 19, 0) 0%, rgba(0, 0, 0, 0.42) 80.77%), url(/image/PageImage/home/packageBackgroundMob.png);',
            sm: 'radial-gradient(circle, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(/image/PageImage/home/packageBackgroundTablet.png)',
            lg: 'radial-gradient(circle, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(/image/PageImage/home/packageBackgroundPc.png)',
          },
          backgroundSize: { sm: 'cover' },
          backgroundPositionX: 'center',
          backgroundPositionY: 'top',
        }}
      >
        <BodyContainer ptPc="88px" pbPc="94px" backgroundColor="transparent">
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
            sx={{ fontWeight: 300, mt: '32px' }}
          >
            {`기업들이 쉽고 안전하게 DeFi 생태계를 구축하고 활성화할 수 있도록\n브릿지, 디앱, 보안 감사 서비스를 제공합니다.`}
          </Typography>

          <Box sx={{ width: 1, height: { sm: '500px', lg: '500px' }, my: { lg: '20px' } }} />

          <Typography
            className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
            align="center"
            color={gray}
            fontWeight={500}
            sx={{ mb: '38px' }}
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
            {packageList.map(function (each) {
              return (
                <Box
                  key={each.title}
                  sx={{
                    width: '426px',
                    height: '150px',
                    borderRadius: '16px',
                    backgroundColor: '#1C1C1C',
                    display: 'inline-block',
                  }}
                >
                  <Grid container direction="row" justifyContent="space-between">
                    <Box sx={{ pl: '32px', py: '24px' }}>
                      <Typography
                        className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                        fontWeight={600}
                      >
                        {each.title}
                      </Typography>
                      <Typography
                        className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                        sx={{ fontWeight: { xs: 300, sm: 400 }, mt: '16px' }}
                      >
                        {each.contents}
                      </Typography>
                    </Box>
                    <CardMedia
                      image={`/image/pageImage/home/${each.img}.png`}
                      sx={{ width: '207px', height: '150px' }}
                    />
                  </Grid>
                </Box>
              );
            })}
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <RoundOutlinedButton text="패키지 자세히 보기" sx={{ mt: '88px' }} />
          </Box>
        </BodyContainer>
      </Container>
    </Container>
  );
}
