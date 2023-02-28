import { black, borderRadiusMob, borderRadiusPc, gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography, Container } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function Awards() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const awardsList = [
    { name: '2018 Upbit Hackathon\nGrand Prize', img: 'upbit' },
    { name: '2019 Binance SAFU\nBest Technology', img: 'binance' },
    { name: '2019 Klaytn Horizon\nTier-1 Prize', img: 'klaytn' },
  ];

  return (
    <Container maxWidth="false" sx={{ position: 'relative' }}>
      <BodyContainer ptPc="128px" pbPc="113px" ptMob="51px" pbMob="23px" backgroundColor="#1C1C1C">
        <ObserverAnimation>
          <CardMedia
            image={`/image/pageImage/audit/trophy${isMob ? 'Mob' : ''}.png`}
            sx={{
              position: 'absolute',
              top: { xs: -50, sm: -135 },
              left: { xs: -20, sm: -40 },
              width: { sm: '50vw', lg: '653px' },
              minWidth: '168px',
              maxWidth: { sm: '653px' },
              aspectRatio: { xs: '168/150', sm: '653/565' },
              zIndex: 1,
            }}
          />
          <Typography
            component="div"
            className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
            color="primary"
            fontWeight={600}
            align="center"
            sx={{ zIndex: 2, position: 'relative' }}
          >
            <Box sx={{ mb: { xs: '33px', sm: '56px' } }}>Qualified in Global Awards</Box>
          </Typography>
        </ObserverAnimation>

        {/* PC & Tablet */}
        <Stack
          direction="row"
          columnGap={{ sm: '16px' }}
          rowGap={{ sm: '32px' }}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {awardsList.map(function (each, index) {
            return (
              <ObserverAnimation key={each.name} delay={150 * index} sx={{ width: '432px' }}>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    sx={{
                      width: 1,
                      backgroundColor: '#FFFFFF',
                      py: { xs: '7px', sm: '17px' },
                      borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                    }}
                  >
                    <CardMedia
                      image={`/image/pageImage/audit/${each.img}.png`}
                      sx={{
                        width: { xs: '120px', sm: '316px' },
                        aspectRatio: { xs: '120/40', sm: '316/107' },
                      }}
                    />
                  </Grid>

                  <Typography
                    className={isMob ? 'mobBody12KR' : 'pcBody20KR'}
                    color="#FFFFFF"
                    fontWeight={300}
                    align="center"
                    sx={{ mt: { xs: '0px', sm: '24px' } }}
                  >
                    {each.name}
                  </Typography>
                </Box>
              </ObserverAnimation>
            );
          })}
        </Stack>

        {/* Mob */}
        {awardsList.map(function (each, index) {
          return (
            <Stack
              key={each.img}
              direction="row"
              spacing="24px"
              sx={{
                display: { sm: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                mb: '12px',
                zIndex: 2,
                position: 'relative',
              }}
            >
              <Grid
                container
                justifyContent="center"
                sx={{
                  backgroundColor: '#FFFFFF',
                  py: { xs: '7px' },
                  borderRadius: { xs: borderRadiusMob },
                  maxWidth: '40vw',
                  minWidth: '120px',
                }}
              >
                <CardMedia
                  image={`/image/pageImage/audit/${each.img}.png`}
                  sx={{
                    width: { xs: '120px', sm: '316px' },
                    aspectRatio: { xs: '120/40', sm: '316/107' },
                  }}
                />
              </Grid>

              <Typography
                component="div"
                className={isMob ? 'mobBody12KR' : 'pcBody20KR'}
                color="#FFFFFF"
                fontWeight={300}
              >
                <Box sx={{ width: '120px' }}>{each.name}</Box>
              </Typography>
            </Stack>
          );
        })}
      </BodyContainer>
    </Container>
  );
}
