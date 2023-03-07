import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useTranslation } from 'next-i18next';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('contact');

  return (
    <BodyContainer ptPc="180px" pbPc="180px" ptMob="46px" pbMob="58px">
      <Typography
        className={isMob ? 'mobTitle19KR' : 'pcTitle56KR'}
        component="div"
        color="primary"
        sx={{ fontWeight: 300, mb: { xs: '4px', sm: '21px' } }}
      >
        <Box sx={{ display: 'inline-block' }}>{t('firstSection.title')}</Box>
        <Box sx={{ display: 'inline-block' }}>{t('firstSection.title2')}</Box>
      </Typography>

      <Typography className={isMob ? 'mobTitle14KR' : 'pcTitle36KR'} sx={{ fontWeight: 300 }}>
        {t('firstSection.description')}
      </Typography>
    </BodyContainer>
  );
}
