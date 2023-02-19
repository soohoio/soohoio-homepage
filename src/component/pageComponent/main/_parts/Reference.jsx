import { gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function Reference() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const clientList = [
    { label: 'wemix', width: 134, height: 37 },
    { label: 'krust', width: 89, height: 37 },
    { label: 'luniverse', width: 170, height: 42 },
    { label: 'ozys', width: 96, height: 34 },
    { label: 'superblock', width: 194, height: 41 },
    { label: 'planetarium', width: 204, height: 39 },
    { label: 'chainPartners', width: 100, height: 44 },
    { label: 'samsungSDS', width: 157, height: 18 },
    { label: 'lgCNS', width: 110, height: 25 },
    { label: 'sk', width: 115, height: 42 },
    { label: 'fss', width: 142, height: 42 },
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
    <BodyContainer ptPc="75px" pbPc="152px" ptMob="56px">
      <Typography
        className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
        component="div"
        color="primary"
        align="center"
        fontWeight={600}
      >
        <Box sx={{ fontWeight: 300, display: 'inline' }}>수호의</Box> 기술력,
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} />
        Fortune 500 기업<Box sx={{ fontWeight: 300, display: 'inline' }}>과</Box>{' '}
        <Box sx={{ display: { sm: 'none' } }} />
        글로벌 Web3.0 기업
        <Box sx={{ fontWeight: 300, display: 'inline' }}>이 증명합니다.</Box>
      </Typography>

      {/* 클라이언트 */}
      <Typography
        className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
        color={gray}
        fontWeight={500}
        align="center"
        sx={{ mt: { xs: '24px', sm: '56px' }, mb: { xs: '20px', sm: '32px' } }}
      >
        Clients
      </Typography>
      <Stack
        direction="row"
        columnGap={{ xs: '34px', sm: '68px' }}
        rowGap={{ xs: '18px', sm: '32px' }}
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
              alt={`client_${each.label} logo`}
              image={`/image/pageImage/home/company/${each.label}.png`}
              sx={{
                width: { xs: each.width * 0.5, sm: each.width },
                height: { xs: each.height * 0.5, sm: each.height },
              }}
            />
          );
        })}
      </Stack>

      {/* 파트너스 */}
      <Typography
        className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
        color={gray}
        fontWeight={500}
        align="center"
        sx={{ mt: '56px', mb: '32px' }}
      >
        Partners
      </Typography>
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
                image={`/image/pageImage/home/company/${each.label}.png`}
                sx={{ width: each.width, height: each.height }}
              />
            );
          })}
        </Stack>
      </Stack>

      {/* 누적 투자액 */}
      <Typography
        className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
        component="div"
        fontWeight={600}
        color="primary"
        align="center"
        sx={{ mt: '130px', mb: '56px' }}
      >
        15명 규모 팀<Box sx={{ fontWeight: 300, display: 'inline' }}>으로 달성한 누적 투자액</Box>
      </Typography>

      <Typography
        className={isMob ? 'mobTitle19KR' : 'pcTitle48KR'}
        align="center"
        fontWeight={600}
      >
        100억원 +
      </Typography>

      <Typography
        className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
        component="div"
        color="primary"
        fontWeight={600}
        align="center"
        sx={{ mt: '152px', mb: '56px' }}
      >
        <Box sx={{ fontWeight: 300 }}>Web3.0 대표 주자 컨센시스로부터 </Box>
        국내 유일 시드 투자 유치
      </Typography>
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
              image={`/image/pageImage/home/company/${each.label}.png`}
              sx={{ width: each.width, height: each.height }}
            />
          );
        })}
      </Stack>
    </BodyContainer>
  );
}
