import Product from '@/component/pageComponent/product';
import Head from 'next/head';

// * SSG 배포 시,
import { getStaticPaths, makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['product']);
export { getStaticPaths, getStaticProps };

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
