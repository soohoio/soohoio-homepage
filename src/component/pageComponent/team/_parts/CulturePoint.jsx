import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, CardMedia, Grid, Stack, Tooltip, Typography } from '@mui/material';
import {
  black,
  borderRadiusMob,
  borderRadiusPc,
  gray,
  primary,
} from '@/component/style/StyleTheme';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useTranslation } from 'next-i18next';

export default function CulturePoint() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [selectedCard, setSelectedCard] = useState(null);
  const { t } = useTranslation('team');

  const cultureList = [
    {
      number: '01',
      title: 'Self Managing',
      description: isTablet
        ? t('culturePoint.selfManagingDescriptionTablet')
        : t('culturePoint.selfManagingDescription'),
      img: 'selfManagingBg',
      imgText: t('culturePoint.selfManagingImgText'),
      hoverText: t('culturePoint.selfManagingHoverText'),
      pointList: [
        {
          point: t('culturePoint.selfManagingPoint1'),
          description: isPc
            ? t('culturePoint.selfManagingDescription1Pc')
            : t('culturePoint.selfManagingDescription1'),
        },
        {
          point: t('culturePoint.selfManagingPoint2'),
          description: isPc
            ? t('culturePoint.selfManagingDescription2Pc')
            : t('culturePoint.selfManagingDescription2'),
        },
        {
          point: t('culturePoint.selfManagingPoint3'),
          description: isPc
            ? t('culturePoint.selfManagingDescription3Pc')
            : t('culturePoint.selfManagingDescription3'),
        },
        {
          point: t('culturePoint.selfManagingPoint4'),
          description: isPc
            ? t('culturePoint.selfManagingDescription4Pc')
            : t('culturePoint.selfManagingDescription4'),
        },
      ],
    },
    {
      number: '02',
      title: 'Open Communication',
      description: isTablet
        ? t('culturePoint.openDescriptionTablet')
        : t('culturePoint.openDescription'),
      img: 'openCommunicationBg',
      imgText: t('culturePoint.openImgText'),
      hoverText: t('culturePoint.openHoverText'),
      pointList: [
        {
          point: t('culturePoint.openPoint1'),
          description: isPc
            ? t('culturePoint.openDescription1Pc')
            : t('culturePoint.openDescription1'),
        },
        {
          point: t('culturePoint.openPoint2'),
          description: isPc
            ? t('culturePoint.openDescription2Pc')
            : t('culturePoint.openDescription2'),
        },
        {
          point: t('culturePoint.openPoint3'),
          description: isPc
            ? t('culturePoint.openDescription3Pc')
            : t('culturePoint.openDescription3'),
        },
        {
          point: t('culturePoint.openPoint4'),
          description: isPc
            ? t('culturePoint.openDescription4Pc')
            : t('culturePoint.openDescription4'),
        },
      ],
    },
    {
      number: '03',
      title: 'Why Questioning',
      description: t('culturePoint.whyDescription'),
      img: 'whyQuestioningBg',
      imgText: t('culturePoint.whyImgText'),
      hoverText: t('culturePoint.whyHoverText'),
      pointList: [
        {
          point: t('culturePoint.whyPoint1'),
          description: isPc
            ? t('culturePoint.whyDescription1Pc')
            : t('culturePoint.whyDescription1'),
        },
        {
          point: t('culturePoint.whyPoint2'),
          description: isPc
            ? t('culturePoint.whyDescription2Pc')
            : t('culturePoint.whyDescription2'),
        },
        {
          point: t('culturePoint.whyPoint3'),
          description: isPc
            ? t('culturePoint.whyDescription3Pc')
            : t('culturePoint.whyDescription3'),
        },
        {
          point: t('culturePoint.whyPoint4'),
          description: isPc
            ? t('culturePoint.whyDescription4Pc')
            : t('culturePoint.whyDescription4'),
        },
      ],
    },
  ];

  const selectCard = each => {
    setSelectedCard(each);
  };

  return (
    <BodyContainer ptPc="152px" ptMob="56px" pbPc="164px" pbMob="64px">
      {cultureList.map(function (each, index) {
        return (
          <Box
            key={each.number}
            sx={{
              mb: {
                xs: index === cultureList.length - 1 ? '0px' : '48px',
                sm: index === cultureList.length - 1 ? '0px' : '167px',
              },
            }}
          >
            {/* 01. ~~ */}
            <Typography
              component="div"
              className={isMob ? 'mobTitle14KR' : 'pcTitle24KR'}
              fontWeight={600}
              color="#FFFFFF"
            >
              <Box sx={{ display: 'inline', color: primary, mr: { xs: '6px', sm: '16px' } }}>
                {each.number}
              </Box>
              <Box sx={{ display: 'inline' }}>{each.title}</Box>
            </Typography>

            {/* 큰 텍스트 설명 */}
            <Typography
              component="div"
              className={isMob ? 'mobTitle19KR' : 'pcTitle56KR'}
              fontWeight={300}
              color="#FFFFFF"
            >
              <Box
                sx={{
                  mt: { xs: '12px', sm: '40px' },
                  mb: { xs: '18px', sm: '56px' },
                  maxWidth: '830px',
                }}
              >
                {each.description}
              </Box>
            </Typography>

            {/* 사진 & 텍스트 영역 */}
            <Box
              onClick={() => selectCard(each)}
              onMouseOver={() => selectCard(each)}
              onMouseOut={() => selectCard(null)}
              sx={{
                width: 1,
                aspectRatio: { xs: '312/184', sm: '1328/420' },
                height: { xs: '184px', sm: '420px' },
                borderRadius: { xs: '8px', sm: '16px' },
                boxSizing: 'border-box',
                background: `url(/image/pageImage/team/${each.img}${isMob ? 'Mob' : ''}.png)`,
                backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                mb: { xs: '24px', sm: '56px' },
              }}
            >
              <Box
                sx={{
                  height: 1,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 1,
                  height: 1,
                  p: { xs: '14px', sm: '48px' },
                  transition: 'backdrop-filter 0.3s ease-in-out',
                  backdropFilter: selectedCard?.number === each.number ? 'blur(10px)' : 'none',
                  boxSizing: 'border-box',
                }}
              >
                <Stack direction="column" justifyContent="space-between" sx={{ height: 1 }}>
                  <Stack direction="row" justifyContent="flex-end">
                    {selectedCard?.number === each.number ? (
                      <Box />
                    ) : (
                      <CardMedia
                        image={`/image/icon/plusCircle.png`}
                        sx={{
                          width: { xs: '20px', sm: '40px' },
                          height: { xs: '20px', sm: '40px' },
                        }}
                      />
                    )}
                  </Stack>
                  <Box>
                    <Typography
                      key={selectedCard?.number}
                      component="div"
                      className={
                        isMob
                          ? `mobTitle${
                              selectedCard?.number === each.number ? '14' : '16'
                            }KR smoothAppearSlow`
                          : `pcTitle${
                              selectedCard?.number === each.number ? '32' : '36'
                            }KR smoothAppearSlow`
                      }
                      fontWeight={600}
                      color="#FFFFFF"
                    >
                      <Box>{each.imgText}</Box>
                    </Typography>

                    {selectedCard?.number === each.number && (
                      <Typography
                        component="div"
                        className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                        fontWeight={300}
                        color="#FFFFFF"
                      >
                        <Box
                          className="smoothAppearSlow"
                          sx={{
                            mt: { xs: '12px', sm: '32px' },
                            maxWidth: { xs: '280px', sm: '540px', lg: '640px' },
                          }}
                        >
                          {each.hoverText}
                        </Box>
                      </Typography>
                    )}
                  </Box>
                </Stack>
              </Box>
            </Box>

            {/* 포인트 */}
            <Grid container spacing={{ xs: '8px', sm: '16px' }}>
              {each.pointList.map(function (eachPoint) {
                return (
                  <Grid item xs={6} key={eachPoint.point}>
                    <Box
                      sx={{
                        p: { xs: '14px', sm: '24px' },
                        height: 1,
                        backgroundColor: black,
                        borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                        boxSizing: 'border-box',
                      }}
                    >
                      <Typography
                        component="div"
                        className={isMob ? 'mobTitle14KR' : 'pcBody20KR'}
                        fontWeight={600}
                        color="#FFFFFF"
                      >
                        <Box sx={{ mb: { xs: '12px', sm: '16px' } }}>{eachPoint.point}</Box>
                      </Typography>

                      <Typography
                        component="div"
                        className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                        fontWeight={300}
                        color="#ABABAB"
                      >
                        <Box sx={{ maxWidth: '455px' }}>{eachPoint.description}</Box>
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </BodyContainer>
  );
}
