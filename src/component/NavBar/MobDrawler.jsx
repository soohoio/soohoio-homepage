import React, { useContext, useState } from 'react';
import { Box, Typography, Grid, Drawer } from '@mui/material';
import Link from 'next/link';
import { black, primary } from '../style/StyleTheme';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useRouter } from 'next/router';

export default function MobDrawler({ open, onClose }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();
  const currentPage = router.pathname;

  const navBarHeight = '96px';
  const pageList = [
    { label: '기업 솔루션', link: '/solution' },
    { label: '프로덕트', link: '/product' },
    { label: '뉴스', link: '/news' },
    { label: '팀 소개', link: '/team' },
    { label: '채용', link: '/recruit' },
    { label: '블로그', link: '/blog' },
    { label: '문의하기', link: '/contact' },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: '100vw', top: navBarHeight, backgroundColor: black } }}
      sx={{ display: { lg: 'none' } }}
      // 백드롭 효과
      BackdropProps={{ invisible: true }}
    >
      <Box sx={{ px: '24px', py: '56px' }}>
        {pageList.map((page, index) => (
          <Box key={page.label} sx={{ mb: { xs: '24px', sm: '32px' } }}>
            <Link href={page.link} onClick={onClose}>
              <Typography
                className={isMob ? 'mobTitle24KR' : 'pcTitle32KR'}
                color={currentPage === page.link ? 'primary' : '#FFFFFF'}
              >
                {page.label}
              </Typography>
            </Link>
            {page.label === '뉴스' || page.label === '채용' ? (
              <Box
                sx={{ backgroundColor: primary, height: '1px', mt: { xs: '24px', sm: '32px' } }}
              />
            ) : null}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
}

MobDrawler.defaultProps = {
  open: false,
  onClose: () => {},
};
