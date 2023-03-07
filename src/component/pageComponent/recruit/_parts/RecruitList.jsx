import React, { useEffect, useState } from 'react';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { gray } from '@/component/style/StyleTheme';
import { DropDownComponent } from '@/component/ui/DropDown';
import axios from 'axios';
import Link from 'next/link';
import { MUIOutlinedButton } from '@/component/ui/Button';
import { useRouter } from 'next/router';

export default function RecruitList({
  recruitList,
  setRecruitList,
  loading,
  setLoading,
  refreshData,
  setRefreshData,
}) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();

  // 노션 & Proxy
  const notionKey = process.env.NEXT_PUBLIC_NOTION_SECRET_KEY;
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  const corsURL = `https://proxy.cors.sh/`;
  const corsAPI = process.env.NEXT_PUBLIC_CORS_SH_PRODUCTION;

  // 초기값 및 인풋 state
  const defaultInput = {
    searchInput: '',
    team: router.query.team ? router.query.team : '소속',
    position: '직무',
    careerType: '경력 사항',
    employType: '고용 형태',
  };

  const [recruitFilter, setRecruitFilter] = useState({ ...defaultInput });

  // 카테고리 리스트
  const careerTypeList = ['신입', '경력', '무관'];
  const employTypeList = ['정규직', '계약직', '인턴', '프리랜서'];
  const [listData, setListData] = useState({
    teamList: [],
    positionList: [],
    careerTypeList: careerTypeList,
    employTypeList: employTypeList,
  });

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchData();
  }, [refreshData]);

  // 필터 변경
  const onChangeFilter = e => {
    const tempObj = { ...recruitFilter };
    // 인풋
    if (e.target) {
      tempObj.searchInput = e.target.value;
      setRecruitFilter(tempObj);
      // 드롭다운
    } else {
      const { value, name } = e;
      tempObj[name] = value;
      setRecruitFilter(tempObj);
      // 드롭다운 필터는 바로 적용
      reFetchData();
    }
  };

  const reFetchData = () => {
    setLoading(true);
    setRefreshData(!refreshData);
  };

  const resetFilter = () => {
    setLoading(true);
    setRecruitFilter(defaultInput);
    setRefreshData(!refreshData);
  };

  // 엔터 검색
  const onCheckEnter = e => {
    if (e.key === 'Enter') {
      reFetchData();
    }
  };

  // 채용 데이터 로드
  async function fetchData() {
    const notionURL = `https://api.notion.com/v1/databases/${databaseId}/query`;
    const url = `${corsURL}${notionURL}`;

    // 필터
    let body = {
      filter: {
        and: [],
      },
    };
    recruitFilter.searchInput !== '' &&
      body.filter.and.push({
        property: 'title',
        title: {
          contains: recruitFilter.searchInput,
        },
      });
    recruitFilter.team !== '소속' &&
      body.filter.and.push({
        property: 'team',
        select: {
          equals: recruitFilter.team,
        },
      });
    recruitFilter.position !== '직무' &&
      body.filter.and.push({
        property: 'position',
        select: {
          equals: recruitFilter.position,
        },
      });
    recruitFilter.careerType !== '경력 사항' &&
      body.filter.and.push({
        property: 'careerType',
        select: {
          equals: recruitFilter.careerType,
        },
      });
    recruitFilter.employType !== '고용 형태' &&
      body.filter.and.push({
        property: 'employType',
        select: {
          equals: recruitFilter.employType,
        },
      });

    // console.log('body: ', body);
    try {
      const notionData = await axios.post(
        url,
        body,

        {
          headers: {
            Authorization: `Bearer ${notionKey}`,
            'Notion-Version': '2021-08-16',
            'x-cors-api-key': corsAPI,
          },
        },
      );

      const result = [];
      notionData.data.results.map(function (each) {
        result.push({
          id: each.id,
          title: each.properties.title.title[0].plain_text,
          team: each.properties.team.select.name,
          position: each.properties.position.select.name,
          employType: each.properties.employType.select.name,
          careerType: each.properties.careerType.select.name,
          link: each.properties.link.url,
        });
      });
      setRecruitList(result);
      // 로딩 완료
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert(
        '채용 정보를 불러오는데 문제가 발생하였습니다. 문제가 지속되면 관리자에게 문의해주세요!',
      );
      setLoading(false);
    }
  }

  // 소속 & 직무 목록 받아오기
  async function fetchList() {
    const notionURL = `https://api.notion.com/v1/databases/${databaseId}`;
    const url = `${corsURL}${notionURL}`;
    try {
      const notionListData = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${notionKey}`,
          'Notion-Version': '2021-08-16',
          'x-cors-api-key': corsAPI,
        },
      });

      const teamList = [];
      notionListData.data.properties.team.select.options.map(function (each) {
        teamList.push(each.name);
      });
      const positionList = [];
      notionListData.data.properties.position.select.options.map(function (each) {
        positionList.push(each.name);
      });
      const tempData = { ...listData };
      tempData.teamList = teamList;
      tempData.positionList = positionList;
      setListData(tempData);
    } catch (error) {
      console.log(error);
      alert(
        '채용 필터 정보를 불러오는데 문제가 발생하였습니다. 문제가 지속되면 관리자에게 문의해주세요!',
      );
    }
  }

  return (
    <BodyContainer ptPc="128px" pbPc="64px" ptMob="48px" pbMob="24px">
      <Typography
        component="div"
        className={isMob ? 'mobTitle19KR' : 'pcTitle32KR'}
        color="primary"
        fontWeight={600}
      >
        <Box sx={{ mb: { xs: '26px', sm: '40px' } }}>진행 중인 채용 리스트</Box>
      </Typography>

      {/* 반응형 Stack, PC만 모두 가로형 */}
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={{ xs: '12px', sm: '33px', lg: '28px' }}
        sx={{ mb: { xs: '24px', sm: '24px' } }}
      >
        <TextField
          variant="standard"
          placeholder="검색"
          name="searchInput"
          value={recruitFilter.searchInput}
          onChange={onChangeFilter}
          onKeyPress={onCheckEnter}
          InputProps={{
            style: {
              padding: '7px 0px 3px 0px',
            },
            endAdornment: (
              <InputAdornment position="end">
                <CardMedia
                  onClick={reFetchData}
                  component="img"
                  image="/image/icon/search.png"
                  alt="serach"
                  sx={{
                    width: { xs: '24px', sm: '32px' },
                    height: { xs: '24px', sm: '32px' },
                    cursor: 'pointer',
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            width: { sm: '63vw', lg: '544px' },
            maxWidth: { sm: '551px', lg: '544px' },
            // 평상시 색상
            '& .MuiInput-underline:before': { borderBottomColor: gray },
            // 호버시 색상
            '&:hover .MuiInput-underline:before': {
              borderBottomColor: '#FFFFFF',
            },
            '&:hover .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: '#FFFFFF',
            },
            '& .MuiInputBase-input': {
              fontSize: { xs: '14px', sm: '18px' },
              fontWeight: 300,
            },
          }}
        />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: '14px', sm: '24px', lg: '28px' }}
        >
          <Stack direction="row" spacing={{ xs: '8px', sm: '24px', lg: '28px' }}>
            <DropDownComponent
              selectList={listData.teamList}
              label="소속"
              name="team"
              value={recruitFilter.team}
              onChange={onChangeFilter}
            />
            <DropDownComponent
              selectList={listData.positionList}
              label="직무"
              name="position"
              value={recruitFilter.position}
              onChange={onChangeFilter}
            />
          </Stack>
          <Stack direction="row" spacing={{ xs: '8px', sm: '24px', lg: '28px' }}>
            <DropDownComponent
              selectList={listData.careerTypeList}
              label="경력 사항"
              name="careerType"
              value={recruitFilter.careerType}
              onChange={onChangeFilter}
            />
            <DropDownComponent
              selectList={listData.employTypeList}
              label="고용 형태"
              name="employType"
              value={recruitFilter.employType}
              onChange={onChangeFilter}
            />
          </Stack>
        </Stack>
      </Stack>

      {/* 채용 목록 */}
      {recruitList.map(function (each) {
        return (
          <Link key={each.id} href={each.link} target="_blank">
            <Stack
              direction={{ xs: 'column', lg: 'row' }}
              justifyContent="center"
              alignItems={{ xs: 'flex-start', lg: 'center' }}
              sx={{
                borderBottom: '1px solid #FFFFFF',
                height: { xs: '114px', sm: '114px', lg: '80px' },
                cursor: 'pointer',
                ':hover': { opacity: 0.85 },
              }}
              spacing={{ xs: '16px', sm: '12px', lg: '28px' }}
            >
              <Stack
                direction="row"
                justifyContent={{ xs: 'space-between', lg: 'flex-start' }}
                alignItems="center"
                spacing="6px"
                sx={{ width: { xs: 1, lg: '544px' } }}
              >
                <Typography
                  component="div"
                  className={isMob ? 'mobTitle16KR' : 'pcBody20KR'}
                  color="#FFFFFF"
                  fontWeight={600}
                >
                  <Box>{each.title}</Box>
                </Typography>
                <CardMedia
                  image={`/image/icon/outlink.png`}
                  sx={{
                    width: { xs: '20px', sm: '32px' },
                    height: { xs: '20px', sm: '32px' },
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: '32px', sm: '24px', lg: '28px' }}
              >
                <Typography
                  component="div"
                  className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                  color="#FFFFFF"
                  fontWeight={{ xs: 300, lg: 600 }}
                >
                  <Box sx={{ width: { sm: '18.7vw', lg: '168px' }, maxWidth: { sm: '168px' } }}>
                    {each.team}
                  </Box>
                </Typography>

                <Typography
                  component="div"
                  className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                  color="#FFFFFF"
                  fontWeight={{ xs: 300, lg: 600 }}
                >
                  <Box sx={{ width: { sm: '18.7vw', lg: '168px' }, maxWidth: { sm: '168px' } }}>
                    {each.position}
                  </Box>
                </Typography>

                <Typography
                  component="div"
                  className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                  color="#FFFFFF"
                  fontWeight={{ xs: 300, lg: 600 }}
                >
                  <Box sx={{ width: { sm: '18.7vw', lg: '168px' }, maxWidth: { sm: '168px' } }}>
                    {each.careerType}
                  </Box>
                </Typography>

                <Typography
                  component="div"
                  className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                  color="#FFFFFF"
                  fontWeight={{ xs: 300, lg: 600 }}
                >
                  <Box sx={{ width: { sm: '18.7vw', lg: '168px' }, maxWidth: { sm: '168px' } }}>
                    {each.employType}
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Link>
        );
      })}

      {/* 채용 정보 없을 시 (로딩 완료 후) */}
      {!loading && recruitList.length === 0 && (
        <Box>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: { xs: '40px', sm: '120px', lg: '56px' } }}
          >
            <Box sx={{ width: { xs: '58vw', sm: 'auto' } }}>
              <Typography
                component="div"
                className={isMob ? 'mobTitle16KR' : 'pcTitle24KR'}
                color="#FFFFFF"
                fontWeight={300}
              >
                <Box sx={{ display: 'inline-block' }}>해당 부분에 진행 중인 </Box>
                <Box sx={{ display: 'inline-block' }}>채용 소식이 없습니다.</Box>
              </Typography>
              {/* PC & Tablet 버튼 */}
              <Stack
                direction="row"
                spacing={{ sm: '16px' }}
                sx={{ mt: { sm: '88px' }, display: { xs: 'none', sm: 'block' } }}
              >
                <MUIOutlinedButton
                  onClick={resetFilter}
                  text="전체 채용 리스트 보기"
                  color="#FFFFFF"
                  hoverColor="#FFFFFF"
                  sx={{
                    width: { sm: '246px' },
                    boxSizing: 'border-box',
                    px: { sm: '0px' },
                    py: { sm: '14px' },
                  }}
                />
                <Link
                  href="https://gyxk3kqq.ninehire.site/job_posting/8fglGG52/apply"
                  target="_blank"
                >
                  <MUIOutlinedButton
                    text="인재풀 등록하기"
                    sx={{
                      width: { sm: '246px' },
                      boxSizing: 'border-box',
                      px: { sm: '0px' },
                      py: { sm: '14px' },
                    }}
                  />
                </Link>
              </Stack>
            </Box>
            <Grid
              container
              justifyContent={{ xs: 'flex-start', sm: 'flex-start', lg: 'center' }}
              sx={{ width: { xs: '27vw', sm: '16vw', lg: '560px' } }}
            >
              <CardMedia
                component="img"
                image="/image/pageImage/recruit/noData.png"
                alt="no result"
                sx={{
                  width: { xs: 1, sm: '15vw', lg: 1 },
                  maxWidth: { xs: '95px', sm: '310px' },
                  aspectRatio: '226/265',
                }}
              />
            </Grid>
          </Grid>

          {/* 모바일 버튼 */}
          <Stack direction="row" spacing="8px" sx={{ mt: '40px', display: { sm: 'none' } }}>
            <MUIOutlinedButton
              text="전체 채용 리스트 보기"
              color="#FFFFFF"
              hoverColor="#FFFFFF"
              sx={{
                width: 0.495,
                boxSizing: 'border-box',
                px: { sm: '0px' },
                py: { sm: '14px' },
              }}
            />
            <Link
              href="https://gyxk3kqq.ninehire.site/job_posting/8fglGG52/apply"
              target="_blank"
              style={{ width: '50%' }}
            >
              <MUIOutlinedButton
                text="인재풀 등록하기"
                sx={{
                  width: 1,
                  boxSizing: 'border-box',
                  px: { sm: '0px' },
                  py: { sm: '14px' },
                }}
              />
            </Link>
          </Stack>
        </Box>
      )}
    </BodyContainer>
  );
}
