import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { gray } from '@/component/style/StyleTheme';
import { BodyText2, PointText2, TitleText3, TitleText5 } from '@/component/style/TextStyle';
import { BodyContainer } from '@/component/ui/BodyContainer';
import ResponsiveText from '@/component/ui/ResponsiveText';
import { Box, Grid } from '@mui/material';

export default function CardSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer ptPc="81px" pbPc="77px">
      <Grid container columnSpacing="16px">
        <Grid item xs={12} sm={6}>
          <Box sx={{ backgroundColor: '#1C1C1C', borderRadius: '16px', p: '48px' }}>
            <TitleText5 color="primary">From Smart Contract Auditing</TitleText5>
            <TitleText3 component="div" sx={{ mt: '16px', mb: '12px' }}>
              국내 최초 <Box sx={{ fontWeight: 300, display: 'inline' }}>보안 감사</Box>
            </TitleText3>
            <PointText2 color={gray}>* 한국어 보고서 기준</PointText2>
            <Box sx={{ height: '178px', backgroundColor: '#DDDDDD', mt: '32px', mb: '40px' }} />
            <TitleText5>누적 28만 건+ 보고서 발행</TitleText5>

            <BodyText2 sx={{ fontWeight: 400, mt: '16px' }}>
              <ResponsiveText
                pcText={`2018년 4월 국내 첫 블록체인 보안 감사 보고서 발행을\n시작으로 글로벌 디지털 자산을 보호해왔습니다.`}
                tabletText={`2018년 4월 국내 첫 블록체인 보안 감사 보고서 발행을 시작으로 글로벌 디지털 자산을 보호해왔습니다.`}
                mobText={`2018년 4월 국내 첫 블록체인 보안 감사 보고서 발행을\n시작으로 글로벌 디지털 자산을 보호해왔습니다.`}
              />
            </BodyText2>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ backgroundColor: '#1C1C1C', borderRadius: '16px', p: '48px' }}>
            <TitleText5 color="primary">To Building DeFi</TitleText5>
            <TitleText3 component="div" sx={{ mt: '16px', mb: '12px' }}>
              <Box sx={{ fontWeight: 300, display: 'inline' }}>클레이튼 DeFi 예치 규모</Box>2위
            </TitleText3>
            <PointText2 color={gray}>*2023년 2월 기준</PointText2>
            <Box sx={{ height: '178px', backgroundColor: '#DDDDDD', mt: '32px', mb: '40px' }} />
            <TitleText5>런칭 2주만에 6,000억 원+ 자산 예치</TitleText5>

            <BodyText2 sx={{ fontWeight: 400, mt: '16px' }}>
              <ResponsiveText
                pcText={`위믹스와 협업하여 클레이튼 생태계의 DeFi 서비스\nKLEVA를 성공적으로 런칭하였습니다.`}
                tabletText={`위믹스와 협업하여 클레이튼 생태계의 DeFi 서비스 KLEVA를 성공적으로 런칭하였습니다.`}
                mobText={`위믹스와 협업하여 클레이튼 생태계의 DeFi\n서비스 KLEVA를 성공적으로 런칭하였습니다.`}
              />
            </BodyText2>
          </Box>
        </Grid>
      </Grid>
    </BodyContainer>
  );
}
