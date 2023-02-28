import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusPc, gray } from '@/component/style/StyleTheme';

export default function FirstSection({ currentProduct, setCurrentProduct }) {
  const buttonList = ['KLEVA', 'StayKing', 'Martian'];
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const selectButton = product => {
    product !== 'Martian' && setCurrentProduct(product);
  };

  return (
    <BodyContainer ptPc="152px" ptMob="20px" pbPc="0px" pbMob="0px">
      <Typography
        align="center"
        className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
        color="primary"
        fontWeight={600}
      >
        DeFi Product
      </Typography>

      <Typography
        align="center"
        className={isMob ? 'mobBody10KR' : 'pcPoint20KR'}
        fontWeight={500}
        color="#5F5F5F"
        sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '16px', sm: '48px' } }}
      >
        made by SOOHO
      </Typography>

      <Typography
        component="div"
        align="center"
        className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
        fontWeight={300}
        color="#FFFFFF"
        sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '16px', sm: '48px' } }}
      >
        <Box sx={{ mb: { xs: '16px', sm: '24px' } }}>
          {`수호는 기업과의 협업뿐만 아니라,\n자체적으로 개인 투자자를 위한 프로덕트를\n만들고 운영하고있습니다.`}
        </Box>
        <Box>
          {`더 많은 체인 위에서 고도화된 투자 경험을 제공하고,\n다양한 체인을 연결하여 경험을 확장하고자 합니다.`}
        </Box>
      </Typography>

      {/* 버튼 영역 */}
      <Grid container spacing={{ xs: '12px', sm: '16px' }} sx={{ mt: { xs: '52px', sm: '136px' } }}>
        {buttonList.map(function (each) {
          // Martian의 경우 툴팁 생성
          if (each === 'Martian') {
            return (
              <Grid key={each} item xs={4}>
                <Tooltip
                  arrow
                  enterTouchDelay={0}
                  placement="top"
                  title={
                    <Typography
                      className={isMob ? 'mobBody10KR' : 'pcBody18KR'}
                      sx={{ fontWeight: 300 }}
                    >
                      Coming soon
                    </Typography>
                  }
                  componentsProps={{
                    tooltip: {
                      sx: {
                        paddingX: { xs: '13.5px', sm: '34px' },
                        paddingY: { xs: '5.5px', sm: '16px' },
                        maxWidth: 1000,
                        borderRadius: { xs: '4px', sm: '8px' },
                        // 툹팁 배경색
                        bgcolor: gray,
                        '& .MuiTooltip-arrow': {
                          // 툴팁 글자 색상
                          color: '#FFFFFFF',
                        },
                        // 위치 조정
                        top: { xs: 12, sm: 0 },
                      },
                    },
                  }}
                >
                  <Button
                    onClick={() => selectButton(each)}
                    color={each === 'Martian' ? 'gray' : 'white'}
                    variant={currentProduct === each ? 'contained' : 'outlined'}
                    sx={{
                      width: 1,
                      py: { sm: '25px' },
                      fontSize: { xs: '12px', sm: '24px' },
                      borderRadius: { xs: '4px', sm: borderRadiusPc },
                      borderWidth: { xs: '1px', sm: '2px' },
                      ':hover': {
                        borderWidth: { sm: '2px' },
                      },
                    }}
                  >
                    {each}
                  </Button>
                </Tooltip>
              </Grid>
            );
          } else {
            // 그 외에는 단순 버튼
            return (
              <Grid key={each} item xs={4}>
                <Button
                  onClick={() => selectButton(each)}
                  color={each === 'Martian' ? 'gray' : 'white'}
                  variant={currentProduct === each ? 'contained' : 'outlined'}
                  sx={{
                    width: 1,
                    py: { sm: '25px' },
                    fontSize: { xs: '12px', sm: '24px' },
                    borderRadius: { xs: '4px', sm: borderRadiusPc },
                    borderWidth: { xs: '1px', sm: '2px' },
                    ':hover': {
                      borderWidth: { sm: '2px' },
                    },
                  }}
                >
                  {each}
                </Button>
              </Grid>
            );
          }
        })}
      </Grid>
    </BodyContainer>
  );
}
