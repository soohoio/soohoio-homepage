import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusPc, gray, gray_light } from '@/component/style/StyleTheme';
import { useTranslation } from 'next-i18next';

export default function FirstSection({ currentTab, setCurrentTab }) {
  const buttonList = ['Team', 'Culture'];
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('team');

  const selectButton = tab => {
    setCurrentTab(tab);
  };

  return (
    <BodyContainer ptPc="173px" ptMob="24px" pbPc="0px" pbMob="0px">
      <Grid container justifyContent="center">
        <video
          controls
          src="/video/recruit.mp4"
          style={{
            width: '100%',
            borderRadius: isMob ? '8px' : '16px',
            maxWidth: '754px',
            aspectRatio: '754/424',
          }}
        />
      </Grid>

      <Typography
        component="div"
        align="center"
        className={isMob ? 'mobTitle24KR' : 'pcTitle32KR'}
        color="primary"
        fontWeight={600}
      >
        <Box sx={{ mt: { xs: '48px', sm: '48px' } }}>High Performance Team</Box>
      </Typography>

      <Typography
        component="div"
        align="center"
        className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
        fontWeight={300}
        color={gray_light}
      >
        <Box
          sx={{
            mt: { xs: '24px', sm: '40px' },
            mb: { xs: '16px', sm: '24px' },
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {isMob ? t('firstSection.title1Mob') : t('firstSection.title1')}
        </Box>
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>{t('firstSection.title2')}</Box>
      </Typography>

      {/* 버튼 영역 */}
      <Grid container spacing={{ xs: '8px', sm: '16px' }} sx={{ mt: { xs: '48px', sm: '136px' } }}>
        {buttonList.map(function (each) {
          return (
            <Grid key={each} item xs={6}>
              <Button
                onClick={() => selectButton(each)}
                color="white"
                variant={currentTab === each ? 'contained' : 'outlined'}
                sx={[
                  currentTab === each ? { fontWeight: 600 } : { fontWeight: 300 },
                  {
                    width: 1,
                    py: { sm: '17px' },
                    fontSize: { xs: '14px', sm: '24px' },
                    borderRadius: { xs: '8px', sm: borderRadiusPc },
                    borderWidth: { xs: '1px', sm: '2px' },
                    ':hover': {
                      borderWidth: { sm: '2px' },
                      fontWeight: 600,
                    },
                  },
                ]}
              >
                {each}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </BodyContainer>
  );
}
