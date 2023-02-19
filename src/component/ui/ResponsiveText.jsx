import useMediaQuery from '@mui/material/useMediaQuery';

/** 반응형으로 텍스트 다르게 표시  */
export default function ResponsiveText({ mobText, tabletText, pcText }) {
  const isMob = useMediaQuery('(max-width:743px)');
  const isTablet = useMediaQuery('(min-width:744px) and (max-width:1439px)');
  const isPc = useMediaQuery('(min-width:1440px)');

  return (
    <>
      {isMob && mobText}
      {isTablet && tabletText}
      {isPc && pcText}
    </>
  );
}
