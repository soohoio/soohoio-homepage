import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  CardMedia,
} from '@mui/material';
import { paddingHorMob, paddingHorPC, primary } from '../style/StyleTheme';
import Link from 'next/link';
import MobDrawler from './MobDrawler';
import { MUIOutlinedButton } from '../ui/Button';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();

  const navBarHeight = '96px';
  const pageList = [
    { label: '기업 솔루션', link: '/solution' },
    { label: '프로덕트', link: '/product' },
    { label: '뉴스', link: '/news' },
    // { label: '팀 소개', link: '/team' },
    // { label: '채용', link: '/recruit' },
    { label: '블로그', link: 'https://blog.sooho.io' },
  ];

  const [currentPage, setCurrentPage] = useState('');
  const [drawerMenu, setDrawerMenu] = useState(null);

  useEffect(() => {
    if (router.pathname.includes('solution')) {
      setCurrentPage('/solution');
    } else if (router.pathname.includes('product')) {
      setCurrentPage('/product');
    } else if (router.pathname.includes('news')) {
      setCurrentPage('/news');
    } else if (router.pathname.includes('team')) {
      setCurrentPage('/team');
    } else if (router.pathname.includes('recruit')) {
      setCurrentPage('/recruit');
    } else if (router.pathname === '/' || router.pathname === '/contact') {
      setCurrentPage('/');
    }
  }, [router.pathname]);

  const openMobMenu = event => {
    setDrawerMenu(true);
  };

  const closeMobMenu = () => {
    setDrawerMenu(null);
  };

  return (
    <div>
      <nav>
        <AppBar
          elevation={0}
          // position="fixed"
          sx={{ background: '#131313' }}
        >
          <Container
            maxWidth={false}
            sx={{ maxWidth: '1440px', px: { xs: paddingHorMob, sm: paddingHorPC } }}
          >
            <Toolbar disableGutters variant="dense" sx={{ height: navBarHeight }}>
              {/* Mob 부분 */}
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ display: { xs: 'flex', lg: 'none' } }}
              >
                <Box>
                  <IconButton onClick={openMobMenu} color="primary" sx={{ p: 0 }}>
                    <CardMedia
                      component="img"
                      image={`/image/icon/${drawerMenu ? 'cancelMint' : 'menuPrimary'}.png`}
                      alt="menu"
                      sx={{
                        width: `${drawerMenu ? '22px' : '25px'}`,
                        cursor: 'pointer',
                        display: { xs: 'flex', lg: 'none' },
                        mr: `${drawerMenu ? '3px' : '0px'}`,
                      }}
                    />
                  </IconButton>

                  {/* Mob 메뉴  */}
                  {drawerMenu && <MobDrawler open={drawerMenu} onClose={closeMobMenu} />}
                </Box>

                {/* 모바일 가운데 로고 부분 (lg부터는 none) */}
                <Box>
                  <Link href="/">
                    <CardMedia
                      component="img"
                      image="/logo.png"
                      alt="logo"
                      sx={{ width: '54px', cursor: 'pointer', display: { xs: 'flex', lg: 'none' } }}
                    />
                  </Link>
                </Box>

                {/* 모바일 우측 글로벌 메뉴 */}
                <IconButton onClick={() => {}} color="primary" sx={{ p: 0 }}>
                  <CardMedia
                    component="img"
                    image="/image/icon/globalWhite.png"
                    alt="global"
                    sx={{ width: '24px', cursor: 'pointer', display: { xs: 'flex', lg: 'none' } }}
                  />
                </IconButton>
              </Grid>

              {/* PC 부분 */}
              <Box sx={{ mr: 'auto', display: { xs: 'none', lg: 'flex' } }}>
                <Link href="/">
                  <CardMedia
                    className="buttonHover"
                    component="img"
                    image="/textLogo.png"
                    alt="logo"
                    sx={{
                      width: '212px',
                      cursor: 'pointer',
                    }}
                  />
                </Link>
              </Box>

              <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                {pageList.map((page, index) => (
                  <Link
                    key={page.label}
                    href={page.link}
                    target={page.label === '블로그' ? '_blank' : undefined}
                  >
                    <Typography
                      color={currentPage === page.link ? 'primary' : '#FFFFFF'}
                      fontWeight={currentPage === page.link ? 600 : 300}
                      sx={{
                        mr: { xs: '15px', lg: '24px' },
                        fontSize: { lg: '15px', xl: '18px' },
                        ':hover': {
                          color: primary,
                          fontWeight: 600,
                        },
                      }}
                    >
                      {page.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Link href="/contact">
                <MUIOutlinedButton
                  text="문의하기"
                  noClass={true}
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    borderRadius: '16px',
                    width: '100px',
                    px: '20px !important',
                    py: '2px !important',
                    fontWeight: '300 !important',
                    fontSize: 14,
                    ml: '18px',
                    borderWidth: '1px !important',
                  }}
                />
              </Link>

              <CardMedia
                className="buttonHover"
                onClick={() => {
                  menuClick(0);
                }}
                component="img"
                image="/image/icon/globalWhite.png"
                alt="logo"
                sx={{
                  width: '24px',
                  display: { xs: 'none', lg: 'flex' },
                  ml: '12px',
                }}
              />
            </Toolbar>
          </Container>
        </AppBar>
      </nav>

      <Box sx={{ height: navBarHeight, backgroundColor: '#131313' }} />
    </div>
  );
}

export default NavBar;
