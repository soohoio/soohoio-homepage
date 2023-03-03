import LoadingScreen from '@/component/ui/Loading';
import { useState } from 'react';
import ButtonSection from './_parts/ButtonSection';
import FAQ from './_parts/FAQ';
import FirstSection from './_parts/FirstSection';
import RecruitList from './_parts/RecruitList';
import RecruitProcess from './_parts/RecruitProcess';

export default function Recruit() {
  // 노션 채용 데이터 목록
  const [recruitList, setRecruitList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(true);

  return (
    <div>
      <FirstSection recruitList={recruitList} />
      <RecruitList
        recruitList={recruitList}
        setRecruitList={setRecruitList}
        loading={loading}
        setLoading={setLoading}
        refreshData={refreshData}
        setRefreshData={setRefreshData}
      />
      <RecruitProcess />
      <FAQ />
      <ButtonSection />
      {loading && <LoadingScreen />}
    </div>
  );
}
