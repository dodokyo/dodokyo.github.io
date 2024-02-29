---
sidebar_position: 4
---

# 3.NextJS 핵심 개념

## HTML + CSS + Vanilla JS vs React vs NextJS 차이점

HTML + CSS + Vanilla JS:
- 기본기 > 작은 프로젝트나 간단한 웹 페이지
- 단일 페이지 애플리케이션(SPA)을 구축 어렵
- 결과물 : HTML + CSS + JS
- 장점 : 가장 빠르다 
  - but, 큰 프로젝트 개발이 어렵다.  

React:
- SPA ( Single Page Application , Angular, Vue, React - 현재 FE 개발 트렌드, Svelte)
- 페이스북에서 만든 JavaScript 라이브러리
- 언제 사용 ? : SEO 상관없는 인터렉션이 많은 모든 웹 ( 어드민 페이지, B2B 페이지, Gmail, 지도 앱)
- 결과물 : JS 정적 파일 (+html, css)  
- 장점 : 웹에서 앱처럼 UI상호작용이 가능한 웹사이트 개발 가능, 
  - but, SEO 불리 및 초기 JS로딩이 느리다. ( 빈 화면 보임 ) 

Next.js:
- MPA ( Mutiple Page Application )
- React 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(Static Site Generation, SSG)을 지원하는 프레임워크입니다.  
- 언제사용 ? :
  - SEO 최적화
  - 초기 로딩 속도 향상 > B2C  
- FullStack 가능 ( 서버 API, DB 조회 등 )
- 결과물 : 서버 Application ( + html 정적 파일)
  - but, 웹 + 서버 전반의 지식 필요 

참조  
- [브라우저 랜더링 과정](https://medium.com/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%ED%92%88%EA%B2%A9/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-5c01c4158ce)

## 랜더링의 종류 (CSR, SSR, hydration)

![alt](./figure.excalidraw.png)


## RSC, RCC, 'use client'

> https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components
```
강의 목표
- RSC, RCC 비교
- RSC, RCC 각각 언제 사용하는가?
- 'use client'의 진정한 의미는?
```

![alt](./figure2.excalidraw.png)

## React Suspense ( Loading UI and Streaming )

![alt](./figure1.excalidraw.png)
> https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#example
> https://www.patterns.dev/react/react-selective-hydration


---

## TODO

### pageRouter vs appRouter

- pageRouter : hydration ( getServerSideProps(), getStaticProps(), getStaticPaths )
  - 전체 페이지 로딩이 되어야, hydration 시작   
- appRouter : 서버 컴포넌트 (suspense) + selective hydration

### FullPage Loading, SubPage Loading, Subsequent Navigations


- 2개의 차이점 

https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered


### Dynamic Routes, Generating Static Params, Parallel Routes, Intercepting Routes

> https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params


---

## 
- File Conventions"