import { Box, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { black, paddingHorMob, primary } from '@/component/style/StyleTheme';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Contact() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();

  const goToContact = () => {
    router.push('/contact');
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundColor: primary,
        py: { xs: '42px', sm: '96px' },
        px: { xs: paddingHorMob },
      }}
    >
      <Grid container justifyContent="center">
        <MUIOutlinedButton
          onClick={goToContact}
          noClass={true}
          text="수호 DeFi 문의하기"
          color={black}
          hoverColor={black}
          sx={{
            fontSize: { xs: '12px', sm: '20px' },
            fontWeight: { xs: 600, sm: 500 },
            px: { sm: '74px' },
            py: { xs: '5px', sm: '15px' },
            width: { xs: 1, sm: 'auto' },
            ':hover': {
              color: '#FFFFFF',
            },
          }}
        />
      </Grid>
    </Container>
  );
}