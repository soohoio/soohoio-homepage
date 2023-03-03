import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, CardMedia, Grid, Stack, Tooltip, Typography } from '@mui/material';
import {
  black,
  borderRadiusMob,
  borderRadiusPc,
  gray,
  primary,
} from '@/component/style/StyleTheme';
import { useContext, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function CulturePoint() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const [selectedCard, setSelectedCard] = useState(null);

  const cultureList = [
    {
      number: '01',
      title: 'Self Managing',
      description: isTablet
        ? '셀프 매니징을 통해 스스로 검증하고 발전하여 믿음에 보답합니다.'
        : '셀프 매니징을 통해 스스로 검증하고\n발전하여 믿음에 보답합니다.',
      img: 'selfManagingBg',
      imgText: '“높은 자율성이 높은 생산성으로 이어진다고 믿어요.”',
      hoverText:
        '수호에서는 서로를 먼저 신뢰함으로써 모두가 높은 자율과 책임을 지닙니다. 문제 정의를 통해 목표를 명확하게 설정하고 다른 팀원들과 공유한 후, 온전히 주도적으로 목표 달성 방법을 설계하고 실행합니다.',
      pointList: [
        {
          point: '1 on 1 미팅',
          description: isPc
            ? '팀 리드와의 주기적인 미팅을 통해 수호에서 이루고 싶은 목표가\n무엇인지 지속적으로 질문하고 함께 탐구해요.'
            : '팀 리드와의 주기적인 미팅을 통해 수호에서 이루고 싶은 목표가 무엇인지 지속적으로 질문하고 함께 탐구해요.',
        },
        {
          point: '자발적인 TF 프로젝트',
          description: isPc
            ? '누구나 하고 싶은 프로젝트나 탐구하고 싶은 분야가 있다면\n주도적으로 팀을 모집하고 진행해요.'
            : '누구나 하고 싶은 프로젝트나 탐구하고 싶은 분야가 있다면 주도적으로 팀을 모집하고 진행해요.',
        },
        {
          point: '자율적인 근무 환경',
          description: isPc
            ? '팀별 업무 일정에 맞춰 자율적으로 근무 시간과 장소를 정할 수 있어요.\n집, 넓은 회사 카페, 포커스룸 어디서든!'
            : '팀별 업무 일정에 맞춰 자율적으로 근무 시간과 장소를 정할 수 있어요. 집, 넓은 회사 카페, 포커스룸 어디서든!',
        },
        {
          point: '개인 법인 카드 지급',
          description: isPc
            ? '높은 신뢰를 바탕으로 팀원 모두가 1인 1개\n법인카드를 자율적으로 사용해요.'
            : '높은 신뢰를 바탕으로 팀원 모두가 1인 1개 법인카드를 자율적으로 사용해요.',
        },
      ],
    },
    {
      number: '02',
      title: 'Open Communication',
      description: isTablet
        ? '어떠한 이유로도 서로를 구분 짓지 않고 다양한 관점을 나눕니다.'
        : '어떠한 이유로도 서로를 구분 짓지 않고\n다양한 관점을 나눕니다.',
      img: 'openCommunicationBg',
      imgText: '“서로 다르기 때문에 시너지가 나는 거죠.”',
      hoverText:
        '목표를 달성하기 위한 것이라면 언제든지 의견을 자유롭게 주고 받을 수 있습니다. 단, 건강한 방법으로 의견을 전달하고 나와 다른 의견 또한 존중하며 들을 수 있어야 하죠. 나의 강점과 약점을 명확하게 알고 적극적으로 도움을 주고 받기를 기대합니다.',
      pointList: [
        {
          point: 'NEW 수호자 커피챗',
          description: isPc
            ? '신규 입사자는 모든 팀과 커피챗을 진행해요. 커피챗은 우리가\n서로 연결되기 위한 기반을 잘 다져주는 역할을 해요.'
            : '신규 입사자는 모든 팀과 커피챗을 진행해요. 커피챗은 우리가 서로 연결되기 위한 기반을 잘 다져주는 역할을 해요.',
        },
        {
          point: '비즈니스 지원 요청',
          description: isPc
            ? '수호에서 개선되었으면 하는 점, 목표 달성을 위해 필요한 도움 등을\n자유롭게 이야기하는 창구를 운영하고 있어요.'
            : '수호에서 개선되었으면 하는 점, 목표 달성을 위해 필요한 도움 등을 자유롭게 이야기하는 창구를 운영하고 있어요.',
        },
        {
          point: '오픈된 정보',
          description: isPc
            ? '업무에 필요한 정보는 전체 공개를 원칙으로 하고 있어요.\n누구나 들여다보고, 필요하다면 의견을 남길 수 있어요.'
            : '업무에 필요한 정보는 전체 공개를 원칙으로 하고 있어요. 누구나 들여다보고, 필요하다면 의견을 남길 수 있어요.',
        },
        {
          point: '올핸즈 세션',
          description: isPc
            ? '분기마다 수호의 방향성을 공유하고 활발한 Q&A를 주고받아요.\n누구든 공개적으로 질문하고 답변할 수 있어요.'
            : '분기마다 수호의 방향성을 공유하고 활발한 Q&A를 주고받아요. 누구든 공개적으로 질문하고 답변할 수 있어요.',
        },
      ],
    },
    {
      number: '03',
      title: 'Why Questioning',
      description: '지속적으로 문제를 발견하고\n집요하게 파고듭니다.',
      img: 'whyQuestioningBg',
      imgText: '“깊은 고민과 경험은 타인에게 영감을 줘요.”',
      hoverText:
        '수호에서는 계속해서 ‘Why’를 질문합니다. 문제에 대해 더 깊게 고민하고 새로운 영역을 탐구할 수 있게 하기 위함이죠. 본질적인 문제 정의 과정은 더 임팩트 있는 해결로 이어지며, 이를 통해 얻은 인사이트는 다른 사람들까지 성장시킬 수 있습니다.',
      pointList: [
        {
          point: '셀프 스터디 지원',
          description: isPc
            ? '문제 해결을 위해 필요한 모든 배움에 대한 노력을 존중하며, 도서 및\n강의와 사내 스터디를 지원해요.'
            : '문제 해결을 위해 필요한 모든 배움에 대한 노력을 존중하며, 도서 및 강의와 사내 스터디를 지원해요.',
        },
        {
          point: '의사 결정 프로세스',
          description: isPc
            ? '전사 목표나 제도를 세우는 과정에서도 충분한 문제 정의 과정을 거치며,\n논리와 근거를 전사에 공유해요.'
            : '전사 목표나 제도를 세우는 과정에서도 충분한 문제 정의 과정을 거치며, 논리와 근거를 전사에 공유해요.',
        },
        {
          point: '스포트라이트 세션',
          description: isPc
            ? '상반기, 하반기에 한 번 팀별 스포트라이트 세션을 통해 지난 문제 해결\n과정에서 얻은 인사이트를 공유해요.'
            : '상반기, 하반기에 한 번 팀별 스포트라이트 세션을 통해 지난 문제 해결 과정에서 얻은 인사이트를 공유해요.',
        },
        {
          point: '중간 회고',
          description: isPc
            ? '프로젝트 결과에 대한 회고뿐만이 아닌, 중간 과정에서의 회고를\n통해 문제를 다시 한번 점검하고 목표 달성률을 높여요.'
            : '프로젝트 결과에 대한 회고뿐만이 아닌, 중간 과정에서의 회고를 통해 문제를 다시 한번 점검하고 목표 달성률을 높여요.',
        },
      ],
    },
  ];

  const selectCard = each => {
    setSelectedCard(each);
  };

  return (
    <BodyContainer ptPc="152px" ptMob="56px" pbPc="164px" pbMob="64px">
      {cultureList.map(function (each, index) {
        return (
          <Box
            key={each.number}
            sx={{
              mb: {
                xs: index === cultureList.length - 1 ? '0px' : '48px',
                sm: index === cultureList.length - 1 ? '0px' : '167px',
              },
            }}
          >
            {/* 01. ~~ */}
            <Typography
              component="div"
              className={isMob ? 'mobTitle14KR' : 'pcTitle24KR'}
              fontWeight={600}
              color="#FFFFFF"
            >
              <Box sx={{ display: 'inline', color: primary, mr: { xs: '6px', sm: '16px' } }}>
                {each.number}
              </Box>
              <Box sx={{ display: 'inline' }}>{each.title}</Box>
            </Typography>

            {/* 큰 텍스트 설명 */}
            <Typography
              component="div"
              className={isMob ? 'mobTitle19KR' : 'pcTitle56KR'}
              fontWeight={300}
              color="#FFFFFF"
            >
              <Box sx={{ mt: { xs: '12px', sm: '40px' }, mb: { xs: '18px', sm: '56px' } }}>
                {each.description}
              </Box>
            </Typography>

            {/* 사진 & 텍스트 영역 */}
            <Box
              onClick={() => selectCard(each)}
              onMouseOver={() => selectCard(each)}
              onMouseOut={() => selectCard(null)}
              sx={{
                width: 1,
                aspectRatio: { xs: '312/184', sm: '1328/420' },
                height: { xs: '184px', sm: '420px' },
                borderRadius: { xs: '8px', sm: '16px' },
                boxSizing: 'border-box',
                background: `url(/image/pageImage/team/${each.img}${isMob ? 'Mob' : ''}.png)`,
                backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                mb: { xs: '24px', sm: '56px' },
              }}
            >
              <Box
                sx={{
                  height: 1,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 1,
                  height: 1,
                  p: { xs: '14px', sm: '48px' },
                  transition: 'backdrop-filter 0.3s ease-in-out',
                  backdropFilter: selectedCard?.number === each.number ? 'blur(10px)' : 'none',
                  boxSizing: 'border-box',
                }}
              >
                <Stack direction="column" justifyContent="space-between" sx={{ height: 1 }}>
                  <Stack direction="row" justifyContent="flex-end">
                    {selectedCard?.number === each.number ? (
                      <Box />
                    ) : (
                      <CardMedia
                        image={`/image/icon/plusCircle.png`}
                        sx={{
                          width: { xs: '20px', sm: '40px' },
                          height: { xs: '20px', sm: '40px' },
                        }}
                      />
                    )}
                  </Stack>
                  <Box>
                    <Typography
                      component="div"
                      className={
                        isMob
                          ? `mobTitle${selectedCard?.number === each.number ? '14' : '16'}KR`
                          : `pcTitle${selectedCard?.number === each.number ? '32' : '36'}KR`
                      }
                      fontWeight={600}
                      color="#FFFFFF"
                    >
                      <Box>{each.imgText}</Box>
                    </Typography>

                    {selectedCard?.number === each.number && (
                      <Typography
                        component="div"
                        className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                        fontWeight={300}
                        color="#FFFFFF"
                      >
                        <Box
                          className="smoothAppearSlow"
                          sx={{ mt: { xs: '12px', sm: '32px' }, maxWidth: '650px' }}
                        >
                          {each.hoverText}
                        </Box>
                      </Typography>
                    )}
                  </Box>
                </Stack>
              </Box>
            </Box>

            {/* 포인트 */}
            <Grid container spacing={{ xs: '8px', sm: '16px' }}>
              {each.pointList.map(function (eachPoint) {
                return (
                  <Grid item xs={6} key={eachPoint.point}>
                    <Box
                      sx={{
                        p: { xs: '14px', sm: '24px' },
                        height: 1,
                        backgroundColor: black,
                        borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                        boxSizing: 'border-box',
                      }}
                    >
                      <Typography
                        component="div"
                        className={isMob ? 'mobTitle14KR' : 'pcBody20KR'}
                        fontWeight={600}
                        color="#FFFFFF"
                      >
                        <Box sx={{ mb: { xs: '12px', sm: '16px' } }}>{eachPoint.point}</Box>
                      </Typography>

                      <Typography
                        component="div"
                        className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                        fontWeight={300}
                        color={gray}
                      >
                        <Box>{eachPoint.description}</Box>
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </BodyContainer>
  );
}
