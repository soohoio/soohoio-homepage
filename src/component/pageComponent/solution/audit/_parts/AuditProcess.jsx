import { black, borderRadiusMob, borderRadiusPc, gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';

export default function AuditProcess() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('audit');

  return (
    <BodyContainer ptPc="128px" pbPc="128px" ptMob="42px" pbMob="42px" backgroundColor={black}>
      <ObserverAnimation>
        <Typography
          className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
          color="primary"
          fontWeight={600}
          align="center"
          sx={{ mb: { xs: '20px', sm: '32px' } }}
        >
          {t('auditProcess.title')}
        </Typography>
        <Grid container justifyContent="center">
          <CardMedia
            image={`/image/pageImage/audit/auditProcess${isMob ? 'Mob' : ''}.png`}
            sx={{
              width: { xs: '291px', sm: 0.6, lg: 1 },
              minWidth: { sm: '633px' },
              aspectRatio: { xs: '291/562', sm: '1328/836' },
            }}
          />
        </Grid>
      </ObserverAnimation>
    </BodyContainer>
  );
}
