import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Drawer } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PropTypes from 'prop-types';

export default function MobDrawler({ open, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = location.pathname.split('/')[1].toLowerCase();

  const booksMenu = [
    { label: '신간', link: '/Books/New', detailURL: 'xxx' },
    { label: '단행본', link: '/Books/Monograph', detailURL: '단행본' },
    { label: '전자책', link: '/Books/E-Book', detailURL: '전자책' },
    { label: '북트레일러', link: '/Books/BookTrailer', detailURL: 'xxx' },
    { label: '저자인터뷰', link: '/Books/Interview', detailURL: 'xxx' },
  ];

  const academyMenu = [
    { label: '강의소식', link: '/Academy/LectureNews', detailURL: 'Academy/Notice' },
    { label: '온라인강의', link: '/Academy/Online', detailURL: '온라인 강의' },
    { label: '오프라인강의', link: '/Academy/Offline', detailURL: '오프라인 강의' },
    { label: '특강', link: '/Academy/SpecialLecture', detailURL: '특강' },
    { label: '동영상강의', link: '/Academy/Video', detailURL: 'xxx' },
    { label: 'TLS 다운로드', link: '/Academy/TLS-Download', detailURL: 'xxx' },
  ];

  const thelineMenu = [
    { label: '공지', link: '/Notice' },
    { label: '커뮤니티', link: '/Community' },
    { label: '더라인TV', link: 'https://www.youtube.com/channel/UCeE3VUCbysuJfjdQgzXHQ-g' },
    { label: '찾아오는길', link: '/Contact' },
  ];

  const goToPage = link => {
    navigate(link);
    onClose();
  };

  const openLink = link => {
    window.open(link);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: '253px', height: '88vh' } }}
      sx={{ display: { lg: 'none' } }}
    >
      <Box sx={{ px: '24px', py: '20px' }}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography align="left" component="div" color="#666666" fontSize={14} fontWeight={500}>
              <Box sx={{ fontSize: 12, fontWeight: 700 }}>Welcome</Box>
              <Box>더라인북스입니다</Box>
            </Typography>
          </Box>
          <CloseRoundedIcon onClick={onClose} />
        </Grid>

        <Box sx={{ height: '1px', backgroundColor: '#DADADA', mt: '12px', mb: '24px' }} />

        <Typography
          onClick={() => goToPage('/')}
          align="left"
          component="div"
          color={!currentTab.includes('academy') && !currentTab.includes('books') && 'primary'}
          fontSize={20}
          fontWeight={800}
          sx={{ mb: '12px' }}
        >
          홈
        </Typography>

        <Typography
          onClick={() => goToPage('/Books')}
          align="left"
          component="div"
          color={currentTab.includes('books') && 'primary'}
          fontSize={20}
          fontWeight={800}
          sx={{ mb: '12px' }}
        >
          더라인북스
        </Typography>

        {booksMenu.map(function (each) {
          return (
            <Typography
              key={`${each.label} menu`}
              align="left"
              color={
                location.pathname === each.link || location.pathname.includes(each.detailURL)
                  ? 'primary'
                  : null
              }
              fontSize={14}
              onClick={() => goToPage(each.link)}
              sx={{ mb: '10px' }}
            >
              {each.label}
            </Typography>
          );
        })}

        <Typography
          onClick={() => goToPage('/Academy')}
          align="left"
          component="div"
          color={currentTab.includes('academy') && 'primary'}
          fontSize={20}
          fontWeight={800}
          sx={{ mb: '12px' }}
        >
          더라인아카데미
        </Typography>

        {academyMenu.map(function (each) {
          return (
            <Typography
              key={`${each.label} menu`}
              align="left"
              color={
                location.pathname === each.link || location.pathname.includes(each.detailURL)
                  ? 'primary'
                  : null
              }
              fontSize={14}
              onClick={() => goToPage(each.link)}
              sx={{ mb: '10px' }}
            >
              {each.label}
            </Typography>
          );
        })}

        <Box sx={{ height: '1px', backgroundColor: '#DADADA', mt: '12px', my: '24px' }} />

        {thelineMenu.map(function (each, index) {
          return (
            <Typography
              key={`${each.label} menu`}
              align="left"
              color={location.pathname === each.link && 'primary'}
              fontWeight={500}
              fontSize={16}
              onClick={index === 2 ? () => openLink(each.link) : () => goToPage(each.link)}
              sx={[
                index === 0 && currentTab === 'notice' ? { color: '#4891FF' } : null,
                { mb: '10px' },
              ]}
            >
              {each.label}
            </Typography>
          );
        })}
      </Box>
    </Drawer>
  );
}

MobDrawler.defaultProps = {
  open: false,
  onClose: () => {},
};

MobDrawler.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
