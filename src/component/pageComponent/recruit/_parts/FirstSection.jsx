import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function FirstSection({ recruitList }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(/image/pageImage/recruit/soohoBackground${isMob ? 'Mob' : ''}.png)`,
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Container
        maxWidth={false}
        sx={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))' }}
      >
        <BodyContainer
          ptPc="0px"
          ptMob="0px"
          pbPc="42px"
          pbMob="16px"
          backgroundColor="transparent"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            sx={{
              height: { xs: '32vw', sm: '32vw', lg: '376px' },
              maxHeight: { sm: '290px', lg: '376px' },
            }}
          >
            <Typography
              component="div"
              className={isMob ? 'mobTitle19KR' : 'pcTitle48KR'}
              color="#FFFFFFF"
              fontWeight={600}
            >
              <Box
                sx={{ display: 'inline-block' }}
              >{`현재 ${recruitList.length}건의 수호자 채용이 `}</Box>
              <Box sx={{ display: 'inline-block' }}>진행 중입니다.</Box>
            </Typography>
          </Grid>
        </BodyContainer>
      </Container>
    </Container>
  );
}
