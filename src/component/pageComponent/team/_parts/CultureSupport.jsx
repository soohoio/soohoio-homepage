import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, CardMedia, Container, Grid, Stack, Tooltip, Typography } from '@mui/material';
import { paddingHorMob, paddingHorPC, primary } from '@/component/style/StyleTheme';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function CultureSupport() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const supportList = [
    '야간 택시비',
    '점심 저녁 식사 및 간식',
    '교정 테라피',
    '직무에 맞는 고사양 장비',
    '업무에 필요한 소프트웨어',
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        background: `url(/image/pageImage/team/supportBg${isMob ? 'Mob' : ''}.png)`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        py: { xs: '54px', sm: '152px' },
        px: { xs: paddingHorMob, sm: paddingHorPC },
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
          {isTablet
            ? `오직 High Performance에만 몰입할 수 있도록`
            : `오직 High Performance에만 몰입할 수 있도록 지원합니다.`}
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
