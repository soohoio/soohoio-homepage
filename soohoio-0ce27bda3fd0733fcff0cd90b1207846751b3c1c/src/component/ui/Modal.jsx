import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RoundContainedButton } from './Button';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useContext } from 'react';
import { borderRadiusMob, borderRadiusPc } from '../style/StyleTheme';

export function ConfirmModal({ modalSwitch, setModalSwitch, contents }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const modalClose = () => setModalSwitch(false);

  return (
    <div>
      <Modal open={modalSwitch} onClose={modalClose}>
        <Box
          sx={{
            width: { xs: 312, sm: 560 },
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#F8F8F8',
            borderRadius: { xs: borderRadiusMob, lg: borderRadiusPc },
            py: { xs: '22px', sm: '40px' },
            outline: 'none',
          }}
        >
          <Typography
            className={isMob ? 'mobTitle14KR' : 'pcTitle24KR'}
            align="center"
            color="#242424"
            fontWeight={600}
          >
            {contents}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: { xs: '12px', sm: '30px' },
            }}
          >
            <RoundContainedButton
              onClick={modalClose}
              text="확인"
              py={{ xs: '10px', sm: '21px' }}
              px={{ xs: '76px', sm: '130px' }}
              fontSx={{ fontSize: { sm: '24px !important' } }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

ConfirmModal.defaultProps = {
  modalSwitch: true,
  setModalSwitch: () => {},
  contents: '',
};
