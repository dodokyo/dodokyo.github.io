---
sidebar_position: 1
---

# GPT-Interviewer (기획중)

<head>
  <meta name="keywords" content=""/>
</head>



## 1.소개

GPT를 이용해서 인터뷰 시스템 구축하기  

### 기능

- 오늘의 면접 문제 리스트 만들기 
- 면접 진행하기  
- 면접 기록 하기 (inLocalStorage)

### UI관련 작업 

- WireFrame https://excalidraw.com/
- CSS Module : https://nextjs.org/docs/app/building-your-application/styling
- Radix UI : https://www.radix-ui.com/
- react-icons
- react-hot-toast

### 상태관리

- useState
- Context  
- Zustand

* 서버컴포넌트와 서버사이드 랜더링 개념을 받아들이면서 전역상태를 관리하는게 이상했다.
- Redux, Zustand 등 React의 Root Provder로 들어가는 Context 인데,
- 서버컴포넌트에 이를 사용하는게 이해가 되지 않았다.
- 이는 컴포넌트 트리 관점에서 Import 모듈 관점에서 계층을 이해해야 한다.

### 서버 컴포넌트, 클라이언트 컴포넌트, 클라이언트 경계  

### API

- GPT API 호출하기  

### AppRouter

- AppRouter 구조


## 2.NextJS 설치하기  

1. create-next-app
docs : https://nextjs.org/docs/pages/api-reference/create-next-app
```
node -v
npm install yarn -g

# npm
npx create-next-app@latest  

# yarn
yarn create next-app  
```

## 2.1 디렉터리 설명  

- public
- app 
- layout
- globals.css
- page.modules.css
- package.json
- yarn.lock : 메이저 버전(Major Version), 마이너 버전(Minor Version), 패치 버전(Patch Version)

## 3 Counter

## 3.1 Counter 만들기 - useState  

"use client"
- LifeCycle : https://velog.io/@denmark-choco/React-Lifecycle-React-Hook-lifeCycle

Client Components vs Server Components
- hydration : UI Side Logic react 화

setIsMounted
- 클릭이벤트 발생 


## 3.2 Counter 만들기 - Context  

## 3.3 Counter 만들기 - Zustand  

## 4.GPT API 호출 

## 4.1 환경변수

## 4.2 router handler

## 4.3 server action

## 5.AppRouter 설명

## 5.1 Page 셋업

## 5.2 useRouter 사용법

## 6.