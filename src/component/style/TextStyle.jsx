import { Typography } from '@mui/material';
import { styled } from '@mui/system';

/** 타이틀 텍스트(향료, 보유레시피 등) */
export const MainTitle = styled(Typography)(() => ({
  fontWeight: 700,
  textAlign: 'left',
  fontSize: '18px',
  marginBottom: '10px',
}));

/** 서브 타이틀(오늘 날짜 등) */
export const SubTitle = styled(Typography)(() => ({
  color: '#666666',
  fontWeight: 500,
  textAlign: 'left',
  fontSize: '16px',
}));

/** 일반 콘텐츠 타이틀 */
export const NormalContentsTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: 1.25,
  textAlign: 'left',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
}));

/** 일반 콘텐츠 서브 타이틀 */
export const NormalContentsSubTitle = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '12px',
  color: '#666666',
  textAlign: 'left',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
}));

/** 가장 작은 10px 텍스트 */
export const MinimumOneLineText = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '10px',
  textAlign: 'left',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
}));
