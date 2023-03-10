import { Box, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { paddingHorMob } from '@/component/style/StyleTheme';
import CustomLinkComponent from '@/module/CustomLink';

export default function ViewWebsite({ currentProduct }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

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
        <CustomLinkComponent
          href={currentProduct === 'KLEVA' ? 'https://kleva.io/' : 'https://stayking.xyz/'}
          target="_blank"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <MUIOutlinedButton
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
              mx: { sm: 'auto' },
              boxSizing: 'border-box',
            }}
          />
        </CustomLinkComponent>
      </Grid>
    </Container>
  );
}
