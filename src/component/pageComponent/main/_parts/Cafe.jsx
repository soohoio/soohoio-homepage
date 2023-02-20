import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/BoxButton';
import { Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Cafe() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundImage: 'url(/image/PageImage/home/cafeBackground.png)',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
      }}
    >
      <BodyContainer
        backgroundColor="transparent"
        ptPc="88px"
        pbPc="88px"
        ptMob="42px"
        pbMob="42px"
      >
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
          <Grid sx={{ mb: { xs: '42px', sm: '0px' } }}>
            <Typography
              className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
              color="primary"
              fontWeight={600}
            >
              {isMob && `누구나 블록체인을 쉽고 재밌게\n시작할 수 있도록`}
              {!isMob && `누구나 블록체인을 쉽고 재밌게 시작할 수 있도록`}
            </Typography>
            <Typography
              className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
              sx={{ mt: { xs: '18px', sm: '32px' }, fontWeight: 300 }}
            >
              {isMob &&
                `수호 카페는 다양한 블록체인 커뮤니티가 모이는\n공간입니다. 여러 NFT 커뮤니티, web3 빌더 혹은\n예술 작가분들이 수호 카페와 함께 새로운 프로젝트를\n전개해나가고 있습니다.`}
              {!isMob &&
                `수호 카페는 다양한 블록체인 커뮤니티가 모이는 공간입니다.\n여러 NFT 커뮤니티, web3 빌더 혹은 예술 작가분들이\n수호 카페와 함께 새로운 프로젝트를 전개해나가고 있습니다.`}
            </Typography>
          </Grid>
          <RoundOutlinedButton text="카페 대관 문의하기" sx={{ width: { xs: 1, sm: 'auto' } }} />
        </Grid>
      </BodyContainer>
    </Container>
  );
}
