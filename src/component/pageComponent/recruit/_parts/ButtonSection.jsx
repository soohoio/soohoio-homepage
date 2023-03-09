import { BodyContainer } from '@/component/ui/BodyContainer';
import { Stack } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import CustomLinkComponent from '@/module/CustomLink';

export default function ButtonSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  return (
    <BodyContainer ptPc="128px" pbPc="128px" ptMob="48px" pbMob="48px">
      <Stack direction="row" justifyContent="center" spacing={{ xs: '8px', sm: '29px' }}>
        <CustomLinkComponent
          href={{
            pathname: '/contact',
            query: { currentTypeIndex: 1 },
          }}
        >
          <MUIOutlinedButton
            text="채용 문의하기"
            sx={{ width: { xs: 1, sm: '307px' }, boxSizing: 'border-box', py: { sm: '18px' } }}
          />
        </CustomLinkComponent>
        <CustomLinkComponent href="/team">
          <MUIOutlinedButton
            text="팀 소개 보러가기"
            color="#FFFFFF"
            hoverColor="#FFFFFF"
            sx={{ width: { xs: 1, sm: '307px' }, boxSizing: 'border-box', py: { sm: '18px' } }}
          />
        </CustomLinkComponent>
      </Stack>
    </BodyContainer>
  );
}
