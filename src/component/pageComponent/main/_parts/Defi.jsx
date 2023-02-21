import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundOutlinedButton } from '@/component/ui/Button';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { gray } from '@/component/style/StyleTheme';
import { paddingHorMob, paddingHorPC } from '../../../style/StyleTheme';

export default function Defi() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  // 스크롤 캐러셀
  const ref = useRef();
  const translateMultiple = isMob ? 3 : 3;
  const correctionValue = isMob ? 450 : 400;
  const endPosition = isMob ? 205 : 200;

  const defiList = [
    {
      title: 'KLEVA',
      contents: isMob
        ? `클레이튼 생태계 내부의\n다양한 투자 기회와 레버리지\n기능을 제공합니다.`
        : `클레이튼 생태계 내부의 다양한\n투자 기회와 레버리지 기능을\n제공합니다.`,
      buttonLabel: '자세히 보기',
      img: '/',
    },
    {
      title: 'StayKing',
      contents: isMob
        ? `EVMOS와 같은 신생 체인의 높은\n스테이킹 이율을 레버리지하여\n투자 수익을 극대화합니다.`
        : `EVMOS와 같은 신생 체인의 높은\n스테이킹 이율을 레버리지하여\n투자 수익을 극대화합니다.`,
      buttonLabel: '자세히 보기',
      img: '/',
    },
    {
      title: 'Martian',
      contents: isMob
        ? `블록체인과 실물경제를 연결하여\nNFT 홀더 및 투자자들에게\n안정적인 수익을 분배합니다.`
        : `블록체인과 실물경제를 연결하여\nNFT 홀더 및 투자자들에게 안정적인\n수익을 분배합니다.`,
      buttonLabel: 'Comming soon',
      img: '/',
    },
  ];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = e => {
    const boxPosition = ref.current.offsetTop;
    const scrollDistance = window.scrollY - boxPosition + correctionValue;
    console.log(scrollDistance);
    if (scrollDistance < 0) {
      setPosition(0);
    } else if (scrollDistance > 0 && scrollDistance < endPosition) {
      setPosition(scrollDistance);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        pt: { xs: '42px', sm: '152px' },
        pb: { xs: '42px', sm: '184px' },
        backgroundColor: '#131313',
      }}
    >
      <Container
        sx={{ backgroundColor: '#131313', pl: { xs: paddingHorMob }, px: { sm: paddingHorPC } }}
      >
        <Typography
          className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
          color="primary"
          align="center"
          fontWeight={600}
          sx={{ mb: { xs: '16px', sm: '56px' } }}
        >
          수호 자체 운영 DeFi 프로덕트
        </Typography>

        <Stack
          ref={ref}
          direction="row"
          spacing="16px"
          sx={{ overflow: 'hidden', position: 'relative' }}
        >
          {defiList.map(function (each) {
            return (
              <Box
                key={each.title}
                sx={{
                  pl: { xs: '16px', sm: '48px' },
                  py: { xs: '16px', sm: '48px' },
                  minWidth: { xs: '284px', sm: '608px' },
                  width: { xs: '284px', sm: '608px' },
                  heigth: '252px',
                  backgroundImage: `url(/image/pageImage/home/${each.title.toLowerCase()}Background.png)`,
                  backgroundSize: { xs: '350px 168px', sm: 'cover' },
                  borderRadius: '16px',
                  transform: `translateX(${-position * translateMultiple}px)`,
                }}
              >
                <Typography className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'} fontWeight={600}>
                  {each.title}
                </Typography>
                {/* 여기는 -0.023em... */}
                <Typography
                  sx={{
                    fontWeight: { xs: 300, sm: 400 },
                    mt: { xs: '8px', sm: '16px' },
                    mb: { xs: '16px', sm: '42px' },
                    fontSize: { xs: '14px', sm: '20px' },
                    lineHeight: { xs: '20px', sm: '28px' },
                    letterSpacing: { xs: '-0.023em !important', sm: '-0.02em;' },
                  }}
                >
                  {each.contents}
                </Typography>
                <RoundOutlinedButton
                  text={each.buttonLabel}
                  px={{ xs: '24px', sm: '56px' }}
                  py={{ xs: '7px', sm: '20px' }}
                  color={each.title === 'Martian' ? gray : '#FFFFFF'}
                />
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Container>
  );
}
