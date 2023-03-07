import React, { useContext, useState } from 'react';
import { Box, Typography, Grid, Drawer } from '@mui/material';
// import Link from 'next/link';
import Link from '@/module/CustomLink';
import { black, paddingHorMob, paddingHorPC, primary } from '../style/StyleTheme';
import DeviceContext from '@/module/ContextAPI/DeviceContext';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function MobDrawler({ open, onClose }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  const router = useRouter();
  const currentPage = router.pathname;
  const { t, i18n } = useTranslation();
  const isKorean = i18n.language === 'ko';

  const navBarHeight = '96px';
  const pageList = [
    { label: isKorean ? '기업 솔루션' : 'B2B Solution', link: '/solution' },
    { label: isKorean ? '프로덕트' : 'Products', link: '/product' },
    { label: isKorean ? '뉴스' : 'News', link: '/news' },
    { label: isKorean ? '팀 소개' : 'SOOHO Team', link: '/team' },
    { label: isKorean ? '채용' : 'Recruit', link: '/recruit' },
    { label: isKorean ? '블로그' : 'Blog', link: 'https://blog.sooho.io' },
    { label: isKorean ? '문의하기' : 'Contact us', link: '/contact' },
  ];

  return (
    <Drawer
      className="fadeInLeft"
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: '100vw', top: navBarHeight, backgroundColor: black } }}
      sx={{ display: { lg: 'none' } }}
      // 백드롭 효과
      BackdropProps={{ invisible: true }}
    >
      <Box sx={{ px: { xs: paddingHorMob, sm: paddingHorPC }, py: '56px' }}>
        {pageList.map((page, index) => (
          <Box key={page.label} sx={{ mb: { xs: '24px', sm: '32px' } }}>
            <Link
              href={page.link}
              onClick={onClose}
              target={page.link === 'https://blog.sooho.io' ? '_blank' : undefined}
            >
              <Typography
                className={isMob ? 'mobTitle24KR' : 'pcTitle32KR'}
                color={currentPage.includes(page.link) ? 'primary' : '#FFFFFF'}
                sx={{ ':hover': { color: primary } }}
              >
                {page.label}
              </Typography>
            </Link>
            {page.link === '/news' || page.link === '/recruit' ? (
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
