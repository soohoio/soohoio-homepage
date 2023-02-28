import {
  black,
  borderRadiusMob,
  borderRadiusPc,
  gray,
  primary,
} from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { MUIOutlinedButton } from '@/component/ui/Button';

export default function Security() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const goToLink = () => {
    window.open('https://blockops.sooho.io/');
  };

  return (
    <BodyContainer ptPc="143px" pbPc="128px" ptMob="42px" pbMob="42px">
      <ObserverAnimation>
        <Typography
          className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
          color="primary"
          fontWeight={600}
          align="center"
        >
          {isPc ? '가장 빠르고 정확한 보안 솔루션' : 'SOOHO Audit'}
        </Typography>

        <Typography
          className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
          color="#FFFFFF"
          fontWeight={300}
          align="center"
          sx={{ mt: { xs: '22px', sm: '26px' }, mb: { xs: '64px', sm: '64px' } }}
        >
          {isMob
            ? `세계 최고 수준의 자동화된 취약점 검증 시스템과\n내부 전문 보안 연구팀이 수동으로 취약점을 식별해내는\n두 가지 방식으로 빠르고 정확한, 확장성 있는\n보안 감사를 진행합니다.`
            : `내부 전문 보안 연구팀이 수동으로 취약점을 식별해내는 방식과\n세계 최고 수준의 자동화된 취약점 검증 시스템을 활용하여\n빠르고 정확한 보안 감사를 진행합니다.`}
        </Typography>

        {/* 첫 번째 박스 */}
        <Box
          sx={{
            backgroundColor: black,
            p: { xs: '16px', sm: '48px' },
            maxWidth: { lg: '1043px' },
            boxSizing: 'border-box',
            mb: { xs: '16px', sm: '24px' },
            mx: 'auto',
            borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
            position: 'relative',
          }}
        >
          <Typography
            component="div"
            className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
            color="primary"
            fontWeight={600}
          >
            <Box sx={{ mb: { xs: '10px', sm: '24px' } }}>In-house Security Research Group</Box>
          </Typography>

          <Typography
            component="div"
            className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
            color="#FFFFFF"
            fontWeight={300}
            sx={{ maxWidth: { xs: '450px', sm: '837px' } }}
          >
            <Box>
              {isPc
                ? `Defcon, Nuit du Hack, 화이트햇, SamsungCTF 등\n국내외 해킹 대회에서 수상하고, 보안 분야 박사 학위의\n학문적 배경을 가지는 등 우수한 실력과 경험을 가진 \n전문 보안 연구팀이 정밀한 분석을 통해 보안 감사의\n정확도를 높이고 있습니다.`
                : 'Defcon, Nuit du Hack, 화이트햇, SamsungCTF 등 국내외 해킹 대회에서 수상하고, 보안 분야 박사 학위의 학문적 배경을 가지는 등 우수한 실력과 경험을 가진 전문 보안 연구팀이 정밀한 분석을 통해 보안 감사의 정확도를 높이고 있습니다.'}
            </Box>
          </Typography>
          <CardMedia
            image={`/image/pageImage/audit/inhouseSecurity.png`}
            sx={{
              width: 1,
              maxWidth: '411px',
              aspectRatio: '411/290',
              position: 'absolute',
              bottom: 14,
              right: 48,
              display: { xs: 'none', lg: 'block' },
            }}
          />
          <Grid
            container
            justifyContent="flex-end"
            sx={{ display: { lg: 'none' }, pr: '36px', mt: '24px' }}
          >
            <CardMedia
              image={`/image/pageImage/audit/inhouseSecurity.png`}
              sx={{
                width: 1,
                maxWidth: { xs: '207px', sm: '394px' },
                aspectRatio: '207/146',
              }}
            />
          </Grid>
        </Box>

        {/* 두 번째 박스 */}
        <Box
          sx={{
            backgroundColor: black,
            p: { xs: '16px', sm: '48px' },
            maxWidth: { lg: '1043px' },
            boxSizing: 'border-box',
            mx: 'auto',
            borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
            position: 'relative',
          }}
        >
          <Typography
            component="div"
            className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
            color="primary"
            fontWeight={600}
          >
            <Box sx={{ mb: { xs: '10px', sm: '24px' } }}>Our Core Technology</Box>
          </Typography>

          <Typography
            component="div"
            className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
            color="#FFFFFF"
            fontWeight={300}
            sx={{ maxWidth: { xs: '450px', sm: '837px' } }}
          >
            <Box sx={{ display: 'inline' }}>
              {isPc
                ? `보안 감사를 통해 찾아낸 취약점은 내부 자체 데이터\n베이스 구축을 통해 자동 분석기 개발에 활용됩니다.\n수호의 보안 기술력을 대표하는 블록체인 앱\n자동 분석기 `
                : '보안 감사를 통해 찾아낸 취약점은 내부 자체 데이터 베이스 구축을 통해 자동 분석기 개발에 활용됩니다. 수호의 보안 기술력을 대표하는 블록체인 앱 자동 분석기 '}
            </Box>
            <Box sx={{ display: 'inline', color: primary }}>BlockOps</Box>
            <Box sx={{ display: 'inline' }}>
              {isPc
                ? `는 자동으로 취약점을\n찾아내는 솔루션으로, Solidity 분석기 29개,\nEVM 디컴파일러 패턴 150개, Signature\n559,886개의 기능을 한 번에 지원합니다.`
                : '는 자동으로 취약점을 찾아내는 솔루션으로, Solidity 분석기 29개, EVM 디컴파일러 패턴 150개, Signature 559,886개의 기능을 한 번에 지원합니다.'}
            </Box>
          </Typography>

          <CardMedia
            image={`/image/pageImage/audit/coreTechnology.png`}
            sx={{
              width: 1,
              maxWidth: '524px',
              aspectRatio: '524/346',
              position: 'absolute',
              bottom: 0,
              right: 0,
              display: { xs: 'none', lg: 'block' },
            }}
          />
          <Grid container justifyContent="flex-end" sx={{ display: { lg: 'none' }, mt: '30px' }}>
            <CardMedia
              image={`/image/pageImage/audit/coreTechnologyMob.png`}
              sx={{
                width: 1,
                maxWidth: { xs: '280px', sm: '550px' },
                aspectRatio: '280/182',
              }}
            />
          </Grid>

          <MUIOutlinedButton
            text="블록옵스 더 알아보기"
            onClick={goToLink}
            color="#FFFFFF"
            hoverColor="#FFFFFF"
            sx={{
              mt: { xs: '24px', lg: '66px' },
              width: { xs: 1, lg: 'auto' },
              px: { lg: '56px' },
            }}
          />
        </Box>
      </ObserverAnimation>
    </BodyContainer>
  );
}
