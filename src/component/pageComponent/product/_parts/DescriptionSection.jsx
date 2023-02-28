import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { black_dark, borderRadiusMob, borderRadiusPc } from '@/component/style/StyleTheme';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function DescriptionSection({ currentProduct }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const productData = {
    KLEVA: {
      title: `LEVERAGED\nYIELD FARMING`,
      summary: isTablet
        ? `보유한 자산과 대여한 자산을 DEX(탈중앙화 거래소) 풀에 함께 투자하여 유동성을 공급한 대가로 받는 보상을 극대화할 수 있습니다.`
        : `보유한 자산과 대여한 자산을 DEX(탈중앙화 거래소) 풀에\n함께 투자하여 유동성을 공급한 대가로 받는 보상을\n극대화할 수 있습니다.`,
      point1: 'Auto-compound',
      description1: `수동으로 자산을 출금하고 재투자할 필요 없이, 자동 복리 투자 기능을 통해 간편한 재투자가 가능합니다.`,
      point2: 'Multiple Tactics',
      description2: `여러 종류의 DEX와 자산을 활용하여 투자 성향에 따른 다양한 전략을 시행해볼 수 있습니다.`,
      img: isMob ? 'klevaDescMob' : 'klevaDesc',
      aspectRatio: isMob ? '314/210' : '664/387',
    },
    StayKing: {
      title: `LEVERAGED\nSTAKING`,
      summary: isTablet
        ? `보유한 자산과 대여한 자산을 스테이킹 풀에 함께 투자하여 블록체인 검증에 참여한 대가로 받는 보상을 극대화할 수 있습니다.`
        : `보유한 자산과 대여한 자산을 스테이킹 풀에 함께 투자하여\n블록체인 검증에 참여한 대가로 받는 보상을\n극대화할 수 있습니다.`,
      point1: 'Auto-compound',
      description1: `수동으로 자산을 출금하고 재투자할 필요 없이, 자동 복리 투자 기능을 통해 간편한 재투자가 가능합니다.`,
      point2: 'Cross-chain',
      description2: `추후에는 다양한 체인을 넘나드는 크로스체인 스테이킹을 지원할 예정입니다.`,
      img: isMob ? 'stayKingDescMob' : 'stayKingDesc',
      aspectRatio: isMob ? '312/174' : '664/303',
    },
  };

  return (
    <BodyContainer ptPc="112px" pbPc="0px" ptMob="48px" pbMob="0px" backgroundColor="#000000">
      {/* 타이틀 및 서머리 */}
      <ObserverAnimation>
        <>
          <Grid container columnSpacing={{ sm: '16px', lg: '0px' }}>
            <Grid item xs={12} sm={6}>
              <Typography
                component="div"
                className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
                fontWeight={600}
                color={currentProduct === 'KLEVA' ? '#1A56FF' : '#E94F30'}
              >
                <Box sx={{ lineHeight: { xs: '24px', sm: '54px' } }}>
                  {productData[currentProduct].title}
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                component="div"
                className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                fontWeight={300}
                color="#5F5F5F"
              >
                <Box sx={{ mt: { xs: '16px', sm: '0px' }, mb: { xs: '32px', sm: '0px' } }}>
                  {productData[currentProduct].summary}
                </Box>
              </Typography>
            </Grid>
          </Grid>

          {/* 포인트 및 사진 */}
          <Grid container columnSpacing={{ sm: '16px', lg: '0px' }}>
            {/* 포인트1 */}
            <Grid item xs={12} sm={6} lg={2.8} sx={{ pt: { sm: '60px', lg: '87px' } }}>
              <Box
                sx={{
                  backgroundColor: black_dark,
                  p: { xs: '24px', sm: '24px' },
                  borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                  maxWidth: { lg: '292px' },
                  boxSizing: 'border-box',
                  height: { sm: 1, lg: 'auto' },
                }}
              >
                <Typography
                  component="div"
                  className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                  fontWeight={600}
                  color="#FFFFFF"
                >
                  <Box sx={{ mb: { xs: '10px', sm: '16px' } }}>
                    {productData[currentProduct].point1}
                  </Box>
                </Typography>
                <Typography
                  component="div"
                  className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                  fontWeight={300}
                  color="#EEEEEE"
                >
                  <Box>{productData[currentProduct].description1}</Box>
                </Typography>
              </Box>
            </Grid>
            {/* 포인트2 */}
            <Grid
              item
              xs={12}
              sm={6}
              lg={2.8}
              sx={{
                pt: { sm: '60px', lg: '87px' },
                mt: { xs: '16px', sm: '0px' },
                mb: { xs: '24px', sm: '0px' },
              }}
            >
              <Box
                sx={{
                  backgroundColor: black_dark,
                  p: { xs: '24px', sm: '24px' },
                  borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                  maxWidth: { lg: '292px' },
                  boxSizing: 'border-box',
                  height: { sm: 1, lg: 'auto' },
                }}
              >
                <Typography
                  component="div"
                  className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                  fontWeight={600}
                  color="#FFFFFF"
                >
                  <Box sx={{ mb: { xs: '10px', sm: '16px' } }}>
                    {productData[currentProduct].point2}
                  </Box>
                </Typography>
                <Typography
                  component="div"
                  className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                  fontWeight={300}
                  color="#EEEEEE"
                >
                  <Box>{productData[currentProduct].description2}</Box>
                </Typography>
              </Box>
            </Grid>
            {/* 이미지 */}
            <Grid item xs={12} lg={6.4}>
              <Box sx={{ pl: { lg: '38px' } }}>
                <CardMedia
                  component="img"
                  image={`/image/pageImage/product/${productData[currentProduct].img}.png`}
                  sx={[
                    currentProduct === 'StayKing'
                      ? { mt: { sm: '56px', lg: '88px' } }
                      : { mt: { sm: '56px', lg: '0px' } },
                    { aspectRatio: productData[currentProduct].aspectRatio },
                  ]}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      </ObserverAnimation>
    </BodyContainer>
  );
}
