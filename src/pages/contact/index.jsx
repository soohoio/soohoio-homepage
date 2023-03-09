import ContactPage from '@/component/pageComponent/Contact';
import Head from 'next/head';

// * SSR 배포 시 (SSG 배포시에는 불가합니다 | i18 next export 기능 미지원) / i18로 동적 라우팅 없이 단일 주소로 서브가 가능합니다.
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['contact'])),
//   },
// });

// * SSG 배포 시,
import { makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['contact']);
export { getStaticProps };

export default function Contact() {
  return (
    <>
      <Head>
        <title>문의</title>
        <meta name="description" content="궁금한 점이 있다면 무엇이든 문의해주세요." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/linkThumb.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactPage />
      </main>
    </>
  );
}
