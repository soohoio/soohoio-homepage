import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { gray, gray_light } from '../style/StyleTheme';
import { BodyContainer } from '../ui/BodyContainer';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function FooterMob() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const snsButtonList = [
    { img: 'twitter', link: 'https://twitter.com/soohoio' },
    // { img: 'facebook', link: '', },
    { img: 'linkedIn', link: 'https://www.linkedin.com/company/sooho' },
  ];

  const fileList = [
    { label: 'KR', file: '/file/SOOHO.IO_회사소개서.pdf' },
    { label: 'EN', file: '/file/SOOHO.IO_Introduction.pdf' },
    { label: 'JP', file: '/file/SOOHO.IO_会社紹介書.pdf' },
  ];

  return (
    <footer>
      <Box sx={{ display: { lg: 'none' } }}>
        <BodyContainer ptMob="118px" pbPc="100px" pbMob="60px">
          <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <CardMedia
                image={`/grayLogo.png`}
                sx={{ width: '120px', height: '122.7px', mb: '33px' }}
              />
              <Typography
                className={isMob ? 'pcBody14KR' : 'pcBody18KR'}
                component="div"
                color={gray}
              >
                <Box>{`SOOHO.IO Inc.\nCEO Jisu Park\nBusiness Reg.\nNo. 238-88-01053`}</Box>
              </Typography>
            </Box>
            <Box>
              <Typography
                align="left"
                className={isMob ? 'pcBody14KR' : 'pcBody14KR'}
                component="div"
                color={gray_light}
                sx={{ fontWeight: 600 }}
              >
                <Box sx={{ color: gray, mb: '8px' }}>
                  {currentLanguage === 'ko'
                    ? '회사 소개서 다운받기'
                    : 'Download SOOHO\nIntroduction'}
                </Box>

                <Stack direction="row" spacing="12px">
                  {fileList.map(function (each, index) {
                    return (
                      <Stack direction="row" key={each.label} spacing="12px" alignItems="center">
                        <Link href={each.file} target="_blank">
                          <Box className="pcBody18KR" sx={{ fontWeight: 300, cursor: 'pointer' }}>
                            {each.label}
                          </Box>
                        </Link>
                        {index !== fileList.length - 1 && (
                          <Box sx={{ width: '1px', backgroundColor: '#FFFFFF', height: '13px' }} />
                        )}
                      </Stack>
                    );
                  })}
                </Stack>
                <Box sx={{ color: gray, mt: '16px' }}>SOOHO.IO</Box>
              </Typography>
              <Stack direction="row" spacing="24px" sx={{ mt: '14px', mb: '22px' }}>
                {snsButtonList.map(function (each) {
                  return (
                    <Link key={each.img} href={each.link} target="_blank">
                      <CardMedia
                        className="buttonHover"
                        key={each.img}
                        alt={`soohoio service sns link(${each.img})`}
                        image={`/image/sns/${each.img}.png`}
                        sx={{ width: '24px', height: '24px' }}
                      />
                    </Link>
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

              <Link href="https://twitter.com/sooho_cafe" target="_blank">
                <CardMedia
                  className="buttonHover"
                  alt={`soohoio cafe sns link(twitter)`}
                  image={`/image/sns/twitter.png`}
                  sx={{ width: '24px', height: '24px', mt: '8px' }}
                />
              </Link>
            </Box>
          </Grid>
          <Typography className={isMob ? 'pcBody14KR' : 'pcBody18KR'} component="div" color={gray}>
            <Box sx={{ my: '16px' }}>
              {`070-4121-8936\ncontact@sooho.io\nB1, 126, Teheran-ro, Gangnam-gu,\nSeoul, Republic of Korea`}
            </Box>
            <Box sx={{ fontSize: '12px !important' }}>
              Ⓒ2023. SOOHO.IO Inc. All Rights Reserved.
            </Box>
          </Typography>
        </BodyContainer>
      </Box>
    </footer>
  );
}
