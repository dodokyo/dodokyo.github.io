---
sidebar_position: 5
---

# 4.NextJS AppRouter

## Goal

- meta, favicon
- appRouter 디렉터리 구조 잡기 
- page, params, searchParams
- group folder
- loading, error, layout
- rootLayout 성능 개선하기  

### 복습 포인트

- appRouter 디렉터리에서 사용되는 특수파일들 정리 하기
- appRouter 디렉터리 구조 잡기   


## 4.1 meta, favicon

### 더 알아보기 - 메타데이터의 3종류

- https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata  

Static Metadata  
Dynamic Metadata  
File-based metadata  
- favicon.ico, apple-icon.jpg, and icon.jpg  
- opengraph-image.jpg and twitter-image.jpg  
- robots.txt  
- sitemap.xml  


## 4.2 page, params, searchParams

### 설명해보기 

- params(Dynamic Routes) vs searchParams    


### 강의 노트 - tsx vs jsx 파일 차이

TSX 파일과 JSX 파일은 둘 다 리액트 애플리케이션에서 사용되는 파일 형식입니다. 그러나 두 형식에는 약간의 차이가 있습니다.

1. **JSX (JavaScript XML)**:
   - JSX는 자바스크립트의 확장 문법으로, JavaScript 코드 안에 마크업을 작성할 수 있게 해줍니다.
   - JSX 파일은 일반적으로 .jsx 확장자를 가집니다.
   - JSX 파일 안에서는 JavaScript 코드와 HTML(또는 XML) 코드가 혼합되어 있습니다.

예시:
```jsx
import React from 'react';

function MyComponent() {
  return <div>Hello, World!</div>;
}

export default MyComponent;
```

2. **TSX (TypeScript XML)**:
   - TSX는 TypeScript의 확장 문법으로, JSX와 유사하지만 TypeScript의 정적 타입 검사 기능을 사용할 수 있습니다.
   - TSX 파일은 일반적으로 .tsx 확장자를 가집니다.
   - TSX 파일 안에서는 JavaScript 코드와 HTML(또는 XML) 코드가 혼합되어 있으면서 TypeScript의 타입 어노테이션을 추가할 수 있습니다.

예시:
```tsx
import React from 'react';

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
}

export default MyComponent;
```

따라서 JSX 파일은 일반적으로 자바스크립트 프로젝트에서 사용되고, TSX 파일은 TypeScript를 사용하는 프로젝트에서 사용됩니다. TSX 파일은 정적 타입 검사를 통해 코드의 안정성을 높일 수 있습니다.


### 더 알아보기  

[Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

## 4.3 group folder

group folder   
- app router에서는 디렉터리 구조에 따라서 앱의 URL에 따른 페이지가 결정된다.  
- 그룹 폴더는 페이지 경로에 영향을 미치지 않고 폴더를 정리하고 싶을 떄 사용 한다.  

### 더 알아보기 

[nextjs RouteGroup](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
[nextjs app-router playground](https://app-router.vercel.app)  
- *AppRouter에 대해서 익숙해지는 시간을 가져봅시다.!  


### 📌 면접 연습 - Next.js 에서는 DataFetching 전략에 따라서 아래 4가지 방식으로 SSR을 구현 합니다. 그 차이점이 무엇인가요?  

- Streaming with Suspense, Static Data, Dynamic Data, Incremental Static Regeneration
- Refs : https://app-router.vercel.app/streaming

## 4.4 layout file

### 더 알아보기

Root Layout vs Nesting Layouts

[pages-and-layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

## 4.5 loading, error

### 📌 설명해보기 - 애니메이션 컴포넌트 라이브러리가 동작이 안됩니다.

- 애니메이션 동작 여부는 useState로 관리되는 라이브러리 에요.
- 서버사이드 랜더링 이후 애니메이션이 작동하지 않아요.
- 어떻게 해결할 수 있나요?


### 더 알아보기

특수 파일들 : https://nextjs.org/docs/getting-started/project-structure#routing-files 

![Alt text](image-9.png)


## 4.6 rootLayout 에서 피해야 할 것

RootLayout의 지연은 전체 App의 느려지는 현상으로 번진다.  


### 성능테스트 해보기  
```
case1  
root 4s + home 2s - 4s   
case2  
root 2s + home 4s -> 2s -> home loading... 2s -> home page
case3
root 4s + home 2s - 4s -> home page
```

