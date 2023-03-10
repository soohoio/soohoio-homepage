import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { black, gray } from '@/component/style/StyleTheme';
import TeamSectionMobModal from './TeamSectionMobModal';
import axios from 'axios';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import CustomLinkComponent from '@/module/CustomLink';

export default function TeamSection() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const { t } = useTranslation('team');

  const [selectedCard, setSelectedCard] = useState(null);
  const [modalSwitch, setModalSwitch] = useState(false);

  const teamData = [
    // Product Team
    {
      label: 'Product Team',
      description: t('teamSection.productTeamDescription'),
      dataList: [
        {
          label: 'DeFi Product',
          description: t('teamSection.defiProductDescription'),
          hoverDescription: (
            <Box>
              <Box sx={{ display: 'inline' }}>{t('teamSection.defiHoverDescription1')}</Box>
              <CustomLinkComponent href="/solution">
                <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                  <u>{`DeFi Package`}</u>
                </Box>
              </CustomLinkComponent>
              <Box sx={{ display: 'inline' }}>{t('teamSection.defiHoverDescription2')}</Box>

              <CustomLinkComponent href="/product">
                <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                  <u>{`KLEVA`}</u>
                </Box>
              </CustomLinkComponent>
              <Box sx={{ display: 'inline' }}>{t('teamSection.defiHoverDescription3')}</Box>
            </Box>
          ),
          background: 'defiProduct',
        },
        {
          label: 'StayKing',
          description: t('teamSection.stayKingDescription'),
          hoverDescription: (
            <Box>
              <Box sx={{ display: 'inline' }}>{t('teamSection.stayKingHoverDescription1')}</Box>
              <CustomLinkComponent
                href={{
                  pathname: '/product',
                  query: { currentProduct: 'StayKing' },
                }}
              >
                <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                  <u>{`StayKing`}</u>
                </Box>
              </CustomLinkComponent>
              <Box sx={{ display: 'inline' }}>{t('teamSection.stayKingHoverDescription2')}</Box>
            </Box>
          ),
          background: 'stayking',
          interview: 'https://blog.sooho.io/people_interview_stayking/',
        },
      ],
    },
    // HeadQuarter
    {
      label: 'Headquarter',
      description: t('teamSection.headQuarterTeamDescription'),
      dataList: [
        {
          label: 'Security',
          description: t('teamSection.securityDescription'),
          hoverDescription: (
            <Box>
              <Box sx={{ display: 'inline' }}>{t('teamSection.securityHoverDescription1')}</Box>
              <CustomLinkComponent href="https://matzip.xyz/" target="_blank">
                <Box sx={{ display: 'inline', fontWeight: 500, cursor: 'pointer' }}>
                  <u>{`MATZIP`}</u>
                </Box>
              </CustomLinkComponent>
              <Box sx={{ display: 'inline' }}>{t('teamSection.securityHoverDescription2')}</Box>
            </Box>
          ),
          background: 'security',
          interview: 'https://blog.sooho.io/people_interview_security_researcher/',
        },
        {
          label: 'Human Resources',
          description: t('teamSection.hrDescription'),
          hoverDescription: <Box>{t('teamSection.hrHoverDescription')}</Box>,
          background: 'human',
        },
        {
          label: 'Organization eXperience',
          description: t('teamSection.organizationDescription'),
          hoverDescription: <Box>{t('teamSection.organizationHoverDescription')}</Box>,
          background: 'organization',
        },
        {
          label: 'Community Strategy',
          description: t('teamSection.communityDescription'),
          hoverDescription: <Box>{t('teamSection.communityHoverDescription')}</Box>,
          background: 'community',
        },
        {
          label: 'Brand eXperience',
          description: t('teamSection.brandDescription'),
          hoverDescription: <Box>{t('teamSection.brandHoverDescription')}</Box>,
          background: 'bx',
        },
      ],
    },
    // Corp Dev
    {
      label: 'Corp Dev',
      description: t('teamSection.corpDevDescription'),
      dataList: [
        {
          label: 'Corporate Development',
          description: t('teamSection.corpTeamDescription'),
          hoverDescription: <Box>{t('teamSection.corpTeamHoverDescription')}</Box>,
          background: 'corp',
        },
      ],
    },
  ];

  useEffect(() => {
    fetchNumber();
  }, []);

  // ??? ??? ?????? ??????
  const corsURL = `https://proxy.cors.sh/`;
  const corsAPI = process.env.NEXT_PUBLIC_CORS_SH_PRODUCTION;
  const notionKey = process.env.NEXT_PUBLIC_NOTION_SECRET_KEY;
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  const notionURL = `https://api.notion.com/v1/databases/${databaseId}/query`;
  const [recruitNumber, setRecruitNumber] = useState(null);

  // ?????? & ?????? ?????? ????????????
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
            'x-cors-api-key': corsAPI,
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

  return (
    <BodyContainer ptPc="152px" ptMob="56px" pbPc="12px" pbMob="32px">
      {/* PC, Mob / ???????????? ????????? ?????? ????????? ?????? ?????? */}
      {teamData.map(function (eachTeam, index) {
        return (
          <Box
            key={eachTeam.label}
            sx={{
              mb: { xs: index === teamData.length - 1 ? '0px' : '56px', sm: '120px' },
              display: { sm: 'none', lg: 'block' },
            }}
          >
            {/* ?????? ????????? ?????? */}
            <Typography
              component="div"
              className={isMob ? 'mobBody12KR' : 'pcBody24KR'}
              fontWeight={600}
              color="#FFFFFF"
            >
              <Box sx={{ mb: { xs: '8px', sm: '16px' } }}>{eachTeam.label}</Box>
            </Typography>

            <Typography
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
              fontWeight={300}
              color="#ABABAB"
            >
              <Box sx={{ mb: { xs: '24px', sm: '40px' } }}>{eachTeam.description}</Box>
            </Typography>

            {/* ?????? ?????? */}
            <Grid container spacing={{ xs: '16px', sm: '16px' }}>
              {eachTeam.dataList.map(function (each) {
                return (
                  <Grid item xs={12} sm={6} key={each.label}>
                    <Box
                      key={each.label}
                      onClick={() => selectCard(each)}
                      onMouseOver={isMob ? () => {} : () => selectCard(each)}
                      onMouseOut={isMob ? () => {} : () => selectCard(null)}
                      sx={{
                        width: 1,
                        aspectRatio: '656/570',
                        borderRadius: { xs: '8px', sm: '16px' },
                        boxSizing: 'border-box',
                        background: `url(/image/pageImage/team/${each.background}Bg.png)`,
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

                            {/* ????????? ?????? ????????? ?????? */}
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
                                    maxWidth: '480px',
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
                                  sx={{ mt: { xs: '16px', sm: '24px' }, maxWidth: '480px' }}
                                >
                                  {each.description}
                                </Box>
                              </Typography>
                            )}
                          </Box>

                          {/* ?????? ??????(??????????????? ?????????) */}
                          {!isMob && selectedCard?.label === each.label && (
                            <Stack direction="row" spacing="16px">
                              {recruitNumber && recruitNumber[each.label] && (
                                <Box sx={{ width: 1, position: 'relative' }}>
                                  {/* ?????? */}
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
                                  <CustomLinkComponent
                                    href={{
                                      pathname: '/recruit',
                                      query: { team: each.label },
                                    }}
                                  >
                                    <MUIOutlinedButton
                                      text="Open Position"
                                      color="#FFFFFF"
                                      hoverColor="#FFFFFF"
                                      sx={{ width: 1, px: { sm: 0 }, cursor: 'pointer' }}
                                    />
                                  </CustomLinkComponent>
                                </Box>
                              )}
                              {each.interview ? (
                                <CustomLinkComponent
                                  href={each.interview}
                                  target="_blank"
                                  style={{ width: '100%' }}
                                >
                                  <MUIOutlinedButton
                                    text="Interview"
                                    color="#FFFFFF"
                                    hoverColor="#FFFFFF"
                                    sx={{ width: 1, px: { sm: 0 }, cursor: 'pointer' }}
                                  />
                                </CustomLinkComponent>
                              ) : (
                                <Box sx={{ width: 1 }} />
                              )}
                              {/* ????????? ?????? ???, ????????? ????????? ?????? ??? ?????? */}
                              {recruitNumber && !recruitNumber[each.label] && (
                                <Box sx={{ width: 1 }} />
                              )}
                            </Stack>
                          )}

                          {/* ????????? ????????? ?????? */}
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

      {/* (??????) ????????? ?????? ?????? ?????? */}
      {teamData.map(function (eachTeam, index) {
        return (
          <Box
            key={eachTeam.label}
            sx={{
              mb: { xs: index === teamData.length - 1 ? '0px' : '56px', sm: '120px' },
              display: { xs: 'none', sm: 'block', lg: 'none' },
            }}
          >
            {/* ?????? ????????? ?????? */}
            <Typography
              component="div"
              className={isMob ? 'mobBody12KR' : 'pcBody24KR'}
              fontWeight={600}
              color="#FFFFFF"
            >
              <Box sx={{ mb: { xs: '8px', sm: '16px' } }}>{eachTeam.label}</Box>
            </Typography>

            <Typography
              component="div"
              className={isMob ? 'mobBody14KR' : 'pcBody18KR'}
              fontWeight={300}
              color="#ABABAB"
            >
              <Box sx={{ mb: { xs: '24px', sm: '40px' } }}>{eachTeam.description}</Box>
            </Typography>

            {/* ?????? ?????? */}
            <Grid
              container
              spacing={{ xs: '16px', sm: '16px' }}
              sx={{ overflowX: 'scroll', width: '1344px !important' }}
            >
              {eachTeam.dataList.map(function (each) {
                return (
                  <Grid item sm={6} key={each.label}>
                    <Box
                      key={each.label}
                      onClick={() => selectCard(each)}
                      onMouseOver={isMob ? () => {} : () => selectCard(each)}
                      onMouseOut={isMob ? () => {} : () => selectCard(null)}
                      sx={{
                        width: { xs: 1, sm: '656px', lg: 1 },
                        aspectRatio: '656/570',
                        borderRadius: { xs: '8px', sm: '16px' },
                        boxSizing: 'border-box',
                        background: `url(/image/pageImage/team/${each.background}Bg.png)`,
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

                            {/* ????????? ?????? ????????? ?????? */}
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
                                    maxWidth: '480px',
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
                                  sx={{ mt: { xs: '16px', sm: '24px' }, maxWidth: '480px' }}
                                >
                                  {each.description}
                                </Box>
                              </Typography>
                            )}
                          </Box>

                          {/* ?????? ??????(??????????????? ?????????) */}
                          {!isMob && selectedCard?.label === each.label && (
                            <Stack direction="row" spacing="16px">
                              {recruitNumber && recruitNumber[each.label] && (
                                <Box sx={{ width: 1, position: 'relative' }}>
                                  {/* ?????? */}
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

                                  <CustomLinkComponent
                                    href={{
                                      pathname: '/recruit',
                                      query: { team: each.label },
                                    }}
                                  >
                                    <MUIOutlinedButton
                                      text="Open Position"
                                      color="#FFFFFF"
                                      hoverColor="#FFFFFF"
                                      sx={{ width: 1, px: { sm: 0 }, cursor: 'pointer' }}
                                    />
                                  </CustomLinkComponent>
                                </Box>
                              )}
                              {each.interview ? (
                                <CustomLinkComponent
                                  href={each.interview}
                                  target="_blank"
                                  style={{ width: '100%' }}
                                >
                                  <MUIOutlinedButton
                                    text="Interview"
                                    color="#FFFFFF"
                                    hoverColor="#FFFFFF"
                                    sx={{ width: 1, px: { sm: 0 }, cursor: 'pointer' }}
                                  />
                                </CustomLinkComponent>
                              ) : (
                                <Box sx={{ width: 1 }} />
                              )}
                              {/* ????????? ?????? ???, ????????? ????????? ?????? ??? ?????? */}
                              {recruitNumber && !recruitNumber[each.label] && (
                                <Box sx={{ width: 1 }} />
                              )}
                            </Stack>
                          )}

                          {/* ????????? ????????? ?????? */}
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
