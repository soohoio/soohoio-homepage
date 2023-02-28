import { Box, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { paddingHorMob } from '@/component/style/StyleTheme';

export default function ViewWebsite({ currentProduct }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const goToLink = () => {
    const link = currentProduct === 'KLEVA' ? 'https://kleva.io/' : 'https://stayking.xyz/';
    window.open(link);
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundColor: '#131313',
        py: { xs: '46px', sm: '112px' },
        px: { xs: paddingHorMob },
      }}
    >
      <Grid container justifyContent="center">
        <MUIOutlinedButton
          onClick={goToLink}
          noClass={true}
          text="View website"
          color="#FFFFFF"
          hoverColor="#FFFFFF"
          sx={{
            fontSize: { xs: '12px', sm: '20px' },
            fontWeight: { xs: 300, sm: 400 },
            px: { sm: '10px' },
            py: { xs: '5px', sm: '15px' },
            width: { xs: 1, sm: '260px' },
            boxSizing: 'border-box',
          }}
        />
      </Grid>
    </Container>
  );
}
