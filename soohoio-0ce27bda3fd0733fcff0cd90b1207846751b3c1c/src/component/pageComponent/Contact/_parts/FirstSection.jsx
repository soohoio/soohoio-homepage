import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  return (
    <BodyContainer ptPc="180px" pbPc="180px" ptMob="46px" pbMob="58px">
      <Typography
        className={isMob ? 'mobTitle19KR' : 'pcTitle56KR'}
        component="div"
        color="primary"
        sx={{ fontWeight: 300, mb: { xs: '4px', sm: '21px' } }}
      >
        <Box sx={{ display: 'inline-block' }}>더 많은 금융 기회를</Box>{' '}
        <Box sx={{ display: 'inline-block' }}>연결하고 수호합니다.</Box>
      </Typography>

      <Typography className={isMob ? 'mobTitle14KR' : 'pcTitle36KR'} sx={{ fontWeight: 300 }}>
        수호와 함께 DeFi 생태계를 확장하세요.
      </Typography>
    </BodyContainer>
  );
}
