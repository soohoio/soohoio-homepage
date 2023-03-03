import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusPc, gray, gray_light } from '@/component/style/StyleTheme';

export default function FirstSection({ currentTab, setCurrentTab }) {
  const buttonList = ['Team', 'Culture'];
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

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
        <Box sx={{ mt: { xs: '24px', sm: '40px' }, mb: { xs: '16px', sm: '24px' } }}>
          {isMob
            ? `‘수호자'는 자율적인 환경 속에서 이루고 싶은 목표가\n분명하고, 목표를 이루기 위해 끊임없이\n‘Why’를 고민하는 사람들입니다.`
            : `‘수호자'는 자율적인 환경 속에서 이루고 싶은 목표가 분명하고,\n목표를 이루기 위해 끊임없이 ‘Why’를 고민하는 사람들입니다.`}
        </Box>
        <Box>
          {`우리는 블록체인 산업이라는 변화의 최전선에서\n기술의 가치를 증명하고 금융의 기회를 넓히고자 합니다.`}
        </Box>
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
