**작성 중입니다.**
## 📖 Contents
1. [Description](🙋‍♀️-Description)
2. [Tech Stacks](💻-Tech-Stacks)
3. [Getting Started](🔧-Getting-Started)
4. [Features](✨-Features)
   1. [Home Page]([Home-Page])
   2. [About Page]([About-Page])
   3. [Media Page]([Media-Page])
   4. [Community Page]([Community-Page])
   5. [Contact Page]([Contact-Page])
   6. [Membership Page]([Membership-Page])
5. [Structure](📁-Structure)
   1. [Overview]([Overview])
   2. [Pages & Components]([Pages-&-Components])
   3. [Hooks & Redux]([Hooks-&-Redux])
   4. [CSS & SCSS]([CSS-&-SCSS])
6. [Commit Messages](📢-Commit-Messages)
## 🙋‍♀️ Description
- **Project Name** UnSpace
- **URL** [https://icallitnewart.github.io/unspace_react/](https://icallitnewart.github.io/unspace_react/)
- **Concept** 인테리어를 주제로 한 기업형 홈페이지
- **Aims** 
  <br/>📌 애니메이션 관련 플러그인 없이 인터랙티브한 홈페이지 제작
  <br/>📌 flickr API, youtube API, 카카오맵 API 등 다양한 외부 API들을 활용한 데이터 바인딩 

## 💻 Tech Stacks
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">

## 🔧 Getting Started
1. clone repository
```
$ git clone "https://github.com/icallitnewart/unspace_react.git"
```
2. install dependencies 
```
$ npm install
```
3. start project
```
$  npm start
```

## ✨ Features
### [Home Page]
#### ✅ fadeIn, fadeOut 슬라이드 배너
  - NEXT 버튼 클릭시 다음 슬라이드로 이동
  - 소이미지 클릭시 해당 슬라이드로 이동
  - 하단의 disc 클릭시 해당 슬라이드로 이동
  - 📄 **ᴍᴀɪɴ** Visual.js
#### ✅ Carousel 슬라이드
  - 화살표 좌우 버튼 클릭시 이전/다음으로 이동
  - 무한 반복 슬라이드
  - 이미지 위에 마우스 hover시 영상 재생
  - 📄 **ᴍᴀɪɴ** Trending.js &nbsp;**ʜᴏᴏᴋs** useSlider.js
#### ✅ 탭메뉴 구현
  - 애니메이션 효과 적용
  - 폼 유효성 검사
  - 📄 **ᴍᴀɪɴ** About.js &nbsp;**sᴜʙ** Idea.js Intro.js Contact.js
#### ✅ Flickr API를 활용한 갤러리
  - 상단의 해쉬태그 버튼 클릭시 해당 이미지 데이터 호출 및 출력
   <br/>💬 최초 호출시에만 로딩 애니메이션 효과 적용
   <br/>💬 한번 호출한 데이터는 redux로 저장하여 다시 버튼 클릭해도 재호출 방지
  - 소이미지에 마우스 hover시 좌측의 큰 이미지로 해당 이미지 출력
  - 소이미지 클릭시 Modal 팝업창 띄우기 (모바일 사이즈는 미지원)
  - 📄 **ᴍᴀɪɴ** Gallery.js &nbsp;**ʜᴏᴏᴋs** useFetchFlickrData.js
#### ✅ 카카오맵 API를 활용한 지도
  - 버튼 클릭시 해당 지점의 지도와 정보 불러오기
  - 스크린 사이즈 변경시 지도의 center 유지   
  - 📄 **ᴍᴀɪɴ** Location.js &nbsp;**ʜᴏᴏᴋs** useKakaoMap.js
#### ✅ 스크롤시 각 섹션 fadeIn 애니메이션 효과 적용
  - 📄 **ʜᴏᴏᴋs** useScrollEffect.js

### [About Page]
#### ✅ 탭버튼 클릭시 해당 섹션으로 스크롤 다운
  - 📄 **ᴍᴀɪɴ** Visual_sub.js &nbsp;**ʜᴏᴏᴋs** useScrollDown.js
#### ✅ Carousel 슬라이드
  - 자동 재생 기능
  - 상하 화살표 버튼 클릭시 이전/다음 슬라이드로 이동
  - 슬라이드 변환시 텍스트 애니메이션 효과 적용
  - 📄 **ᴍᴀɪɴ** Members.js &nbsp;**ʜᴏᴏᴋs** useSlider.js
#### ✅ 스크롤시 각 섹션 fadeIn 애니메이션 효과 적용
  - 📄 **ʜᴏᴏᴋs** useScrollEffect.js

### [Media Page]
#### ✅ 탭버튼 클릭시 Projects 혹은 Youtube 섹션으로 이동
  - 📄 **ᴍᴀɪɴ** Visual_sub.js
#### ✅ Flickr API를 활용한 갤러리
  - 상단의 해쉬태그 버튼 클릭시 해당 이미지 데이터 호출 및 출력
   <br/>💬 최초 호출시에만 로딩 애니메이션 효과 적용
   <br/>💬 한번 호출한 데이터는 redux로 저장하여 다시 버튼 클릭해도 재호출 방지
  - 📄 **ᴍᴀɪɴ** Projects.js &nbsp;**ʜᴏᴏᴋs** useFetchFlickrData.js
#### ✅ Youtube API를 활용한 플레이리스트
  - 📄 **ᴍᴀɪɴ** Youtube.js
#### ✅ Modal 팝업
  - 📄 **ᴍᴀɪɴ** Popup.js

### [Community Page]
#### ✅ 탭버튼 클릭시 FAQ 혹은 Notice 게시판으로 이동
  - 📄 **ᴍᴀɪɴ** Visual_sub.js
#### ✅ FAQ 게시판
  - 카테고리 메뉴 클릭시 해당 데이터만 불러오기
  - 글 제목 클릭시 내용 확인
  - 📄 **ᴍᴀɪɴ** Faq.js
#### ✅ Notice 게시판
  - 게시글 클릭시 해당 포스트로 이동
  - 이전글, 다음글 보기
  - 📄 **ᴍᴀɪɴ** Notice.js &nbsp;**sᴜʙ** NoticePost.js
#### ✅ 페이지네이션 기능
  - 번호 클릭시 해당 목록 리스트 보여주기
  - 화살표 버튼 클릭시 다음 번호로 이동
  - 첫/마지막 번호에 도달시 화살표 버튼 비활성화
  - 📄 **ᴍᴀɪɴ** Pagination.js
#### ✅ 검색 기능
  - 검색시 하이라이트 기능 지원
  - 매치되는 데이터가 없을 때 결과 없음 표시 
  - 📄 **ᴍᴀɪɴ** SearchBox.js &nbsp;**ʜᴏᴏᴋs** useHighlight.js
  
### [Contact Page]
#### ✅ 탭버튼 클릭시 해당 섹션으로 스크롤 다운
  - 📄 **ᴍᴀɪɴ** Visual_sub.js &nbsp;**ʜᴏᴏᴋs** useScrollDown.js
#### ✅ 문의하기 폼 유효성 검사
  - 📄 **ᴍᴀɪɴ** Getintouch.js
#### ✅ 카카오맵 API를 활용한 지도
  - 버튼 클릭시 해당 지점의 지도와 정보 불러오기
  - 스크린 사이즈 변경시 지도의 center 유지   
  - 📄 **ᴍᴀɪɴ** Location.js &nbsp;**ʜᴏᴏᴋs** useKaKaoMap.js

### [Membership Page]
#### ✅ 탭버튼 클릭시 로그인 혹은 회원가입 페이지로 이동
  - 📄 **ᴍᴀɪɴ** Visual_sub.js
#### ✅ 이용 약관 동의 확인
  - 📄 **ᴍᴀɪɴ** Policy.js **sᴜʙ** Signup.js
#### ✅ 회원가입 폼 유효성 검사
  - 📄 **ᴍᴀɪɴ** SignupForm.js

## 📁 Structure
### [Overview]
```
src
├── public            # HTML, DB, image files
│    ├── db           # DB(JSON) files
│    ├── img          # Image files
│    ├── favicon.ico
│    └── index.html
├── docs              # Documentation files 
├── src               # Source files 
│    ├── components   # Component files per page
│    ├── css          # CSS files
│    ├── hooks        # Custom hooks
│    ├── pages        # Page files
│    ├── redux        # Redux setting files
│    ├── scss         # SCSS files
│    ├── App.js
│    └── index.js
└── README.md
```
### [Pages & Components]
```
src
├── components       
│     ├── about
│     │     ├── Intro.js
│     │     ├── Members.js
│     │     └── Services.js
│     ├── common
│     │     ├── Footer.js
│     │     ├── Header.js
│     │     ├── Loader.js
│     │     ├── Popup.js
│     │     └── Visual_sub.js
│     ├── community
│     │     ├── Faq.js
│     │     ├── Notice.js
│     │     ├── NoticePost.js
│     │     ├── Pagination.js
│     │     └── SearchBox.js
│     ├── contact
│     │     ├── Getintouch.js
│     │     └── Location.js 
│     ├── home
│     │     ├── About.js
│     │     ├── Contact.js
│     │     ├── Gallery.js
│     │     ├── Idea.js
│     │     ├── Intro.js
│     │     ├── Location.js
│     │     ├── Philosophy.js
│     │     ├── Quote.js
│     │     ├── Subscribe.js
│     │     ├── Trending.js
│     │     └── Visual.js
│     ├── media
│     │     ├── Projects.js
│     │     └── Youtube.js
│     └── membership
│           ├── Login.js
│           ├── Policy.js
│           ├── Signup.js
│           └── SignupForm.js
└── pages
      ├── About.js
      ├── Community.js
      ├── Contact.js
      ├── Home.js
      ├── Media.js
      └── Membership.js
```
### [Hooks & Redux]
```
src
├── hooks
│     ├── useFetchFlickrData.js
│     ├── useHighlight.js
│     ├── useKakaoMap.js
│     ├── useScreenSize.js
│     ├── useScrollDown.js
│     ├── useScrollEffect.js
│     └── useSlider.js
└── redux
     ├── actions.js
     ├── reducers.js
     └── store.js
```
### [CSS & SCSS]
```
src
├── css
│     ├── style.css
│     └── style.css.map
└── scss
      ├── common
      │     ├── _footer.scss
      │     ├── _header.scss
      │     ├── _mixin.scss
      │     └── _reset.scss
      ├── main
      │     └── _home.scss
      ├── sub
      │     ├── _about.scss
      │     ├── _community.scss
      │     ├── _contact.scss
      │     ├── _media.scss
      │     ├── _membership.scss
      │     └── _sub_layout.scss
      └── style.scss
```

## 📢 Commit Messages
|TAG|DESCRIPTION|
|:---:|:---:|
|Feat|새로운 기능 추가|
|Fix|버그 수정|
|Design|사용자 UI 디자인 변경|
|Style|코드 포맷 변경 (코드 수정 X)|
|Refactor|코드 리팩토링|
|Comment|주석 추가 및 변경|
|Docs|문서 수정|
|Chore|기타 변경사항 (패키지 업데이트 등)|
|Rename|파일 및 폴더명 수정 또는 이동|
|Remove|파일 삭제|