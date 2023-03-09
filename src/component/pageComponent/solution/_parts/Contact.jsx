import { Box, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { black, paddingHorMob, primary } from '@/component/style/StyleTheme';
import { useTranslation } from 'next-i18next';
import CustomLinkComponent from '@/module/CustomLink';

export default function Contact() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('solution');

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
        <CustomLinkComponent href="/contact">
          <MUIOutlinedButton
            noClass={true}
            text={t('contact.button')}
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
        </CustomLinkComponent>
      </Grid>
    </Container>
  );
}
