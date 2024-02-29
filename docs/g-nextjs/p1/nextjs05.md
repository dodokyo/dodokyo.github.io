---
sidebar_position: 5
---

# 4.NextJS AppRouter

## 4.1 meta, favicon

### 메타데이터의 3종류

- https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata  

Static Metadata
Dynamic Metadata
File-based metadata
- favicon.ico, apple-icon.jpg, and icon.jpg
- opengraph-image.jpg and twitter-image.jpg
- robots.txt
- sitemap.xml

## 4.2 page, params, searchParams


### 알아두기! : 클라이언트 컴포넌트에서 사용할 수 있는 훅

useRouter
useParams
usePathname
useSearchParams

## 4.3 group folder

group folder   
- app router에서는 디렉터리 구조에 따라서 앱의 URL에 따른 페이지가 결정된다.  
- 그룹 폴더는 페이지 경로에 영향을 미치지 않고 폴더를 정리하고 싶을 떄 사용 한다.  

[RouteGroup](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

## 4.4 layout file

[pages-and-layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

## 4.5 loading, error

특수 파일들 : https://nextjs.org/docs/getting-started/project-structure#routing-files 

![Alt text](image-9.png)


## 4.6 rootLayout 에서 피해야 할 것

RootLayout의 지연은 전체 App의 느려지는 현상으로 번진다.  
