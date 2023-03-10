import {
  black,
  borderRadiusMob,
  borderRadiusPc,
  gray,
  primary,
} from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Security() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('audit');

  return (
    <BodyContainer ptPc="143px" pbPc="128px" ptMob="42px" pbMob="42px">
      <ObserverAnimation>
        <Typography
          className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
          color="primary"
          fontWeight={600}
          align="center"
        >
          {isPc ? t('security.titlePc') : t('security.title')}
        </Typography>

        <Typography
          component="div"
          className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
          color="#FFFFFF"
          fontWeight={300}
          align="center"
          sx={{ mt: { xs: '22px', sm: '26px' }, mb: { xs: '64px', sm: '64px' } }}
        >
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {isMob ? t('security.descriptionMob') : t('security.description')}
          </Box>
        </Typography>

        {/* 첫 번째 박스 */}
        <Box
          sx={{
            backgroundColor: black,
            p: { xs: '16px', sm: '48px' },
            maxWidth: { lg: '1043px' },
            boxSizing: 'border-box',
            mb: { xs: '16px', sm: '24px' },
            mx: 'auto',
            borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
            position: 'relative',
          }}
        >
          <Typography
            component="div"
            className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
            color="primary"
            fontWeight={600}
          >
            <Box sx={{ mb: { xs: '10px', sm: '24px' } }}>In-house Security Research Group</Box>
          </Typography>

          <Typography
            component="div"
            className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
            color="#FFFFFF"
            fontWeight={300}
            sx={{ maxWidth: { xs: '450px', sm: '837px' } }}
          >
            <Box sx={{ maxWidth: '430px' }}>
              {isPc ? t('security.inHouseDescriptionPc') : t('security.inHouseDescription')}
            </Box>
          </Typography>
          <CardMedia
            image={`/image/pageImage/audit/inhouseSecurity.png`}
            sx={{
              width: 1,
              maxWidth: '411px',
              aspectRatio: '411/290',
              position: 'absolute',
              bottom: 14,
              right: 48,
              display: { xs: 'none', lg: 'block' },
            }}
          />
          <Grid
            container
            justifyContent="flex-end"
            sx={{ display: { lg: 'none' }, pr: '36px', mt: '24px' }}
          >
            <CardMedia
              image={`/image/pageImage/audit/inhouseSecurity.png`}
              sx={{
                width: 1,
                maxWidth: { xs: '207px', sm: '394px' },
                aspectRatio: '207/146',
              }}
            />
          </Grid>
        </Box>

        {/* 두 번째 박스 */}
        <Box
          sx={{
            backgroundColor: black,
            p: { xs: '16px', sm: '48px' },
            maxWidth: { lg: '1043px' },
            boxSizing: 'border-box',
            mx: 'auto',
            borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
            position: 'relative',
          }}
        >
          <Typography
            component="div"
            className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
            color="primary"
            fontWeight={600}
          >
            <Box sx={{ mb: { xs: '10px', sm: '24px' } }}>Our Core Technology</Box>
          </Typography>

          <Typography
            component="div"
            className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
            color="#FFFFFF"
            fontWeight={300}
            sx={{ maxWidth: { xs: '450px', sm: '837' } }}
          >
            <Box sx={{ maxWidth: '430px' }}>
              <Box sx={{ display: 'inline' }}>
                {isPc ? t('security.coreDescription1Pc') : t('security.coreDescription1')}
              </Box>
              <Box sx={{ display: 'inline', color: primary }}> BlockOps</Box>
              <Box sx={{ display: 'inline' }}>
                {isPc ? t('security.coreDescription2Pc') : t('security.coreDescription2')}
              </Box>
            </Box>
          </Typography>

          <CardMedia
            image={`/image/pageImage/audit/coreTechnology.png`}
            sx={{
              width: 1,
              maxWidth: '524px',
              aspectRatio: '524/346',
              position: 'absolute',
              bottom: 0,
              right: 0,
              display: { xs: 'none', lg: 'block' },
            }}
          />
          <Grid container justifyContent="flex-end" sx={{ display: { lg: 'none' }, mt: '30px' }}>
            <CardMedia
              image={`/image/pageImage/audit/coreTechnologyMob.png`}
              sx={{
                width: 1,
                maxWidth: { xs: '280px', sm: '550px' },
                aspectRatio: '280/182',
              }}
            />
          </Grid>

          <Link href="https://blockops.sooho.io/" target="_blank">
            <MUIOutlinedButton
              text={t('security.button')}
              color="#FFFFFF"
              hoverColor="#FFFFFF"
              sx={{
                mt: { xs: '24px', lg: '66px' },
                width: { xs: 1, lg: 'auto' },
                px: { lg: '56px' },
              }}
            />
          </Link>
        </Box>
      </ObserverAnimation>
    </BodyContainer>
  );
}
