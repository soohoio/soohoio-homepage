import Head from 'next/head';
import { MainTitle } from '@/component/style/TextStyle';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>수호 아이오</title>
        <meta
          name="description"
          content="금융 기회를 넓히고 싶은 모든 이들이 장애물 없이 블록체인을 넘나들 수 있도록, 수호는 믿을 수 있는 기업 파트너와 함께 투명하고 안전한 인프라를 만듭니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainTitle>야호야호</MainTitle>
        <Button>음음</Button>
      </main>
    </>
  );
}
