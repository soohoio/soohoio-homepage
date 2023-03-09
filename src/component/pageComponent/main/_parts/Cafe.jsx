import { BodyContainer } from '@/component/ui/BodyContainer';
import { MUIOutlinedButton, RoundOutlinedButton } from '@/component/ui/Button';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useTranslation } from 'next-i18next';
import CustomLinkComponent from '@/module/CustomLink';

export default function Cafe() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('main');

  const [scrollOffset, setScrollOffset] = useState(0);
  let calc;
  if (isMob) {
    calc = 0;
  } else {
    calc = isPc ? 140 : 300;
  }

  const handleScroll = event => {
    setScrollOffset(event.target.scrollTop);
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <Container
      maxWidth="false"
      onScroll={handleScroll}
      sx={{
        backgroundImage: `url(/image/pageImage/home/cafeBackground${isMob ? 'Mob' : ''}.png)`,
        backgroundPositionX: 'center',
        backgroundSize: `calc(${calc}% + ${scrollOffset / 5}px)`,
        transition: 'background-size 0.05s ease-in-out',
      }}
    >
      <BodyContainer
        backgroundColor="transparent"
        ptPc="97px"
        pbPc="97px"
        ptMob="42px"
        pbMob="42px"
      >
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
          <Grid>
            <Typography
              className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
              color="primary"
              fontWeight={600}
            >
              {isMob ? t('cafe.titleMob') : t('cafe.title')}
            </Typography>
            <Typography
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
              sx={{ mt: { xs: '18px', sm: '32px' }, fontWeight: 300 }}
            >
              <Box sx={{ maxWidth: { xs: '450px', sm: '600px' } }}>
                {isMob ? t('cafe.descriptionMob') : t('cafe.description')}
              </Box>
            </Typography>
          </Grid>
          <CustomLinkComponent
            href={{
              pathname: '/contact',
              query: { currentTypeIndex: 2 },
            }}
          >
            <MUIOutlinedButton
              text={t('cafe.button')}
              sx={{ width: { xs: 1, sm: 'auto' }, mt: '42px' }}
            />
          </CustomLinkComponent>
        </Grid>
      </BodyContainer>
    </Container>
  );
}
