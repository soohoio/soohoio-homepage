import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, CardMedia, Container, Grid, Stack, Tooltip, Typography } from '@mui/material';
import { paddingHorMob, paddingHorPC, primary } from '@/component/style/StyleTheme';
import { useContext, useEffect, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useTranslation } from 'next-i18next';

export default function CultureSupport() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('team');
  const [scrollOffset, setScrollOffset] = useState(0);
  let calc;
  if (isMob) {
    calc = 0;
  } else {
    calc = isPc ? 140 : 300;
  }

  const handleScroll = event => {
    setScrollOffset(event.target.scrollTop);
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

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
      onScroll={handleScroll}
      sx={{
        background: `url(/image/pageImage/team/supportBg${isMob ? 'Mob' : ''}.png)`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        py: { xs: '54px', sm: '152px' },
        px: { xs: paddingHorMob, sm: paddingHorPC },
        backgroundSize: `calc(${calc}% + ${scrollOffset / 4}px)`,
        transition: 'background-size 0.05s ease-in-out',
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
