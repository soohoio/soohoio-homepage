import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { gray, gray_light } from '../style/StyleTheme';
import { BodyContainer } from '../ui/BodyContainer';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function FooterMob() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const snsButtonList = ['twitter', 'facebook', 'linkedIn'];

  return (
    <footer>
      <Box sx={{ display: { lg: 'none' } }}>
        <BodyContainer ptMob="118px" pbPc="100px" pbMob="60px">
          <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <CardMedia
                image={`/grayLogo.png`}
                sx={{ width: '120px', height: '122.7px', mb: '42px' }}
              />
              <Typography
                className={isMob ? 'pcBody18KR' : 'pcBody18KR'}
                component="div"
                color={gray}
              >
                <Box>{`SOOHO.IO Inc.\nCEO Jisu Park\nBusiness Reg.\nNo. 238-88-01053`}</Box>
              </Typography>
            </Box>
            <Box>
              <Typography
                className={isMob ? 'pcBody14KR' : 'pcBody14KR'}
                component="div"
                color={gray_light}
                sx={{ fontWeight: 600 }}
              >
                <Box className="buttonHover">회사 소개서 다운받기</Box>
                <Box sx={{ color: gray, mt: '25px' }}>SOOHO.IO</Box>
              </Typography>
              <Stack direction="row" spacing="24px" sx={{ mt: '18px', mb: '32px' }}>
                {snsButtonList.map(function (each) {
                  return (
                    <CardMedia
                      className="buttonHover"
                      key={each}
                      alt={`soohoio service sns link(${each})`}
                      image={`/image/sns/${each}.png`}
                      sx={{ width: '24px', height: '24px' }}
                    />
                  );
                })}
              </Stack>

              <Typography
                className={isMob ? 'pcBody14KR' : 'pcBody14KR'}
                color={gray}
                sx={{ fontWeight: 600 }}
              >
                SOOHO.IO Cafe
              </Typography>

              <CardMedia
                className="buttonHover"
                alt={`soohoio cafe sns link(twitter)`}
                image={`/image/sns/twitter.png`}
                sx={{ width: '24px', height: '24px', mt: '22px' }}
              />
            </Box>
          </Grid>
          <Typography className={isMob ? 'pcBody18KR' : 'pcBody18KR'} component="div" color={gray}>
            <Box sx={{ my: '16px' }}>
              {`070-4121-8936\ncontact@sooho.io\nB1, 126, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea`}
            </Box>
            <Box sx={{ fontSize: '14px' }}>Ⓒ2023. SOOHO.IO Inc. All Rights Reserved.</Box>
          </Typography>
        </BodyContainer>
      </Box>
    </footer>
  );
}
