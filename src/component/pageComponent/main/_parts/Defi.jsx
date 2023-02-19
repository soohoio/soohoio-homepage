import { BodyText2, PointText1, TitleText3, TitleText4 } from '@/component/style/TextStyle';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/BoxButton';
import { Box } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Defi() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const defiList = [
    {
      title: 'KLEVA',
      contents: `클레이튼 생태계 내부의 다양한\n투자 기회와 레버리지 기능을\n제공합니다.`,
      buttonLabel: '자세히 보기',
      img: '/',
    },
    {
      title: 'StayKing',
      contents: `EVMOS와 같은 신생 체인의 높은\n스테이킹 이율을 레버리지하여\n투자 수익을 극대화합니다.`,
      buttonLabel: '자세히 보기',
      img: '/',
    },
    {
      title: 'Martian',
      contents: `블록체인과 실물경제를 연결하여\nNFT 홀더 및 투자자들에게 안정적인\n수익을 분배합니다.`,
      buttonLabel: 'Comming soon',
      img: '/',
    },
  ];

  return (
    <BodyContainer ptPc="152px" pbPc="184px">
      <TitleText4 color="primary" align="center" sx={{ mb: '56px' }}>
        수호 자체 운영 DeFi 프로덕트
      </TitleText4>

      {defiList.map(function (each) {
        return (
          <Box
            key={each.title}
            sx={{
              pl: '48px',
              py: '48px',
              width: '608px',
              heigth: '252px',
              backgroundColor: '#060606',
              borderRadius: '16px',
            }}
          >
            <TitleText3>{each.title}</TitleText3>
            <BodyText2 sx={{ fontWeight: 400, mt: '16px', mb: '42px' }}>{each.contents}</BodyText2>
            <RoundOutlinedButton text={each.buttonLabel} color="#FFFFFF" />
          </Box>
        );
      })}
    </BodyContainer>
  );
}
