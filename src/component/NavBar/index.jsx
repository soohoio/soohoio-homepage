import React, { useEffect, useRef, useState } from 'react';
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
// import Link from 'next/link';
import Link from '@/module/CustomLink';
import MobDrawler from './MobDrawler';
import { MUIOutlinedButton } from '../ui/Button';
import { useRouter } from 'next/router';
import GlobalMenu from './GlobalMenu';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function NavBar() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isKorean = i18n.language === 'ko';
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const navBarHeight = '96px';
  const pageList = [
    { label: isKorean ? '기업 솔루션' : 'B2B Solution', link: '/solution' },
    { label: isKorean ? '프로덕트' : 'Products', link: '/product' },
    { label: isKorean ? '뉴스' : 'News', link: '/news' },
    { label: isKorean ? '팀 소개' : 'SOOHO Team', link: '/team' },
    { label: isKorean ? '채용' : 'Recruit', link: '/recruit' },
    { label: isKorean ? '블로그' : 'Blog', link: 'https://blog.sooho.io' },
  ];

  const [currentPage, setCurrentPage] = useState('');

  // 드로어
  const [drawerMenu, setDrawerMenu] = useState(null);

  // 글로벌 메뉴
  const [globalMenu, setGlobalMenu] = useState(false);
  const [globalMenuHover, setGlobalMenuHover] = useState(false);
  const globalMenuButtonRefPc = useRef(null);
  const globalMenuButtonRefMobTablet = useRef(null);
  const globalMenuRef = useRef(null);

  // 현재 페이지 확인
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

  // 글로벌 메뉴 (바깥을 누르면 닫히도록)
  useEffect(() => {
    if (globalMenu) {
      const handleClickOutside = event => {
        if (
          !globalMenuButtonRefPc.current.contains(event.target) &&
          !globalMenuButtonRefMobTablet.current.contains(event.target) &&
          globalMenuRef.current &&
          !globalMenuRef.current.contains(event.target)
        ) {
          closeGlobalMenu();
        }
      };
      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [globalMenu, globalMenuRef]);

  const openMobMenu = event => {
    setDrawerMenu(true);
  };

  const closeMobMenu = () => {
    setDrawerMenu(null);
  };

  const openGlobalMenu = () => {
    setGlobalMenu(true);
  };

  const closeGlobalMenu = () => {
    setGlobalMenu(false);
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
                <Box sx={{ position: 'relative', display: { xs: 'flex', lg: 'none' } }}>
                  <IconButton
                    ref={globalMenuButtonRefMobTablet}
                    onClick={openGlobalMenu}
                    color="primary"
                    sx={{ p: 0 }}
                  >
                    <CardMedia
                      component="img"
                      image="/image/icon/global.png"
                      alt="global"
                      sx={{ width: '24px', cursor: 'pointer' }}
                    />
                  </IconButton>
                  {globalMenu && (
                    <GlobalMenu globalMenuRef={globalMenuRef} closeGlobalMenu={closeGlobalMenu} />
                  )}
                </Box>
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
                    target={page.link === 'https://blog.sooho.io' ? '_blank' : undefined}
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
                  text={isKorean ? '문의하기' : 'Contact us'}
                  noClass={true}
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    borderRadius: '16px',
                    width: '88px',
                    px: '10px !important',
                    py: '2px !important',
                    fontWeight: '300 !important',
                    fontSize: 14,
                    ml: '18px',
                    borderWidth: '1px !important',
                  }}
                />
              </Link>

              <Box sx={{ position: 'relative', display: { xs: 'none', lg: 'flex' } }}>
                <CardMedia
                  ref={globalMenuButtonRefPc}
                  onMouseOut={() => setGlobalMenuHover(false)}
                  onMouseOver={() => setGlobalMenuHover(true)}
                  onClick={openGlobalMenu}
                  component="img"
                  image={`/image/icon/global${globalMenuHover ? '' : 'White'}.png`}
                  alt="global"
                  sx={{
                    width: '24px',
                    ml: '12px',
                    cursor: 'pointer',
                  }}
                />
                {globalMenu && (
                  <GlobalMenu globalMenuRef={globalMenuRef} closeGlobalMenu={closeGlobalMenu} />
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>

      <Box sx={{ height: navBarHeight, backgroundColor: '#131313' }} />
    </div>
  );
}
