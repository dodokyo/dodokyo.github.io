"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return a?r.createElement(c,n(n({ref:t},d),{},{components:a})):r.createElement(c,n({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,n[1]=i;for(var s=2;s<o;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),l=(a(7294),a(3905));const o={sidebar_position:5},n="5.TodoList with Browser Level",i={unversionedId:"g-nextjs+supa/p0/supanext05",id:"g-nextjs+supa/p0/supanext05",title:"5.TodoList with Browser Level",description:"Goal",source:"@site/docs/g-nextjs+supa/p0/supanext05.md",sourceDirName:"g-nextjs+supa/p0",slug:"/g-nextjs+supa/p0/supanext05",permalink:"/docs/g-nextjs+supa/p0/supanext05",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-nextjs+supa/p0/supanext05.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"nextjsSupa",previous:{title:"4.Supabase install to next.js",permalink:"/docs/g-nextjs+supa/p0/supanext04"},next:{title:"6.Next.js 14 \uc11c\ubc84\ub97c \uc704\ud55c \ucd5c\uc18c \uc9c0\uc2dd",permalink:"/docs/g-nextjs+supa/p0/supanext06"}},p={},s=[{value:"1 TodoList with Browser Level  \uad6c\ud604\uacc4\ud68d",id:"1-todolist-with-browser-level--\uad6c\ud604\uacc4\ud68d",level:2},{value:"2 Supabase browserClient",id:"2-supabase-browserclient",level:2},{value:"(\ubcf4\ucda9) \ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uc5ed\uc0ac (CSR, SSR, Hydration, Progressive Render, Suspense, use client)",id:"\ubcf4\ucda9-\ube0c\ub77c\uc6b0\uc800-\ub80c\ub354\ub9c1-\uc5ed\uc0ac-csr-ssr-hydration-progressive-render-suspense-use-client",level:2},{value:"3 AppRouter \uae30\ubcf8 \uc124\uc815\ud558\uae30",id:"3-approuter-\uae30\ubcf8-\uc124\uc815\ud558\uae30",level:2},{value:"4 API - getTodos",id:"4-api---gettodos",level:2},{value:"5 API - getTodosById, getTodosBySearch",id:"5-api---gettodosbyid-gettodosbysearch",level:2},{value:"\ud83d\udccc \uba74\uc811 \uc5f0\uc2b5 : id \ub0b4\ub9bc\ucc28\uc21c \ub300\uc2e0 updated_at \ub0b4\ub9bc\ucc28\uc21c\uc774 \ub354 \uc801\uc808\ud560\uae4c\uc694?",id:"-\uba74\uc811-\uc5f0\uc2b5--id-\ub0b4\ub9bc\ucc28\uc21c-\ub300\uc2e0-updated_at-\ub0b4\ub9bc\ucc28\uc21c\uc774-\ub354-\uc801\uc808\ud560\uae4c\uc694",level:3},{value:"\ud83d\udccc \uba74\uc811 \uc5f0\uc2b5 : timestamp vs timestamptz \ub370\uc774\ud130 \ud0c0\uc785\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud574\uc8fc\uc138\uc694.",id:"-\uba74\uc811-\uc5f0\uc2b5--timestamp-vs-timestamptz-\ub370\uc774\ud130-\ud0c0\uc785\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud574\uc8fc\uc138\uc694",level:3},{value:"6 API - createTodos, updateTodos",id:"6-api---createtodos-updatetodos",level:2},{value:"7 Hook - todoController 1 Get",id:"7-hook---todocontroller-1-get",level:2},{value:"\ud83d\udccc \uba74\uc811 \uc5f0\uc2b5 : \ub9ac\uc561\ud2b8\uc5d0\uc11c \ub514\uc790\uc778 \ud328\ud134\uc744 \uc801\uc6a9\ud55c \uacbd\ud5d8\uc774 \uc788\ub098\uc694?",id:"-\uba74\uc811-\uc5f0\uc2b5--\ub9ac\uc561\ud2b8\uc5d0\uc11c-\ub514\uc790\uc778-\ud328\ud134\uc744-\uc801\uc6a9\ud55c-\uacbd\ud5d8\uc774-\uc788\ub098\uc694",level:3},{value:"8 Hook - todoController 2 Create, Update, Delete",id:"8-hook---todocontroller-2-create-update-delete",level:2},{value:"9 (\ubcf4\ucda9\uc218\uc5c5) tailwindCSS \uc815\ub9ac 1,2,3",id:"9-\ubcf4\ucda9\uc218\uc5c5-tailwindcss-\uc815\ub9ac-123",level:2},{value:"10 UI \ubc0f \uae30\ub2a5 \uad6c\ud604 \uacc4\ud68d",id:"10-ui-\ubc0f-\uae30\ub2a5-\uad6c\ud604-\uacc4\ud68d",level:2},{value:"11 TodoList UI \ub9cc\ub4e4\uae30 - Header",id:"11-todolist-ui-\ub9cc\ub4e4\uae30---header",level:2},{value:"CSS\uac00 \uc5b4\ub835\ub2e4\uba74 \uc544\ub798 \uc21c\uc11c\ub85c \uc774\ud574\ud558\uc2dc\uba74 \uc870\uae08 \ub354 \uc27d\uc2b5\ub2c8\ub2e4.!",id:"css\uac00-\uc5b4\ub835\ub2e4\uba74-\uc544\ub798-\uc21c\uc11c\ub85c-\uc774\ud574\ud558\uc2dc\uba74-\uc870\uae08-\ub354-\uc27d\uc2b5\ub2c8\ub2e4",level:3},{value:"12 TodoList UI \ub9cc\ub4e4\uae30 - Search",id:"12-todolist-ui-\ub9cc\ub4e4\uae30---search",level:2},{value:"13 TodoList UI \ub9cc\ub4e4\uae30 - TodoItem",id:"13-todolist-ui-\ub9cc\ub4e4\uae30---todoitem",level:2},{value:"14 TodoList UI \ub9cc\ub4e4\uae30 - event",id:"14-todolist-ui-\ub9cc\ub4e4\uae30---event",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"5todolist-with-browser-level"},"5.TodoList with Browser Level"),(0,l.kt)("p",null,"Goal  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ToDoList\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc\uc5d0\uc11c \uad6c\ud604\ud569\ub2c8\ub2e4.  ")),(0,l.kt)("h2",{id:"1-todolist-with-browser-level--\uad6c\ud604\uacc4\ud68d"},"1 TodoList with Browser Level  \uad6c\ud604\uacc4\ud68d"),(0,l.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\ub97c \uc124\uba85\ud569\ub2c8\ub2e4.  "),(0,l.kt)("h2",{id:"2-supabase-browserclient"},"2 Supabase browserClient"),(0,l.kt)("p",null,"Supabase \ube0c\ub77c\uc6b0\uc800 \ud074\ub77c\uc774\uc5b8\ud2b8 \ubc18\uc601\ud558\uae30  "),(0,l.kt)("h2",{id:"\ubcf4\ucda9-\ube0c\ub77c\uc6b0\uc800-\ub80c\ub354\ub9c1-\uc5ed\uc0ac-csr-ssr-hydration-progressive-render-suspense-use-client"},"(\ubcf4\ucda9) \ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uc5ed\uc0ac (CSR, SSR, Hydration, Progressive Render, Suspense, use client)"),(0,l.kt)("h2",{id:"3-approuter-\uae30\ubcf8-\uc124\uc815\ud558\uae30"},"3 AppRouter \uae30\ubcf8 \uc124\uc815\ud558\uae30"),(0,l.kt)("p",null,"AppRouter\uc758 \uae30\ubcf8 \ud30c\uc77c \uad6c\uc870 \uc7a1\uc544 \ubd05\ub2c8\ub2e4.  "),(0,l.kt)("h2",{id:"4-api---gettodos"},"4 API - getTodos"),(0,l.kt)("p",null,"Supabase API\ub97c \uad6c\ud604\ud574\ubd10\uc694.  "),(0,l.kt)("h2",{id:"5-api---gettodosbyid-gettodosbysearch"},"5 API - getTodosById, getTodosBySearch"),(0,l.kt)("h3",{id:"-\uba74\uc811-\uc5f0\uc2b5--id-\ub0b4\ub9bc\ucc28\uc21c-\ub300\uc2e0-updated_at-\ub0b4\ub9bc\ucc28\uc21c\uc774-\ub354-\uc801\uc808\ud560\uae4c\uc694"},"\ud83d\udccc \uba74\uc811 \uc5f0\uc2b5 : id \ub0b4\ub9bc\ucc28\uc21c \ub300\uc2e0 updated_at \ub0b4\ub9bc\ucc28\uc21c\uc774 \ub354 \uc801\uc808\ud560\uae4c\uc694?"),(0,l.kt)("p",null,"\ud78c\ud2b8)  "),(0,l.kt)("p",null,"\uc815\ub82c \uae30\uc900\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \ub0b4\ub9bc\ucc28\uc21c\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," \ub0b4\ub9bc\ucc28\uc21c \uc911 \uc5b4\ub5a4 \uac83\uc774 \ub354 \uc801\uc808\ud55c\uc9c0\ub294 \uc0ac\uc6a9 \uc0ac\ub840\uc640 \ub370\uc774\ud130\uc758 \ud2b9\uc131\uc5d0 \ub530\ub77c \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uace0\ub824 \uc0ac\ud56d\uc774 \uc788\uc2b5\ub2c8\ub2e4:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8 \ube48\ub3c4"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"updated_at"),"\uc740 \ub808\ucf54\ub4dc\uac00 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub41c \uc2dc\uac04\uc744 \ub098\ud0c0\ub0b4\ubbc0\ub85c, \ub370\uc774\ud130\uac00 \uc790\uc8fc \uc5c5\ub370\uc774\ud2b8\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"updated_at")," \ub0b4\ub9bc\ucc28\uc21c\uc774 \ub354 \uc801\uc808\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub41c \ub808\ucf54\ub4dc\uac00 \uba3c\uc800 \ud45c\uc2dc\ub418\ubbc0\ub85c \uc0ac\uc6a9\uc790\uac00 \uac00\uc7a5 \ucd5c\uc2e0 \uc815\ubcf4\uc5d0 \ub354 \uc27d\uac8c \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\uace0\uc720 \uc2dd\ubcc4\uc790\uc758 \uc911\uc694\uc131"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),"\ub294 \ub808\ucf54\ub4dc\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790\ub85c \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130\uc758 \uace0\uc720\uc131\uc744 \uc911\uc694\uc2dc\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," \ub0b4\ub9bc\ucc28\uc21c\uc774 \ub354 \uc801\uc808\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \uc0dd\uc131\ub41c \ub808\ucf54\ub4dc\uac00 \uba3c\uc800 \ud45c\uc2dc\ub418\ubbc0\ub85c \ub370\uc774\ud130\uc758 \uc2dd\ubcc4\uc774 \uc6a9\uc774\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\uc790 \uacbd\ud5d8"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uc815\ub82c \uae30\uc900\uc744 \uc0ac\uc6a9\ud560\uc9c0\uc5d0 \ub530\ub77c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc5d0\ub3c4 \uc601\ud5a5\uc744 \uc90d\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ubcf4\ub2e4 \uc758\ubbf8 \uc788\ub294 \uc21c\uc11c\ub85c \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\uace0 \uc2f6\uc5b4\ud560 \ub54c \ud574\ub2f9 \uc815\ub82c \uae30\uc900\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \ub370\uc774\ud130\uc758 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134\uacfc \uc0ac\uc6a9\uc790\uc758 \uc694\uad6c\uc5d0 \ub530\ub77c ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \ub0b4\ub9bc\ucc28\uc21c \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," \ub0b4\ub9bc\ucc28\uc21c\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c\ub294 \ub370\uc774\ud130\uc758 \ucd5c\uc2e0 \uc815\ubcf4\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," \ub0b4\ub9bc\ucc28\uc21c\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc801\uc808\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"-\uba74\uc811-\uc5f0\uc2b5--timestamp-vs-timestamptz-\ub370\uc774\ud130-\ud0c0\uc785\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud574\uc8fc\uc138\uc694"},"\ud83d\udccc \uba74\uc811 \uc5f0\uc2b5 : timestamp vs timestamptz \ub370\uc774\ud130 \ud0c0\uc785\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud574\uc8fc\uc138\uc694."),(0,l.kt)("p",null,"\ud78c\ud2b8)  "),(0,l.kt)("p",null,"PostgreSQL\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamptz"),"\ub294 \ub458 \ub2e4 \ub0a0\uc9dc\uc640 \uc2dc\uac04 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 \ub370\uc774\ud130 \uc720\ud615\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub450 \uc720\ud615 \uac04\uc5d0\ub294 \uc911\uc694\ud55c \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"timestamp"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")," \ub370\uc774\ud130 \uc720\ud615\uc740 \ud0c0\uc784\uc874 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc989, \uc800\uc7a5\ub41c \ub0a0\uc9dc \ubc0f \uc2dc\uac04\uc740 \ub85c\uceec \uc2dc\uac04\ub300\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, '2024-05-19 12:00:00'\uc740 \uadf8\ub0e5 \ub0a0\uc9dc \ubc0f \uc2dc\uac04 \uc815\ubcf4\ub9cc\uc744 \ub098\ud0c0\ub0b4\uba70, \uc774\uac83\uc774 \uc5b4\ub5a4 \ud0c0\uc784\uc874\uc758 \uc2dc\uac04\uc778\uc9c0\ub294 \uba85\uc2dc\uc801\uc73c\ub85c \ub098\ud0c0\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"timestamptz"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamptz")," \ub370\uc774\ud130 \uc720\ud615\uc740 \uc800\uc7a5\ub41c \ub0a0\uc9dc \ubc0f \uc2dc\uac04\uc774 UTC (\ud611\uc815 \uc138\uacc4 \uc2dc\uac04) \uae30\uc900\uc774\uba70, \uc774\ub97c \ub85c\uceec \uc2dc\uac04\ub300\ub85c \ubcc0\ud658\ud558\uc5ec \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc989, ",(0,l.kt)("inlineCode",{parentName:"li"},"timestamptz"),"\ub294 \ud0c0\uc784\uc874 \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc5b4\uc11c \uc800\uc7a5\ub41c \uc2dc\uac04 \uc815\ubcf4\uac00 \uc5b4\ub5a4 \ud0c0\uc784\uc874\uc758 \uc2dc\uac04\uc778\uc9c0\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, '2024-05-19 12:00:00'\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"timestamptz"),"\ub85c \uc800\uc7a5\ub418\uba74 \uc774\uac83\uc740 UTC \uc2dc\uac04\uc774\uba70 \ud544\uc694\uc5d0 \ub530\ub77c \ud45c\uc2dc\ub420 \ub54c \ub85c\uceec \uc2dc\uac04\ub300\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \uc5b4\ub5a4 \uc720\ud615\uc744 \uc0ac\uc6a9\ud574\uc57c \ud560\uc9c0\ub294 \uc0ac\uc6a9 \uc0ac\ub840\uc640 \uc694\uad6c \uc0ac\ud56d\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc804 \uc138\uacc4\uc801\uc73c\ub85c \uc2dc\uac04 \uc815\ubcf4\ub97c \ub2e4\ub8e8\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamptz"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub85c\uceec \uc2dc\uac04\ub300\uc5d0 \uc758\uc874\uc801\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),"\ub97c \uace0\ub824\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"6-api---createtodos-updatetodos"},"6 API - createTodos, updateTodos"),(0,l.kt)("h2",{id:"7-hook---todocontroller-1-get"},"7 Hook - todoController 1 Get"),(0,l.kt)("h3",{id:"-\uba74\uc811-\uc5f0\uc2b5--\ub9ac\uc561\ud2b8\uc5d0\uc11c-\ub514\uc790\uc778-\ud328\ud134\uc744-\uc801\uc6a9\ud55c-\uacbd\ud5d8\uc774-\uc788\ub098\uc694"},"\ud83d\udccc \uba74\uc811 \uc5f0\uc2b5 : \ub9ac\uc561\ud2b8\uc5d0\uc11c \ub514\uc790\uc778 \ud328\ud134\uc744 \uc801\uc6a9\ud55c \uacbd\ud5d8\uc774 \uc788\ub098\uc694?"),(0,l.kt)("p",null,"\ud78c\ud2b8) MVC, MVVM, headless  "),(0,l.kt)("p",null,"React\ub294 \uae30\ubcf8\uc801\uc73c\ub85c MVC(Model-View-Controller) \ud328\ud134\uc744 \ub530\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, React\ub294 UI \ucef4\ud3ec\ub10c\ud2b8 \uae30\ubc18\uc758 \uc544\ud0a4\ud14d\ucc98\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \uc8fc\ub85c ",(0,l.kt)("strong",{parentName:"p"},"\ub2e8\ubc29\ud5a5 \ub370\uc774\ud130 \ud750\ub984 (One-Way Data Flow)")," \uac1c\ub150\uc744 \ub530\ub985\ub2c8\ub2e4. \uadf8\ub7ec\ub098 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c MVC \ud328\ud134\uc758 \uac1c\ub150\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc5ec\uae30\uc11c MVC \ud328\ud134\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\uc131\ub429\ub2c8\ub2e4:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Model (\ubaa8\ub378)"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub378\uc740 \ub370\uc774\ud130\uc758 \uc0c1\ud0dc\uc640 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4. React\uc5d0\uc11c\ub294 \ubaa8\ub378\uc774 \uc8fc\ub85c \uc0c1\ud0dc(state)\ub97c \uac00\uc9d1\ub2c8\ub2e4. \uc0c1\ud0dc\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub370\uc774\ud130\ub97c \ub098\ud0c0\ub0b4\uba70, ",(0,l.kt)("inlineCode",{parentName:"li"},"useState"),"\ub098 ",(0,l.kt)("inlineCode",{parentName:"li"},"useReducer")," \ud6c5\uc744 \uc0ac\uc6a9\ud558\uc5ec \uad00\ub9ac\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"View (\ubdf0)"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubdf0\ub294 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud45c\uc2dc\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. React\uc5d0\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubdf0\uc758 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4. \uac01\uac01\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub294 UI\uc758 \uc77c\ubd80\ubd84\uc744 \ub098\ud0c0\ub0b4\uba70, JSX\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc791\uc131\ub429\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Controller (\ucee8\ud2b8\ub864\ub7ec)"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub864\ub7ec\ub294 \uc0ac\uc6a9\uc790\uc758 \uc785\ub825\uc5d0 \ub300\ud55c \ucc98\ub9ac\ub97c \ub2f4\ub2f9\ud558\uace0, \ubaa8\ub378\uacfc \ubdf0 \uac04\uc758 \ud1b5\uc2e0\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4. React\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uc758 \uc785\ub825\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc0ac\uc6a9\ud558\uace0, \ud544\uc694\ud55c \uacbd\uc6b0 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uc5ec \ubaa8\ub378\uacfc \uc0c1\ud638 \uc791\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc791\uc5c5\uc740 \uc8fc\ub85c \ucef4\ud3ec\ub10c\ud2b8\uc758 \uba54\uc11c\ub4dc\ub098 \ucee4\uc2a4\ud140 \ud6c5\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucc98\ub9ac\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\ub530\ub77c\uc11c React\uc5d0\uc11c MVC \ud328\ud134\uc744 \uc801\uc6a9\ud560 \ub54c, \uc0c1\ud0dc(state)\ub97c \ubaa8\ub378\ub85c \uc0ac\uc6a9\ud558\uace0, \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubdf0\ub85c \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud45c\uc2dc\ud558\uace0, \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc640 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub864\ub7ec\uc758 \uc5ed\ud560\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud558\uba74 \uc720\uc9c0\ubcf4\uc218\uac00 \uc6a9\uc774\ud558\uace0 \ud655\uc7a5 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"8-hook---todocontroller-2-create-update-delete"},"8 Hook - todoController 2 Create, Update, Delete"),(0,l.kt)("h2",{id:"9-\ubcf4\ucda9\uc218\uc5c5-tailwindcss-\uc815\ub9ac-123"},"9 (\ubcf4\ucda9\uc218\uc5c5) tailwindCSS \uc815\ub9ac 1,2,3"),(0,l.kt)("h2",{id:"10-ui-\ubc0f-\uae30\ub2a5-\uad6c\ud604-\uacc4\ud68d"},"10 UI \ubc0f \uae30\ub2a5 \uad6c\ud604 \uacc4\ud68d"),(0,l.kt)("h2",{id:"11-todolist-ui-\ub9cc\ub4e4\uae30---header"},"11 TodoList UI \ub9cc\ub4e4\uae30 - Header"),(0,l.kt)("h3",{id:"css\uac00-\uc5b4\ub835\ub2e4\uba74-\uc544\ub798-\uc21c\uc11c\ub85c-\uc774\ud574\ud558\uc2dc\uba74-\uc870\uae08-\ub354-\uc27d\uc2b5\ub2c8\ub2e4"},"CSS\uac00 \uc5b4\ub835\ub2e4\uba74 \uc544\ub798 \uc21c\uc11c\ub85c \uc774\ud574\ud558\uc2dc\uba74 \uc870\uae08 \ub354 \uc27d\uc2b5\ub2c8\ub2e4.!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"w,h,p,m  "),(0,l.kt)("li",{parentName:"ul"},"flex  "),(0,l.kt)("li",{parentName:"ul"},"bg, border, rounded  "),(0,l.kt)("li",{parentName:"ul"},"text, font, cursor  "),(0,l.kt)("li",{parentName:"ul"},"hover  ")),(0,l.kt)("h2",{id:"12-todolist-ui-\ub9cc\ub4e4\uae30---search"},"12 TodoList UI \ub9cc\ub4e4\uae30 - Search"),(0,l.kt)("h2",{id:"13-todolist-ui-\ub9cc\ub4e4\uae30---todoitem"},"13 TodoList UI \ub9cc\ub4e4\uae30 - TodoItem"),(0,l.kt)("h2",{id:"14-todolist-ui-\ub9cc\ub4e4\uae30---event"},"14 TodoList UI \ub9cc\ub4e4\uae30 - event"))}m.isMDXComponent=!0}}]);