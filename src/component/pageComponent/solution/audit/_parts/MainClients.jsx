import { black, borderRadiusMob, borderRadiusPc, gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import CountUp from 'react-countup';

export default function MainClients() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const performanceList = [
    { label: '보고서 발행', number: 280000 },
    { label: '취약점 발견', number: 24000 },
    { label: '보호한 총 자산 가치', number: 2000 },
    { label: '클라이언트 & 파트너', number: 200 },
  ];

  const mainClientsList = [
    { label: 'wemix', width: 135, height: 38 },
    { label: 'krust', width: 89, height: 37 },
    { label: 'luniverse', width: 170, height: 42 },
    { label: 'ozys', width: 96, height: 34 },
    { label: 'superblock', width: 195, height: 41 },
    { label: 'planetarium', width: 204, height: 39 },
    { label: 'chainPartners', width: 100, height: 44 },
    { label: 'samsungSDS', width: 157, height: 18 },
    { label: 'lgCns', width: 110, height: 25 },
    { label: 'sk', width: 115, height: 42 },
    { label: 'fss', width: 142, height: 42 },
  ];

  return (
    <BodyContainer ptPc="128px" pbPc="135px" ptMob="42px" pbMob="42px">
      <ObserverAnimation>
        <Typography
          component="div"
          className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
          color="primary"
          fontWeight={300}
          align="center"
        >
          <Box sx={{ display: 'inline' }}>2018년 4월, </Box>
          <Box sx={{ display: 'inline', fontWeight: 600 }}>국내 첫 번째 오딧 보고서를 발행</Box>
          <Box sx={{ display: 'inline' }}>한</Box>
          <Box sx={{ mb: { xs: '24px', sm: '56px' } }}>한국 대표 블록체인 보안팀</Box>
        </Typography>
      </ObserverAnimation>

      <Grid
        container
        columnSpacing={{ xs: '8px', sm: '16px' }}
        rowSpacing={{ xs: '8px', sm: '18px' }}
      >
        {performanceList.map(function (each, index) {
          return (
            <Grid key={each.label} item xs={6}>
              <ObserverAnimation delay={150 * index}>
                <Box
                  sx={{
                    backgroundColor: black,
                    pt: { xs: '18px', sm: '40px' },
                    pb: { xs: '18px', sm: '40px' },
                    borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                  }}
                >
                  <Typography
                    className={isMob ? 'mobBody12KR' : 'pcBody20KR'}
                    color="primary"
                    fontWeight={{ xs: 300, sm: 600 }}
                    align="center"
                    sx={{ mb: { xs: '4px', sm: '16px' } }}
                  >
                    {each.label}
                  </Typography>
                  <Typography
                    component="div"
                    className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'}
                    color="#FFFFFF"
                    fontWeight={600}
                    align="center"
                  >
                    {each.label === '보호한 총 자산 가치' ? (
                      <Box>
                        <CountUp enableScrollSpy separator="," end={3} />조{' '}
                        <CountUp enableScrollSpy separator="," end={each.number} />억 원+
                      </Box>
                    ) : (
                      <Box>
                        <CountUp enableScrollSpy separator="," end={each.number} />+
                      </Box>
                    )}
                  </Typography>
                </Box>
              </ObserverAnimation>
            </Grid>
          );
        })}
      </Grid>

      {/* 클라이언트 */}
      <ObserverAnimation>
        <Typography
          className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
          color="primary"
          fontWeight={500}
          align="center"
          sx={{ mt: { xs: '42px', sm: '130px' }, mb: { xs: '20px', sm: '32px' } }}
        >
          Main Clients
        </Typography>
      </ObserverAnimation>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Stack
          direction="row"
          columnGap={{ xs: '34px', sm: '64px' }}
          rowGap={{ xs: '18px', sm: '24px' }}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {mainClientsList.map(function (each, index) {
            return (
              <ObserverAnimation
                key={`partner_${each.label}`}
                animationName="fadeInSlow"
                delay={index * 100}
              >
                <CardMedia
                  image={`/image/pageImage/home/company/${each.label}.png`}
                  sx={{
                    width: { xs: each.width * 0.5, sm: each.width },
                    height: { xs: each.height * 0.5, sm: each.height },
                  }}
                />
              </ObserverAnimation>
            );
          })}
        </Stack>
      </Stack>
    </BodyContainer>
  );
}
