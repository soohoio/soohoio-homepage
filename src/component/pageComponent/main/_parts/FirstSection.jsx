import { gray_light } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('main');

  return (
    <BodyContainer ptPc="180px" pbPc="75px" ptMob="56px">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography
            className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
            component="div"
            sx={{ fontWeight: 300 }}
          >
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{t('firstSection.title1')}</Box>
            {t('firstSection.title2')}
          </Typography>
          <Typography
            className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
            component="div"
            sx={{ fontWeight: 300 }}
          >
            {t('firstSection.title3')}
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{t('firstSection.title4')}</Box>
          </Typography>

          <Typography
            className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
            color={gray_light}
            sx={{ fontWeight: 300, mt: { xs: '16px', sm: '64px' } }}
          >
            {t('firstSection.description')}
          </Typography>
          {/* 태블릿 & PC 버튼 */}
          <Link href="/contact">
            <MUIOutlinedButton
              text={t('firstSection.button')}
              sx={{
                mt: '60px',
                width: { xs: 1, sm: '310px' },
                display: { xs: ' none', sm: 'block' },
                px: { sm: '1px' },
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: { sm: '-100px', lg: '-135px' } }}>
          <CardMedia
            image={`/image/pageImage/home/soohoMain.png`}
            sx={{
              maxWidth: { sm: '664px' },
              maxHeight: { sm: '628px' },
              aspectRatio: '664/628',
              mt: { xs: '16px', sm: '32px' },
              mb: { xs: '24px', sm: '40px' },
            }}
          />
        </Grid>
      </Grid>
      {/* 모바일 버튼 버튼 */}
      <Link href="/contact">
        <MUIOutlinedButton
          text={t('firstSection.button')}
          sx={{ width: { xs: 1, sm: 'auto' }, display: { sm: 'none ' } }}
        />
      </Link>
    </BodyContainer>
  );
}
