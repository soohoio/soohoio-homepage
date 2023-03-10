import { Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { black, paddingHorMob, primary } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { useTranslation } from 'next-i18next';
import CustomLinkComponent from '@/module/CustomLink';

export default function TeamViewAllPosition() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const { t } = useTranslation('team');

  return (
    <BodyContainer backgroundColor={primary} ptPc="96px" pbPc="96px" ptMob="32px" pbMob="32px">
      <Grid container justifyContent="center">
        <CustomLinkComponent href="/recruit">
          <MUIOutlinedButton
            noClass={true}
            text={t('teamViewAllPosition.button')}
            color={black}
            hoverColor={black}
            sx={{
              fontSize: { xs: '14px', sm: '20px' },
              fontWeight: { xs: 600, sm: 500 },
              px: { sm: '10px' },
              py: { xs: '7px', sm: '15px' },
              width: { xs: 1, sm: '307px' },
              boxSizing: 'border-box',
              ':hover': {
                color: primary,
              },
            }}
          />
        </CustomLinkComponent>
      </Grid>
    </BodyContainer>
  );
}
