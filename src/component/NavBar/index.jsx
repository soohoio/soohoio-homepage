import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  Container,
  Grid,
  MenuItem,
  CardMedia,
} from '@mui/material';
import { paddingHorMob, paddingHorPC } from '../style/StyleTheme';
import Link from 'next/link';

function NavBar(props) {
  const navBarHeight = '96px';
  const pageList = [
    { label: '기업 솔루션', link: '/Solution' },
    { label: '프로덕트', link: '/Product' },
    { label: '뉴스', link: '/News' },
    { label: '채용', link: '/Recruit' },
    { label: '팀 소개', link: '/Team' },
    { label: '문화', link: '/Culture' },
    { label: '블로그', link: '/Blog' },
  ];

  const [currentPage, setCurrentPage] = useState('');
  const [anchorElNav, setAnchorElNav] = useState(null);

  const openMobMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const closeMobMenu = () => {
    setAnchorElNav(null);
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
                sx={{ display: { xs: 'flex', sm: 'none' } }}
              >
                <Box>
                  <IconButton onClick={openMobMenu} color="primary">
                    <CardMedia
                      component="img"
                      image="/image/icon/menuPrimary.png"
                      alt="menu"
                      sx={{ width: '28px', cursor: 'pointer', display: { xs: 'flex', sm: 'none' } }}
                    />
                  </IconButton>

                  {/* Mob 메뉴  */}
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={closeMobMenu}
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      zIndex: 3001,
                    }}
                  >
                    {pageList.map((page, index) => (
                      <MenuItem
                        key={page.label}
                        onClick={num => {
                          menuClick(index);
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography
                          textAlign="center"
                          color={currentPage === page ? '#449A47' : '#33333'}
                        >
                          {page.label}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                {/* 모바일 가운데 로고 부분 (sm부터는 none) */}
                <Box>
                  <CardMedia
                    onClick={() => {
                      menuClick(0);
                    }}
                    component="img"
                    image="/logo.png"
                    alt="logo"
                    sx={{ width: '54px', cursor: 'pointer', display: { xs: 'flex', sm: 'none' } }}
                  />
                </Box>

                {/* 모바일 우측 글로벌 메뉴 */}
                <IconButton onClick={openMobMenu} color="primary">
                  <CardMedia
                    component="img"
                    image="/image/icon/global.png"
                    alt="global"
                    sx={{ width: '24px', cursor: 'pointer', display: { xs: 'flex', sm: 'none' } }}
                  />
                </IconButton>
              </Grid>

              {/* PC 부분 */}
              <Box sx={{ mr: 'auto', display: { xs: 'none', sm: 'flex' } }}>
                <Link href="/">
                  <CardMedia
                    className="buttonHover"
                    onClick={() => {
                      menuClick(0);
                    }}
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

              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
                        mr: { xs: '15px', sm: '24px' },
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
                    display: { xs: 'none', sm: 'block' },
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
                  display: { xs: 'none', sm: 'flex' },
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
