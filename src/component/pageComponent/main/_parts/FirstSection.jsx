import { gray_light } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import Link from 'next/link';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer ptPc="180px" pbPc="75px" ptMob="56px">
      <Grid container>
        <Grid item xs={12} sm={6}>
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
          <Link href="/contact">
            <MUIOutlinedButton
              text="수호 DeFi 문의하기"
              sx={{
                mt: '60px',
                width: { xs: 1, sm: 'auto' },
                display: { xs: ' none', sm: 'block' },
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: { sm: '-135px' } }}>
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
      <Link href="/contact">
        <MUIOutlinedButton
          text="수호 DeFi 문의하기"
          sx={{ width: { xs: 1, sm: 'auto' }, display: { sm: 'none ' } }}
        />
      </Link>
    </BodyContainer>
  );
}
