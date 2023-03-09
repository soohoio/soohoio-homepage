import News from '@/component/pageComponent/news';
import Head from 'next/head';

// * SSG 배포 시,
import { getStaticPaths, makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['news']);
export { getStaticPaths, getStaticProps };

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
