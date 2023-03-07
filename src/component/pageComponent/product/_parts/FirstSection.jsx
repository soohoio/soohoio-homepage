import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusPc, gray } from '@/component/style/StyleTheme';
import ObserverAnimation from '@/component/ui/ObserverAnimation';
import { useTranslation } from 'next-i18next';

export default function FirstSection({ currentProduct, setCurrentProduct }) {
  const buttonList = ['KLEVA', 'StayKing', 'Martian'];
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('product');

  const selectButton = product => {
    product !== 'Martian' && setCurrentProduct(product);
  };

  return (
    <BodyContainer ptPc="152px" ptMob="20px" pbPc="0px" pbMob="0px">
      <ObserverAnimation>
        <Typography
          align="center"
          className={isMob ? 'mobTitle24KR' : 'pcTitle56KR'}
          color="primary"
          fontWeight={600}
        >
          DeFi Products
        </Typography>

        <Typography
          align="center"
          className={isMob ? 'mobBody10KR' : 'pcPoint20KR'}
          fontWeight={300}
          color="#5F5F5F"
          sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '16px', sm: '48px' } }}
        >
          Developed by SOOHO
        </Typography>

        <Typography
          component="div"
          align="center"
          className={isMob ? 'mobBody14KR' : 'pcBody24KR'}
          fontWeight={300}
          color="#FFFFFF"
          sx={{ mt: { xs: '8px', sm: '16px' }, mb: { xs: '16px', sm: '48px' } }}
        >
          <Box sx={{ mb: { xs: '16px', sm: '24px' }, maxWidth: '800px', mx: 'auto' }}>
            {t('firstSection.title1')}
          </Box>
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>{t('firstSection.title2')}</Box>
        </Typography>

        {/* 버튼 영역 */}
        <Grid
          container
          spacing={{ xs: '12px', sm: '16px' }}
          sx={{ mt: { xs: '52px', sm: '136px' } }}
        >
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
                        fontWeight: 300,
                        width: 1,
                        py: { sm: '25px' },
                        fontSize: { xs: '12px', sm: '24px' },
                        borderRadius: { xs: '4px', sm: borderRadiusPc },
                        borderWidth: { xs: '1px', sm: '2px' },
                        ':hover': {
                          borderWidth: { sm: '2px' },
                          fontWeight: 600,
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
                    sx={[
                      currentProduct === each ? { fontWeight: 600 } : { fontWeight: 300 },
                      {
                        width: 1,
                        py: { sm: '25px' },
                        fontSize: { xs: '12px', sm: '24px' },
                        borderRadius: { xs: '4px', sm: borderRadiusPc },
                        borderWidth: { xs: '1px', sm: '2px' },
                        ':hover': {
                          borderWidth: { sm: '2px' },
                          fontWeight: 600,
                        },
                      },
                    ]}
                  >
                    {each}
                  </Button>
                </Grid>
              );
            }
          })}
        </Grid>
      </ObserverAnimation>
    </BodyContainer>
  );
}
