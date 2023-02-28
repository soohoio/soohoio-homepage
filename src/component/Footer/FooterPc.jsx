import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { gray, gray_light } from '../style/StyleTheme';
import { BodyContainer } from '../ui/BodyContainer';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function FooterPc() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const snsButtonList = [
    { img: 'twitter', link: 'https://twitter.com/soohoio' },
    // { img: 'facebook', link: '', },
    { img: 'linkedIn', link: 'https://www.linkedin.com/company/sooho' },
  ];

  const goToLink = link => {
    window.open(link);
  };

  return (
    <footer>
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <BodyContainer ptMob="118px" pbPc="100px">
          <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <CardMedia
                image={`/grayLogo.png`}
                sx={{ width: '175px', height: '179px', mb: '42px' }}
              />
              <Typography
                className={isMob ? 'pcBody18KR' : 'pcBody18KR'}
                component="div"
                color={gray}
              >
                <Box>{`SOOHO.IO Inc.\nCEO Jisu Park\nBusiness Reg. No. 238-88-01053`}</Box>
                <Box sx={{ my: '16px' }}>
                  {`070-4121-8936\ncontact@sooho.io\nB1, 126, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea`}
                </Box>
                <Box sx={{ fontSize: '14px' }}>Ⓒ2023. SOOHO.IO Inc. All Rights Reserved.</Box>
              </Typography>
            </Box>
            <Box>
              <Typography
                className={isMob ? 'pcBody14KR' : 'pcBody14KR'}
                component="div"
                color={gray_light}
                sx={{ fontWeight: 600 }}
              >
                <Box sx={{ color: gray }}>SOOHO.IO</Box>
                {/* <Box className="buttonHover">수호 소개서 다운로드</Box>
                <Box sx={{ color: gray, mt: '32px' }}>SOOHO.IO</Box> */}
              </Typography>
              <Stack direction="row" spacing="24px" sx={{ mt: '22px', mb: '38px' }}>
                {snsButtonList.map(function (each) {
                  return (
                    <CardMedia
                      className="buttonHover"
                      onClick={() => goToLink(each.link)}
                      key={each.img}
                      alt={`soohoio service sns link(${each.img})`}
                      image={`/image/sns/${each.img}.png`}
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
                SOOHO.IO Cafe Test
              </Typography>

              <CardMedia
                className="buttonHover"
                onClick={() => goToLink('https://twitter.com/sooho_cafe')}
                alt={`soohoio cafe sns link(twitter)`}
                image={`/image/sns/twitter.png`}
                sx={{ width: '24px', height: '24px', mt: '22px' }}
              />
            </Box>
          </Grid>
        </BodyContainer>
      </Box>
    </footer>
  );
}
