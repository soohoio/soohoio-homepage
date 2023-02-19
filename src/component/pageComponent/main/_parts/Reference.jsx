import { gray } from '@/component/style/StyleTheme';
import { PointText1, TitleText2, TitleText4 } from '@/component/style/TextStyle';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Stack } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Reference() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const clientList = [
    { label: 'wemix', width: '134px', height: '37px' },
    { label: 'krust', width: '89px', height: '37px' },
    { label: 'luniverse', width: '170px', height: '42px' },
    { label: 'ozys', width: '96px', height: '34px' },
    { label: 'superblock', width: '194px', height: '41px' },
    { label: 'planetarium', width: '204px', height: '39px' },
    { label: 'chainPartners', width: '100px', height: '44px' },
    { label: 'samsungSDS', width: '157px', height: '18px' },
    { label: 'lgCNS', width: '110px', height: '25px' },
    { label: 'sk', width: '115px', height: '42px' },
    { label: 'fss', width: '142px', height: '42px' },
  ];

  const partnerList = [
    { label: 'wemix', width: '135px', height: '38px' },
    { label: 'luniverse', width: '172px', height: '42px' },
    { label: 'oasys', width: '122px', height: '30px' },
    { label: 'bora', width: '108px', height: '33px' },
    { label: 'klaytn', width: '135px', height: '40px' },
    { label: 'aurora', width: '153px', height: '34px' },
    { label: 'solana', width: '164px', height: '31px' },
    { label: 'near', width: '110px', height: '30px' },
    { label: 'cronos', width: '145px', height: '40px' },
    { label: 'kava', width: '73px', height: '22px' },
  ];

  const investList = [
    { label: 'consensys', width: '310px', height: '70px' },
    { label: 'wemix', width: '195px', height: '55px' },
    { label: 'techInvest', width: '294px', height: '52px' },
  ];

  return (
    <BodyContainer ptPc="75px" pbPc="152px">
      <TitleText4 component="div" color="primary" align="center">
        <Box sx={{ fontWeight: 300, display: 'inline' }}>수호의</Box> 기술력,
      </TitleText4>
      <TitleText4 component="div" color="primary" align="center">
        Fortune 500 기업<Box sx={{ fontWeight: 300, display: 'inline' }}>과</Box> 글로벌 Web3.0 기업
        <Box sx={{ fontWeight: 300, display: 'inline' }}>이 증명합니다.</Box>
      </TitleText4>

      {/* 클라이언트 */}
      <PointText1 color={gray} align="center" sx={{ mt: '56px', mb: '32px' }}>
        Clients
      </PointText1>
      <Stack
        direction="row"
        columnGap="68px"
        rowGap="32px"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {clientList.map(function (each) {
          return (
            <CardMedia
              key={`client_${each.label}`}
              image={`/image/company/${each.label}.png`}
              sx={{ width: each.width, height: each.height }}
            />
          );
        })}
      </Stack>

      {/* 파트너스 */}
      <PointText1 color={gray} align="center" sx={{ mt: '56px', mb: '32px' }}>
        Partners
      </PointText1>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Stack
          direction="row"
          columnGap="68px"
          rowGap="32px"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1000px',
          }}
        >
          {partnerList.map(function (each, index) {
            return (
              <CardMedia
                key={`partner_${each.label}`}
                image={`/image/company/${each.label}.png`}
                sx={{ width: each.width, height: each.height }}
              />
            );
          })}
        </Stack>
      </Stack>

      {/* 누적 투자액 */}
      <TitleText4 component="div" color="primary" align="center" sx={{ mt: '130px', mb: '56px' }}>
        15명 규모 팀<Box sx={{ fontWeight: 300, display: 'inline' }}>으로 달성한 누적 투자액</Box>
      </TitleText4>

      <TitleText2 align="center">100억원 +</TitleText2>

      <TitleText4 component="div" color="primary" align="center" sx={{ mt: '152px', mb: '56px' }}>
        <Box sx={{ fontWeight: 300 }}>Web3.0 대표 주자 컨센시스로부터 </Box>
        국내 유일 시드 투자 유치
      </TitleText4>
      <Stack
        direction="row"
        columnGap="68px"
        rowGap="32px"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {investList.map(function (each) {
          return (
            <CardMedia
              key={`invest_${each.label}`}
              image={`/image/company/${each.label}.png`}
              sx={{ width: each.width, height: each.height }}
            />
          );
        })}
      </Stack>
    </BodyContainer>
  );
}
