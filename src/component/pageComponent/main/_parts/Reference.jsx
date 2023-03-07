import { gray } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';

export default function Reference() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { ref, inView } = useInView({
    threshold: 0.1, // trigger when nn% of the target is visible
  });
  const { i18n } = useTranslation();
  const { t } = useTranslation('main');
  const currentLanguage = i18n.language;

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
    { label: 'wemix', width: 135, height: 38 },
    { label: 'luniverse', width: 172, height: 42 },
    { label: 'oasys', width: 122, height: 30 },
    { label: 'bora', width: 108, height: 33 },
    { label: 'klaytn', width: 135, height: 40 },
    { label: 'aurora', width: 153, height: 34 },
    { label: 'solana', width: 164, height: 31 },
    { label: 'near', width: 110, height: 30 },
    { label: 'cronos', width: 145, height: 40 },
    { label: 'kava', width: 73, height: 22 },
  ];

  const investList = [
    { label: 'consensys', width: 310, height: 70 },
    { label: 'wemix', width: 195, height: 55 },
    { label: 'techInvest', width: 294, height: 52 },
  ];

  return (
    <BodyContainer ptPc="75px" pbPc="152px" ptMob="56px" pbMob="56px">
      <Typography
        className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
        component="div"
        color="primary"
        align="center"
        fontWeight={600}
      >
        <Box sx={{ fontWeight: 300, display: 'inline' }}>{t('reference.refTitle1')}</Box>
        {t('reference.refTitle2')}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} />
        {t('reference.refTitle3')}
        <Box sx={{ fontWeight: 300, display: 'inline' }}>{t('reference.refTitle4')}</Box>
        <Box sx={{ display: { sm: 'none' } }} />
        {t('reference.refTitle5')}
        <Box sx={{ fontWeight: 300, display: 'inline' }}>{t('reference.refTitle6')}</Box>
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
        {clientList.map(function (each, index) {
          return (
            <ObserverAnimation
              key={`client_${each.label}`}
              animationName="fadeInSlow"
              delay={index * 150}
            >
              <CardMedia
                alt={`client_${each.label} logo`}
                image={`/image/pageImage/home/company/${each.label}.png`}
                sx={{
                  width: { xs: each.width * 0.5, sm: each.width },
                  height: { xs: each.height * 0.5, sm: each.height },
                }}
              />
            </ObserverAnimation>
          );
        })}
      </Stack>

      {/* 파트너스 */}
      <Typography
        className={isMob ? 'mobBody12KR' : 'pcPoint20KR'}
        color={gray}
        fontWeight={500}
        align="center"
        sx={{ mt: { xs: '36px', sm: '56px' }, mb: { xs: '20px', sm: '32px' } }}
      >
        Partners
      </Typography>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Stack
          direction="row"
          columnGap={{ xs: '34px', sm: '68px' }}
          rowGap={{ xs: '18px', sm: '32px' }}
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
              <ObserverAnimation
                key={`partner_${each.label}`}
                animationName="fadeInSlow"
                delay={index * 150}
              >
                <CardMedia
                  image={`/image/pageImage/home/company/${each.label}.png`}
                  sx={{
                    width: { xs: each.width * 0.5, sm: each.width },
                    height: { xs: each.height * 0.5, sm: each.height },
                  }}
                />
              </ObserverAnimation>
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
        sx={{ mt: { xs: '56px', sm: '130px' }, mb: { xs: '24px', sm: '56px' } }}
      >
        {t('reference.investTitle1')}
        <Box sx={{ fontWeight: 300, display: 'inline' }}>{t('reference.investTitle2')}</Box>
      </Typography>

      <Typography
        ref={ref}
        className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
        align="center"
        fontWeight={600}
      >
        {currentLanguage === 'en' && '$ '}
        {inView && (
          <CountUp end={t('reference.moneyAmount')} start={35} duration={1} separator="," />
        )}
        {t('reference.moneyCurrency')}
      </Typography>

      <Typography
        className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
        component="div"
        color="primary"
        fontWeight={600}
        align="center"
        sx={{ mt: { xs: '56px', sm: '152px' }, mb: { xs: '35px', sm: '56px' } }}
      >
        <Box sx={{ fontWeight: 300 }}>{t('reference.seedTitle1')}</Box>
        {t('reference.seedTitle2')}
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
        {investList.map(function (each, index) {
          return (
            <ObserverAnimation
              key={`invest_${each.label}`}
              animationName="fadeInSlow"
              delay={index * 200}
            >
              <CardMedia
                image={`/image/pageImage/home/company/${each.label}.png`}
                sx={{
                  width: { xs: each.width * 0.5, sm: each.width },
                  height: { xs: each.height * 0.5, sm: each.height },
                }}
              />
            </ObserverAnimation>
          );
        })}
      </Stack>
    </BodyContainer>
  );
}
