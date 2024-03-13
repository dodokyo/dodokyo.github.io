---
sidebar_position: 8
---

# 7.YTMusicClone - Home 

## Goal

- zustand 사용  
- Carousel 컴포넌트 사용  


### 복습 포인트

![Alt text](image-32.png)  
1.Category 컴포넌트 만들기  
- zustand로 상태관리    

![Alt text](image-33.png)  
2.PlayListCareusel 컴포넌트 만들기  
3.PlayListCareusel > PlayListCard 컴포넌트 만들기  



## 7.1 zustand 에 대해서

zustand : https://github.com/pmndrs/zustand  

### 설명하기 

언제 전역상태 상태를 써야 할까요?
- vs 로컬상태와 비교해주세요.  


## 7.2 zustand home 카테고리 

```js
import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;

```

## 7.3 PlayListCarousel 및 타이핑

## 7.4 PlayListCarousel - 1

https://ui.shadcn.com/docs/components/carousel


## 7.5 PlayListCard - 1


### 설명하기 : 클라이언트 컴포넌트에서 사용할 수 있는 훅

useRouter  
useParams  
usePathname  
useSearchParams   
- 위 훅들의 차이점은 무엇인가요?


## 7.6 PlayListCard - 2

## 체크포인트 코드  

https://github.com/dodokyo/yt-music-clone/tree/ch7-done