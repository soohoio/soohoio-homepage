import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import ResponsiveText from '@/component/ui/ResponsiveText';
import { Box, CardMedia, Grid, Typography } from '@mui/material';

export default function CardSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer ptPc="81px" pbPc="77px" ptMob="44px">
      <Grid container columnSpacing="16px" rowGap="16px">
        {/* 카드1 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{ backgroundColor: '#1C1C1C', borderRadius: '16px', p: { xs: '24px', sm: '48px' } }}
          >
            <Typography
              className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
              color="primary"
              fontWeight={600}
            >
              From Smart Contract Auditing
            </Typography>
            <Typography
              className={isMob ? 'mobTitle19KR' : 'pcTitle36KR'}
              component="div"
              fontWeight={600}
              sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '8px', sm: '12px' } }}
            >
              국내 최초 <Box sx={{ fontWeight: 300, display: 'inline' }}>보안 감사</Box>
            </Typography>
            <Typography className={isMob ? 'mobBody12KR' : 'pcPoint16KR'} color={gray}>
              * 한국어 보고서 기준
            </Typography>
            {/* 이미지 */}
            <CardMedia
              image={`/image/pageImage/home/security.png`}
              sx={{
                width: { xs: '137px', sm: '302px' },
                height: { xs: '80px', sm: '176px' },
                mt: { xs: '16px', sm: '32px' },
                mb: { xs: '24px', sm: '40px' },
              }}
            />
            <Typography className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'} fontWeight={600}>
              누적 28만 건+ 보고서 발행
            </Typography>

            <Typography
              className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
              sx={{ fontWeight: { xs: 300, sm: 400 }, mt: { xs: '8px', sm: '16px' } }}
            >
              <ResponsiveText
                pcText={`2018년 4월 국내 첫 블록체인 보안 감사 보고서 발행을\n시작으로 글로벌 디지털 자산을 보호해왔습니다.`}
                tabletText={`2018년 4월 국내 첫 블록체인 보안 감사 보고서 발행을 시작으로 글로벌 디지털 자산을 보호해왔습니다.`}
                mobText={`2018년 4월 국내 첫 블록체인 보안 감사 리포트를\n발행하여 디지털 자산을 보호해왔습니다.`}
              />
            </Typography>
          </Box>
        </Grid>
        {/* 카드2 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{ backgroundColor: '#1C1C1C', borderRadius: '16px', p: { xs: '24px', sm: '48px' } }}
          >
            <Typography
              className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
              color="primary"
              fontWeight={600}
            >
              To Building DeFi
            </Typography>
            <Typography
              className={isMob ? 'mobTitle19KR' : 'pcTitle36KR'}
              component="div"
              fontWeight={600}
              sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '8px', sm: '12px' } }}
            >
              <Box sx={{ fontWeight: 300, display: 'inline' }}>클레이튼 DeFi 예치 규모</Box> 2위
            </Typography>
            <Typography className={isMob ? 'mobBody12KR' : 'pcPoint16KR'} color={gray}>
              *2023년 2월 기준
            </Typography>
            {/* 이미지 */}
            <CardMedia
              image={`/image/pageImage/home/defiAmount.png`}
              sx={{
                width: { xs: '137px', sm: '302px' },
                height: { xs: '80px', sm: '176px' },
                mt: { xs: '16px', sm: '32px' },
                mb: { xs: '24px', sm: '40px' },
              }}
            />
            <Typography className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'} fontWeight={600}>
              런칭 2주만에 6,000억 원+ 자산 예치
            </Typography>

            <Typography
              className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
              sx={{ fontWeight: { xs: 300, sm: 400 }, mt: { xs: '8px', sm: '16px' } }}
            >
              <ResponsiveText
                pcText={`위믹스와 협업하여 클레이튼 생태계의 DeFi 서비스\nKLEVA를 성공적으로 런칭하였습니다.`}
                tabletText={`위믹스와 협업하여 클레이튼 생태계의 DeFi 서비스 KLEVA를 성공적으로 런칭하였습니다.`}
                mobText={`위믹스와 협업하여 클레이튼 생태계의 DeFi\n서비스 KLEVA를 성공적으로 런칭하였습니다.`}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </BodyContainer>
  );
}
