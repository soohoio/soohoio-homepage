import Recruit from '@/component/pageComponent/recruit';
import Head from 'next/head';

// * SSG 배포 시,
import { getStaticPaths, makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['recruit']);
export { getStaticPaths, getStaticProps };

export default function RecruitPage() {
  return (
    <>
      <Head>
        <title>채용</title>
        <meta name="description" content="수호와 함께 할 인재분들을 채용 중입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/linkThumb.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Recruit />
      </main>
    </>
  );
}
