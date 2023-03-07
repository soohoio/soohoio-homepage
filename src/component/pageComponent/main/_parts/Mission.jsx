import { BodyContainer } from '@/component/ui/BodyContainer';
import { black, borderRadiusMob, borderRadiusPc } from '@/component/style/StyleTheme';
import { Box, CardMedia, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import Slider from 'react-slick';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';

export default function Mission() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('main');

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselList = [
    {
      img: 'step1',
      text: t('mission.step1'),
    },
    {
      img: 'step2',
      text: t('mission.step2'),
    },
    {
      img: 'step3',
      text: isMob ? t('mission.step3Mob') : t('mission.step3'),
    },
    {
      img: 'step4',
      text: isMob ? t('mission.step4Mob') : t('mission.step4'),
    },
  ];

  return (
    <BodyContainer backgroundColor="#00F2C3" ptPc="120px" pbPc="120px" ptMob="42px" pbMob="42px">
      <Typography
        className={isMob ? 'mobBody12KR' : 'pcTitle20KR'}
        component="div"
        color="secondary"
        align="center"
        fontWeight={{ xs: 300, sm: 500 }}
      >
        Mission
      </Typography>
      {/* lineHeight 24 */}
      <Typography
        className={isPc ? 'pcTitle48KR' : ''}
        color={black}
        align="center"
        fontWeight={600}
        sx={{
          mt: { xs: '8px', sm: '28px' },
          mb: { xs: '8px', sm: '24px' },
          fontSize: { xs: '19px', sm: '36px' },
          lineHeight: { xs: '24px !important' },
        }}
      >
        {isMob ? t('mission.missionTitleMob') : t('mission.missionTitle')}
      </Typography>
      <Box sx={{ px: { sm: '21vw', lg: '0px' }, mt: { xs: '24px', sm: '36px', lg: '48px' } }}>
        <Slider {...settings} beforeChange={(current, next) => setCarouselIndex(next)}>
          {carouselList.map(function (each) {
            return (
              <Box
                key={each.img}
                sx={{ px: { xs: '5px', sm: '15px', lg: '20px' }, boxSizing: 'border-box' }}
              >
                {/* <ObserverAnimation animationName="fadeInSlow" delay={200}> */}
                <CardMedia
                  image={`/image/pageImage/home/${each.img}.png`}
                  sx={{
                    width: 1,
                    aspectRatio: '1328/713',
                    borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                    mb: { xs: '12px', sm: '30px' },
                  }}
                />
                {/* </ObserverAnimation> */}
              </Box>
            );
          })}
        </Slider>
        <ObserverAnimation key={carouselIndex} animationName="fadeInSlow">
          <Typography
            component="div"
            className={isMob ? 'mobBody14KR' : isPc ? 'pcBody24KR' : 'pcBody20KR'}
            fontWeight={600}
            color={black}
            align="center"
            sx={{ mt: { xs: '38px', sm: '55px' } }}
          >
            <Box sx={{ maxWidth: '800px', mx: 'auto' }}>{carouselList[carouselIndex].text}</Box>
          </Typography>
        </ObserverAnimation>
      </Box>
    </BodyContainer>
  );
}
