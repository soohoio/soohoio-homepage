import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Grid,
  CardMedia,
} from '@mui/material';
import { paddingHorMob, paddingHorPC } from '../style/StyleTheme';
import Link from 'next/link';
import MobDrawler from './MobDrawler';

function NavBar(props) {
  const navBarHeight = '96px';
  const pageList = [
    { label: '기업 솔루션', link: '/solution' },
    { label: '프로덕트', link: '/product' },
    { label: '뉴스', link: '/news' },
    { label: '팀 소개', link: '/team' },
    { label: '채용', link: '/recruit' },
    { label: '블로그', link: '/blog' },
  ];

  const [currentPage, setCurrentPage] = useState('');
  const [drawerMenu, setDrawerMenu] = useState(null);

  const openMobMenu = event => {
    setDrawerMenu(true);
  };

  const closeMobMenu = () => {
    setDrawerMenu(null);
  };

  const menuClick = num => {
    console.log(num);
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
                <IconButton onClick={openMobMenu} color="primary" sx={{ p: 0 }}>
                  <CardMedia
                    component="img"
                    image="/image/icon/global.png"
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
                  <Link key={page.label} href={page.link}>
                    <Typography
                      className="buttonHover"
                      onClick={num => {
                        menuClick(index);
                      }}
                      color={currentPage === page.label ? 'primary' : '#FFFFFF'}
                      fontWeight={currentPage === page.label ? 600 : 400}
                      sx={{
                        mr: { xs: '15px', lg: '24px' },
                        fontSize: { lg: '15px', xl: '18px' },
                      }}
                    >
                      {page.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Link href="/contact">
                <Button
                  variant="outlined"
                  onClick={() => {}}
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    borderRadius: '16px',
                    width: '88px',
                    py: '2px',
                    fontWeight: 400,
                    ml: '18px',
                  }}
                >
                  문의하기
                </Button>
              </Link>

              <CardMedia
                className="buttonHover"
                onClick={() => {
                  menuClick(0);
                }}
                component="img"
                image="/image/icon/global.png"
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
