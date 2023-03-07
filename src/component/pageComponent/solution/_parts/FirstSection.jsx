import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('solution');

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
                {t('firstSection.title')}
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
                  ? t('firstSection.descriptionMob')
                  : isPc
                  ? t('firstSection.descriptionPc')
                  : t('firstSection.descriptionTablet')}
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
