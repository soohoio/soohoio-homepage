import { gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';

export default function Partner() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('solution');

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
    <Container maxWidth={false} sx={{ backgroundColor: '#131313' }}>
      <Container
        maxWidth={false}
        sx={{
          background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      >
        <BodyContainer
          ptPc="78px"
          pbPc="79px"
          ptMob="42px"
          pbMob="42px"
          backgroundColor="transparent"
        >
          {/* 파트너스 */}
          <ObserverAnimation>
            <Typography
              className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
              color="primary"
              fontWeight={500}
              align="center"
              sx={{ mb: { xs: '20px', sm: '32px' } }}
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
              <Box sx={{ mt: { xs: '42px', sm: '104px' } }}>{t('partner.title')}</Box>
            </Typography>

            <Typography
              align="center"
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
              fontWeight={300}
              color="#FFFFFF"
              sx={{ mt: { xs: '16px', sm: '32px' }, mb: { xs: '16px', sm: '32px' } }}
            >
              <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
                {isMob ? t('partner.descriptionMob') : t('partner.description')}
              </Box>
            </Typography>

            <Typography
              align="center"
              component="div"
              className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
              fontWeight={300}
              color={gray}
            >
              <Box>{isMob ? t('partner.contactMob') : t('partner.contact')}</Box>
            </Typography>
          </ObserverAnimation>
        </BodyContainer>
      </Container>
    </Container>
  );
}
