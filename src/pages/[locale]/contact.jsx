import ContactPage from '@/component/pageComponent/Contact';
import Head from 'next/head';

// * SSG 배포 시,
import { getStaticPaths, makeStaticProps } from '@/module/getStatic';
const getStaticProps = makeStaticProps(['contact']);
export { getStaticPaths, getStaticProps };

export default function Contact() {
  return (
    <>
      <Head>
        <title>문의</title>
        <meta name="description" content="궁금한 점이 있다면 무엇이든 문의해주세요. " />
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
