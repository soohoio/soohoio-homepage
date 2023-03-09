# sooho.io 홈페이지

Package Manager는 npm을 사용합니다  
Nextjs와 Material UI를 통해 개발되었습니다

### 개발 환경 시작

```bash
$> npm install
$> npm dev
```

http://localhost:3000에서 확인합니다

### 정적 파일 빌드

```bash
$> npm run build
```

out 폴더 내의 파일들을 업로드합니다  
emailJS / NotionAPI / CORS.SH API의 정보가 바뀐 경우 .env 파일을 수정 후 배포합니다

# 폴더 구조

### 루트 폴더 구조

    ├── public                  #
    ├── src                     #
        ├── components          #
            ├── Footer          #
            ├── NavBar          #
            ├── pageComponent   #
            ├── style           #
            ├── ui              #
        ├── constants           #
        ├── module              #
        ├── pages               #
    ├── README.md               #
    └── ...

### public

- 글로벌 텍스트(한/영), 이미지, 폰트, pdf 파일, 비디오가 보관되어 있습니다.
- 텍스트의 경우, 페이지 별 json파일로 구성되어 있습니다.

### components

- pageComponent는 실제 페이지의 화면단의 소스이며 각 섹션별로 나뉘어져 있습니다.
- Footer와 NavBar는 각각 푸터와 네비게이션 바의 소스입니다.
- style에는 MUI 및 기본 스타일 세팅값이 들어있습니다.  
  (기본 세팅값과 폰트 사이즈 및 행간의 경우는 별도 css파일을 통해 관리합니다 ../pages/App.css와 ../pages/Font.css)
- ui에는 공통으로 사용하는 컴포넌트들이 들어있습니다.  
  (본문 컨테이너, 버튼, 애니메이션 컴포넌트 등)

### constant

- 전화번호 코드 상수값을 보관하고 있습니다.

### module

- contextAPI(반응형 스크린 체크)를 포함하고 있습니다.
- 글로벌 모드 지원을 위한 모듈들을 포함하고 있습니다. (i18n 사용 시, SSG 배포 불가능)
