import { useState, useRef, useContext } from 'react';
import {
  black,
  borderRadiusPc,
  borderRadiusMob,
  gray,
  gray_light,
  primary,
} from '@/component/style/StyleTheme';
import { BodyContainer } from '@/component/ui/BodyContainer';
import { RoundContainedButton, RoundOutlinedButton } from '@/component/ui/BoxButton';
import { CountryNumUnderline } from '@/component/ui/DropDown';
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  Checkbox,
  Tooltip,
  Typography,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { ConfirmModal } from '@/component/ui/Modal';
import DeviceContext from '@/module/ContextAPI/DeviceContext';

export default function ContactForm() {
  const { isMob, isTablet, isPc } = useContext(DeviceContext);

  const contactTypeList = [
    {
      label: '기업 솔루션',
      contents: isMob
        ? `탈중앙 금융 생태계 구축&활성화를 위한\nAudit, Dapp, Bridge 서비스를 제공합니다.`
        : 'DeFi 생태계 구축 및 활성화를 위한 Bridge, Dapp, Audit 서비스에 대한 문의를 남겨주세요.',
      img: 'solution',
    },
    {
      label: 'Recruit',
      contents: isMob
        ? `수호 합류를 위한 콜챗 신청과\n궁금한 점을 남겨주세요. `
        : '수호 합류를 위한 콜챗 신청 및 궁금한 점을 남겨주세요.',
      img: 'recruit',
    },
    {
      label: 'Cafe Space Rental',
      contents: isMob
        ? `Web3 크리에이터를 위한\n블록체인 커뮤니티 공간입니다.`
        : '블록체인 커뮤니티를 위한 공간 대관 문의를 남겨주세요.',
      img: 'cafe',
    },
    {
      label: 'ETC',
      contents: isMob
        ? `수호의 프로덕트 및 기타 궁금한 점이 있다면\n무엇이든 남겨주세요.`
        : '수호의 프로덕트 및 기타 궁금한 점이 있다면 무엇이든 남겨주세요.',
      img: 'etc',
    },
  ];
  const formList = [
    {
      label: '성함',
      placeHolder: '성함을 입력해 주세요.',
      isRequired: true,
      keyName: 'name',
      helperText: '성함은 필수 사항입니다.',
    },
    {
      label: '이메일',
      placeHolder: '이메일을 입력해 주세요.',
      isRequired: true,
      keyName: 'email',
      helperText: '이메일은 필수 사항입니다.',
    },
    { label: '연락처', placeHolder: '010-1234-5678', isRequired: false, keyName: 'phoneNumber' },
    { label: '소속', placeHolder: '수호아이오 입니다.', isRequired: false, keyName: 'team' },
  ];

  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  // 초기값 및 인풋 state
  const defaultInput = {
    isAgree: false,
    contactType: contactTypeList[currentTypeIndex].label,
    name: '',
    email: '',
    countryCode: '+82',
    phoneNumber: '',
    team: '',
    contents: '',
  };
  const [contactInput, setContactInput] = useState({ ...defaultInput });

  // 파일 추가
  const [newFile, setNewFile] = useState(null);
  const fileInput = useRef();

  // 에러 체크
  const [errorCheck, setErrorCheck] = useState(false);
  const [fileLimitCheck, setFileLimitCheck] = useState(false);

  // 전송 완료 모달
  const [confirmModalSwitch, setConfirmModalSwitch] = useState(false);

  // 문의 메일 선택
  const selectType = ind => {
    setCurrentTypeIndex(ind);
    const tempInput = { ...contactInput };
    tempInput.contactType = contactTypeList[ind].label;
    setContactInput(tempInput);
  };

  // 인풋 onChange
  const onChangeContactInput = e => {
    setErrorCheck(false);
    const name = e.target.name;
    const value = name === 'isAgree' ? e.target.checked : e.target.value;
    setContactInput({
      ...contactInput,
      [name]: value,
    });
  };

  // 국가 코드 선택
  const onChangeCountryCode = value => {
    setContactInput({
      ...contactInput,
      countryCode: value,
    });
  };

  // 파일 선택 창 오픈
  const addFile = () => {
    fileInput.current.click();
  };

  // 파일 업로드
  const onChangeImage = e => {
    if (e.target.files[0]) {
      const maxSize = 2 * 1024 * 1024;
      if (e.target.files[0].size > maxSize) {
        setFileLimitCheck(true);
      } else {
        setFileLimitCheck(false);
        setNewFile(e.target.files[0]);

        // 동일 이름 재업로드 시 첨부 안되는 에러 방지를 위해 초기화
        fileInput.current.value = '';
      }
    }
  };

  const removeFile = () => {
    setNewFile(null);
  };

  const submitForm = async () => {
    // 파일 base64 인코딩
    const base64File = newFile && (await getBase64(newFile));
    if (!contactInput.name || !contactInput.email || !contactInput.contents) {
      setErrorCheck(true);
    } else if (!contactInput.isAgree) {
      alert('개인정보 수집 및 이용에 동의해주세요!');
    } else {
      const body = {
        category: contactTypeList[currentTypeIndex].label,
        name: contactInput.name,
        team: contactInput.team,
        email: contactInput.email,
        countryCode: contactInput.countryCode,
        phoneNumber: contactInput.phoneNumber,
        isAgree: contactInput.isAgree ? '동의' : '미동의',
        contents: contactInput.contents,
        base64File: base64File,
        fileName: base64File ? newFile.name : '첨부파일 없음',
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_MAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_MAIL_TEMPLETE_ID,
          body,
          process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY,
        )
        .then(
          function (response) {
            // console.log('SUCCESS!', response.status, response.text);
            setConfirmModalSwitch(true);
            setContactInput({ ...defaultInput });
            setNewFile(null);
          },
          function (err) {
            console.log('FAILED...', err);
          },
        );
    }
  };

  // base64로
  const getBase64 = async file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise(resolve => {
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  return (
    <>
      {/* 문의 카테고리 선택 영역 */}
      <Container maxWidth={false} sx={{ backgroundColor: '#1C1C1C' }}>
        <BodyContainer backgroundColor="transparent">
          <Grid container justifyContent="space-between" alignItems="center">
            <Box sx={{ pt: '47px', pb: '48px' }}>
              <Typography
                className={isMob ? 'mobTitle16KR' : 'pcTitle32KR'}
                component="div"
                sx={{ mb: '28px' }}
              >
                문의 카테고리
              </Typography>
              <Stack
                direction="row"
                columnGap={{ xs: '12px', sm: '20px' }}
                rowGap={{ xs: '12px', sm: '24px' }}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {contactTypeList.map(function (each, index) {
                  return (
                    <Box key={each.label}>
                      {currentTypeIndex === index ? (
                        <RoundContainedButton
                          onClick={() => selectType(index)}
                          key={each.label}
                          text={each.label}
                          px={{ xs: '23px', sm: '40px' }}
                          py={{ xs: '9px', sm: '16px' }}
                        />
                      ) : (
                        <RoundOutlinedButton
                          onClick={() => selectType(index)}
                          key={each.label}
                          text={each.label}
                          color="#FFFFFF"
                          px={{ xs: '22px', sm: '38px' }}
                          py={{ xs: '7px', sm: '14px' }}
                        />
                      )}
                    </Box>
                  );
                })}
              </Stack>

              <Typography
                className={isMob ? 'mobBody12KR' : 'pcBody20KR'}
                color="primary"
                fontWeight={{ xs: 300, sm: 400 }}
                sx={{ mt: { xs: '21px', sm: '28px' } }}
              >
                {contactTypeList[currentTypeIndex].contents}
              </Typography>
            </Box>
            <CardMedia
              key={currentTypeIndex}
              className="fadeIn"
              component="img"
              image={`/image/pageImage/contact/${contactTypeList[currentTypeIndex].img}.png`}
              alt={`${contactTypeList[currentTypeIndex].label} image`}
              sx={{
                width: { xs: '108px', sm: '546px' },
                height: { xs: '67px', sm: '336px' },
                objectFit: 'cover',
              }}
            />
          </Grid>
        </BodyContainer>
      </Container>

      {/* 컨택 작성 폼 영역 */}
      <BodyContainer ptPc="72px" pbPc="50px" ptMob="38px" pbMob="40px">
        <Grid container spacing={{ lg: '120px' }}>
          {/* 연락처 등 인적사항 */}
          <Grid item xs={12} lg={5.5}>
            {formList.map(function (each) {
              return (
                <Stack
                  key={each.label}
                  direction="row"
                  alignItems="center"
                  sx={{ mb: { xs: '27px', sm: '43px' } }}
                >
                  <Box sx={{ width: { xs: '80px', sm: '130px', lg: '140px' } }}>
                    <Typography className={isMob ? 'mobBody14KR' : 'pcBody24KR'} component="div">
                      {each.label}
                      {each.isRequired && (
                        <Box sx={{ display: 'inline', color: '#00F2C3' }}> *</Box>
                      )}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: '43px', sm: '50px' }}
                    sx={{ width: 1 }}
                  >
                    {each.label === '연락처' && (
                      <CountryNumUnderline
                        value={contactInput.countryCode}
                        onChange={onChangeCountryCode}
                      />
                    )}

                    <TextField
                      fullWidth
                      variant="standard"
                      name={each.keyName}
                      value={contactInput[each.keyName]}
                      onChange={onChangeContactInput}
                      placeholder={each.placeHolder}
                      error={errorCheck && each.helperText && contactInput[each.keyName] === ''}
                      helperText={
                        errorCheck && contactInput[each.keyName] === '' && each.helperText
                      }
                      sx={{
                        '& .MuiInput-underline:before': { borderBottomColor: gray },
                        '&:hover .MuiInput-underline:before': {
                          borderBottomColor: '#FFFFFF',
                        },
                        '&:hover .MuiInput-underline:hover:not(.Mui-disabled):before': {
                          borderBottomColor: '#FFFFFF',
                        },
                        '& .MuiInputBase-input': {
                          fontSize: { xs: '14px', sm: '24px' },
                          fontWeight: 300,
                        },
                      }}
                    />
                  </Stack>
                </Stack>
              );
            })}
          </Grid>

          {/* 문의 내용 */}
          <Grid item xs={12} lg={6.5}>
            <Typography className={isMob ? 'mobBody14KR' : 'pcBody24KR'} component="div">
              문의 내용<Box sx={{ display: 'inline', color: '#00F2C3' }}> *</Box>
            </Typography>
            <Box
              sx={{
                backgroundColor: '#1C1C1C',
                width: 1,
                borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                mt: { xs: '8px', sm: '12px' },
                mb: '24px',
                px: { xs: '12px', sm: '27px' },
                py: { xs: '7px', sm: '24px' },
                pb: { xs: '12px', sm: '24px' },
                boxSizing: 'border-box',
              }}
            >
              <TextField
                variant="standard"
                fullWidth
                multiline
                minRows={13}
                name="contents"
                value={contactInput.contents}
                onChange={onChangeContactInput}
                placeholder={
                  contactInput.contents === '' && errorCheck
                    ? '문의 내용은 필수 사항입니다.'
                    : '문의 내용을 입력해 주세요.'
                }
                InputLabelProps={{ style: { color: '#10263B' } }}
                InputProps={{ style: { color: '#10263B' } }}
                sx={[
                  contactInput.contents === '' &&
                    errorCheck && {
                      '.MuiInputBase-input::placeholder': {
                        color: '#E33535',
                        opacity: 0.9,
                      },
                    },
                  {
                    display: { xs: ' none', sm: 'block' },
                    py: '0px !important',
                    // 투명 텍스트 박스를 위한 (언더라인 제거(기본/호버/포커스))
                    '&:hover .MuiInput-underline:before': {
                      borderBottomColor: 'transparent',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottomColor: 'transparent',
                    },
                    '& .MuiInput-underline:after': { borderBottomColor: 'transparent' },
                    '& .MuiInput-underline:before': { borderBottomColor: 'transparent' },
                    '& .Mui-focused .MuiInput-underline:before': {
                      borderBottomColor: 'transparent',
                    },
                    '& .Mui-focused .MuiInput-underline:after': {
                      borderBottomColor: 'transparent',
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '14px', sm: '20px' },
                      fontWeight: { xs: 300, sm: 400 },
                      lineHeight: { xs: '20px', sm: '28px' },
                    },
                    mb: { xs: '0px', sm: '9px' },
                  },
                ]}
              />
              {/* 모바일 mixRows 변경을 위해 복제 / 반응형 설정 불가한 */}
              <TextField
                variant="standard"
                fullWidth
                multiline
                minRows={9}
                name="contents"
                value={contactInput.contents}
                onChange={onChangeContactInput}
                placeholder={
                  contactInput.contents === '' && errorCheck
                    ? '문의 내용은 필수 사항입니다.'
                    : '문의 내용을 입력해 주세요.'
                }
                InputLabelProps={{ style: { color: '#10263B' } }}
                InputProps={{ style: { color: '#10263B' } }}
                sx={[
                  contactInput.contents === '' &&
                    errorCheck && {
                      '.MuiInputBase-input::placeholder': {
                        color: '#E33535',
                        opacity: 0.9,
                      },
                    },
                  {
                    display: { sm: 'none' },
                    py: '0px !important',
                    // 투명 텍스트 박스를 위한 (언더라인 제거(기본/호버/포커스))
                    '&:hover .MuiInput-underline:before': {
                      borderBottomColor: 'transparent',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottomColor: 'transparent',
                    },
                    '& .MuiInput-underline:after': { borderBottomColor: 'transparent' },
                    '& .MuiInput-underline:before': { borderBottomColor: 'transparent' },
                    '& .Mui-focused .MuiInput-underline:before': {
                      borderBottomColor: 'transparent',
                    },
                    '& .Mui-focused .MuiInput-underline:after': {
                      borderBottomColor: 'transparent',
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '14px', sm: '20px' },
                      fontWeight: { xs: 300, sm: 400 },
                      lineHeight: { xs: '20px', sm: '28px' },
                    },
                    mb: { xs: '12px', sm: '9px' },
                  },
                ]}
              />
              <Stack direction="row" alignItems="center">
                <Checkbox
                  name="isAgree"
                  onChange={onChangeContactInput}
                  value={contactInput.isAgree}
                  checked={contactInput.isAgree}
                  sx={{
                    color: '#FFFFFF',
                    p: 0,
                  }}
                />
                <Typography
                  className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                  sx={{ fontWeight: 300, ml: { xs: '10px', sm: '12px' } }}
                >
                  개인정보 수집∙이용 동의&nbsp;
                </Typography>
                <Typography
                  className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                  color="primary"
                  sx={{ fontWeight: 300, mr: '12px' }}
                >
                  (필수)
                </Typography>
                <Tooltip
                  placement={isPc ? 'left-start' : 'bottom-end'}
                  arrow
                  enterTouchDelay={0}
                  leaveTouchDelay={isMob ? 3000 : 1500}
                  title={
                    <Box sx={{ width: 1 }}>
                      <Typography className={isMob ? 'mobBody12KR' : 'pcTitle24KR'}>
                        개인정보 수집 이용 동의
                      </Typography>
                      <Typography
                        className={isMob ? 'mobBody10KR' : 'pcBody18KR'}
                        sx={{ fontWeight: 300, mt: { xs: '8px', sm: '20px' } }}
                      >
                        {`다음의 사항을 충분히 읽어 보신 후 동의 여부를 체크하여 주시기 바랍니다.\n귀하께서는 위 개인정보 수집∙이용에 대한 동의를 거부하실 수 있습니다.\n그러나 동의를 거부할 경우 문의사항 처리에 제한을 받을 수 있습니다.`}
                      </Typography>
                      <Box
                        sx={{
                          px: { xs: '8px', sm: '16px' },
                          py: { xs: '10px', sm: '21px' },
                          backgroundColor: '#3E3E3E',
                          borderRadius: { xs: borderRadiusMob, sm: borderRadiusPc },
                          mt: { xs: '8px', sm: '16px' },
                        }}
                      >
                        <Typography
                          className={isMob ? 'mobBody10KR' : 'pcBody18KR'}
                          color="#AFAFAF"
                          sx={{ fontWeight: 600 }}
                        >
                          {`01   개인정보 수집항목 : 성함, 이메일, 연락처, 소속\n02   개인정보 이용목적 : 고객이 작성한 문의 처리\n03   개인정보 보유 및 이용 기간 : 동의일로부터 문의 처리 후 1년`}
                        </Typography>
                      </Box>
                    </Box>
                  }
                  componentsProps={{
                    tooltip: {
                      sx: {
                        maxWidth: '1000px',
                        paddingX: { xs: '12px', sm: '20px' },
                        paddingY: { xs: '12px', sm: '24px' },
                        // 툹팁 배경색
                        bgcolor: gray,
                        '& .MuiTooltip-arrow': {
                          // 툴팁 글자 색상
                          color: '#FFFFFFF',
                        },
                      },
                    },
                  }}
                >
                  <Typography
                    className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                    color={gray}
                    sx={{ fontWeight: 300, cursor: 'pointer' }}
                  >
                    자세히 보기
                  </Typography>
                </Tooltip>
              </Stack>
            </Box>
            <Grid container justifyContent="space-between" alignItems="center">
              <RoundOutlinedButton
                text="파일 업로드"
                onClick={newFile ? null : addFile}
                color={newFile ? primary : '#FFFFFF'}
                icon={
                  <CardMedia
                    component="img"
                    image={newFile ? '/image/icon/clipMint.png' : '/image/icon/clip.png'}
                    alt="file upload"
                    sx={{
                      width: { xs: '20px', sm: '28px' },
                      height: { xs: '20px', sm: '28px' },
                      cursor: 'pointer',
                    }}
                  />
                }
                sx={{ width: { xs: 0.48, sm: 0.48, lg: '316px' }, px: '0px !important' }}
              />
              <RoundContainedButton
                onClick={submitForm}
                text="보내기"
                color={black}
                backgroundColor="#FFFFFF"
                py={{ xs: '11px', sm: '20px' }}
                sx={{ width: { xs: 0.48, sm: 0.48, lg: '316px' }, px: '0px !important' }}
              />
            </Grid>
            {/* 파일 업로드 */}
            <input
              type="file"
              hidden
              onChange={onChangeImage}
              ref={fileInput}
              accept=".zip, .jpg, .jpeg, .png, .pdf"
            />

            <Stack
              direction="row"
              alignItems="center"
              // cardMedia 너비가 다른
              spacing={{ xs: '9px', sm: '16px' }}
              sx={{ mt: '24px', pl: { xs: '1.5px', sm: '2px' } }}
            >
              <Tooltip
                arrow
                enterTouchDelay={0}
                title={
                  <Typography
                    className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                    sx={{ fontWeight: 300 }}
                  >
                    {`∙ 첨부 파일 최대 용량은 2mb 입니다.\n∙ 파일은 최대 1개 업로드 가능합니다.\n∙ 업로드 가능 파일 형태 zip, jpg, png, pdf`}
                  </Typography>
                }
                placement={isPc ? 'left-start' : 'right-start'}
                componentsProps={{
                  tooltip: {
                    sx: {
                      paddingLeft: { xs: '12px', sm: '20px' },
                      paddingRight: { xs: '24px', sm: '40px' },
                      paddingY: { xs: '12px', sm: '24px' },
                      // 툹팁 배경색
                      bgcolor: gray,
                      '& .MuiTooltip-arrow': {
                        // 툴팁 글자 색상
                        color: '#FFFFFFF',
                      },
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image="/image/icon/question.png"
                  alt="about file upload question"
                  sx={{
                    width: { xs: '18px', sm: '24px' },
                    height: { xs: '18px', sm: '24px' },
                    cursor: 'pointer',
                  }}
                />
              </Tooltip>
              <Typography
                className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                color={gray_light}
                sx={{ fontWeight: 300 }}
              >
                파일 업로드 안내
              </Typography>
            </Stack>
            {/* 파일 업로드 에러 메시지 */}
            {fileLimitCheck && (
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: '9px', sm: '14px' }}
                sx={{ mt: { xs: '12px', sm: '16px' } }}
              >
                <CardMedia
                  component="img"
                  image="/image/icon/error.png"
                  alt="file upload error message"
                  sx={{ width: { xs: '20px', sm: '28px' }, height: { xs: '17px', sm: '24px' } }}
                />
                <Typography
                  className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                  color="error"
                  sx={{ fontWeight: 300 }}
                >
                  파일 용량을 확인해 주세요. (최대 2mb)
                </Typography>
              </Stack>
            )}
            {/* 업로드 된 파일 확인  */}
            {newFile && (
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: '9px', sm: '16px' }}
                sx={{ mt: { xs: '12px', sm: '16px' }, pl: '2px' }}
              >
                <CardMedia
                  component="img"
                  image="/image/icon/mintCheckBox.png"
                  alt={`${newFile.name} file`}
                  sx={{ width: { xs: '17px', sm: '24px' }, height: { xs: '17px', sm: '24px' } }}
                />
                <Box sx={{ width: { xs: '150px', sm: '250px' } }}>
                  <Typography
                    className={isMob ? 'mobBody12KR' : 'pcBody18KR'}
                    color={gray_light}
                    sx={{
                      fontWeight: 300,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {newFile.name}
                  </Typography>
                </Box>
                <CardMedia
                  onClick={removeFile}
                  component="img"
                  image="/image/icon/deleteX.png"
                  alt="file delete Button"
                  sx={{
                    width: { xs: '19px', sm: '28px' },
                    height: { xs: '19px', sm: '28px' },
                    cursor: 'pointer',
                    ':hover': { opacity: 0.8 },
                  }}
                />
              </Stack>
            )}
          </Grid>
        </Grid>
      </BodyContainer>

      <ConfirmModal
        modalSwitch={confirmModalSwitch}
        setModalSwitch={setConfirmModalSwitch}
        contents={`문의 접수가 완료되었습니다.\n최대한 빠르게 확인 후\n답변드리겠습니다.`}
      />
    </>
  );
}
