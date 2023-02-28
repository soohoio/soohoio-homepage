import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

// Kleva 섹션
export function RecordSectionKleva() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: '#131313', py: { xs: '48px', sm: '128px' } }}
    >
      <ObserverAnimation>
        <>
          <Typography
            align="center"
            className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'}
            color="#1A56FF"
            fontWeight={600}
          >
            클레이튼 DeFi 서비스 전체 2위
          </Typography>

          <Typography
            align="center"
            className={isMob ? 'mobBody10KR' : 'pcPoint20KR'}
            fontWeight={500}
            color="#5F5F5F"
            sx={{ mt: { xs: '10px', sm: '24px' }, mb: { xs: '16px', sm: '24px' } }}
          >
            23년 2월 기준
          </Typography>

          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color="#FFFFFF"
          >
            <Box sx={{ display: 'inline' }}>{`런칭 34분 만에 `}</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{`1,190억 원`}</Box>
            <Box sx={{ display: 'inline' }}>{`, 2주 만에`}</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{`6,000억 원`}</Box>
            <Box>규모의 자산 예치에 성공했습니다.</Box>
          </Typography>

          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody12KR' : 'pcBody14KR'}
            fontWeight={300}
            color="#5F5F5F"
          >
            <Box
              sx={{
                display: 'inline-flex',
                px: '18px',
                py: '2px',
                border: '1px solid #5F5F5F',
                borderRadius: '4px',
                mt: { xs: '48px', sm: '72px' },
                mb: { xs: '8px', sm: '24px' },
              }}
            >
              With
            </Box>
          </Typography>
          <CardMedia
            image={`/image/pageImage/home/company/wemix.png`}
            sx={{
              width: { xs: '88px', sm: '125px' },
              height: { xs: '24px', sm: '34px' },
              mx: 'auto',
            }}
          />
          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color="#FFFFFF"
          >
            <Box sx={{ mt: { xs: '20px', sm: '24px' } }}>
              {isMob
                ? `위믹스와 협업하여 탄생한 탈중앙화 금융 서비스로,\n다양한 성향의 이용자들에게 클레이튼 내 여러 DeFi 투자\n기회를 제공하여 클레이튼 생태계 전체의\n성장을 이끌고자 합니다.`
                : `위믹스와 협업하여 탄생한 탈중앙화 금융 서비스로,\n다양한 성향의 이용자들에게 클레이튼 내 여러 DeFi 투자 기회를\n제공하여 클레이튼 생태계 전체의 성장을 이끌고자 합니다.`}
            </Box>
          </Typography>
        </>
      </ObserverAnimation>
    </Container>
  );
}

// StayKing 섹션
export function RecordSectionStayKing() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: '#131313', py: { xs: '48px', sm: '128px' } }}
    >
      <ObserverAnimation>
        <>
          <Typography
            align="center"
            className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'}
            color="#E94F30"
            fontWeight={600}
          >
            Evmos Hackathon Grand Prize Winner
          </Typography>

          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color="#FFFFFF"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Box sx={{ mt: { xs: '18px', sm: '32px' } }}>
              Evmos 체인의 활성화를 위해 탄생한 탈중앙 금융 서비스로,
            </Box>
            <Box sx={{ display: 'inline' }}>22년 10월 EVMOS 해커톤에서 전 부문</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{` 1위를 수상`}</Box>
            <Box sx={{ display: 'inline' }}>하여</Box>
            <Box />
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{`$80,000 상금을 획득`}</Box>
            <Box sx={{ display: 'inline' }}>했습니다.</Box>
          </Typography>

          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color="#FFFFFF"
            sx={{ display: { sm: 'none' } }}
          >
            <Box sx={{ mt: { xs: '18px', sm: '32px' } }}>
              Evmos 체인의 활성화를 위해 탄생한 탈중앙 금융
            </Box>
            <Box>서비스로, 22년 10월 EVMOS 해커톤에서 전 부문</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{`1위를 수상`}</Box>
            <Box sx={{ display: 'inline' }}>하여</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{`$80,000 상금을 획득`}</Box>
            <Box sx={{ display: 'inline' }}>했습니다.</Box>
          </Typography>

          <CardMedia
            image={`/image/pageImage/product/stayKingPrize.png`}
            sx={{
              width: { xs: '40px', sm: '68px' },
              height: { xs: '40px', sm: '68px' },
              mx: 'auto',
              mt: { xs: '32px', sm: '58px' },
              mb: { xs: '16px', sm: '24px' },
            }}
          />
          <Typography
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color="#FFFFFF"
          >
            {isMob
              ? `StayKing의 목표는 Evmos 체인을 넘어 Cosmos\n생태계의 다양한 체인에서 유저가 스테이킹 기회를 얻고,\n스테이킹 종료 후에도 빠르게 자산의 유동성을\n확보할 수 있도록 확장하는 것입니다.`
              : `StayKing의 목표는 Evmos 체인을 넘어 Cosmos 생태계의\n다양한 체인에서 유저가 스테이킹 기회를 얻고, 스테이킹 종료 후에도\n빠르게 자산의 유동성을 확보할 수 있도록 확장하는 것입니다.`}
          </Typography>
        </>
      </ObserverAnimation>
    </Container>
  );
}
