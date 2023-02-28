import React from 'react';
import Lottie from 'lottie-react';
import LoadingLottie from '../../../public/loadingLottie.json';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

// 로딩 로티 모달
const LoadingScreen = () => {
  return (
    <div>
      <Modal open={true}>
        <Box
          sx={{
            width: { xs: 312, sm: 560 },
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
          }}
        >
          <Grid container justifyContent="center">
            <Lottie animationData={LoadingLottie} loop={true} style={{ width: 100 }} />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default LoadingScreen;
