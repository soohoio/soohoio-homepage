import News from '@/component/pageComponent/news';
import Head from 'next/head';

// * SSR 배포 시 (SSG 배포시에는 불가합니다 | i18 next export 기능 미지원) / i18로 동적 라우팅 없이 단일 주소로 서브가 가능합니다.
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['news'])),
//   },
// });

// * SSG 배포 시,
import { makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['news']);
export { getStaticProps };

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>뉴스</title>
        <meta name="description" content="수호의 뉴스를 알려드립니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/linkThumb.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <News />
      </main>
    </>
  );
}
