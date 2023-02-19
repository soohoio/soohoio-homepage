import { Box, CardMedia, Grid, Stack } from '@mui/material';
import React from 'react';
import { gray, gray_light } from '../style/StyleTheme';
import { BodyText3, BodyText4 } from '../style/TextStyle';
import { BodyContainer } from '../ui/BodyContainer';

function Footer() {
  const snsButtonList = ['twitter', 'facebook', 'linkedIn'];
  return (
    <footer>
      <BodyContainer ptMob="118px" pbPc="100px">
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <CardMedia
              image={`/grayLogo.png`}
              sx={{ width: '175px', height: '179px', mb: '42px' }}
            />
            <BodyText3 component="div" color={gray}>
              <Box>{`SOOHO.IO Inc.\nCEO Jisu Park\nBusiness Reg. No. 238-88-01053`}</Box>
              <Box sx={{ my: '16px' }}>
                {`070-4121-8936\ncontact@sooho.io\nB1, 126, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea`}
              </Box>
              <Box>Ⓒ2023. SOOHO.IO Inc. All Rights Reserved.</Box>
            </BodyText3>
          </Box>
          <Box>
            <BodyText4 component="div" color={gray_light} sx={{ fontWeight: 600 }}>
              <Box className="buttonHover">회사 소개서 다운받기</Box>
              <Box sx={{ color: gray, mt: '32px' }}>SOOHO.IO</Box>
            </BodyText4>
            <Stack direction="row" spacing="24px" sx={{ mt: '22px', mb: '38px' }}>
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

            <BodyText4 color={gray} sx={{ fontWeight: 600 }}>
              SOOHO.IO Cafe
            </BodyText4>

            <CardMedia
              className="buttonHover"
              alt={`soohoio cafe sns link(twitter)`}
              image={`/image/sns/twitter.png`}
              sx={{ width: '24px', height: '24px', mt: '22px' }}
            />
          </Box>
        </Grid>
      </BodyContainer>
    </footer>
  );
}

export default Footer;
