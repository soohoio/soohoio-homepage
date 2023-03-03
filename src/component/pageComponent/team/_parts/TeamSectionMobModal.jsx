import { Box, Button, CardMedia, Grid, Modal, Stack, Tooltip, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { black } from '@/component/style/StyleTheme';

// 모바일 모달
export default function TeamSectionMobModal({
  modalSwitch,
  modalClose,
  selectedCard,
  recruitNumber,
}) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const goToLink = (link, type) => {
    if (type === 'external') {
      window.open(link);
    } else {
      router.push(link);
    }
  };

  return (
    <Modal open={modalSwitch} onClose={modalClose}>
      <Box
        className="smoothAppear"
        sx={{
          width: 1,
          height: 1,
          outline: 'none',
          px: { xs: '24px' },
          pt: { xs: '24px' },
          pb: { xs: '48px' },
          boxSizing: 'border-box',
          background: `url(/image/pageImage/team/${
            selectedCard && selectedCard.background
          }BlurMob.png)`,
          backgroundSize: 'cover',
          zIndex: 100,
        }}
      >
        <Stack direction="column" justifyContent="space-between" sx={{ height: 1 }}>
          <Box>
            <Stack direction="row" justifyContent="flex-end">
              <CardMedia
                onClick={modalClose}
                image={`/image/icon/cancelCircle.png`}
                sx={{
                  width: { xs: '20px' },
                  height: { xs: '20px' },
                  cursor: 'pointer',
                }}
              />
            </Stack>

            <Typography
              component="div"
              className={isMob ? 'mobTitle19KR' : 'pcTitle24KR'}
              color="primary"
              fontWeight={600}
            >
              <Box sx={{ mt: '4px', mb: '32px' }}>{selectedCard?.label}</Box>
            </Typography>

            <Typography
              component="div"
              className={isMob ? 'moBody14KR' : 'pcBody18KR'}
              color="#FFFFFF"
              fontWeight={300}
            >
              {selectedCard?.hoverDescription}
            </Typography>
          </Box>
          <Box>
            {recruitNumber && recruitNumber[selectedCard?.label] && (
              <Box sx={{ position: 'relative' }}>
                <Typography
                  component="div"
                  align="center"
                  fontSize="12px"
                  fontWeight={600}
                  color={black}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      px: '9px',
                      py: '1px',
                      border: '1px solid #00F2C3',
                      borderRadius: '120px',
                      background: 'rgba(0, 242, 195, 0.8)',
                      position: 'absolute',
                      top: -15,
                      right: 0,
                      zIndex: 1000,
                    }}
                  >
                    {recruitNumber[selectedCard.label]}
                  </Box>
                </Typography>
                <MUIOutlinedButton
                  text="Open Position"
                  color="#FFFFFF"
                  hoverColor="#FFFFFF"
                  sx={{ width: 1 }}
                />
              </Box>
            )}
            {selectedCard && selectedCard.interview && (
              <MUIOutlinedButton
                onClick={() => goToLink(selectedCard.interview, 'external')}
                text="InterView"
                color="#FFFFFF"
                hoverColor="#FFFFFF"
                sx={{ width: 1, mt: '12px' }}
              />
            )}
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}
