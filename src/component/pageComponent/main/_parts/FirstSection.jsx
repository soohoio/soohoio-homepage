import { gray_light } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/BoxButton';
import { Box, Container, Grid, Typography } from '@mui/material';
import Spline from '@splinetool/react-spline';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer ptPc="180px" pbPc="75px" ptMob="56px">
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Typography
          className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
          component="div"
          sx={{ fontWeight: 300 }}
        >
          <Box sx={{ display: 'inline', fontWeight: 600 }}>기관급 금융</Box>을 위한
        </Typography>
        <Typography
          className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
          component="div"
          sx={{ fontWeight: 300 }}
        >
          투명하고 안전한 <Box sx={{ display: 'inline', fontWeight: 600 }}>DeFi 인프라</Box>
        </Typography>

        <Typography
          className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
          color={gray_light}
          sx={{ fontWeight: 300, mt: { xs: '16px', sm: '64px' } }}
        >
          {`금융 기회를 넓히고 싶은 모든 이들이\n장애물 없이 블록체인을 넘나들 수 있도록,\n수호는 믿을 수 있는 기업 파트너와 함께\n투명하고 안전한 인프라를 만듭니다.`}
        </Typography>

        {/* 모바일 spline을 위한 공간 */}
        <Box sx={{ height: { xs: '280px', sm: '360px' }, display: { lg: 'none' } }} />
        <RoundOutlinedButton
          text="수호 Defi 문의하기"
          sx={{ mt: '60px', width: { xs: 1, sm: 'auto' }, px: { xs: '0px', sm: '78px' } }}
        />
        {/* 태블릿 이상~ */}
        <Box
          sx={{
            width: '1200px',
            height: '900px',
            WebkitTransform: 'scale(0.7)',
            position: 'absolute',
            top: -150,
            right: -300,
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <Spline scene="https://prod.spline.design/C2R0hAVjsqrBl7Ka/scene.splinecode" />
        </Box>
        {/* 모바일 ~ 작은 태블릿 */}
        <Box
          sx={{
            width: '1200px',
            height: '900px',
            WebkitTransform: { xs: 'scale(0.4)', sm: 'scale(0.5)' },
            position: 'absolute',
            top: { xs: -70, sm: 150 },
            left: -450,
            display: { xs: 'block', lg: 'none' },
          }}
        >
          <Spline scene="https://prod.spline.design/C2R0hAVjsqrBl7Ka/scene.splinecode" />
        </Box>
      </Box>
    </BodyContainer>
  );
}
