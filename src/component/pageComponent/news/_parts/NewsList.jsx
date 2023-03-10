import React from 'react';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import EnlargeAnimation from '@/component/ui/EnlargeAnimation';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function NewsList() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('news');

  const newsYear = [2022, 2021, 2020, 2019];
  const newsList = [
    [
      {
        title: t('newsList.2022title1'),
        date: '2022. 7. 9',
        link: 'https://technode.global/2022/07/09/a-deep-dive-into-the-defi-space-with-sooho-ios-jisu-park-qa/',
      },
      {
        title: t('newsList.2022title2'),
        date: '2022. 5. 31',
        link: 'https://finance.yahoo.com/news/south-korea-dunamu-sooho-io-130000264.html?guccounter=1&guce_referrer=aHR0cHM6Ly9zb29ob3JlYnJhbmRpbmctbmV4dC52ZXJjZWwuYXBwLw&guce_referrer_sig=AQAAAABnxbbaobBEGfk7rtK7gu8PeBJml78RoeUmCN6V7eQgHHX0eoPYjJIniQoMB6MY0vskvB0DFtFMxH-O2k9EsUBktR7hE7BbshTFUzX1UwRvAQR5X_g4fv7560rmRxb5UCfqplBZMSZmBkk9LIAwaxjEao-p--1kgaBmEkS4BRWO',
      },
    ],
    [
      {
        title: t('newsList.2021title1'),
        date: '2021. 11. 20',
        link: 'https://www.ftoday.co.kr/news/articleView.html?idxno=227940',
      },
      {
        title: t('newsList.2021title2'),
        date: '2021. 9. 3',
        link: 'https://www.news1.kr/articles/?4423711',
      },
      {
        title: t('newsList.2021title3'),
        date: '2021. 5. 28',
        link: 'https://www.news1.kr/articles/?4321821',
      },
      {
        title: t('newsList.2021title4'),
        date: '2021. 5. 21',
        link: 'https://www.hankyung.com/finance/article/202105213572g',
      },
    ],
    [
      {
        title: t('newsList.2020title1'),
        date: '2020. 9. 25',
        link: 'https://v.daum.net/v/5d6201113fc43135364991ca',
      },
      {
        title: t('newsList.2020title2'),
        date: '2020. 2. 20',
        link: 'https://www.mk.co.kr/news/economy/9213790',
      },
    ],
    [
      {
        title: t('newsList.2019title1'),
        date: '2019. 8. 14',
        link: 'https://www.sedaily.com/NewsView/1VMXXVPCW3',
      },
      {
        title: t('newsList.2019title2'),
        date: '2019. 7. 8',
        link: 'https://www.legaltimes.co.kr/news/articleView.html?idxno=47566',
      },
      {
        title: t('newsList.2019title3'),
        date: '2019. 5. 31',
        link: 'https://dealsite.co.kr/articles/49736',
      },
      {
        title: t('newsList.2019title4'),
        date: '2019. 4. 1',
        link: 'https://www.coindesk.com/markets/2019/04/01/consensys-picks-latest-blockchain-startups-for-accelerator-program/',
      },
      {
        title: t('newsList.2019title5'),
        date: '2019. 3. 8',
        link: 'https://www.mk.co.kr/news/economy/8718267',
      },
      {
        title: t('newsList.2019title6'),
        date: '2019. 1. 5',
        link: 'https://zdnet.co.kr/view/?no=20190125102053',
      },
    ],
  ];

  return (
    <BodyContainer ptPc="52px" pbPc="64px" ptMob="22px" pbMob="40px">
      {newsYear.map(function (year, index) {
        return (
          <React.Fragment key={year}>
            <Box
              sx={{ height: '2px', backgroundColor: '#FFFFFF', mb: { xs: '14px', sm: '22px' } }}
            />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ mb: { xs: '40px', sm: '60px' } }}
            >
              <Box>
                <Typography
                  component="div"
                  className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
                  color="#FFFFFF"
                  fontWeight={600}
                >
                  <Box sx={{ mt: { xs: '-1.5px', sm: '-2px' } }}>{year}</Box>
                </Typography>
              </Box>
              <Box sx={{ width: 1 }}>
                {newsList[index].map(function (each, eachNewsIndex) {
                  return (
                    <Box key={each.date}>
                      <EnlargeAnimation scale={1.01}>
                        <Box sx={{ pl: { xs: '16px', sm: '35px' } }}>
                          <Link href={each.link} target="_blank">
                            <Stack
                              direction="row"
                              spacing={{ xs: '0px', sm: '35px' }}
                              justifyContent="space-between"
                              alignItems={{ xs: 'flex-end', sm: 'center' }}
                              sx={{
                                width: 1,
                                boxSizing: 'border-box',
                                pr: { sm: '54px' },
                                pb: { xs: '17px', sm: '24px' },
                                cursor: 'pointer',
                              }}
                            >
                              <Box>
                                <Typography
                                  className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
                                  component="div"
                                  color="#FFFFFF"
                                  fontWeight={600}
                                  sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                  }}
                                >
                                  <Box sx={{ maxWidth: { xs: '360px', sm: '1000px' } }}>
                                    {each.title}
                                  </Box>
                                </Typography>
                                <Typography
                                  className={isMob ? 'mobBody10KR' : 'pcBody18KR'}
                                  component="div"
                                  color="#818181"
                                  fontWeight={300}
                                  sx={{
                                    mt: { xs: '8px', sm: '16px' },
                                  }}
                                >
                                  {each.date}
                                </Typography>
                              </Box>
                              <CardMedia
                                image={`/image/icon/outlink.png`}
                                sx={{
                                  width: { xs: '20px', sm: '28px' },
                                  height: { xs: '20px', sm: '28px' },
                                }}
                              />
                            </Stack>
                          </Link>
                        </Box>
                      </EnlargeAnimation>
                      {/* 아래 선은 확대되지 않기 위함 */}
                      {newsList[index].length - 1 !== eachNewsIndex && (
                        <Box sx={{ pl: { xs: '16px', sm: '35px' } }}>
                          <Box
                            sx={{
                              height: '1px',
                              backgroundColor: '#5F5F5F',
                              mb: { xs: '17px', sm: '24px' },
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Stack>
          </React.Fragment>
        );
      })}
    </BodyContainer>
  );
}
