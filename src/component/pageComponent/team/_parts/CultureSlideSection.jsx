import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { black, gray, primary } from '@/component/style/StyleTheme';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import Slider from 'react-slick';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { useTranslation } from 'next-i18next';

export default function CultureSlideSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation('team');

  const handleBeforeChange = (current, next) => {
    setCurrentIndex(next);
  };

  const slideList = [
    {
      name: 'Jen',
      position: 'Product Manager',
      interview: isMob
        ? t('cultureSlideSection.interview1Mob')
        : t('cultureSlideSection.interview1'),
      img: 'jen',
    },
    {
      name: 'Samsong',
      position: 'Product Designer',
      interview: isMob
        ? t('cultureSlideSection.interview2Mob')
        : t('cultureSlideSection.interview2'),
      img: 'samsong',
    },
    {
      name: 'Chacha',
      position: 'Community Project Manager',
      interview: isMob
        ? t('cultureSlideSection.interview3Mob')
        : t('cultureSlideSection.interview3'),
      img: 'chacha',
    },
    {
      name: 'Willy',
      position: 'Community Strategy Lead',
      interview: isMob
        ? t('cultureSlideSection.interview4Mob')
        : t('cultureSlideSection.interview4'),
      img: 'willy',
    },
    {
      name: 'Michael',
      position: 'Organization eXperience Manager',
      interview: isMob
        ? t('cultureSlideSection.interview5Mob')
        : t('cultureSlideSection.interview5'),
      img: 'michael',
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" disabled={currentIndex === 0} />,
    nextArrow: <CustomArrow direction="next" disabled={currentIndex === slideList.length - 1} />,
    beforeChange: handleBeforeChange,
  };

  const goToInterview = () => {
    window.open('https://blog.sooho.io/people_interview_qna/');
  };

  return (
    <BodyContainer pbPc="128px" pbMob="80px" backgroundColor={black}>
      <Slider {...sliderSettings}>
        {slideList.map(function (each) {
          return (
            <Box
              key={each.name}
              sx={{
                height: { sm: '456px' },
                boxSizing: 'border-box',
                pt: { xs: '70px', sm: '128px' },
              }}
            >
              <CardMedia
                image={`/image/pageImage/team/interview/${each.img}.png`}
                sx={{
                  width: { xs: '88px', sm: '88px' },
                  height: { xs: '88px', sm: '88px' },
                  mb: { xs: '16px', sm: '16px' },
                  mx: 'auto',
                }}
              />
              <Typography
                component="div"
                align="center"
                className={isMob ? 'pcPoint16KR' : 'pcPoint16KR'}
                fontWeight={400}
                color={gray}
              >
                <Box>{each.name}</Box>
              </Typography>

              <Typography
                component="div"
                align="center"
                className={isMob ? 'pcPoint16KR' : 'pcPoint16KR'}
                fontWeight={600}
                color={primary}
              >
                <Box sx={{ mt: { xs: '1px', sm: '4px' }, mb: { xs: '26px', sm: '24px' } }}>
                  {each.position}
                </Box>
              </Typography>

              <Typography
                component="div"
                align="center"
                className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                fontWeight={300}
                color="#FFFFFF"
              >
                <Box sx={{ maxWidth: { xs: '312px', sm: '552px' }, mx: 'auto' }}>
                  {each.interview}
                </Box>
              </Typography>
            </Box>
          );
        })}
      </Slider>

      <Grid container justifyContent="center" sx={{ mt: { xs: '24px', sm: '0px' } }}>
        <MUIOutlinedButton
          onClick={goToInterview}
          text={t('cultureSlideSection.button')}
          sx={{
            width: { xs: 1, sm: '307px' },
            height: { xs: '40px', sm: '68px' },
            boxSizing: 'border-box',
            px: { sm: '0px' },
          }}
        />
      </Grid>
    </BodyContainer>
  );
}

const CustomArrow = ({ direction, onClick, disabled }) => {
  const arrowImage =
    direction === 'prev'
      ? `/image/icon/swipeLeft${disabled ? 'Gray' : ''}.png`
      : `/image/icon/swipeRight${disabled ? 'Gray' : ''}.png`;

  return (
    <CardMedia
      image={arrowImage}
      onClick={onClick}
      sx={{
        width: { xs: '20px', sm: '32px' },
        height: { xs: '20px', sm: '32px' },
        cursor: 'pointer',
        position: 'absolute',
        top: { xs: '118px', sm: '254px' },
        transform: 'translateY(-50%)',
        [direction === 'prev' ? 'left' : 'right']: { xs: '0px', sm: '56px' },
        zIndex: 100,
      }}
    />
  );
};
