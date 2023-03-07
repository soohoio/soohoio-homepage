import { Grid } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { black, paddingHorMob, primary } from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function TeamViewAllPosition() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();
  const { t } = useTranslation('team');

  const goToRecruit = () => {
    let locale = '';
    if (router.pathname.includes('locale')) {
      locale = router.query.locale;
    }
    router.push(`/${locale}/recruit`);
  };

  return (
    <BodyContainer backgroundColor={primary} ptPc="96px" pbPc="96px" ptMob="32px" pbMob="32px">
      <Grid container justifyContent="center">
        <MUIOutlinedButton
          onClick={goToRecruit}
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
      </Grid>
    </BodyContainer>
  );
}
