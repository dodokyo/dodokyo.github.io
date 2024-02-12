---
sidebar_position: 99
---

# docusaurus(기획중)

- [docusaurus(기획중)](#docusaurus기획중)
  - [다시 커밋을 만들어서 푸쉬하여 CI를 밟는다.](#다시-커밋을-만들어서-푸쉬하여-ci를-밟는다)
- [SEO](#seo)
  - [trailingSlash](#trailingslash)
  - [서치콘솔등록](#서치콘솔등록)
  - [robots.txt 추가](#robotstxt-추가)
  - [GA 붙이기](#ga-붙이기)
  - [사이트맵 생성 및 등록](#사이트맵-생성-및-등록)





## 다시 커밋을 만들어서 푸쉬하여 CI를 밟는다.  


# SEO

Guide : 
- https://docusaurus.io/docs/seo
- https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=ko 


구글 서치 콘솔에 맞게 최적화를 진행하자.

```
yarn add @docusaurus/plugin-google-gtag @docusaurus/plugin-sitemap
```

## trailingSlash

https://melonicedlatte.com/2023/02/05/232900.html
-  trailingSlash: false 로 설정하여, 마크 다운 파일을 index.html 이 아닌 myDoc.html 처럼 만들도록 한다. 

## 서치콘솔등록


[1] 사이트맵 수집 오류 해결
docusaurus.config.js
```
  // Set the production url of your site here
  url: "https://nickname.github.io",
```
## robots.txt 추가

- static/robots.txt 하위 경로에 추가한다.

```
User-agent: *
Allow: /

Sitemap: https://nickname.github.io/sitemap.xml
```


## GA 붙이기

https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag 
- yarn add @docusaurus/plugin-google-gtag 패키지 설치 이후 아래 
- docusaurus.config.js 수정

```
  ...
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        + gtag: {
        +   trackingID: "G-GY41PYRR94",
        +   anonymizeIP: true,
        + },
      }),
    ],
  ],
```
## 사이트맵 생성 및 등록

```

...
  theme: {
          customCss: require.resolve("./src/css/custom.css"),
   },
   
   sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },

```

```

<meta name="google-site-verification" content="Ov_hk6LqaaE5KiwXnqF2gTKwPxBE3qG5Zr3o5UWZXc8" />

    metadata: [
        {
          name: "keywords",
          content:
            "frontend, 취업가이드, 개발자 취업, 포트폴리오, 코테 공부, 개발자 현실, 프론트 개발자",
        },
        {
          name: "google-site-verification",
          content: "Ov_hk6LqaaE5KiwXnqF2gTKwPxBE3qG5Zr3o5UWZXc8",
        },
      ],
```