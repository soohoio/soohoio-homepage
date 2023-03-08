import { Box, Container } from '@mui/material';
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
      <Container
        maxWidth="false"
        sx={{ backgroundColor: '#131313', width: { sm: '1439px !important', lg: 1 } }}
      >
        <FirstSection currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Container>
      {currentTab === 'Team' ? (
        <Box>
          {/* (수정 )강제 적용 요청에 따른 */}
          <Container
            maxWidth="false"
            sx={{ backgroundColor: '#131313', width: { sm: '1439px !important', lg: 1 } }}
          >
            <TeamSection />
            <TeamViewAllPosition />
          </Container>
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
