---
sidebar_position: 8
---


# 3.4 GA 넣기

## Google Analytics 4(GA4) ?

- 내가 만든 사이트의 페이지 별 조회수를 알고싶다.  
- 특정 버튼의 클릭률(이벤트)를 추적 하고 싶다. 
- 사용자 여정을 분석하고 싶다.  
- *사용자에 대해서 통계적 분석을 위한 목적으로 사용  


## GA4 붙이기  

https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag 

![Alt text](image-13.png)
![Alt text](image-14.png)


```js
docusaurus.config.js
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
        +   trackingID: "G-CVB057YPM2",
        +   anonymizeIP: true,
        + },
      }),
    ],
  ],
```

![Alt text](image-18.png)