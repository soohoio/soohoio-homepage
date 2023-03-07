import { Box, Grid, CardMedia, Typography } from '@mui/material';
import { black, gray_light } from '../style/StyleTheme';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function GlobalMenu({ globalMenuRef, closeGlobalMenu }) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const router = useRouter();

  const changeLanguage = language => {
    const isKorean = !router.pathname.includes('locale');
    i18n.changeLanguage(language);

    // ko인데 en을 누른 경우
    if (isKorean && language === 'en') {
      router.push(`/en${router.pathname}`);
      // ko 아닐 때 ko을 누른 경우
    } else if (!isKorean && language === 'ko') {
      router.push(router.pathname.replace('/[locale]', ''));
    }
    closeGlobalMenu();
  };

  return (
    <Box
      ref={globalMenuRef}
      sx={{
        width: '32px',
        height: '100px',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: { xs: -8, lg: -8 },
        right: { xs: -4, lg: -4 },
        borderRadius: '50px',
        boxSizing: 'border-box',
        pt: '4px',
        pb: '8px',
      }}
    >
      <Grid container justifyContent="center">
        <CardMedia
          onClick={closeGlobalMenu}
          component="img"
          image={`/image/icon/globalBlack.png`}
          alt="logo"
          sx={{
            width: '24px',
            cursor: 'pointer',
            mb: '4px',
          }}
        />
        <Typography
          className="pcPoint16KR"
          onClick={() => changeLanguage('ko')}
          color={currentLanguage === 'ko' ? black : gray_light}
          sx={{ cursor: 'pointer', ':hover': { color: black } }}
        >
          KR
        </Typography>

        <Box sx={{ width: '20px', height: '2px', backgroundColor: black, my: '6px' }} />

        <Typography
          className="pcPoint16KR"
          onClick={() => changeLanguage('en')}
          color={currentLanguage === 'ko' ? gray_light : black}
          sx={{ cursor: 'pointer', ':hover': { color: black } }}
        >
          EN
        </Typography>
      </Grid>
    </Box>
  );
}
