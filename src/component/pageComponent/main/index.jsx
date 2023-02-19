import Cafe from './_parts/Cafe';
import CardSection from './_parts/CardSection';
import Defi from './_parts/Defi';
import FirstSection from './_parts/FirstSection';
import Mission from './_parts/Mission';
import Package from './_parts/Package';
import Reference from './_parts/Reference';

export default function MainPage() {
  return (
    <div>
      <FirstSection />
      <CardSection />
      <Reference />
      <Mission />
      <Package />
      <Defi />
      <Cafe />
    </div>
  );
}
