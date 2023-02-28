import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusPc, gray } from '@/component/style/StyleTheme';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer ptPc="116px" ptMob="56px" pbPc="108px" pbMob="34px">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: { sm: '349px' } }}
      >
        <ObserverAnimation>
          <Box sx={{ minWidth: { sm: '390px' } }}>
            <Typography
              className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
              color="#FFFFFF"
              fontWeight={600}
            >
              DeFi Product
            </Typography>
            <Typography
              component="div"
              className={isMob ? 'mobTitle19KR' : 'pcTitle36KR'}
              color="primary"
              fontWeight={600}
            >
              <Box sx={{ mt: { xs: '16px', sm: '64px' }, mb: { xs: '16px', sm: '24px' } }}>
                기업 고객을 위한 패키지 솔루션
              </Box>
            </Typography>

            <Typography
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
              fontWeight={300}
              color="#FFFFFF"
              sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '16px', sm: '48px' } }}
            >
              <Box sx={{ maxWidth: '630px' }}>
                {isMob
                  ? `기업들이 쉽고 안전하게 DeFi 생태계를 구축하고\n활성화할 수 있도록 브릿지, 디앱, 보안 감사\n서비스를 제공합니다.`
                  : isPc
                  ? `기업들이 쉽고 안전하게 DeFi 생태계를 구축하고 활성화할 수 있도록\n브릿지, 디앱, 보안 감사 서비스를 제공합니다.`
                  : `기업들이 쉽고 안전하게 DeFi 생태계를 구축하고 활성화할 수 있도록 브릿지, 디앱, 보안 감사 서비스를 제공합니다.`}
              </Box>
            </Typography>
          </Box>
        </ObserverAnimation>
        <Box sx={{ width: { sm: 0.5 } }}>
          <ObserverAnimation delay={400} sx={{ width: 1 }}>
            <CardMedia
              image={`/image/pageImage/solution/defi.png`}
              sx={{
                width: 1,
                minWidth: '280px',
                maxWidth: { sm: '644px' },
                aspectRatio: '644/349',
                mt: { xs: '24px', lg: '0px' },
                display: { xs: 'none', sm: 'block' },
              }}
            />
          </ObserverAnimation>
        </Box>
      </Stack>
      <ObserverAnimation delay={400} sx={{ width: 1 }}>
        <Stack direction="row" justifyContent="flex-end">
          <CardMedia
            image={`/image/pageImage/solution/defi.png`}
            sx={{
              width: '312px',
              aspectRatio: '312/171',
              mt: '34px',
              display: { sm: 'none' },
            }}
          />
        </Stack>
      </ObserverAnimation>
    </BodyContainer>
  );
}
