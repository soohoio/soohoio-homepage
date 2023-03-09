import Audit from '@/component/pageComponent/solution/audit';
import Head from 'next/head';

// * SSG 배포 시,
import { getStaticPaths, makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['audit']);
export { getStaticPaths, getStaticProps };

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
