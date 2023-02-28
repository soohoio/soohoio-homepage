import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusPc, gray } from '@/component/style/StyleTheme';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <Container
      maxWidth="false"
      sx={{ background: 'linear-gradient(0deg, #08372E 0%, #131313 100%)' }}
    >
      <BodyContainer
        ptPc="64px"
        ptMob="56px"
        pbPc="50px"
        pbMob="32px"
        backgroundColor="transparent"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: { sm: '538px' } }}
        >
          <ObserverAnimation sx={{ width: 1 }}>
            <Box sx={{ minWidth: { sm: '400px', lg: '560px' } }}>
              <Typography
                className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
                color="primary"
                fontWeight={600}
              >
                Smart Contract Audit
              </Typography>

              <Typography
                component="div"
                className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
                fontWeight={300}
                color="#FFFFFF"
                sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '16px', sm: '48px' } }}
              >
                <Box sx={{ mt: { xs: '16px', sm: '64px' }, mb: { xs: '16px', sm: '16px' } }}>
                  {isPc
                    ? `DeFi 서비스에서 해킹으로 많은 자산이 탈취되는\n이유는 스마트 컨트랙트, 즉 탈중앙화된 실행 코드에서의\n취약점 때문입니다.`
                    : `DeFi 서비스에서 해킹으로 많은 자산이 탈취되는 이유는 스마트 컨트랙트, 즉 탈중앙화된 실행 코드에서의 취약점 때문입니다.`}
                </Box>
                <Box>
                  {isPc
                    ? `수호는 독자적인 보안 기술력을 기반으로 서비스를 해칠\n수 있는 취약점을 찾아내고 패치할 방법을 제시하는\n스마트 컨트랙트 보안 감사를 진행합니다.`
                    : `수호는 독자적인 보안 기술력을 기반으로 서비스를 해칠 수 있는 취약점을 찾아내고 패치할 방법을 제시하는 스마트 컨트랙트 보안 감사를 진행합니다.`}
                </Box>
              </Typography>
            </Box>
          </ObserverAnimation>
          <Box sx={{ width: { sm: 0.7 } }}>
            <ObserverAnimation delay={400} sx={{ width: 1 }}>
              <CardMedia
                image={`/image/pageImage/audit/smartContract.png`}
                sx={{
                  width: 1,
                  minWidth: '280px',
                  maxWidth: { sm: '532px' },
                  aspectRatio: '532/538',
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
              image={`/image/pageImage/audit/smartContract.png`}
              sx={{
                width: '236px',
                aspectRatio: '236/239',
                mt: '16px',
                display: { sm: 'none' },
              }}
            />
          </Stack>
        </ObserverAnimation>
      </BodyContainer>
    </Container>
  );
}
