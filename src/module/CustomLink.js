import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

/** i18 미지원에 따른 커스텀 링크 (en => en / ko => ko로) */
const CustomLinkComponent = ({ children, skipLocaleHandling, onClick, style, target, ...rest }) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  let href = rest.href || router.asPath;

  if (!href.query) {
    if (href.indexOf('http') === 0) skipLocaleHandling = true;
  }

  // locale 있는 경우 (en 등)
  if (locale && !skipLocaleHandling) {
    // 쿼리가 있는 경우
    if (href.query) {
      const query = href.query;
      href = href ? `/${locale}${href.pathname}` : router.pathname.replace('[locale]', locale);
      href = {
        pathname: href,
        query: query,
      };
    } else {
      href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale);
    }
  }

  return (
    <>
      <Link
        href={href}
        onClick={onClick}
        style={{ width: isMob ? '100%' : 'auto', ...style }}
        target={target}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLinkComponent;
