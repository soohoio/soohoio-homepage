import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, Button, CardMedia, Grid, Stack, Tooltip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { black, gray, gray_light } from '@/component/style/StyleTheme';
import TeamSectionMobModal from './TeamSectionMobModal';
import axios from 'axios';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { useRouter } from 'next/router';

export default function TeamSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();

  const [selectedCard, setSelectedCard] = useState(null);
  const [modalSwitch, setModalSwitch] = useState(false);

  const teamData = [
    // Product Team
    {
      label: 'Product Team',
      description:
        '빠른 가설 검증을 통해 프로덕트의 가치를 증명하고\n독립적인 회사로 성장시킵니다.',
      dataList: [
        {
          label: 'DeFi Product',
          description:
            '전 세계의 모든 탈중앙화 금융상품의 창구를 만들어, 모두가 DeFi를 빠르고 안전하게 이용할 수 있도록 돕습니다.',
          hoverDescription: (
            <Box>
              <Box sx={{ display: 'inline' }}>
                {`블록체인 생태계 개척자로서의 자부심을 갖고 생태계에 기여할 수 있는 프로덕트 `}
              </Box>
              <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                <u>{`DeFi`}</u>
              </Box>
              <Box sx={{ display: 'inline' }}>{`와 `}</Box>

              <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                <u>{`KLEVA`}</u>
              </Box>
              <Box sx={{ display: 'inline' }}>
                {`를 만들고 있습니다.\n\nDeFi 프로덕트의 퀄리티와 성숙도를 높이기 위해 Technology, Tokenomics, 그리고 Decentralization 분야를 연구합니다.\n\nDeFi 프로덕트가 사회, 경제에 미치는 영향을 인지하고, 이에 대한 책임감을 바탕으로 올바른 탈중앙화에 대해 고민합니다.`}
              </Box>
            </Box>
          ),
          background: 'defiProduct',
        },
        {
          label: 'StayKing',
          description: '편리하고 효과적인 수호 자체 탈중앙화 금융상품을 개발합니다.',
          hoverDescription: (
            <Box>
              <Box sx={{ display: 'inline' }}>
                {`Evmos 및 Cosmos 체인 유일의 Leveraged Staking 서비스 `}
              </Box>
              <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                <u>{`StayKing`}</u>
              </Box>
              <Box
                sx={{ display: 'inline' }}
              >{`을 개발하여 2022년 10월 Evmos 해커톤 전 부문 1위를 수상했습니다.\n\n일정 기간 동안 지분 증명에 참여한 유저가 기여한 토큰 양에 비례하여 받는 스테이킹 보상을 최대화할 수 있는 방법을 연구합니다.\n\n더 많은 사람들이 블록체인 기술의 혜택을 누릴 수 있도록 그 방식과 효용에 대해 유저의 입장에서 고민합니다.`}</Box>
            </Box>
          ),
          background: 'stayking',
        },
      ],
    },
    // HeadQuarter
    {
      label: 'Headquarter',
      description:
        '조직 관리, 프로덕트 지원 등 다양한 분야에서\n전문성을 발휘하여 수호의 성장을 함께 이끕니다.',
      dataList: [
        {
          label: 'Security',
          description: '보안 연구를 통해 안전한 블록체인 생태계에 기여합니다.',
          hoverDescription: (
            <Box>
              <Box sx={{ display: 'inline' }}>
                {`해킹 위험으로부터 블록체인 서비스를 보호하기 위해 스마트 컨트랙트 취약점을 찾아내고 패치할 방법을 제시합니다.\n\n취약점을 자동으로 찾아주고 블록체인 개발에 도움을 주는 도구들을 개발하고 운영합니다.\n\n수호의 레드팀 `}
              </Box>
              <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                <u>{`MATZIP`}</u>
              </Box>
              <Box
                sx={{ display: 'inline' }}
              >{`을 결성하여 해킹 활동 및 자율 연구를 함으로써 기술력을 강화하고 인재를 양성하고 있습니다.`}</Box>
            </Box>
          ),
          background: 'security',
          interview: 'https://blog.sooho.io/people_interview_security_researcher/',
        },
        {
          label: 'Human Resources',
          description: '수호다운 인재를 영입하고 하이 퍼포먼스 조직을 구축합니다.',
          hoverDescription: (
            <Box>
              {`빠른 성장 속도와 전문성이 강점인 수호에 적합한 채용 전략을 세우고, 인재 파이프라인을 관리하여 적재적소에 인력을 충원합니다.\n\n예비 수호자들이 수호를 만나는 모든 채용 접점에서 만족할만한 경험을 할 수 있도록 채용 프로세스를 지속적으로 개선하고, 입사 후 역량과 잠재력을 발휘할 수 있는 R&R을 부여합니다.\n\n사업 전략에 부합하는 조직 형태에 대해 고민하고, 수호자 모두가 개인이자 팀으로서 High-Performance를 낼 수 있도록 최적화된 조직을 구축합니다.`}
            </Box>
          ),
          background: 'human',
        },
        {
          label: 'Organization eXperience',
          description: '구성원들이 느끼는 사소한 불편함까지 해결합니다.',
          hoverDescription: (
            <Box>
              {`조직 내 문제의 발생 원인 파악과 해결 그리고 개선까지 모든 것을 담당합니다.\n\n다양한 워크플로우를 만들고 이를 뒷받침 할 수 있는 규정과 프로세스를 도입하며, 수호자들이 업무에 더욱 집중할 수 있도록 온/오프라인 업무 환경을 지속적으로 개선 및 관리합니다.\n\n재무/회계의 집행을 주도하며, 한정적인 자원이 어떻게 쓰이는지 추적/관리하며 개선하고, 매출(지원금, 정부과제)을 발생시킵니다.`}
            </Box>
          ),
          background: 'organization',
        },
        {
          label: 'Community Strategy',
          description: '프로덕트가 타겟하는 커뮤니티를 이해하고 활성화합니다.',
          hoverDescription: (
            <Box>
              {`수호의 프로덕트를 경험하는 사람들이 수호의 진정한 팬이 될 수 있도록 커뮤니티를 관리합니다.\n\n수호 카페 공간을 이용하여 다양한 오프라인 커뮤니티 행사를 개최하고 이들에게 수호를 알립니다.\n\n커뮤니티를 단단하게 연결할 수 있는 NFT 프로젝트를 기획하고 운영합니다.`}
            </Box>
          ),
          background: 'community',
        },
        {
          label: 'Brand eXperience',
          description: "'수호다움'을 정립하고 수호의 가치를 전파합니다.",
          hoverDescription: (
            <Box>
              {`수호의 프로덕트를 경험하는 사람들이 수호의 진정한 팬이 될 수 있도록 커뮤니티를 관리합니다.\n\n수호 카페 공간을 이용하여 다양한 오프라인 커뮤니티 행사를 개최하고 이들에게 수호를 알립니다.\n\n커뮤니티를 단단하게 연결할 수 있는 NFT 프로젝트를 기획하고 운영합니다.`}
            </Box>
          ),
          background: 'bx',
        },
      ],
    },
    // Corp Dev
    {
      label: 'Corp Dev',
      description:
        'CEO 직속 팀으로서, 수호가 목표를 달성할 수 있도록\n전략을 세우고 프로덕트의 사업화를 서포트합니다.',
      dataList: [
        {
          label: 'Corporate Development',
          description: '수호가 퀀텀 점프를 할 수 있도록 기업 가치를 극대화합니다.',
          hoverDescription: (
            <Box>
              {`수호의 전사 목표와 목표에 따른 조직·사업·제품 전략을 수립하고, 목표 및 전략에 맞게 수호가 One Team으로 나아갈 수 있도록 관리합니다.\n\n국내외 투자자를 대상으로 IR 전략을 수립하고 펀드레이징을 관리합니다.\n\nDeFi 산업 전반에 관한 다양한 프로젝트의 사업성을 검토하고, 심도 있는 매크로 분석을 통해 새로운 기회를 발굴하고 실현합니다.`}
            </Box>
          ),
          background: 'corp',
        },
      ],
    },
  ];

  useEffect(() => {
    fetchNumber();
  }, []);

  // 팀 별 모집 인원
  const corsURL = `https://cors-anywhere.herokuapp.com/`;
  const notionKey = process.env.NEXT_PUBLIC_NOTION_SECRET_KEY;
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  const notionURL = `https://api.notion.com/v1/databases/${databaseId}/query`;
  const [recruitNumber, setRecruitNumber] = useState(null);

  // 소속 & 직무 목록 받아오기
  async function fetchNumber() {
    const url = `${corsURL}${notionURL}`;

    try {
      const notionData = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${notionKey}`,
            'Notion-Version': '2021-08-16',
          },
        },
      );

      let result = {};
      notionData.data.results.map(function (each) {
        if (result[`${each.properties.team.select.name}`]) {
          result[`${each.properties.team.select.name}`] += 1;
        } else {
          result[`${each.properties.team.select.name}`] = 1;
        }
      });
      setRecruitNumber(result);

      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const selectCard = data => {
    if (!modalSwitch) {
      setSelectedCard(data);
      isMob && openModal();
    }
  };

  const openModal = () => {
    setModalSwitch(true);
  };

  const closeModal = () => {
    setModalSwitch(false);
  };

  const goToLink = (link, type) => {
    if (type === 'external') {
      window.open(link);
    } else {
      router.push(link);
    }
  };

  return (
    <BodyContainer ptPc="152px" ptMob="56px" pbPc="12px" pbMob="32px">
      {teamData.map(function (eachTeam, index) {
        return (
          <Box
            key={eachTeam.label}
            sx={{ mb: { xs: index === teamData.length - 1 ? '0px' : '56px', sm: '120px' } }}
          >
            {/* 소개 텍스트 영역 */}
            <Typography
              component="div"
              className={isMob ? 'mobBody12KR' : 'pcBody24KR'}
              fontWeight={600}
              color="#FFFFFF"
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  px: { xs: '12px', sm: '17px' },
                  py: { xs: '7px', sm: '14px' },
                  backgroundColor: black,
                  borderRadius: { xs: '4px', sm: '8px' },
                  mb: { xs: '12px', sm: '25px' },
                }}
              >
                {eachTeam.label}
              </Box>
            </Typography>

            <Typography
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
              fontWeight={300}
              color={gray}
            >
              <Box sx={{ mb: { xs: '24px', sm: '40px' } }}>{eachTeam.description}</Box>
            </Typography>

            {/* 카드 섹션 */}
            <Grid container spacing={{ xs: '16px', sm: '16px' }}>
              {eachTeam.dataList.map(function (each) {
                return (
                  <Grid item xs={12} sm={6} key={each.label}>
                    <Box
                      key={each.label}
                      onClick={() => selectCard(each)}
                      onMouseOver={() => selectCard(each)}
                      onMouseOut={() => selectCard(null)}
                      sx={{
                        width: 1,
                        aspectRatio: '656/570',
                        borderRadius: { xs: '8px', sm: '16px' },
                        boxSizing: 'border-box',
                        background: `url(/image/pageImage/team/${each.background}bg.png)`,
                        backgroundSize: 'cover',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          p: { xs: '16px', sm: '32px', lg: '48px' },
                          width: 1,
                          height: 1,
                          transition: 'backdrop-filter 0.3s ease-in-out',
                          backdropFilter:
                            !isMob && selectedCard?.label === each.label ? 'blur(8px)' : 'none',
                          boxSizing: 'border-box',
                        }}
                      >
                        <Stack direction="column" justifyContent="space-between" sx={{ height: 1 }}>
                          <Box>
                            <Stack direction="row" justifyContent="space-between">
                              <Typography
                                component="div"
                                className={
                                  isMob
                                    ? 'mobTitle19KR'
                                    : `pcTitle${selectedCard?.label === each.label ? '32' : '36'}KR`
                                }
                                fontWeight={600}
                                color="primary"
                                sx={{ transition: 'font-size 0.55s ease-out' }}
                              >
                                {each.label}
                              </Typography>
                              {!isMob && selectedCard?.label !== each.label && (
                                <CardMedia
                                  image={`/image/icon/plusCircle.png`}
                                  sx={{
                                    width: { xs: '20px', sm: '40px' },
                                    height: { xs: '20px', sm: '40px' },
                                  }}
                                />
                              )}
                            </Stack>

                            {/* 호버에 따른 텍스트 변화 */}
                            {!isMob && selectedCard?.label === each.label ? (
                              <Typography
                                component="div"
                                className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
                                fontWeight={300}
                                color="#FFFFFF"
                              >
                                <Box
                                  className="smoothAppearSlow"
                                  key={`${selectedCard?.label}${each.label}Hover`}
                                  sx={{
                                    mt: { xs: '16px', sm: '24px' },
                                  }}
                                >
                                  {each.hoverDescription}
                                </Box>
                              </Typography>
                            ) : (
                              <Typography
                                component="div"
                                className={isMob ? 'mobBody14KR' : 'pcBody20KR'}
                                fontWeight={300}
                                color="#FFFFFF"
                              >
                                <Box
                                  key={`${selectedCard?.label}${each.label}`}
                                  sx={{ mt: { xs: '16px', sm: '24px' } }}
                                >
                                  {each.description}
                                </Box>
                              </Typography>
                            )}
                          </Box>

                          {/* 버튼 영역(호버시에만 보이는) */}
                          {!isMob && selectedCard?.label === each.label && (
                            <Stack direction="row" spacing="16px">
                              {recruitNumber && recruitNumber[each.label] && (
                                <Box sx={{ width: 1, position: 'relative' }}>
                                  {/* 뱃지 */}
                                  <Typography
                                    component="div"
                                    align="center"
                                    fontSize="14px"
                                    fontWeight={400}
                                    color={black}
                                  >
                                    <Box
                                      sx={{
                                        display: 'inline-flex',
                                        px: '19px',
                                        py: '3.5px',
                                        border: '2px solid #00F2C3',
                                        borderRadius: '120px',
                                        background: 'rgba(0, 242, 195, 0.8)',
                                        position: 'absolute',
                                        top: -23,
                                        right: 0,
                                        zIndex: 1000,
                                      }}
                                    >
                                      {recruitNumber[each.label]}
                                    </Box>
                                  </Typography>

                                  <MUIOutlinedButton
                                    text="Open Position"
                                    color="#FFFFFF"
                                    hoverColor="#FFFFFF"
                                    sx={{ width: 1, px: { sm: 0 } }}
                                  />
                                </Box>
                              )}
                              {each.interview ? (
                                <MUIOutlinedButton
                                  onClick={() => goToLink(each.interview, 'external')}
                                  text="InterView"
                                  color="#FFFFFF"
                                  hoverColor="#FFFFFF"
                                  sx={{ width: 1, px: { sm: 0 } }}
                                />
                              ) : (
                                <Box sx={{ width: 1 }} />
                              )}
                              {/* 인터뷰 단독 시, 사이즈 조정을 위한 빈 박스 */}
                              {recruitNumber && !recruitNumber[each.label] && (
                                <Box sx={{ width: 1 }} />
                              )}
                            </Stack>
                          )}

                          {/* 모바일 플러스 버튼 */}
                          <Stack
                            direction="row"
                            justifyContent="flex-end"
                            sx={{ display: { sm: 'none' } }}
                          >
                            <CardMedia
                              image={`/image/icon/plusCircle.png`}
                              sx={{
                                width: { xs: '20px', sm: '40px' },
                                height: { xs: '20px', sm: '40px' },
                              }}
                            />
                          </Stack>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}

      {isMob && (
        <TeamSectionMobModal
          modalSwitch={modalSwitch}
          modalClose={closeModal}
          selectedCard={selectedCard}
          recruitNumber={recruitNumber}
        />
      )}
    </BodyContainer>
  );
}
