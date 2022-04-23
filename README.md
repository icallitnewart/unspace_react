**작성 중입니다.**
## 📖 Contents
1. [Description](#%EF%B8%8F-description)
2. [Tech Stacks](#-tech-stacks)
3. [Getting Started](#-getting-started)
4. [Features](#-features)
   1. [Home Page](#home-page)
   2. [About Page](#about-page)
   3. [Media Page](#media-page)
   4. [Community Page](#community-page)
   5. [Contact Page](#contact-page)
   6. [Membership Page](#membership-page)
5. [Structure](#-structure)
   1. [Overview](#overview)
   2. [Pages & Components](#pages--components)
   3. [Hooks & Redux](#hooks--redux)
   4. [CSS & SCSS](#css--scss)
6. [Commit Messages](#-commit-messages)
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
  - 📄 **ᴍᴀɪɴ** [Visual.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Visual.js)
#### ✅ Carousel 슬라이드
![Home_slider](https://user-images.githubusercontent.com/65598117/164721447-c1a26eea-83af-41ad-aac2-23f6ab78e98d.gif)
  - 화살표 좌우 버튼 클릭시 이전/다음으로 이동
  - 무한 반복 슬라이드
  - 이미지 위에 마우스 hover시 영상 재생
  - 📄 **ᴍᴀɪɴ** [Trending.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Trending.js) &nbsp;**ʜᴏᴏᴋs** [useSlider.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useSlider.js)
#### ✅ 탭메뉴 구현
![Home_tab](https://user-images.githubusercontent.com/65598117/164721453-0ba7ed01-b330-403b-9ede-693bb0fddedf.gif)
  - 애니메이션 효과 적용
  - 폼 유효성 검사
  - 📄 **ᴍᴀɪɴ** [About.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/About.js) &nbsp;**sᴜʙ** [Idea.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Idea.js) [Intro.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Intro.js) [Contact.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Contact.js)
#### ✅ Flickr API를 활용한 갤러리
![Home_gallery](https://user-images.githubusercontent.com/65598117/164721427-1fc4ccbd-117d-4455-bb9b-7fd0b845e0f5.gif)
  - 상단의 해쉬태그 버튼 클릭시 해당 이미지 데이터 호출 및 출력
   <br/>💬 최초 호출시에만 로딩 애니메이션 효과 적용
   <br/>💬 한번 호출한 데이터는 redux로 저장하여 다시 버튼 클릭해도 재호출 방지
  - 소이미지에 마우스 hover시 좌측의 큰 이미지로 해당 이미지 출력
  - 소이미지 클릭시 Modal 팝업창 띄우기 (모바일 사이즈는 미지원)
  - 📄 **ᴍᴀɪɴ** [Gallery.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Gallery.js) &nbsp;**ʜᴏᴏᴋs** [useFetchFlickrData.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useFetchFlickrData.js)
#### ✅ 카카오맵 API를 활용한 지도
![Home_map](https://user-images.githubusercontent.com/65598117/164721443-cf1c41e3-24fa-44ae-8947-3f9d5e293a23.gif)
  - 버튼 클릭시 해당 지점의 지도와 정보 불러오기
  - 스크린 사이즈 변경시 지도의 center 유지   
  - 📄 **ᴍᴀɪɴ** [Location.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Location.js) &nbsp;**ʜᴏᴏᴋs** [useKakaoMap.js](https://github.com/icallitnewart/unspace_react/commit/1a041bf8a682bfdc3596b5141541578e5e87958f)
#### ✅ 스크롤시 각 섹션 fadeIn 애니메이션 효과 적용
![Home_scrollEffect](https://user-images.githubusercontent.com/65598117/164722836-266f1068-15ff-4726-9624-d52909a197ce.gif)
  - 📄 **ʜᴏᴏᴋs** [useScrollEffect.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollEffect.js)

### [About Page]
#### 🔎 (Guide) 탭버튼 클릭시 해당 섹션으로 스크롤 다운
![About_scrollDown](https://user-images.githubusercontent.com/65598117/164723952-218fff74-ca39-4bfb-92fe-e1135b87b15c.gif)
  - 📄 **ᴍᴀɪɴ** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js) &nbsp;**ʜᴏᴏᴋs** [useScrollDown.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollDown.js)
#### ✅ Carousel 슬라이드
![About_slider](https://user-images.githubusercontent.com/65598117/164723962-b7624aee-1c4d-491c-8052-15fbd71ee147.gif)
  - 자동 재생 기능
  - 상하 화살표 버튼 클릭시 이전/다음 슬라이드로 이동
  - 슬라이드 변환시 텍스트 애니메이션 효과 적용
  - 📄 **ᴍᴀɪɴ** [Members.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/about/Members.js) &nbsp;**ʜᴏᴏᴋs** [useSlider.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useSlider.js)
#### ✅ 스크롤시 각 섹션 fadeIn 애니메이션 효과 적용
![About_scrollEffect](https://user-images.githubusercontent.com/65598117/164723958-43461eef-fe39-4b4f-8755-138e5280e8ce.gif)
  - 📄 **ʜᴏᴏᴋs** [useScrollEffect.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollEffect.js)

### [Media Page]
#### 🔎 (Guide) 탭버튼 클릭시 Projects 혹은 Youtube 섹션으로 이동
  - 📄 **ᴍᴀɪɴ** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js)
#### ✅ Flickr API를 활용한 갤러리
![Media_projects](https://user-images.githubusercontent.com/65598117/164725070-5f51b724-6b6d-48ff-9f64-d344288c00c5.gif)
  - 상단의 해쉬태그 버튼 클릭시 해당 이미지 데이터 호출 및 출력
   <br/>💬 최초 호출시에만 로딩 애니메이션 효과 적용
   <br/>💬 한번 호출한 데이터는 redux로 저장하여 다시 버튼 클릭해도 재호출 방지
  - Modal 팝업
  - 📄 **ᴍᴀɪɴ** [Projects.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/media/Projects.js) &nbsp;**sᴜʙ** [Popup.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Popup.js) &nbsp;**ʜᴏᴏᴋs** [useFetchFlickrData.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useFetchFlickrData.js)
#### ✅ Youtube API를 활용한 플레이리스트
![Media_youtube](https://user-images.githubusercontent.com/65598117/164725087-3e8666bc-f53c-47ba-b82c-c6653f51fdf6.gif)
  - Modal 팝업
  - 📄 **ᴍᴀɪɴ** [Youtube.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/media/Youtube.js) &nbsp;**sᴜʙ** [Popup.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Popup.js)

### [Community Page]
#### 🔎 (Guide) 탭버튼 클릭시 FAQ 혹은 Notice 게시판으로 이동
  - 📄 **ᴍᴀɪɴ** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js)
#### ✅ FAQ 게시판
![Community_faq](https://user-images.githubusercontent.com/65598117/164732791-b2e45e28-1379-4504-9a6c-519b0f3b79e5.gif)
  - 카테고리 메뉴 클릭시 해당 데이터만 불러오기
  - 글 제목 클릭시 내용 확인
  - 📄 **ᴍᴀɪɴ** [Faq.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/Faq.js)
#### ✅ Notice 게시판
![Community_notice](https://user-images.githubusercontent.com/65598117/164732809-94fb18e7-94b6-4b8d-87d7-36fa57235305.gif)
  - 게시글 클릭시 해당 포스트로 이동
  - 이전글, 다음글 보기
  - 📄 **ᴍᴀɪɴ** [Notice.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/Notice.js) &nbsp;**sᴜʙ** [NoticePost.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/NoticePost.js)
#### ✅ 페이지네이션 기능
![Community_pagination](https://user-images.githubusercontent.com/65598117/164732810-ab63a271-ff8a-4c89-b841-56e62a7a240a.gif)
  - 번호 클릭시 해당 목록 리스트 보여주기
  - 화살표 버튼 클릭시 다음 번호로 이동
  - 첫/마지막 번호에 도달시 화살표 버튼 비활성화
  - 📄 **ᴍᴀɪɴ** [Pagination.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/Pagination.js)
#### ✅ 검색 기능
![Community_search](https://user-images.githubusercontent.com/65598117/164732813-b5d10e0b-f13b-4905-8690-2157d50e9b16.gif)
  - 검색시 하이라이트 기능 지원
  - 매치되는 데이터가 없을 때 결과 없음 표시 
  - 📄 **ᴍᴀɪɴ** [SearchBox.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/SearchBox.js) &nbsp;**ʜᴏᴏᴋs** [useHighlight.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useHighlight.js)
  
### [Contact Page]
#### 🔎 (Guide) 탭버튼 클릭시 해당 섹션으로 스크롤 다운
![Contact_scrollEffect](https://user-images.githubusercontent.com/65598117/164733663-cb927433-53cd-4c50-9908-2af4a2de2efe.gif)
  - 📄 **ᴍᴀɪɴ** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js) &nbsp;**ʜᴏᴏᴋs** [useScrollDown.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollDown.js)
#### ✅ 문의하기 폼 유효성 검사
![Contact_form](https://user-images.githubusercontent.com/65598117/164884374-d1fb9465-fd6c-49aa-83f3-4fc651affd52.gif)
  - 📄 **ᴍᴀɪɴ** [Getintouch.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/contact/Getintouch.js)
#### ✅ 카카오맵 API를 활용한 지도
![Contact_map](https://user-images.githubusercontent.com/65598117/164733653-47a3c69b-f100-4bba-aec4-ab81d539b206.gif)
  - 버튼 클릭시 해당 지점의 지도와 정보 불러오기
  - 스크린 사이즈 변경시 지도의 center 유지   
  - 📄 **ᴍᴀɪɴ** [Location.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/contact/Location.js) &nbsp;**ʜᴏᴏᴋs** [useKaKaoMap.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useKakaoMap.js)

### [Membership Page]
#### 🔎 (Guide) 탭버튼 클릭시 로그인 혹은 회원가입 페이지로 이동
  - 📄 **ᴍᴀɪɴ** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js)
#### ✅ 이용 약관 동의 확인
![Membership_policy](https://user-images.githubusercontent.com/65598117/164884379-ae285487-741c-4b7c-a6dc-35220ee82f35.gif)
  - 📄 **ᴍᴀɪɴ** [Policy.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/membership/Policy.js) **sᴜʙ** [Signup.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/membership/Signup.js)
#### ✅ 회원가입 폼 유효성 검사
![Membership_signup](https://user-images.githubusercontent.com/65598117/164884382-67a23ecb-cd3a-4f5a-a9cd-77aa33fca8b2.gif)
  - 📄 **ᴍᴀɪɴ** [SignupForm.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/membership/SignupForm.js)

## 📁 Structure
### [Overview]
```
src
├── public            # HTML, DB, image files
│    ├── db           # DB(JSON) files
│    ├── img          # Image files
│    ├── favicon.ico
│    └── index.html
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