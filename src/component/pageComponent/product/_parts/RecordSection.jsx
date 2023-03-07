import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { gray_light, paddingHorMob, paddingHorPC } from '@/component/style/StyleTheme';
import { useTranslation } from 'next-i18next';

// Kleva 섹션
export function RecordSectionKleva() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('product');

  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundColor: '#131313',
        py: { xs: '48px', sm: '128px' },
        px: { xs: paddingHorMob, sm: paddingHorPC },
      }}
    >
      <ObserverAnimation>
        <>
          <Typography
            align="center"
            className={isMob ? 'mobTitle16KR' : 'pcTitle36KR'}
            color="#1A56FF"
            fontWeight={600}
          >
            {t('recordSection.klevaTitle')}
          </Typography>

          <Typography
            align="center"
            className={isMob ? 'mobBody12KR' : 'pcPoint16KR'}
            fontWeight={300}
            color="#5F5F5F"
            sx={{ mt: { xs: '10px', sm: '24px' }, mb: { xs: '16px', sm: '24px' } }}
          >
            {t('recordSection.klevaStandard')}
          </Typography>

          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color={gray_light}
          >
            <Box sx={{ display: 'inline' }}>{t('recordSection.klevaRecord1')}</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{t('recordSection.klevaRecord2')}</Box>
            <Box sx={{ display: 'inline' }}>{t('recordSection.klevaRecord3')}</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>{t('recordSection.klevaRecord4')}</Box>
            <Box>{t('recordSection.klevaRecord5')}</Box>
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
                mb: { xs: '14px', sm: '24px' },
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
            color={gray_light}
          >
            <Box
              sx={{
                mt: { xs: '20px', sm: '24px' },
                maxWidth: { xs: '320px', sm: '700px' },
                mx: 'auto',
              }}
            >
              {isMob ? t('recordSection.klevaDescriptionMob') : t('recordSection.klevaDescription')}
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
  const { t } = useTranslation('product');

  return (
    <Container
      sx={{
        backgroundColor: '#131313',
        py: { xs: '48px', sm: '128px' },
        px: { xs: paddingHorMob, sm: paddingHorPC },
      }}
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

          {/* 태블릿, PC 텍스트 */}
          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color={gray_light}
            sx={{ display: { xs: 'none', sm: 'block' }, maxWidth: '700px', mx: 'auto' }}
          >
            <Box sx={{ mt: { xs: '18px', sm: '32px' } }}>{t('recordSection.stayKingRecord1')}</Box>
            <Box sx={{ display: 'inline' }}>{t('recordSection.stayKingRecord2')}</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>
              {t('recordSection.stayKingRecord3')}
            </Box>
            <Box sx={{ display: 'inline' }}>{t('recordSection.stayKingRecord4')}</Box>
            <Box />
            <Box sx={{ display: 'inline', fontWeight: 600 }}>
              {t('recordSection.stayKingRecord5')}
            </Box>
            <Box sx={{ display: 'inline' }}>{t('recordSection.stayKingRecord6')}</Box>
          </Typography>

          {/* 모바일 텍스트 */}
          <Typography
            component="div"
            align="center"
            className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
            fontWeight={300}
            color={gray_light}
            sx={{ display: { sm: 'none' }, maxWidth: '320px', mx: 'auto' }}
          >
            <Box sx={{ mt: { xs: '18px', sm: '32px' } }}>
              {t('recordSection.stayKingRecord1')}&nbsp;
              {t('recordSection.stayKingRecord2')}
            </Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>
              {t('recordSection.stayKingRecord3')}
            </Box>
            <Box sx={{ display: 'inline' }}>{t('recordSection.stayKingRecord4')}</Box>
            <Box sx={{ display: 'inline', fontWeight: 600 }}>
              {t('recordSection.stayKingRecord5')}
            </Box>
            <Box sx={{ display: 'inline' }}>{t('recordSection.stayKingRecord6')}</Box>
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
            color={gray_light}
            sx={{ maxWidth: { xs: '320px', sm: '700px' }, mx: 'auto' }}
          >
            {isMob
              ? t('recordSection.stayKingDescriptionMob')
              : t('recordSection.stayKingDescription')}
          </Typography>
        </>
      </ObserverAnimation>
    </Container>
  );
}
