## π Contents
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
## πββοΈ Description
- **Project Name** UnSpace
- **URL** [https://icallitnewart.github.io/unspace_react/](https://icallitnewart.github.io/unspace_react/)
- **Concept** μΈνλ¦¬μ΄λ₯Ό μ£Όμ λ‘ ν κΈ°μν ννμ΄μ§
- **Aims** 
  <br/>π μ λλ©μ΄μ κ΄λ ¨ νλ¬κ·ΈμΈ μμ΄ **μΈν°λν°λΈν λ°μν** ννμ΄μ§ μ μ
  <br/>π flickr API, youtube API, μΉ΄μΉ΄μ€λ§΅ API λ± λ€μν μΈλΆ APIλ€μ νμ©ν λ°μ΄ν° λ°μΈλ© 

## π» Tech Stacks
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">

## π§ Getting Started
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

## β¨ Features
### [Home Page]
#### β fadeIn, fadeOut μ¬λΌμ΄λ λ°°λ
![Home_fade](https://user-images.githubusercontent.com/65598117/164884812-97faae00-14ab-46d1-b702-f23da00814c2.gif)
  - NEXT λ²νΌ ν΄λ¦­μ λ€μ μ¬λΌμ΄λλ‘ μ΄λ
  - μμ΄λ―Έμ§ ν΄λ¦­μ ν΄λΉ μ¬λΌμ΄λλ‘ μ΄λ
  - νλ¨μ disc ν΄λ¦­μ ν΄λΉ μ¬λΌμ΄λλ‘ μ΄λ
  - π **α΄α΄ΙͺΙ΄** [Visual.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Visual.js)
#### β Carousel μ¬λΌμ΄λ
![Home_slider](https://user-images.githubusercontent.com/65598117/164721447-c1a26eea-83af-41ad-aac2-23f6ab78e98d.gif)
  - νμ΄ν μ’μ° λ²νΌ ν΄λ¦­μ μ΄μ /λ€μμΌλ‘ μ΄λ
  - λ¬΄ν λ°λ³΅ μ¬λΌμ΄λ
  - μ΄λ―Έμ§ μμ λ§μ°μ€ hoverμ μμ μ¬μ
  - π **α΄α΄ΙͺΙ΄** [Trending.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Trending.js) &nbsp;**Κα΄α΄α΄s** [useSlider.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useSlider.js)
#### β ν­λ©λ΄ κ΅¬ν
![Home_tab](https://user-images.githubusercontent.com/65598117/164721453-0ba7ed01-b330-403b-9ede-693bb0fddedf.gif)
  - μ λλ©μ΄μ ν¨κ³Ό μ μ©
  - νΌ μ ν¨μ± κ²μ¬
  - π **α΄α΄ΙͺΙ΄** [About.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/About.js) &nbsp;**sα΄Κ** [Idea.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Idea.js) [Intro.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Intro.js) [Contact.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Contact.js)
#### β Flickr APIλ₯Ό νμ©ν κ°€λ¬λ¦¬
![Home_gallery](https://user-images.githubusercontent.com/65598117/164721427-1fc4ccbd-117d-4455-bb9b-7fd0b845e0f5.gif)
  - μλ¨μ ν΄μ¬νκ·Έ λ²νΌ ν΄λ¦­μ ν΄λΉ μ΄λ―Έμ§ λ°μ΄ν° νΈμΆ λ° μΆλ ₯
   <br/>π¬ μ΅μ΄ νΈμΆμμλ§ λ‘λ© μ λλ©μ΄μ ν¨κ³Ό μ μ©
   <br/>π¬ νλ² νΈμΆν λ°μ΄ν°λ reduxλ‘ μ μ₯νμ¬ λ€μ λ²νΌ ν΄λ¦­ν΄λ μ¬νΈμΆ λ°©μ§
  - μμ΄λ―Έμ§μ λ§μ°μ€ hoverμ μ’μΈ‘μ ν° μ΄λ―Έμ§λ‘ ν΄λΉ μ΄λ―Έμ§ μΆλ ₯
  - μμ΄λ―Έμ§ ν΄λ¦­μ Modal νμμ°½ λμ°κΈ° (λͺ¨λ°μΌ μ¬μ΄μ¦λ λ―Έμ§μ)
  - π **α΄α΄ΙͺΙ΄** [Gallery.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Gallery.js) &nbsp;**Κα΄α΄α΄s** [useFetchFlickrData.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useFetchFlickrData.js)
#### β μΉ΄μΉ΄μ€λ§΅ APIλ₯Ό νμ©ν μ§λ
![Home_map](https://user-images.githubusercontent.com/65598117/164721443-cf1c41e3-24fa-44ae-8947-3f9d5e293a23.gif)
  - λ²νΌ ν΄λ¦­μ ν΄λΉ μ§μ μ μ§λμ μ λ³΄ λΆλ¬μ€κΈ°
  - μ€ν¬λ¦° μ¬μ΄μ¦ λ³κ²½μ μ§λμ center μ μ§   
  - π **α΄α΄ΙͺΙ΄** [Location.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/home/Location.js) &nbsp;**Κα΄α΄α΄s** [useKakaoMap.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useKakaoMap.js)
#### β μ€ν¬λ‘€μ κ° μΉμ fadeIn μ λλ©μ΄μ ν¨κ³Ό μ μ©
![Home_scrollEffect](https://user-images.githubusercontent.com/65598117/164722836-266f1068-15ff-4726-9624-d52909a197ce.gif)
  - π **Κα΄α΄α΄s** [useScrollEffect.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollEffect.js)

### [About Page]
#### π (Guide) ν­λ²νΌ ν΄λ¦­μ ν΄λΉ μΉμμΌλ‘ μ€ν¬λ‘€ λ€μ΄
![About_scrollDown](https://user-images.githubusercontent.com/65598117/164723952-218fff74-ca39-4bfb-92fe-e1135b87b15c.gif)
  - π **α΄α΄ΙͺΙ΄** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js) &nbsp;**Κα΄α΄α΄s** [useScrollDown.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollDown.js)
#### β Carousel μ¬λΌμ΄λ
![About_slider](https://user-images.githubusercontent.com/65598117/164723962-b7624aee-1c4d-491c-8052-15fbd71ee147.gif)
  - μλ μ¬μ κΈ°λ₯
  - μν νμ΄ν λ²νΌ ν΄λ¦­μ μ΄μ /λ€μ μ¬λΌμ΄λλ‘ μ΄λ
  - μ¬λΌμ΄λ λ³νμ νμ€νΈ μ λλ©μ΄μ ν¨κ³Ό μ μ©
  - π **α΄α΄ΙͺΙ΄** [Members.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/about/Members.js) &nbsp;**Κα΄α΄α΄s** [useSlider.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useSlider.js)
#### β μ€ν¬λ‘€μ κ° μΉμ fadeIn μ λλ©μ΄μ ν¨κ³Ό μ μ©
![About_scrollEffect](https://user-images.githubusercontent.com/65598117/164723958-43461eef-fe39-4b4f-8755-138e5280e8ce.gif)
  - π **Κα΄α΄α΄s** [useScrollEffect.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollEffect.js)

### [Media Page]
#### π (Guide) ν­λ²νΌ ν΄λ¦­μ Projects νΉμ Youtube μΉμμΌλ‘ μ΄λ
  - π **α΄α΄ΙͺΙ΄** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js)
#### β Flickr APIλ₯Ό νμ©ν κ°€λ¬λ¦¬
![Media_projects](https://user-images.githubusercontent.com/65598117/164725070-5f51b724-6b6d-48ff-9f64-d344288c00c5.gif)
  - μλ¨μ ν΄μ¬νκ·Έ λ²νΌ ν΄λ¦­μ ν΄λΉ μ΄λ―Έμ§ λ°μ΄ν° νΈμΆ λ° μΆλ ₯
   <br/>π¬ μ΅μ΄ νΈμΆμμλ§ λ‘λ© μ λλ©μ΄μ ν¨κ³Ό μ μ©
   <br/>π¬ νλ² νΈμΆν λ°μ΄ν°λ reduxλ‘ μ μ₯νμ¬ λ€μ λ²νΌ ν΄λ¦­ν΄λ μ¬νΈμΆ λ°©μ§
  - Modal νμ
  - π **α΄α΄ΙͺΙ΄** [Projects.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/media/Projects.js) &nbsp;**sα΄Κ** [Popup.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Popup.js) &nbsp;**Κα΄α΄α΄s** [useFetchFlickrData.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useFetchFlickrData.js)
#### β Youtube APIλ₯Ό νμ©ν νλ μ΄λ¦¬μ€νΈ
![Media_youtube](https://user-images.githubusercontent.com/65598117/164725087-3e8666bc-f53c-47ba-b82c-c6653f51fdf6.gif)
  - Modal νμ
  - π **α΄α΄ΙͺΙ΄** [Youtube.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/media/Youtube.js) &nbsp;**sα΄Κ** [Popup.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Popup.js)

### [Community Page]
#### π (Guide) ν­λ²νΌ ν΄λ¦­μ FAQ νΉμ Notice κ²μνμΌλ‘ μ΄λ
  - π **α΄α΄ΙͺΙ΄** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js)
#### β FAQ κ²μν
![Community_faq](https://user-images.githubusercontent.com/65598117/164732791-b2e45e28-1379-4504-9a6c-519b0f3b79e5.gif)
  - μΉ΄νκ³ λ¦¬ λ©λ΄ ν΄λ¦­μ ν΄λΉ λ°μ΄ν°λ§ λΆλ¬μ€κΈ°
  - κΈ μ λͺ© ν΄λ¦­μ λ΄μ© νμΈ
  - π **α΄α΄ΙͺΙ΄** [Faq.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/Faq.js)
#### β Notice κ²μν
![Community_notice](https://user-images.githubusercontent.com/65598117/164732809-94fb18e7-94b6-4b8d-87d7-36fa57235305.gif)
  - κ²μκΈ ν΄λ¦­μ ν΄λΉ ν¬μ€νΈλ‘ μ΄λ
  - μ΄μ κΈ, λ€μκΈ λ³΄κΈ°
  - π **α΄α΄ΙͺΙ΄** [Notice.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/Notice.js) &nbsp;**sα΄Κ** [NoticePost.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/NoticePost.js)
#### β νμ΄μ§λ€μ΄μ κΈ°λ₯
![Community_pagination](https://user-images.githubusercontent.com/65598117/164732810-ab63a271-ff8a-4c89-b841-56e62a7a240a.gif)
  - λ²νΈ ν΄λ¦­μ ν΄λΉ λͺ©λ‘ λ¦¬μ€νΈ λ³΄μ¬μ£ΌκΈ°
  - νμ΄ν λ²νΌ ν΄λ¦­μ λ€μ λ²νΈλ‘ μ΄λ
  - μ²«/λ§μ§λ§ λ²νΈμ λλ¬μ νμ΄ν λ²νΌ λΉνμ±ν
  - π **α΄α΄ΙͺΙ΄** [Pagination.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/Pagination.js)
#### β κ²μ κΈ°λ₯
![Community_search](https://user-images.githubusercontent.com/65598117/164732813-b5d10e0b-f13b-4905-8690-2157d50e9b16.gif)
  - κ²μμ νμ΄λΌμ΄νΈ κΈ°λ₯ μ§μ
  - λ§€μΉλλ λ°μ΄ν°κ° μμ λ κ²°κ³Ό μμ νμ 
  - π **α΄α΄ΙͺΙ΄** [SearchBox.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/community/SearchBox.js) &nbsp;**Κα΄α΄α΄s** [useHighlight.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useHighlight.js)
  
### [Contact Page]
#### π (Guide) ν­λ²νΌ ν΄λ¦­μ ν΄λΉ μΉμμΌλ‘ μ€ν¬λ‘€ λ€μ΄
![Contact_scrollEffect](https://user-images.githubusercontent.com/65598117/164733663-cb927433-53cd-4c50-9908-2af4a2de2efe.gif)
  - π **α΄α΄ΙͺΙ΄** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js) &nbsp;**Κα΄α΄α΄s** [useScrollDown.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useScrollDown.js)
#### β λ¬ΈμνκΈ° νΌ μ ν¨μ± κ²μ¬
![Contact_form](https://user-images.githubusercontent.com/65598117/164884374-d1fb9465-fd6c-49aa-83f3-4fc651affd52.gif)
  - π **α΄α΄ΙͺΙ΄** [Getintouch.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/contact/Getintouch.js)
#### β μΉ΄μΉ΄μ€λ§΅ APIλ₯Ό νμ©ν μ§λ
![Contact_map](https://user-images.githubusercontent.com/65598117/164733653-47a3c69b-f100-4bba-aec4-ab81d539b206.gif)
  - λ²νΌ ν΄λ¦­μ ν΄λΉ μ§μ μ μ§λμ μ λ³΄ λΆλ¬μ€κΈ°
  - μ€ν¬λ¦° μ¬μ΄μ¦ λ³κ²½μ μ§λμ center μ μ§   
  - π **α΄α΄ΙͺΙ΄** [Location.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/contact/Location.js) &nbsp;**Κα΄α΄α΄s** [useKaKaoMap.js](https://github.com/icallitnewart/unspace_react/blob/main/src/hooks/useKakaoMap.js)

### [Membership Page]
#### π (Guide) ν­λ²νΌ ν΄λ¦­μ λ‘κ·ΈμΈ νΉμ νμκ°μ νμ΄μ§λ‘ μ΄λ
  - π **α΄α΄ΙͺΙ΄** [Visual_sub.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/common/Visual_sub.js)
#### β μ΄μ© μ½κ΄ λμ νμΈ
![Membership_policy](https://user-images.githubusercontent.com/65598117/164884379-ae285487-741c-4b7c-a6dc-35220ee82f35.gif)
  - π **α΄α΄ΙͺΙ΄** [Policy.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/membership/Policy.js) **sα΄Κ** [Signup.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/membership/Signup.js)
#### β νμκ°μ νΌ μ ν¨μ± κ²μ¬
![Membership_signup](https://user-images.githubusercontent.com/65598117/164884382-67a23ecb-cd3a-4f5a-a9cd-77aa33fca8b2.gif)
  - π **α΄α΄ΙͺΙ΄** [SignupForm.js](https://github.com/icallitnewart/unspace_react/blob/main/src/components/membership/SignupForm.js)

## π Structure
### [Overview]
```
src
βββ public            # HTML, DB, image files
β    βββ db           # DB(JSON) files
β    βββ img          # Image files
β    βββ favicon.ico
β    βββ index.html
βββ src               # Source files 
β    βββ components   # Component files per page
β    βββ css          # CSS files
β    βββ hooks        # Custom hooks
β    βββ pages        # Page files
β    βββ redux        # Redux setting files
β    βββ scss         # SCSS files
β    βββ App.js
β    βββ index.js
βββ README.md
```
### [Pages & Components]
```
src
βββ components       
β     βββ about
β     β     βββ Intro.js
β     β     βββ Members.js
β     β     βββ Services.js
β     βββ common
β     β     βββ Footer.js
β     β     βββ Header.js
β     β     βββ Loader.js
β     β     βββ Popup.js
β     β     βββ Visual_sub.js
β     βββ community
β     β     βββ Faq.js
β     β     βββ Notice.js
β     β     βββ NoticePost.js
β     β     βββ Pagination.js
β     β     βββ SearchBox.js
β     βββ contact
β     β     βββ Getintouch.js
β     β     βββ Location.js 
β     βββ home
β     β     βββ About.js
β     β     βββ Contact.js
β     β     βββ Gallery.js
β     β     βββ Idea.js
β     β     βββ Intro.js
β     β     βββ Location.js
β     β     βββ Philosophy.js
β     β     βββ Quote.js
β     β     βββ Subscribe.js
β     β     βββ Trending.js
β     β     βββ Visual.js
β     βββ media
β     β     βββ Projects.js
β     β     βββ Youtube.js
β     βββ membership
β           βββ Login.js
β           βββ Policy.js
β           βββ Signup.js
β           βββ SignupForm.js
βββ pages
      βββ About.js
      βββ Community.js
      βββ Contact.js
      βββ Home.js
      βββ Media.js
      βββ Membership.js
```
### [Hooks & Redux]
```
src
βββ hooks
β     βββ useFetchFlickrData.js
β     βββ useHighlight.js
β     βββ useKakaoMap.js
β     βββ useScreenSize.js
β     βββ useScrollDown.js
β     βββ useScrollEffect.js
β     βββ useSlider.js
βββ redux
     βββ actions.js
     βββ reducers.js
     βββ store.js
```
### [CSS & SCSS]
```
src
βββ css
β     βββ style.css
β     βββ style.css.map
βββ scss
      βββ common
      β     βββ _footer.scss
      β     βββ _header.scss
      β     βββ _mixin.scss
      β     βββ _reset.scss
      βββ main
      β     βββ _home.scss
      βββ sub
      β     βββ _about.scss
      β     βββ _community.scss
      β     βββ _contact.scss
      β     βββ _media.scss
      β     βββ _membership.scss
      β     βββ _sub_layout.scss
      βββ style.scss
```

## π’ Commit Messages
|TAG|DESCRIPTION|
|:---:|:---:|
|Feat|μλ‘μ΄ κΈ°λ₯ μΆκ°|
|Fix|λ²κ·Έ μμ |
|Design|μ¬μ©μ UI λμμΈ λ³κ²½|
|Style|μ½λ ν¬λ§· λ³κ²½ (μ½λ μμ  X)|
|Refactor|μ½λ λ¦¬ν©ν λ§|
|Comment|μ£Όμ μΆκ° λ° λ³κ²½|
|Docs|λ¬Έμ μμ |
|Chore|κΈ°ν λ³κ²½μ¬ν­ (ν¨ν€μ§ μλ°μ΄νΈ λ±)|
|Rename|νμΌ λ° ν΄λλͺ μμ  λλ μ΄λ|
|Remove|νμΌ μ­μ |