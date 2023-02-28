import { Box } from '@mui/material';
import React, { useState } from 'react';

export default function EnlargeAnimation({ children, borderRadius, scale }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box
      className="enlargement-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{ borderRadius: borderRadius, overflow: 'visible' }}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          style: {
            transform: isHovering ? `scale(${scale})` : 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
          },
        }),
      )}
    </Box>
  );
}

EnlargeAnimation.defaultProps = {
  borderRadius: '8px',
  scale: 1.025,
};
