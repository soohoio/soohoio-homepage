import Product from '@/component/pageComponent/product';
import Head from 'next/head';

// * SSR 배포 시 (SSG 배포시에는 불가합니다 | i18 next export 기능 미지원) / i18로 동적 라우팅 없이 단일 주소로 서브가 가능합니다.
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['product'])),
//   },
// });

// * SSG 배포 시,
import { makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['product']);
export { getStaticProps };

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>프로덕트</title>
        <meta
          name="description"
          content="유저에게 새로운 투자 기회를 제공하는 다양한 금융 프로덕트를 만들고 연결합니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/linkThumb.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Product />
      </main>
    </>
  );
}
