import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* UTM 코드 */}
        <Script
          id="utmCode"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WT7TDFF');`,
          }}
        ></Script>

        {/* 네이버 사이트 인증 */}
        <meta name="naver-site-verification" content="1ecf35ae9249e807d8a816ba47d00a4c718a5eeb" />

        {/* 구글 사이트 인증 */}
        <meta
          name="google-site-verification"
          content="lHr7RdWx64J5piY0e-NvC_bWX6M_UOmYQPB7grm34Cs"
        />

        {/* 오픈그래프 설정 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="수호아이오" />
        <meta
          property="og:description"
          content="금융 기회를 넓히고 싶은 모든 이들이 장애물 없이 블록체인을 넘나들 수 있도록, 수호는 믿을 수 있는 기업 파트너와 함께 투명하고 안전한 인프라를 만듭니다."
        />
        <meta property="og:image" content="링크 썸네일 이미지" />
        <meta property="og:url" content="http://www.sooho.io" />
      </Head>

      <body>
        {/* UTM 코드 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WT7TDFF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
