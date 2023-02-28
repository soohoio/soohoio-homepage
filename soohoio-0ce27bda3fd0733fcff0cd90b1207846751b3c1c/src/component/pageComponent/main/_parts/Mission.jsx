import { BodyContainer } from '@/component/ui/BodyContainer';
import { black, borderRadiusMob, borderRadiusPc } from '@/component/style/StyleTheme';
import { Box, CardMedia, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import Slider from 'react-slick';
import ObserverAnimation from '@/component/ui/ObserverAnimation';

export default function Mission() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

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
      text: `블록체인 금융 서비스들은 특정 체인 안에\n고립되어 있어 접근성이 떨어집니다.`,
    },
    {
      img: 'step2',
      text: `체인을 연결하는 브릿지를 통해 유저는 자산의 종류와\n관계 없이 금융 서비스를 이용할 수 있습니다.`,
    },
    {
      img: 'step3',
      text: isMob
        ? `단, 보안에 취약한 브릿지는 막대한 규모의 해킹 사고로 이어질 수 있기 때문에 매우 높은 수준의 보안 기술이 뒷받침되어야만 합니다.`
        : `단, 보안에 취약한 브릿지는 막대한 규모의 해킹 사고로 이어질 수\n있기 때문에 매우 높은 수준의 보안 기술이 뒷받침되어야만 합니다.`,
    },
    {
      img: 'step4',
      text: isMob
        ? `수호는 가장 안전한 브릿지로 연결된 크로스체인 생태계를 구축하여, 다양한 금융 기회를 간편하게 경험할 수 있는 Gateway가 되고자 합니다.`
        : `수호는 가장 안전한 브릿지로 연결된 크로스체인 생태계를 구축하여,\n다양한 금융 기회를 간편하게 경험할 수 있는 Gateway가 되고자 합니다.`,
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
        {isMob
          ? `더 많은 금융 기회를 연결하고\n수호합니다.`
          : '더 많은 금융 기회를 연결하고 수호합니다.'}
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
            className={isMob ? 'mobBody14KR' : isPc ? 'pcBody24KR' : 'pcBody20KR'}
            fontWeight={600}
            color={black}
            align="center"
            sx={{ mt: { xs: '38px', sm: '55px' } }}
          >
            {carouselList[carouselIndex].text}
          </Typography>
        </ObserverAnimation>
      </Box>

      {/* <Box
          sx={{
            backgroundColor: '#DDDDDD',
            aspectRatio: '1328/720',
            width: 1,
            height: 1,
            maxWidth: { lg: '1328px' },
            maxHeight: { lg: '720px' },
          }}
        /> */}
    </BodyContainer>
  );
}