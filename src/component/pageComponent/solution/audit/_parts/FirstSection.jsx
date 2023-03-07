import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('audit');

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
                <Box
                  sx={{
                    mt: { xs: '16px', sm: '64px' },
                    mb: { xs: '16px', sm: '16px' },
                    maxWidth: '600px',
                  }}
                >
                  {isPc ? t('firstSection.title1Pc') : t('firstSection.title1')}
                </Box>
                <Box sx={{ maxWidth: '600px' }}>
                  {isPc ? t('firstSection.title2Pc') : t('firstSection.title2')}
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
