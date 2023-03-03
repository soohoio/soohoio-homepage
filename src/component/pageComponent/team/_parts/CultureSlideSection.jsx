import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { black, gray, primary } from '@/component/style/StyleTheme';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import Slider from 'react-slick';
import { MUIOutlinedButton } from '@/component/ui/Button';

export default function CultureSlideSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentIndex(next);
  };

  const slideList = [
    {
      name: 'Jen',
      position: 'Product Manager',
      interview:
        '수호에서는 무슨 일을 하고 싶냐고 계속 물어봐 줘요. 회사에서 그걸 물어본다는 게 쉽지 않은 일인 것 같아요.',
      img: 'jen',
    },
    {
      name: 'Samsong',
      position: 'Product Designer',
      interview:
        '보고가 아닌 진짜 공유를 해요. 회사에서 일하면서 마이크로한 관리를 위해 보고를 해야 하는 경우가 많았는데요. 수호는 이런 불필요한 일은 하지 않습니다. 서로를 믿으니까요. 나와 팀원들이 프로젝트를 진행하기 위해 필요한 알찬 내용을 서로가 알아서! 먼저! 공유하고자 해요.',
      img: 'samsong',
    },
    {
      name: 'Chacha',
      position: 'Community Manager',
      interview:
        '대표에게 직접 피드백을 할 수 있다는 게 수호의 장점이라고 생각해요. 건강한, 감정이 담기지 않은 건조한 피드백이요.',
      img: 'chacha',
    },
    {
      name: 'Willy',
      position: 'Community Strategy Lead',
      interview:
        '다른 기업에서는 경험할 수 없었던 권한과 책임을 가지고 시도할 수 있어서 더 많이 배워요. 예를 들면, 보통 커뮤니티를 맡게 되면 그냥 디스코드나 텔레그램을 만드는 것에서 끝나는데, 수호에서는 실제로 다양한 커뮤니티 멤버와 관계자분들을 만나고 그분들과 더 좋은 관계를 만들 수 있었어요.',
      img: 'willy',
    },
    {
      name: 'Michael',
      position: 'Organization eXperience Manager',
      interview:
        '상대방이 정말로 일을 잘할 수 있도록, 성장하길 바라는 마음에서 같이 문제를 고민하고 알려주는 환경이 잘 정착되어 있다고 느껴요.',
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
                className={isMob ? 'pcBody14KR' : 'pcBody18KR'}
                fontWeight={300}
                color="#FFFFFF"
              >
                <Box sx={{ maxWidth: '552px', mx: 'auto' }}>{each.interview}</Box>
              </Typography>
            </Box>
          );
        })}
      </Slider>

      <Grid container justifyContent="center" sx={{ mt: { xs: '24px', sm: '0px' } }}>
        <MUIOutlinedButton
          text="수호자 인터뷰 더 보기"
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
      ? `/image/icon/swipeLeft${disabled ? 'gray' : ''}.png`
      : `/image/icon/swipeRight${disabled ? 'gray' : ''}.png`;

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
