import React, { createContext } from 'react';
import { useMediaQuery } from '@mui/material';

const DeviceContext = createContext();

export function DeviceProvider({ children }) {
  const isMob = useMediaQuery('(max-width:743px)');
  const isTablet = useMediaQuery('(min-width:744px) and (max-width:1439px)');
  const isPc = useMediaQuery('(min-width:1440px)');

  return (
    <DeviceContext.Provider value={{ isMob, isTablet, isPc }}>{children}</DeviceContext.Provider>
  );
}

export default DeviceContext;
