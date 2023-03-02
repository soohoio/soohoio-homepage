import ButtonSection from './_parts/ButtonSection';
import FAQ from './_parts/FAQ';
import FirstSection from './_parts/FirstSection';
import RecruitList from './_parts/RecruitList';
import RecruitProcess from './_parts/RecruitProcess';

export default function Recruit() {
  return (
    <div>
      <FirstSection />
      <RecruitList />
      <RecruitProcess />
      <FAQ />
      <ButtonSection />
    </div>
  );
}
