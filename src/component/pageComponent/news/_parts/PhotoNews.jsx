import { BodyContainer } from '@/component/ui/BodyContainer';
import { CardMedia, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import EnlargeAnimation from '@/component/ui/EnlargeAnimation';

export default function PhotoNews() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const newsList = [
    {
      title: 'DeFi Infrastructure Provider Sooho.io Raises $4.5M for Bridging Blockchains',
      img: 'binance',
      date: '2022. 12. 13',
      link: 'https://www.binance.com/en/news/top/7322701?utm_source=infoHub',
    },
    {
      title: 'EVMOS StayKing House protocol wins Evmos Momentum Hackathon grand prize',
      img: 'technode',
      date: '2022. 10. 19',
      link: 'https://technode.global/2022/10/19/evmos-stayking-house-protocol-wins-evmos-momentum-hackathon-grand-prize/',
    },
    {
      title: 'Sooho.io to Attend and Host Events at Korea Blockchain Week 2022',
      img: 'asiaone',
      date: '2022. 8. 4',
      link: 'https://www.asiaone.com/business/soohoio-attend-and-host-events-korea-blockchain-week-2022',
    },
  ];

  const openNews = url => {
    window.open(url);
  };

  return (
    <BodyContainer ptPc="152px" pbPc="100px" ptMob="42px" pbMob="20px">
      {/* 태블릿 & PC용 */}
      <Grid container spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
        {newsList.map(function (each, index) {
          return (
            <Grid
              item
              sm={4}
              key={each.img}
              onClick={() => openNews(each.link)}
              sx={{ cursor: 'pointer', borderRadius: { xs: '4px', sm: '8px' } }}
            >
              <EnlargeAnimation borderRadius={{ xs: '4px', sm: '8px' }}>
                <CardMedia
                  image={`/image/pageImage/news/${each.img}.png`}
                  sx={{
                    width: 1,
                    aspectRatio: '432/278',
                    objectFit: 'contain',
                    ':hover': {
                      transform: '16px',
                    },
                    borderRadius: { xs: '4px', sm: '8px' },
                  }}
                />
              </EnlargeAnimation>
              <Typography
                className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
                color="#FFFFFF"
                fontWeight={600}
                sx={{
                  mt: { sm: '24px', lg: '32px' },
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
              >
                {each.title}
              </Typography>
              <Typography
                className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                component="div"
                color="#818181"
                fontWeight={300}
                sx={{
                  mt: { sm: '16px' },
                }}
              >
                {each.date}
              </Typography>
            </Grid>
          );
        })}
      </Grid>

      {/* 모바일용 */}
      {newsList.map(function (each, index) {
        return (
          <Grid key={each.img} container spacing={2} sx={{ display: { sm: 'none' }, mb: '16px' }}>
            <Grid
              item
              xs={5.6}
              key={each.img}
              onClick={() => openNews(each.link)}
              sx={{ cursor: 'pointer', borderRadius: { xs: '4px', sm: '8px' } }}
            >
              <CardMedia
                image={`/image/pageImage/news/${each.img}.png`}
                sx={{
                  width: 1,
                  aspectRatio: '432/278',
                  objectFit: 'contain',
                  ':hover': {
                    transform: '16px',
                  },
                  borderRadius: { xs: '4px', sm: '8px' },
                }}
              />
            </Grid>
            <Grid
              item
              xs={6.4}
              onClick={() => openNews(each.link)}
              sx={{ cursor: 'pointer', borderRadius: { xs: '4px', sm: '8px' } }}
            >
              <Typography
                className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
                color="#FFFFFF"
                fontWeight={600}
                component="div"
                sx={{
                  maxWidth: '300px',
                  mt: { sm: '24px', lg: '32px' },
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
              >
                {each.title}
              </Typography>
              <Typography
                className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                component="div"
                color="#818181"
                fontWeight={300}
                sx={{
                  mt: { sm: '16px' },
                }}
              >
                {each.date}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </BodyContainer>
  );
}
