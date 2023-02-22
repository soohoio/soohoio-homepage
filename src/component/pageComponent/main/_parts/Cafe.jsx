import { BodyContainer } from '@/component/ui/BodyContainer';
import { MUIOutlinedButton, RoundOutlinedButton } from '@/component/ui/Button';
import { Container, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import Link from 'next/link';

export default function Cafe() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [scrollOffset, setScrollOffset] = useState(0);
  let calc;
  if (isMob) {
    calc = 0;
  } else {
    calc = isPc ? 140 : 300;
  }

  const handleScroll = event => {
    setScrollOffset(event.target.scrollTop);
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <Container
      maxWidth="false"
      onScroll={handleScroll}
      sx={{
        backgroundImage: `url(/image/pageImage/home/cafeBackground${isMob ? 'Mob' : ''}.png)`,
        backgroundPositionX: 'center',
        backgroundSize: `calc(${calc}% + ${scrollOffset / 5}px)`,
        transition: 'background-size 0.05s ease-in-out',
      }}
    >
      <BodyContainer
        backgroundColor="transparent"
        ptPc="97px"
        pbPc="97px"
        ptMob="42px"
        pbMob="42px"
      >
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
          <Grid sx={{ mb: { xs: '42px', lg: '0px' } }}>
            <Typography
              className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
              color="primary"
              fontWeight={600}
            >
              {isMob && `블록체인 프로젝트의 연결과\n시너지를 위한 공간`}
              {!isMob && `블록체인 프로젝트의 연결과 시너지를 위한 공간`}
            </Typography>
            <Typography
              className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
              sx={{ mt: { xs: '18px', sm: '32px' }, fontWeight: 300 }}
            >
              {isMob &&
                `수호 카페는 한국의 첫 번째 Web3.0 카페이자, 블록체인 커뮤니티 허브입니다.\n다양한 Web3.0 기업, NFT 커뮤니티, 빌더 및 예술 작가분들이 수호 카페와 함께 새로운 프로젝트를 전개해나가고 있습니다.`}
              {!isMob &&
                `수호 카페는 한국의 첫 번째 Web3.0 카페이자, 블록체인 커뮤니티 허브입니다.\n다양한 Web3.0 기업, NFT 커뮤니티, 빌더 및 예술 작가분들이 수호 카페와 함께\n새로운 프로젝트를 전개해나가고 있습니다.`}
            </Typography>
          </Grid>
          <Link href="/contact">
            <MUIOutlinedButton text="카페 대관 문의하기" sx={{ width: { xs: 1, sm: 'auto' } }} />
          </Link>
        </Grid>
      </BodyContainer>
    </Container>
  );
}
