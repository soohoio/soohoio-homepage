import { BodyContainer } from '@/component/ui/BodyContainer';
import { Stack } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { useRouter } from 'next/router';

export default function ButtonSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();

  const goToContact = link => {
    if (link === '/contact') {
      router.push({ pathname: link, query: { currentTypeIndex: 1 } });
    } else {
      router.push(link);
    }
  };

  return (
    <BodyContainer ptPc="128px" pbPc="128px" ptMob="48px" pbMob="48px">
      <Stack direction="row" justifyContent="center" spacing={{ xs: '8px', sm: '29px' }}>
        <MUIOutlinedButton
          text="채용 문의하기"
          onClick={() => goToContact('/contact')}
          sx={{ width: { xs: 1, sm: '307px' }, boxSizing: 'border-box', py: { sm: '18px' } }}
        />
        <MUIOutlinedButton
          text="팀 소개 보러가기"
          onClick={() => goToContact('/team')}
          color="#FFFFFF"
          hoverColor="#FFFFFF"
          sx={{ width: { xs: 1, sm: '307px' }, boxSizing: 'border-box', py: { sm: '18px' } }}
        />
      </Stack>
    </BodyContainer>
  );
}
