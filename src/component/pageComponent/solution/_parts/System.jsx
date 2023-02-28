import { black, primary } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { MUIOutlinedButton } from '@/component/ui/Button';

export default function System() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const openLink = () => {
    window.open('https://c2cc.xyz/');
  };

  return (
    <Container maxWidth="false" sx={{ backgroundColor: primary }}>
      <Container
        maxWidth="false"
        sx={{
          backgroundImage: `url(/image/pageImage/solution/system${isMob ? 'Mob' : ''}.png)`,
          backgroundPositionX: 'center',
          backgroundSize: { xs: 'contain', sm: 'cover' },
          backgroundRepeat: 'no-repeat',
          height: { xs: '290px', sm: 'auto' },
          py: { xs: '42px', sm: '152px' },
        }}
      >
        <BodyContainer backgroundColor="transparent">
          <ObserverAnimation>
            {/* 파트너스 */}
            <Typography
              className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
              color={black}
              fontWeight={600}
              align="center"
            >
              안전한 시스템과 기술
            </Typography>

            {/* PC, 태블릿 텍스트 */}
            <Typography
              align="center"
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
              fontWeight={300}
              color={black}
              sx={{
                mt: { xs: '20px', sm: '32px' },
                mb: { xs: '42px', sm: '64px' },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Box>{`수호는 Fortune 500 기업을 고객으로 보유한 검증된 회사로서\n법규 준수를 위한 시스템을 갖추고 있습니다.`}</Box>
              <Box sx={{ display: 'inline' }}>또한, 독자적인 </Box>
              <Box sx={{ display: 'inline', fontWeight: 600 }}>C2CC </Box>
              <Box sx={{ display: 'inline' }}>기술을 통해 체인과 체인을 안전하게 연결하여</Box>
              <Box>고객의 체인 생태계 확장을 지원합니다.</Box>
            </Typography>

            {/* Mob 텍스트 */}
            <Typography
              align="center"
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
              fontWeight={300}
              color={black}
              sx={{
                mt: { xs: '20px', sm: '32px' },
                mb: { xs: '42px', sm: '64px' },
                display: { sm: 'none' },
              }}
            >
              <Box>{`수호는 Fortune 500 기업을 고객으로 보유한 검증된\n회사로서 법규 준수를 위한 시스템을 갖추고 있습니다.`}</Box>
              <Box sx={{ display: 'inline' }}>또한, 독자적인 </Box>
              <Box sx={{ display: 'inline', fontWeight: 600 }}>C2CC </Box>
              <Box sx={{ display: 'inline' }}>기술을 통해 체인과 체인을 안전하게</Box>
              <Box>연결하여 고객의 체인 생태계 확장을 지원합니다.</Box>
            </Typography>

            <Grid container justifyContent="center">
              <Button
                onClick={openLink}
                variant="contained"
                color="black"
                sx={{
                  color: '#FFFFFF',
                  borderRadius: '120px',
                  px: '80px',
                  py: '17px',
                  fontSize: '20px',
                  display: { xs: 'none', sm: 'block' },
                  ':hover': {
                    color: primary,
                  },
                }}
              >
                C2CC 더 알아보기
              </Button>
              <MUIOutlinedButton
                text="C2CC 더 알아보기"
                onClick={openLink}
                color={black}
                sx={{ width: 1, display: { sm: 'none' } }}
              />
            </Grid>
          </ObserverAnimation>
        </BodyContainer>
      </Container>
    </Container>
  );
}
