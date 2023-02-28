import { useRouter } from 'next/router';
import { useState } from 'react';
import DescriptionSection from './_parts/DescriptionSection';
import FirstSection from './_parts/FirstSection';
import { RecordSectionKleva, RecordSectionStayKing } from './_parts/RecordSection';
import SecondGradation from './_parts/SecondGradation';
import ViewWebsite from './_parts/ViewWebsite';

export default function Product() {
  const router = useRouter();

  const [currentProduct, setCurrentProduct] = useState(
    router.query.currentProduct ? router.query.currentProduct : 'KLEVA',
  );

  return (
    <div>
      <FirstSection currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} />
      <SecondGradation currentProduct={currentProduct} />
      {currentProduct === 'KLEVA' ? <RecordSectionKleva /> : <RecordSectionStayKing />}
      <DescriptionSection currentProduct={currentProduct} />
      <ViewWebsite currentProduct={currentProduct} />
    </div>
  );
}
