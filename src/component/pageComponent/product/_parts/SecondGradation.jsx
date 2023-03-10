import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { gray_light } from '@/component/style/StyleTheme';
import { useTranslation } from 'next-i18next';

export default function SecondGradation({ currentProduct }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('product');

  const productData = {
    KLEVA: {
      name: 'KLEVA',
      title: isTablet
        ? `No.1 Leveraged Yield Farming Protocol on Klaytn`
        : `No.1 Leveraged Yield Farming\nProtocol on Klaytn`,
      contents: t('secondGradation.klevaContents'),
      img: 'kleva',
      logo: 'klevaLogo',
    },
    StayKing: {
      name: 'StayKing',
      title: `First Leveraged Staking\nProtocol on Evmos`,
      contents: t('secondGradation.stayKingContents'),
      img: 'stayKing',
      logo: 'stayKingLogo',
    },
  };

  return (
    <Container maxWidth="false" sx={{ backgroundColor: '#131313' }}>
      <ObserverAnimation key={`background_${currentProduct}`}>
        <Container
          maxWidth="false"
          sx={[
            currentProduct === 'KLEVA'
              ? { background: 'linear-gradient(180deg, #131313 0%, #001141 100%)' }
              : { background: 'linear-gradient(0deg, #361C04 0%, #131313 100%)' },
            { pt: { xs: '56px', sm: '0px' } },
          ]}
        >
          <BodyContainer
            ptPc="76px"
            pbPc="64px"
            ptMob="20px"
            pbMob="0px"
            backgroundColor="transparent"
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ height: { sm: '524px' } }}
            >
              <ObserverAnimation delay={250} key={`secondText_${currentProduct}`}>
                <Box sx={{ minWidth: { sm: '400px' } }}>
                  <Stack direction="row" alignItems="flex-end" spacing={{ xs: '12px', sm: '24px' }}>
                    <CardMedia
                      component="img"
                      image={`/image/pageImage/product/${productData[currentProduct].logo}.png`}
                      sx={{
                        width: { xs: '44px', sm: '80px' },
                        height: { xs: '44px', sm: '80px' },
                      }}
                    />
                    <Typography
                      className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
                      color="#FFFFFF"
                      fontWeight={300}
                    >
                      {productData[currentProduct].name}
                    </Typography>
                  </Stack>

                  <Typography
                    component="div"
                    className={isMob ? 'mobBody19KR' : 'pcTitle36KR'}
                    fontWeight={600}
                    color="#FFFFFF"
                  >
                    <Box
                      sx={{
                        mt: { xs: '16px', sm: '64px' },
                        mb: { xs: '24px', sm: '24px' },
                        maxWidth: '500px',
                      }}
                    >
                      {productData[currentProduct].title}
                    </Box>
                  </Typography>
                  <Typography
                    component="div"
                    className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
                    fontWeight={300}
                    color={gray_light}
                  >
                    <Box sx={{ maxWidth: { xs: '350px', sm: '500px' } }}>
                      {productData[currentProduct].contents}
                    </Box>
                  </Typography>
                </Box>
              </ObserverAnimation>
              {/* ?????????, PC ????????? */}
              <Box>
                <ObserverAnimation key={`secondImage_${currentProduct}`} delay={650}>
                  <CardMedia
                    component="img"
                    image={`/image/pageImage/product/${productData[currentProduct].img}.png`}
                    alt={productData[currentProduct].name}
                    sx={{
                      width: 1,
                      minWidth: '280px',
                      maxWidth: { sm: '544px' },
                      aspectRatio: '544/524',
                      mt: { xs: '24px', lg: '0px' },
                      display: { xs: 'none', sm: 'block' },
                    }}
                  />
                </ObserverAnimation>
              </Box>
            </Stack>
          </BodyContainer>
          {/* ???????????? ????????? */}
          <Grid container direction="row" justifyContent="flex-end" alignItems="center">
            <CardMedia
              component="img"
              image={`/image/pageImage/product/${productData[currentProduct].img}Mob.png`}
              alt={productData[currentProduct].name}
              sx={{
                width: 1,
                maxWidth: '360px',
                aspectRatio: '360/190',
                mt: { xs: '24px', lg: '0px' },
                display: { sm: 'none' },
              }}
            />
          </Grid>
        </Container>
      </ObserverAnimation>
    </Container>
  );
}
