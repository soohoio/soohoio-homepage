import { black, primary } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { useTranslation } from 'next-i18next';

export default function System() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('solution');

  const openLink = () => {
    window.open('https://c2cc.xyz/');
  };

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
              <Box>{t('system.description1')}</Box>
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
              <Box>{t('system.description1')}</Box>
              <Box sx={{ display: 'inline' }}>{t('system.description2')}</Box>
              <Box sx={{ display: 'inline', fontWeight: 600 }}>{t('system.description3')}</Box>
              <Box sx={{ display: 'inline' }}>{t('system.description4')}</Box>
              <Box>{t('system.description5')}</Box>
            </Typography>

            <Grid container justifyContent="center">
              <Button
                onClick={openLink}
                variant="contained"
                color="black"
                sx={{
                  color: '#FFFFFF',
                  borderRadius: '120px',
                  px: '80px',
                  py: '17px',
                  fontSize: '20px',
                  display: { xs: 'none', sm: 'block' },
                  ':hover': {
                    color: primary,
                  },
                }}
              >
                {t('system.button')}
              </Button>
              <MUIOutlinedButton
                text={t('system.button')}
                onClick={openLink}
                color={black}
                hoverColor={black}
                sx={{ width: 1, display: { sm: 'none' }, ':hover': { color: primary } }}
              />
            </Grid>
          </ObserverAnimation>
        </BodyContainer>
      </Container>
    </Container>
  );
}
