import { Container } from '@mui/material';
import { paddingHorMob, paddingHorPC } from '../style/StyleTheme';

/** width, pt, pb를 포함한 Container  */
export function BodyContainer({ children, backgroundColor, ptPc, ptMob, pbPc, pbMob, sx }) {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: backgroundColor }}>
      <Container
        maxWidth="lg"
        sx={[
          {
            px: { xs: paddingHorMob, sm: paddingHorPC },
            pt: { xs: ptMob, sm: ptPc },
            pb: { xs: pbMob, sm: pbPc },
          },
          sx,
        ]}
      >
        {children}
      </Container>
    </Container>
  );
}

BodyContainer.defaultProps = {
  backgroundColor: '#131313',
};

/** 임시용 */
export function BodyContainer2({ children, backgroundColor }) {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: backgroundColor }}>
      <Container maxWidth="lg" sx={{ px: { xs: paddingHorMob, sm: paddingHorPC } }}>
        {children}
      </Container>
    </Container>
  );
}
