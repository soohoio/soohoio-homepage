import { BodyText1, PointText1, TitleText4 } from '@/component/style/TextStyle';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/BoxButton';
import { Container, Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Cafe() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <Container maxWidth="false" sx={{ backgroundColor: '#333333' }}>
      <BodyContainer backgroundColor="transparent" ptPc="88px" pbPc="88px">
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
          <Grid>
            <TitleText4 color="primary">누구나 블록체인을 쉽고 재밌게 시작할 수 있도록</TitleText4>
            <BodyText1 sx={{ mt: '32px', fontWeight: 300 }}>
              {`수호 카페는 다양한 블록체인 커뮤니티가 모이는 공간입니다.\n여러 NFT 커뮤니티, web3 빌더 혹은 예술 작가분들이\n수호 카페와 함께 새로운 프로젝트를 전개해나가고 있습니다.`}
            </BodyText1>
          </Grid>
          <RoundOutlinedButton text="카페 문의하기" />
        </Grid>
      </BodyContainer>
    </Container>
  );
}
