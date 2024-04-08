---
sidebar_position: 11
---

# 10.YTMusicClone - Playlist

## Goal

- Playlist 페이지를 완성합니다.  

### 복습 포인트
![Alt text](image-39.png)  
1.PlayList > Header 컴포넌트를 강의를 안보고 만들어 봅니다.    

![Alt text](image-40.png)  
2.SongCardRowExpand 컴포넌트를 강의를 안보고 만들어 봅니다.  


## 10.1 permanentRedirect vs router hook


### 📌 면접 연습 - 경로재설정  

Route 설정은 서버에서 할 수 있습니다. 하지만 브라우저(클라이언트)에서도 가능합니다.
- 클라이언트 컴포넌트에서 Route를 바꾸는 예시는 무엇이 있을까요?
- 서버측에서 Route를 바꾸는 예시는 무엇이 있을까요?  
- 각각 어떤 이름의 함수를 사용하나요?   
- 꼭 서버로직에서 리다이렉트를 해야 하는 경우가 있을까요?  

참고  
- https://nextjs.org/docs/app/api-reference/functions/redirect
- https://nextjs.org/docs/app/api-reference/functions/use-router  


## 10.2 HeaderBgChanger

### 📌 리팩토링 - 클라이언트 

HeaderBgChanger라는 컴포넌트를 이용해서 배경화면을 바꾸는 로직을 만들었어요.  
- 근데 꼭 useEffect 함수로 클라이언트 랜더링 처리로 배경을 바꿔야 할까요?  
- 애초에 서버 컴포넌트에서 처리할 수 있는 부분이 아닐까 그리고 캐시 처리할 수 있지 않을까요?  
- 어떻게 개선할지 아래 참고 문서를 보고, Plan을 만들어 보세요.    

참고  
- https://nextjs.org/docs/app/building-your-application/caching#data-cache  
- https://nextjs.org/docs/app/api-reference/components/image#caching-behavior  
- https://velog.io/@hyunjoong/NextImage-optimization-cache-skeleton#2-%EC%BA%90%EC%8B%B1
- https://oliveyoung.tech/blog/2023-06-09/nextjs-image-optimization/  

## 10.3 Header

## 10.4 Header 반응형

## 10.5 SongList

## 10.6 SongList Link




## 체크포인트 코드  

https://github.com/dodokyo/yt-music-clone/tree/ch10-done