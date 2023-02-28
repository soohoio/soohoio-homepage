import AuditProcess from './_parts/AuditProcess';
import Awards from './_parts/Awards';
import Contact from './_parts/Contact';
import FirstSection from './_parts/FirstSection';
import MainClients from './_parts/MainClients';
import Security from './_parts/Security';

export default function Audit() {
  return (
    <div>
      <FirstSection />
      <MainClients />
      <Awards />
      <Security />
      <AuditProcess />
      <Contact />
    </div>
  );
}
