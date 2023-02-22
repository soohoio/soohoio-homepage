import React, { useContext } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { black_dark, gray, primary } from '../style/StyleTheme';
import { internationalCode } from '@/constant/internationalcode';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

/** 드롭 다운 컴포넌트 - selectList => 목록을 담은 배열
 * 상위 컴포넌트에서 관리할 staet는 value, onChange에 주입 */
export function CountryNumUnderline({ value, onChange }) {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);
  // xs, sm 반응형 안먹는 것들을 위한
  const selectFontSize = isMob ? '14px' : '24px';
  const selectPadding = isMob ? '5px 0px 5px 0px' : '13px 0px 0px 0px';
  return (
    <FormControl variant="standard">
      <Select
        name="contryCode"
        // (optional) name은 다수의 input안에서 활용 시, 다수 input 관리를 위한 name
        value={value}
        autoWidth
        onChange={e => {
          onChange(e.target.value);
        }}
        renderValue={selected => (selected ? selected : '')}
        SelectDisplayProps={{
          style: {
            fontWeight: 300,
            fontSize: selectFontSize,
            padding: selectPadding,
          },
        }}
        MenuProps={{
          // 메뉴 아래 왼쪽으로 정렬
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            horizontal: 'left',
          },
          // 메뉴 패딩 삭제
          MenuListProps: { disablePadding: true },
          style: {
            // 메뉴 최대 높이
            maxHeight: 300,
          },
          // 메뉴 마우스 오버 시 색상
          PaperProps: {
            sx: {
              '& .MuiMenuItem-root.Mui-selected': {
                backgroundColor: primary,
                color: black_dark,
              },
              '& .MuiMenuItem-root:hover': {
                backgroundColor: primary,
                color: black_dark,
              },
            },
          },
        }}
        sx={{
          width: { xs: '70px', sm: '95px' },
          color: '#FFFFFF',
          // 화살표
          '.MuiSvgIcon-root ': {
            fill: '#FFFFFF',
            fontSize: '32px',
            marginRight: '-3px',
            padding: '0px',
          },
          // 포커스 없을 시 밑줄 색상
          '&:before': {
            borderColor: gray,
          },
        }}
      >
        {internationalCode.map(function (eachdata) {
          return (
            <MenuItem
              key={eachdata.label}
              value={eachdata.code}
              sx={{ backgroundColor: gray, fontWeight: 300 }}
            >
              {`${eachdata.label} ${eachdata.code}`}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

CountryNumUnderline.defaultProps = {
  value: '',
  onChange: () => {},
};
