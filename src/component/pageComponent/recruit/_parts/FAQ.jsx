import React, { useState } from 'react';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { gray_light } from '@/component/style/StyleTheme';
import Link from 'next/link';

export default function FAQ() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [currentFAQ, setCurrentFAQ] = useState(null);

  const FAQList = [
    {
      title: '인재풀 등록은 어떻게 하나요?',
      description: isPc ? (
        <Box>
          <Box sx={{ display: 'inline' }}>
            {`수호는 포지션과 채용 인원에 관계 없이 훌륭한 분들을 적극적으로 모셔 오고 있습니다. 현재 채용 중인 포지션에서\n원하는 포지션이 없거나 정하지 못하셨다면, 이 `}
          </Box>
          <Link href="https://gyxk3kqq.ninehire.site/job_posting/8fglGG52/apply" target="_blank">
            <Box sx={{ fontWeight: 600, cursor: 'pointer', display: 'inline' }}>
              <u>링크</u>
            </Box>
          </Link>
          <Box sx={{ display: 'inline' }}>
            {`를 통해 인재풀 등록을 해주세요. 상세히 검토 후 채용 의사가\n있는 분들께 개별적으로 연락을 드리겠습니다.`}
          </Box>
        </Box>
      ) : (
        <Box>
          <Box sx={{ display: 'inline' }}>
            {`수호는 포지션과 채용 인원에 관계 없이 훌륭한 분들을 적극적으로 모셔 오고 있습니다.\n현재 채용 중인 포지션에서 원하는 포지션이 없거나 정하지 못하셨다면, 이 `}
          </Box>
          <Link href="https://gyxk3kqq.ninehire.site/job_posting/8fglGG52/apply" target="_blank">
            <Box sx={{ fontWeight: 600, cursor: 'pointer', display: 'inline' }}>
              <u>링크</u>
            </Box>
          </Link>
          <Box sx={{ display: 'inline' }}>
            {`를 통해 인재풀 등록을 해주세요.\n상세히 검토 후 채용 의사가 있는 분들께 개별적으로 연락을 드리겠습니다.`}
          </Box>
        </Box>
      ),
    },
    {
      title: '서류 심사부터 최종 합격까지 전체 시간이 얼마나 소요되나요?',
      description: isPc
        ? '커피챗부터 최종합격까지 통상 4주 정도 소요되며, 내부 사정에 따라 조금 더 길어지거나 축소될 수 있습니다.'
        : '커피챗부터 최종합격까지 통상 4주 정도 소요되며, 내부 사정에 따라 조금 더 길어지거나 축소될 수 있습니다.',
    },
    {
      title: '채용 서류 반환과 관련된 안내 사항이 있을까요?',
      description: isPc
        ? '수호에서는 현재 오프라인으로 지원 서류를 받고 있지 않습니다. 온라인으로 제출된 서류의 경우, 수호의 개인정보\n처리방침에 따라 보유된 후 파기됩니다. 또한, 서류 제출 시 이력서에 연봉 정보는 반드시 지워주시기 바랍니다. '
        : '수호에서는 현재 오프라인으로 지원 서류를 받고 있지 않습니다. 온라인으로 제출된 서류의 경우, 수호의 개인정보 처리방침에 따라 보유된 후 파기됩니다. 또한, 서류 제출 시 이력서에 연봉 정보는 반드시 지워주시기 바랍니다. ',
    },
    {
      title: '다수의 포지션에 지원해도 되나요?',
      description: isPc
        ? '해당 포지션에 필요한 요건을 가지고 있다면 다수의 포지션에 지원할 수 있습니다.'
        : '해당 포지션에 필요한 요건을 가지고 있다면 다수의 포지션에 지원할 수 있습니다.',
    },
    {
      title: '지원/탈락 경험이 있습니다. 재지원이 가능한가요?',
      description: isPc
        ? '결과 통보일로부터 6개월이 지난 시점부터 재지원이 가능합니다. 앞선 지원에서는 함께하지 못했지만 더욱 성장한\n모습으로 함께 만날 수 있기를 기대합니다.'
        : '결과 통보일로부터 6개월이 지난 시점부터 재지원이 가능합니다. 앞선 지원에서는 함께하지 못했지만 더욱 성장한 모습으로 함께 만날 수 있기를 기대합니다.',
    },
    {
      title: '각 프로세스 소요 시간이 어떻게 되나요?',
      description: (
        <Box>
          <Box sx={{ pl: { xs: '16px', sm: '22px' } }}>
            <ul>
              <li>사전 커피챗 : 약 1시간가량 수호 사내 카페에서 진행됩니다.</li>
              <li>
                (개발직군의 경우) 과제 전형 : 평균적으로 영업일 기준 5일 내외로 수행하실 수 있는
                분량의 과제가 주어집니다.
              </li>
              <li>
                인터뷰 : 컬쳐핏과 실무핏 인터뷰를 각 1시간씩 진행하여 총 2시간 정도 소요되며, 수호
                사무실에서 진행됩니다.
              </li>
              <li>CEO 커피챗 : 약 1시간가량 수호 사내 카페에서 진행됩니다.</li>
            </ul>
          </Box>
          {`직무 특성 및 상황에 따라 프로세스가 달라질 수 있습니다.\n또한, 커피챗/과제/인터뷰 완료 후 평균 이틀 내로 결과 안내를 드리고 있습니다.`}
        </Box>
      ),
    },
    {
      title: '커피챗 혹은 인터뷰 시 건물 내에 주차할 수 있나요?',
      description: isPc
        ? '두 시간 정도의 주차지원이 가능합니다. 다만, 내부 주차 공간이 제한되어 있어 가능한 대중교통 이용을 권장하고 있습니다.'
        : '두 시간 정도의 주차지원이 가능합니다. 다만, 내부 주차 공간이 제한되어 있어 가능한 대중교통 이용을 권장하고 있습니다.',
    },
    {
      title: '수습기간에 대해서 궁금합니다!',
      description: isPc
        ? '수호아이오에서는 3개월의 수습기간 동안 총 4회의 Probation meeting을 통해 신규입사자와 수호와의 핏을 확인 및 맞춰나가고 있습니다.\n수습기간 동안 급여는 동일하게 지급됩니다.'
        : '수호아이오에서는 3개월의 수습기간 동안 총 4회의 Probation meeting을 통해 신규입사자와 수호와의 핏을 확인 및 맞춰나가고 있습니다. 수습기간 동안 급여는 동일하게 지급됩니다.',
    },
    {
      title: '일할 때 공간을 바꾸면서 일해도 괜찮나요?',
      description: isPc
        ? '본인 자리뿐만 아니라 상황에 따라 집중이 잘되는 공간에서 편하게 업무합니다. 카페에서 개발하는 디지, 소파에서 다리를 뻗고\n일하는 짓구, 포커스룸에서 혼자 집중하는 걸 좋아하는 크리스 등 다들 자유로운 공간에서 일하고 있습니다.'
        : '본인 자리뿐만 아니라 상황에 따라 집중이 잘되는 공간에서 편하게 업무합니다. 카페에서 개발하는 디지, 소파에서 다리를 뻗고 일하는 짓구, 포커스룸에서 혼자 집중하는 걸 좋아하는 크리스 등 다들 자유로운 공간에서 일하고 있습니다.',
    },
    {
      title: '블록체인 기술이나 시장에 대해서 잘 몰라도 괜찮나요?',
      description: isPc
        ? '비블록체인 기업에서 오신 분들도 개인적으로 공부하면서 기술에 대해서 학습해나가고 있으며, 블록체인을 잘 아는 멤버들이 상세하게 알려주기도 합니다.\n업무 생산성 높이기 위한 도서나 강의는 100% 지원하고 있기 때문에 배우고자 하는 열정만 있다면 크게 걱정하지 않으셔도 됩니다.'
        : '비블록체인 기업에서 오신 분들도 개인적으로 공부하면서 기술에 대해서 학습해나가고 있으며, 블록체인을 잘 아는 멤버들이 상세하게 알려주기도 합니다. 업무 생산성 높이기 위한 도서나 강의는 100% 지원하고 있기 때문에 배우고자 하는 열정만 있다면 크게 걱정하지 않으셔도 됩니다.',
    },
  ];

  const selectFAQ = index => {
    if (currentFAQ === index) {
      setCurrentFAQ(null);
    } else {
      setCurrentFAQ(index);
    }
  };

  return (
    <BodyContainer ptPc="68px" ptMob="24px">
      <Typography
        component="div"
        className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
        color="primary"
        fontWeight={600}
      >
        <Box sx={{ mb: { xs: '8px', sm: '16px' } }}>자주 묻는 질문 FAQ</Box>
      </Typography>

      {FAQList.map(function (each, index) {
        return (
          <Box
            key={each.title}
            sx={{
              borderBottom: `1px solid ${currentFAQ === index ? '#FFFFFF' : '#5F5F5F'}`,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              onClick={() => selectFAQ(index)}
              sx={{
                width: 1,
                cursor: 'pointer',
                py: { xs: '16px', sm: '22px' },
                ':hover': { opacity: 0.8 },
              }}
            >
              <Typography
                className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                component="div"
                color="#FFFFFF"
                fontWeight={{ xs: 600, sm: 400 }}
              >
                {each.title}
              </Typography>
              <CardMedia
                image={`/image/icon/arrow${currentFAQ === index ? 'Up' : 'Down'}.png`}
                sx={{
                  width: { xs: '20px', sm: '32px' },
                  height: { xs: '20px', sm: '32px' },
                }}
              />
            </Stack>
            {currentFAQ === index && (
              <Box className="smoothAppear">
                <Typography
                  className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                  component="div"
                  color={gray_light}
                  fontWeight={300}
                >
                  <Box
                    sx={{ pl: { sm: '24px' }, mt: { sm: '-2px' }, pb: { xs: '16px', sm: '24px' } }}
                  >
                    {each.description}
                  </Box>
                </Typography>
              </Box>
            )}
          </Box>
        );
      })}
    </BodyContainer>
  );
}
