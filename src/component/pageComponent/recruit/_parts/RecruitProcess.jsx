import React, { useState } from 'react';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusMob, borderRadiusPc, gray_light } from '@/component/style/StyleTheme';

export default function RecruitProcess() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [currentProcess, setCurrentProcess] = useState(0);

  const processList = [
    {
      label: '01 서류 전형',
      description: '접수해주신 이력서 혹은 포트폴리오를 통해 지원 자격을 면밀히 검토합니다.',
    },
    {
      label: '02 사전 커피챗',
      description:
        '수호와 지원자에 대해 궁금한 점을 서로 자유롭게 묻고 답하며, 정식 프로세스 진행 여부를 결정합니다.',
    },
    {
      label: '03 과제 전형',
      description: '테크니컬 스크리닝이 필요한 직무의 경우 과제 전형을 진행합니다. (과제비 지급)',
    },
    {
      label: '04 인터뷰',
      description:
        '컬쳐핏&실무핏 인터뷰를 통해 지원자분의 역량과 수호와의 핏을 확인합니다. (면접비 지급)',
    },
    {
      label: '05 CEO 커피챗',
      description: 'R&R과 커리어 로드맵, 합류 여부를 최종 검토합니다.',
    },
    {
      label: '06 처우 협의',
      description: '근무 조건과 출근 날짜를 최종 협의합니다.',
    },
  ];

  const selectProcess = index => {
    setCurrentProcess(index);
  };

  return (
    <BodyContainer ptPc="64px" pbPc="60px" ptMob="22px" pbMob="24px">
      <Typography
        component="div"
        className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
        color="primary"
        fontWeight={600}
      >
        <Box sx={{ mb: { xs: '24px', sm: '40px' } }}>수호자 채용 프로세스</Box>
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: '8px', sm: '16px' }}
        rowSpacing={{ xs: '8px', sm: '16px' }}
      >
        {processList.map(function (each, index) {
          return (
            <Grid key={each.label} item xs={4} lg={2}>
              <Typography
                component="div"
                className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                color="#FFFFFF"
                fontWeight={currentProcess === index ? 600 : 300}
                align="center"
              >
                <Box
                  onClick={() => selectProcess(index)}
                  sx={[
                    currentProcess === index && { backgroundColor: '#2B2B2B' },
                    {
                      width: 1,
                      py: { xs: '11px', sm: '23px' },
                      border: '1px solid #FFFFFF',
                      borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                      cursor: 'pointer',
                      ':hover': {
                        backgroundColor: '#2B2B2B',
                        fontWeight: 600,
                      },
                    },
                  ]}
                >
                  {each.label}
                </Box>
              </Typography>
            </Grid>
          );
        })}
      </Grid>

      <Typography
        component="div"
        className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
        color="#FFFFFF"
        fontWeight={300}
      >
        <Box sx={{ mt: { xs: '24px', sm: '40px' } }}>{processList[currentProcess].description}</Box>
      </Typography>
    </BodyContainer>
  );
}
