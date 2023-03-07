import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusMob, borderRadiusPc, gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';

export default function CardSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('main');

  return (
    <BodyContainer ptPc="81px" pbPc="77px" ptMob="44px">
      <Grid container columnSpacing="16px" rowGap="16px">
        {/* 카드1 */}
        <Grid className="fadeIn" item xs={12} sm={6}>
          <ObserverAnimation animationName="fadeInSlow" sx={{ height: 1 }} innerSx={{ height: 1 }}>
            <Box
              sx={{
                backgroundColor: '#1C1C1C',
                borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
                p: { xs: '24px', sm: '48px' },
                boxSizing: 'border-box',
                height: 1,
              }}
            >
              <Box>
                <Typography
                  className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                  color="primary"
                  fontWeight={600}
                >
                  {isTablet ? `From Smart\nContract Auditing` : `From Smart Contract Auditing`}
                </Typography>
                <Typography
                  className={isMob ? 'mobTitle19KR' : 'pcTitle36KR'}
                  component="div"
                  fontWeight={600}
                  sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '8px', sm: '12px' } }}
                >
                  {t('cardSection.card1Title1')}
                  <Box sx={{ fontWeight: 300, display: 'inline' }}>
                    {t('cardSection.card1Title2')}
                  </Box>
                </Typography>
                <Typography className={isMob ? 'mobBody12KR' : 'pcPoint16KR'} color={gray}>
                  {t('cardSection.card1Standard')}
                </Typography>
                {/* 이미지 */}
                <CardMedia
                  image={`/image/pageImage/home/security.png`}
                  sx={{
                    maxWidth: { xs: '137px', sm: '302px' },
                    maxHeight: { xs: '80px', sm: '176px' },
                    aspectRatio: '137/80',
                    mt: { xs: '16px', sm: '32px' },
                    mb: { xs: '24px', sm: '40px' },
                  }}
                />
                <Typography className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'} fontWeight={600}>
                  {t('cardSection.card1Point')}
                </Typography>

                <Typography
                  className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                  color={gray}
                  sx={{ fontWeight: { xs: 300, sm: 300 }, mt: { xs: '8px', sm: '16px' } }}
                >
                  {isPc && t('cardSection.card1DescriptionPc')}
                  {isTablet && t('cardSection.card1DescriptionTablet')}
                  {isMob && t('cardSection.card1DescriptionMob')}
                </Typography>
              </Box>
            </Box>
          </ObserverAnimation>
        </Grid>
        {/* 카드2 */}
        <Grid item xs={12} sm={6}>
          <ObserverAnimation
            animationName="fadeInSlow"
            delay={!isMob && 800}
            sx={{ height: 1 }}
            innerSx={{ height: 1 }}
          >
            <Box
              sx={{
                backgroundColor: '#1C1C1C',
                borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
                p: { xs: '24px', sm: '48px' },
                boxSizing: 'border-box',
                height: 1,
              }}
            >
              <Box>
                <Typography
                  className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                  color="primary"
                  fontWeight={600}
                >
                  {isTablet ? `To Building DeFi` : `To Building DeFi`}
                </Typography>
                <Typography
                  className={isMob ? 'mobTitle19KR' : 'pcTitle36KR'}
                  component="div"
                  fontWeight={600}
                  sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '8px', sm: '12px' } }}
                >
                  <Box sx={{ fontWeight: 300, display: 'inline' }}>
                    {t('cardSection.card2Title1')}
                  </Box>
                  {t('cardSection.card2Title2')}
                </Typography>
                <Typography className={isMob ? 'mobBody12KR' : 'pcPoint16KR'} color={gray}>
                  {t('cardSection.card2Standard')}
                </Typography>
                {/* 이미지 */}

                <CardMedia
                  image={`/image/pageImage/home/defiAmount.png`}
                  sx={{
                    maxWidth: { xs: '137px', sm: '302px' },
                    maxHeight: { xs: '80px', sm: '176px' },
                    aspectRatio: '137/80',
                    mt: { xs: '16px', sm: '32px' },
                    mb: { xs: '24px', sm: '40px' },
                  }}
                />

                <Typography className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'} fontWeight={600}>
                  {t('cardSection.card2Point')}
                </Typography>

                <Typography
                  className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                  color={gray}
                  sx={{ fontWeight: { xs: 300, sm: 300 }, mt: { xs: '8px', sm: '16px' } }}
                >
                  {isPc && t('cardSection.card2DescriptionPc')}
                  {isTablet && t('cardSection.card2DescriptionTablet')}
                  {isMob && t('cardSection.card2DescriptionMob')}
                </Typography>
              </Box>
            </Box>
          </ObserverAnimation>
        </Grid>
      </Grid>
    </BodyContainer>
  );
}
