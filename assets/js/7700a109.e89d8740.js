"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,v=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:8},o="8.TodoList with RLS, ServerActions",s={unversionedId:"g-nextjs+supa/p0/supanext08",id:"g-nextjs+supa/p0/supanext08",title:"8.TodoList with RLS, ServerActions",description:"Goal",source:"@site/docs/g-nextjs+supa/p0/supanext08.md",sourceDirName:"g-nextjs+supa/p0",slug:"/g-nextjs+supa/p0/supanext08",permalink:"/docs/g-nextjs+supa/p0/supanext08",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-nextjs+supa/p0/supanext08.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"nextjsSupa",previous:{title:"7.\uc778\uc99d (Authentication) with OAuth 2.1",permalink:"/docs/g-nextjs+supa/p0/supanext07"},next:{title:"9.TodoList \uacf5\uc720\ud558\uae30 \uae30\ub2a5",permalink:"/docs/g-nextjs+supa/p0/supanext09"}},l={},u=[{value:"1 TodoList Table \ub9cc\ub4e4\uae30 with RLS",id:"1-todolist-table-\ub9cc\ub4e4\uae30-with-rls",level:2},{value:"2 RLS \uc815\ucc45 \uad6c\ud604\uacc4\ud68d",id:"2-rls-\uc815\ucc45-\uad6c\ud604\uacc4\ud68d",level:2},{value:"3 Select, Insert, Update, Delete RLS \uc815\ucc45 \ub9cc\ub4e4\uae30",id:"3-select-insert-update-delete-rls-\uc815\ucc45-\ub9cc\ub4e4\uae30",level:2},{value:"4 Server Actions CRUD \ub85c\uc9c1, RLS \ud14c\uc2a4\ud2b8",id:"4-server-actions-crud-\ub85c\uc9c1-rls-\ud14c\uc2a4\ud2b8",level:2},{value:"5 AuthHeader",id:"5-authheader",level:2},{value:"6 \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uac00\uc838\uc624\uae30",id:"6-\uc0ac\uc6a9\uc790-\uc815\ubcf4-\uac00\uc838\uc624\uae30",level:2},{value:"7 \ud14c\uc2a4\ud2b8 \ubc0f \uc624\ub958\uc218\uc815",id:"7-\ud14c\uc2a4\ud2b8-\ubc0f-\uc624\ub958\uc218\uc815",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"8todolist-with-rls-serveractions"},"8.TodoList with RLS, ServerActions"),(0,a.kt)("p",null,"Goal  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TodoList\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4.  \uc544\ub798 \uc870\uac74\uc744 \ud3ec\ud568\ud574\uc694.  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RLS \uc815\ucc45 \uc124\uc815  "),(0,a.kt)("li",{parentName:"ul"},"Server Side\uc5d0\uc11c CRUD  \ucc98\ub9ac with ServerActions  ")))),(0,a.kt)("h2",{id:"1-todolist-table-\ub9cc\ub4e4\uae30-with-rls"},"1 TodoList Table \ub9cc\ub4e4\uae30 with RLS"),(0,a.kt)("p",null,"\uc9c0\ub09c \uc2dc\uac04\uc5d0\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c TodoList\ub97c CRUD \ud588\uc5b4\uc694. \uc774\ubc88\uc5d0\ub294 \ubaa8\ub450 \uc11c\ubc84\uce21\uc5d0\uc11c \ucc98\ub9ac\ud574 \ubcfc\uae4c\uc694?  "),(0,a.kt)("h2",{id:"2-rls-\uc815\ucc45-\uad6c\ud604\uacc4\ud68d"},"2 RLS \uc815\ucc45 \uad6c\ud604\uacc4\ud68d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:r(3679).Z,width:"2719",height:"3902"}),"  "),(0,a.kt)("h2",{id:"3-select-insert-update-delete-rls-\uc815\ucc45-\ub9cc\ub4e4\uae30"},"3 Select, Insert, Update, Delete RLS \uc815\ucc45 \ub9cc\ub4e4\uae30"),(0,a.kt)("h2",{id:"4-server-actions-crud-\ub85c\uc9c1-rls-\ud14c\uc2a4\ud2b8"},"4 Server Actions CRUD \ub85c\uc9c1, RLS \ud14c\uc2a4\ud2b8"),(0,a.kt)("h2",{id:"5-authheader"},"5 AuthHeader"),(0,a.kt)("h2",{id:"6-\uc0ac\uc6a9\uc790-\uc815\ubcf4-\uac00\uc838\uc624\uae30"},"6 \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uac00\uc838\uc624\uae30"),(0,a.kt)("h2",{id:"7-\ud14c\uc2a4\ud2b8-\ubc0f-\uc624\ub958\uc218\uc815"},"7 \ud14c\uc2a4\ud2b8 \ubc0f \uc624\ub958\uc218\uc815"))}d.isMDXComponent=!0},3679:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/figure08.excalidraw-9e329d5a6661a8cfd5232d8843c8df9d.png"}}]);