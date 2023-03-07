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
        <title>수호아이오</title>
        <meta
          name="description"
          content="금융 기회를 넓히고 싶은 모든 이들이 장애물 없이 블록체인을 넘나들 수 있도록, 수호는 믿을 수 있는 기업 파트너와 함께 투명하고 안전한 인프라를 만듭니다."
        />
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
