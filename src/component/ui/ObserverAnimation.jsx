import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ObserverAnimation({ children, animationName, delay, sx, innerSx }) {
  const { ref, inView } = useInView({
    threshold: 0.1, // trigger when nn% of the target is visible
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timeoutId);
    } else {
      setIsVisible(false);
    }
  }, [inView, delay]);

  return (
    <Box
      ref={ref}
      className={inView ? animationName : ''}
      sx={([{ animationDelay: delay ? `${delay}ms` : '0ms' }], sx)}
    >
      <Box className={isVisible && inView ? 'show' : 'blind'} sx={[sx]}>
        {children}
      </Box>
    </Box>
  );
}

ObserverAnimation.defaultProps = {
  animationName: 'fadeInSlow',
};
