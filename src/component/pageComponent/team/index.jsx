import { Box } from '@mui/material';
import { useState } from 'react';
import CulturePoint from './_parts/CulturePoint';
import CultureSlideSection from './_parts/CultureSlideSection';
import CultureSupport from './_parts/CultureSupport';
import FirstSection from './_parts/FirstSection';
import TeamSection from './_parts/TeamSection';
import TeamViewAllPosition from './_parts/TeamViewAllPosition';

export default function Team() {
  const [currentTab, setCurrentTab] = useState('Team');

  return (
    <div>
      <FirstSection currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'Team' ? (
        <Box>
          <TeamSection />
          <TeamViewAllPosition />
        </Box>
      ) : (
        <Box>
          <CulturePoint />
          <CultureSupport />
          <CultureSlideSection />
        </Box>
      )}
    </div>
  );
}
