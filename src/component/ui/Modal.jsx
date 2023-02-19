import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TitleText5 } from '../style/TextStyle';
import { RoundContainedButton } from './BoxButton';

export function ConfirmModal({ modalSwitch, setModalSwitch, contents }) {
  const modalClose = () => setModalSwitch(false);

  return (
    <div>
      <Modal open={modalSwitch} onClose={modalClose}>
        <Box
          sx={{
            width: 560,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#F8F8F8',
            borderRadius: '8px',
            py: '40px',
            outline: 'none',
          }}
        >
          <TitleText5 align="center" color="#242424">
            {contents}
          </TitleText5>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '44px' }}>
            <RoundContainedButton
              onClick={modalClose}
              text="확인"
              py="21px"
              px="130px"
              fontSx={{ fontSize: '24px !important' }}
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
