import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// i18 미지원에 따른 커스텀 링크
const CustomLinkComponent = ({ children, skipLocaleHandling, onClick, style, target, ...rest }) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';

  let href = rest.href || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale);
  }

  return (
    <>
      <Link href={href} onClick={onClick} style={style} target={target}>
        {children}
      </Link>
    </>
  );
};

export default CustomLinkComponent;
