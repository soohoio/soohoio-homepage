import { gray_light } from '@/component/style/StyleTheme';
import { BodyText1, TitleText1 } from '@/component/style/TextStyle';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/BoxButton';
import { Box } from '@mui/material';
import Spline from '@splinetool/react-spline';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function FirstSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer ptPc="180px" pbPc="75px">
      <TitleText1 component="div" sx={{ fontWeight: 300 }}>
        <Box sx={{ display: 'inline', fontWeight: 600 }}>기관급 금융</Box>을 위한
      </TitleText1>
      <TitleText1 component="div" sx={{ fontWeight: 300 }}>
        투명하고 안전한 <Box sx={{ display: 'inline', fontWeight: 600 }}>DeFi 인프라</Box>
      </TitleText1>

      <BodyText1 color={gray_light} sx={{ fontWeight: 300, mt: { sm: '64px' } }}>
        {`금융 기회를 넓히고 싶은 모든 이들이\n장애물 없이 블록체인을 넘나들 수 있도록,\n수호는 믿을 수 있는 기업 파트너와 함께\n투명하고 안전한 인프라를 만듭니다.`}
      </BodyText1>

      <RoundOutlinedButton text="수호 Defi 문의하기" sx={{ mt: '60px' }} />

      <Spline scene="https://prod.spline.design/C2R0hAVjsqrBl7Ka/scene.splinecode" />
    </BodyContainer>
  );
}
