import { Box, Button, CardMedia, Container, Grid, Stack, Tooltip, Typography } from '@mui/material';
import { paddingHorMob, paddingHorPC, primary } from '@/component/style/StyleTheme';
import { useContext, useEffect, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useTranslation } from 'next-i18next';

export default function CultureSupport() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('team');

  const supportList = [
    t('cultureSupport.supportList1'),
    t('cultureSupport.supportList2'),
    t('cultureSupport.supportList3'),
    t('cultureSupport.supportList4'),
    t('cultureSupport.supportList5'),
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        background: `url(/image/pageImage/team/supportBg${isMob ? 'Mob' : ''}.png)`,
        backgroundPositionX: { xs: 'center', sm: 'center' },
        backgroundPositionY: { xs: 'bottom', sm: 'top' },
        backgroundRepeat: 'no-repeat',
        height: { xs: '320px', sm: 'auto' },
        py: { xs: '54px', sm: '152px' },
        px: { xs: paddingHorMob, sm: paddingHorPC },
        backgroundSize: 'cover',
      }}
    >
      <Typography
        component="div"
        align="center"
        className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
        fontWeight={600}
        color={primary}
      >
        <Box sx={{ mb: { xs: '32px', sm: '40px' } }}>
          {isTablet ? t('cultureSupport.titleTablet') : t('cultureSupport.title')}
        </Box>
      </Typography>

      <Typography
        component="div"
        align="center"
        className={isMob ? 'mobTitle14KR' : 'pcTitle24KR'}
        fontWeight={300}
        color="#FFFFFF"
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          rowGap={{ sm: '16px' }}
          spacing={{ xs: '8px', sm: '40px' }}
          justifyContent="center"
          sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {supportList.map(function (each) {
            return <Box key={each}>{each}</Box>;
          })}
        </Stack>
      </Typography>
    </Container>
  );
}
