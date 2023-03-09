import Team from '@/component/pageComponent/team';
import Head from 'next/head';

// * SSG 배포 시,
import { getStaticPaths, makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['team']);
export { getStaticPaths, getStaticProps };

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>팀 소개</title>
        <meta name="description" content="수호의 하이 퍼포먼스 팀을 소개합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/linkThumb.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Team />
      </main>
    </>
  );
}
