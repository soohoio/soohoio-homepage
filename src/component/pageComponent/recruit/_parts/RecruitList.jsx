import React, { useEffect, useState } from 'react';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { Box, CardMedia, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { borderRadiusMob, borderRadiusPc, gray, gray_light } from '@/component/style/StyleTheme';
import { DropDownComponent } from '@/component/ui/DropDown';
import { Client } from '@notionhq/client';

export default function RecruitList() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  // 노션
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY,
  });
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

  // 초기값 및 인풋 state
  const defaultInput = {
    searchInput: '',
    team: '소속',
    job: '직무',
    careerType: '경력 사항',
    employType: '고용 형태',
  };
  const [recruitFilter, setRecruitFilter] = useState({ ...defaultInput });

  // 카테고리 리스트
  const careerTypeList = ['신입', '경력', '무관'];
  const employTypeList = ['정규직', '계약직', '인턴', '프리랜서'];

  // 노션 채용 데이터 목록
  const [recruitList, setRecruitList] = useState([
    {
      no: 1,
      title: 'DeFi Package 프론트앤드 개발자',
      team: 'Product Team',
      job: 'Frontend',
      careerType: '경력',
      employType: '정규직',
    },
    {
      no: 2,
      title: 'DeFi Package 프론트앤드 개발자',
      team: 'Product Team',
      job: 'Frontend',
      careerType: '경력',
      employType: '정규직',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      // const dbQueryData = await notion.databases.query({ database_id: databaseId });
      // console.log(dbQueryData);
      const response = await notion.databases.retrieve({
        database_id: databaseId,
      });
      // console.log(response);
    }

    fetchData();
  }, []);

  // 필터 변경
  const onChangeFilter = e => {
    const { value, name } = e;
    const tempObj = { ...recruitFilter };
    tempObj[name] = value;
    setRecruitFilter(tempObj);
  };

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
          InputProps={{
            style: {
              padding: '7px 0px 3px 0px',
            },
            endAdornment: (
              <InputAdornment position="end">
                <CardMedia
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
              selectList={careerTypeList}
              label="소속"
              name="team"
              value={recruitFilter.team}
              onChange={onChangeFilter}
            />
            <DropDownComponent
              selectList={employTypeList}
              label="직무"
              name="job"
              value={recruitFilter.job}
              onChange={onChangeFilter}
            />
          </Stack>
          <Stack direction="row" spacing={{ xs: '8px', sm: '24px', lg: '28px' }}>
            <DropDownComponent
              selectList={careerTypeList}
              label="경력 사항"
              name="careerType"
              value={recruitFilter.careerType}
              onChange={onChangeFilter}
            />
            <DropDownComponent
              selectList={employTypeList}
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
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            justifyContent="center"
            alignItems={{ xs: 'flex-start', lg: 'center' }}
            key={each.no}
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
                  {each.job}
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
        );
      })}
    </BodyContainer>
  );
}
