import { black, primary } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';
import CustomLinkComponent from '@/module/CustomLink';

export default function System() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('solution');

  return (
    <Container maxWidth="false" sx={{ backgroundColor: primary }}>
      <Container
        maxWidth="false"
        sx={{
          backgroundImage: `url(/image/pageImage/solution/system${isMob ? 'Mob' : ''}.png)`,
          backgroundPositionX: 'center',
          backgroundSize: { xs: 'cover', sm: 'cover' },
          backgroundRepeat: 'no-repeat',
          height: { xs: '290px', sm: 'auto' },
          py: { xs: '42px', sm: '152px' },
        }}
      >
        <BodyContainer backgroundColor="transparent">
          <ObserverAnimation>
            {/* 파트너스 */}
            <Typography
              className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
              color={black}
              fontWeight={600}
              align="center"
            >
              {t('system.title')}
            </Typography>

            {/* PC, 태블릿 텍스트 */}
            <Typography
              align="center"
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
              fontWeight={300}
              color={black}
              sx={{
                mt: { xs: '20px', sm: '32px' },
                mb: { xs: '42px', sm: '64px' },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Box sx={{ mb: { sm: '16px' } }}>{t('system.description1')}</Box>
              <Box sx={{ display: 'inline' }}>{t('system.description2')}</Box>
              <Box sx={{ display: 'inline', fontWeight: 600 }}>{t('system.description3')}</Box>
              <Box sx={{ display: 'inline' }}>{t('system.description4')}</Box>
              <Box>{t('system.description5')}</Box>
            </Typography>

            {/* Mob 텍스트 */}
            <Typography
              align="center"
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
              fontWeight={300}
              color={black}
              sx={{
                mt: { xs: '20px', sm: '32px' },
                mb: { xs: '42px', sm: '64px' },
                display: { sm: 'none' },
              }}
            >
              <Box sx={{ mb: '6px' }}>{t('system.description1Mob')}</Box>
              <Box sx={{ display: 'inline' }}>{t('system.description2')}</Box>
              <Box sx={{ display: 'inline', fontWeight: 600 }}>{t('system.description3')}</Box>
              <Box sx={{ display: 'inline' }}>{t('system.description4')}</Box>&nbsp;
              <Box sx={{ display: 'inline' }}>{t('system.description5')}</Box>
            </Typography>

            <Grid container justifyContent="center">
              <CustomLinkComponent href="https://c2cc.xyz/" target="_blank">
                <Button
                  variant="contained"
                  color="black"
                  sx={{
                    color: '#FFFFFF',
                    borderRadius: '120px',
                    px: { sm: '80px' },
                    py: { xs: '7.5px', sm: '17px' },
                    fontSize: { xs: '14px', sm: '20px' },
                    ':hover': {
                      color: primary,
                    },
                    width: { xs: 1, sm: 'auto' },
                  }}
                >
                  {t('system.button')}
                </Button>
              </CustomLinkComponent>
            </Grid>
          </ObserverAnimation>
        </BodyContainer>
      </Container>
    </Container>
  );
}
