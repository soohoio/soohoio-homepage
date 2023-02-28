import { gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function Partner() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const partnerList = [
    { label: 'wemix', width: 135, height: 38 },
    { label: 'luniverse', width: 172, height: 42 },
    { label: 'oasys', width: 122, height: 30 },
    { label: 'bora', width: 108, height: 33 },
    { label: 'klaytn', width: 135, height: 40 },
    { label: 'aurora', width: 153, height: 34 },
    { label: 'solana', width: 164, height: 31 },
    { label: 'near', width: 110, height: 30 },
    { label: 'cronos', width: 145, height: 40 },
    { label: 'kava', width: 73, height: 22 },
  ];

  return (
    <BodyContainer ptPc="78px" pbPc="79px" ptMob="42px" pbMob="42px">
      {/* 파트너스 */}
      <ObserverAnimation>
        <Typography
          className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
          color="primary"
          fontWeight={500}
          align="center"
          sx={{ mt: { xs: '36px', sm: '56px' }, mb: { xs: '20px', sm: '32px' } }}
        >
          Partners
        </Typography>
      </ObserverAnimation>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Stack
          direction="row"
          columnGap={{ xs: '34px', sm: '68px' }}
          rowGap={{ xs: '18px', sm: '32px' }}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1000px',
          }}
        >
          {partnerList.map(function (each, index) {
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

      <ObserverAnimation>
        <Typography
          className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
          component="div"
          color="primary"
          align="center"
          fontWeight={600}
        >
          <Box sx={{ mt: { xs: '42px', sm: '104px' } }}>생태계 맞춤형 솔루션</Box>
        </Typography>

        <Typography
          align="center"
          component="div"
          className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
          fontWeight={300}
          color="#FFFFFF"
          sx={{ mt: { xs: '16px', sm: '32px' }, mb: { xs: '16px', sm: '32px' } }}
        >
          <Box>
            {isMob
              ? `고객의 체인 생태계에 최적화될 수 있는 DeFi 서비스를\n고민하고 협업합니다. 개발부터 운영까지,\n빠르고 간편한 Web3.0 온보딩을 경험할 수 있습니다.`
              : `고객의 체인 생태계에 최적화될 수 있는 DeFi 서비스를 고민하고 협업합니다.\n개발부터 운영까지, 빠르고 간편한 Web3.0 온보딩을 경험할 수 있습니다.`}
          </Box>
        </Typography>

        <Typography
          align="center"
          component="div"
          className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
          fontWeight={300}
          color={gray}
        >
          <Box>
            {isMob
              ? `패키지의 세 가지 구성 중\n필요한 서비스를 문의해주세요.`
              : `패키지의 세 가지 구성 중 필요한 서비스를 문의해주세요.`}
          </Box>
        </Typography>
      </ObserverAnimation>
    </BodyContainer>
  );
}
