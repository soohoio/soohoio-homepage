import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { black, borderRadiusMob, borderRadiusPc, gray } from '@/component/style/StyleTheme';
import { MUIOutlinedButton } from '@/component/ui/Button';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import Link from 'next/link';

export default function ThreeIntro() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const dataList = [
    {
      name: '01 Bridge',
      intro: '서로 다른 체인의 자산이나 정보를 전달하여\n편리한 거래 및 교환을 돕는 인프라',
      img: 'bridge',
      point1: 'Cross-chain',
      description1: isTablet
        ? '분리된 체인을 연결하여 생태계의 확장성을 높여줍니다.'
        : '분리된 체인을 연결하여\n생태계의 확장성을 높여줍니다.',
      point1Image: 'bridge1',
      point2: 'Optimization',
      description2: isTablet
        ? '각 생태계 특성에 맞는 최적의 브릿지 전략 및 구현 방식을 설정해드립니다.'
        : '각 생태계 특성에 맞는 최적의 브릿지\n전략 및 구현 방식을 설정해드립니다.',
      point2Image: 'bridge2',
      point3: 'Security-oriented',
      description3: isTablet
        ? '독자적인 정보 교환 기술 C2CC를 통해 브릿지의 보안성을 극대화했습니다.'
        : '독자적인 정보 교환 기술 C2CC를 통해\n브릿지의 보안성을 극대화했습니다.',
      point3Image: 'bridge3',
    },
    {
      name: '02 Dapp',
      intro: '블록체인 플랫폼을 기반으로 작동하는\n탈중앙화 어플리케이션',
      img: 'dapp',
      point1: 'Customizable',
      description1: isTablet
        ? '다양한 종류의 Dapp과 맞춤형 기능 구현이 가능합니다.'
        : '다양한 종류의 Dapp과\n맞춤형 기능 구현이 가능합니다.',
      point1Image: 'dapp1',
      point2: 'Operational Expert',
      description2: isTablet
        ? '안정적인 서비스 유지를 위해 개발 이후 지속적인 운영 및 모니터링을 진행합니다.'
        : '안정적인 서비스 유지를 위해 개발 이후\n지속적인 운영 및 모니터링을 진행합니다.',
      point2Image: 'dapp2',
      point3: 'Extensible',
      description3: isTablet
        ? '체인 내부 혹은 외부의 다른 Dapp과 연결하여 생태계를 확장할 수 있습니다.'
        : '체인 내부 혹은 외부의 다른 Dapp과\n연결하여 생태계를 확장할 수 있습니다.',
      point3Image: 'dapp3',
    },
    {
      name: '03 Audit',
      intro: isMob
        ? '스마트 컨트랙트 취약점\n보안 감사 서비스'
        : '스마트 컨트랙트 취약점 보안 감사 서비스',
      img: 'audit',
      point1: 'Professional',
      description1: isTablet
        ? '수호의 전문 보안 연구팀이 보안 사고를 일으킬 수 있는 취약점을 정밀하게 분석합니다.'
        : '수호의 전문 보안 연구팀이 보안 사고를\n일으킬 수 있는 취약점을 정밀하게 분석합니다.',
      point1Image: 'audit1',
      point2: 'Automated',
      description2: isTablet
        ? '세계 최고 수준의 자동화된 취약점 분석 시스템을 활용합니다.'
        : '세계 최고 수준의 자동화된\n취약점 분석 시스템을 활용합니다.',
      point2Image: 'audit2',
      point3: 'State-of-the-art',
      description3: isTablet
        ? '2만 4,000건 이상의 최신 취약점 데이터베이스를 보유하고 있습니다.'
        : '2만 4,000건 이상의 최신 취약점\n데이터베이스를 보유하고 있습니다.',
      point3Image: 'audit3',
    },
  ];
  const dataNum = [1, 2, 3];

  return (
    <BodyContainer ptPc="128px" ptMob="60px" pbPc="4px" pbMob="42px">
      {dataList.map(function (each) {
        return (
          <Box key={each.name} sx={{ mb: { xs: '60px', sm: '124px' } }}>
            <ObserverAnimation>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box sx={{ minWidth: { sm: '390px' } }}>
                  <Typography
                    className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
                    color="primary"
                    fontWeight={600}
                  >
                    {each.name}
                  </Typography>
                  <Typography
                    component="div"
                    className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                    color={gray}
                    fontWeight={300}
                  >
                    <Box
                      sx={{
                        mt: { xs: '12px', sm: '24px' },
                        mb: { xs: '56px', sm: '40px' },
                        height: { lg: '52px' },
                      }}
                    >
                      {each.intro}
                    </Box>
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    image={`/image/pageImage/solution/${each.img}.png`}
                    sx={{
                      width: { xs: '157px', sm: '287px' },
                      aspectRatio: { xs: '157/135', sm: '287/246' },
                      position: 'absolute',
                      right: 0,
                      bottom: { xs: -150, sm: -123 },
                    }}
                  />
                </Box>
              </Stack>
            </ObserverAnimation>

            {/* 포인트 3가지 부분 */}
            <Grid
              container
              columnSpacing={{ sm: '24px', lg: '0px' }}
              sx={{
                backgroundColor: black,
                borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                p: { xs: '16px', sm: '42px' },
              }}
            >
              {dataNum.map(function (num, index) {
                return (
                  <Grid
                    key={each.name + num}
                    item
                    xs={12}
                    sm={4}
                    sx={[num !== 3 && { mb: { xs: '32px', sm: '0px' } }]}
                  >
                    <ObserverAnimation delay={index * 200}>
                      <CardMedia
                        image={`/image/pageImage/solution/${each[`point${num}Image`]}.png`}
                        sx={{
                          width: { xs: '32px', sm: '42px' },
                          height: { xs: '32px', sm: '42px' },
                        }}
                      />
                      <Typography
                        component="div"
                        className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                        color={gray}
                        fontWeight={300}
                      >
                        <Box sx={{ mt: { xs: '16px', sm: '22px' }, mb: { xs: '8px', sm: '8px' } }}>
                          {each[`point${num}`]}
                        </Box>
                      </Typography>

                      <Typography
                        component="div"
                        className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                        color="#FFFFFF"
                        fontWeight={300}
                      >
                        <Box>{each[`description${num}`]}</Box>
                      </Typography>
                    </ObserverAnimation>
                  </Grid>
                );
              })}

              {each.name === '03 Audit' && (
                <ObserverAnimation delay={500} sx={{ width: 1 }}>
                  <Link href="/solution/audit">
                    <MUIOutlinedButton
                      text="Audit 더 알아보기"
                      color="#FFFFFF"
                      hoverColor="#FFFFFF"
                      sx={{
                        width: 1,
                        mt: { xs: '42px', sm: '44px' },
                        py: { xs: '10px', sm: '18px' },
                        mb: { xs: '26px', sm: '10px' },
                      }}
                    />
                  </Link>
                </ObserverAnimation>
              )}
            </Grid>
          </Box>
        );
      })}
    </BodyContainer>
  );
}
