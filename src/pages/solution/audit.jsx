import Audit from '@/component/pageComponent/solution/audit';
import Head from 'next/head';

// * SSR 배포 시 (SSG 배포시에는 불가합니다 | i18 next export 기능 미지원) / i18로 동적 라우팅 없이 단일 주소로 서브가 가능합니다.
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['audit'])),
//   },
// });

// * SSG 배포 시,
import { makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['audit']);
export { getStaticProps };

export default function AuditPage() {
  return (
    <>
      <Head>
        <title>기업 솔루션</title>
        <meta
          name="description"
          content="기업들이 쉽고 안전하게 DeFi 서비스를 제공할 수 있도록 서비스의 개발 및 운영, 보안 감사 솔루션을 지원합니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/linkThumb.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Audit />
      </main>
    </>
  );
}
