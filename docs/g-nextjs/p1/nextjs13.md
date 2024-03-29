---
sidebar_position: 13
---

# 12.YTMusicClone - Player 

## Goal
- react-use 설치 및 useAudio 사용법  
- zustand 상태 정의 with typing   
- useAudio 및 Slider 연동  


### 복습 포인트
- zustand 안보고 구현해보기 (usePlayerState.ts)

## 12.1 react-use 라이브러리 설치

```
yarn add react-use
```

## 12.2 zustand - usePlayerState - 1

*타입스크립트로 zutand 상태를 정의합니다.  

## 12.3 PlayerWrapper

## 12.4 PlayerWrapper > Height

## 12.5 사용자 경험 개선형 슬라이더 (shadcn-Slider)

### Note) Padding으로 슬라이더의 인터렉션 부분을 확장  

## 12.6 zustand - usePlayerState - 2

### 더 알아보기 - useUIState.js vs usePlayerState.ts  

- typescript 있는것과 없는것 장단점은 ? 
- 상태관리에서 불변성이 중요한 이유는 무엇인가 ? 
- zutand에서 불변성을 유지해야하는지 알아보기   


## 12.7 zustand - usePlayerState - 3

### 더 알아보기 - ?. ?? 연산자  

?. ?? 라는 2가지 연산자에 대해서 설명해주세요.   


## 12.8 useAudio 사용하기

## 12.9 Slider 노래 재생 연동 - 1

- 재생, 일시정지 연동하기  

## 12.10 Slider 노래 재생 연동 - 2

- seek 연동하기  

## 12.11 Player UI 완성

## 12.12 autoNextPlay

### 추가 설명 - 슬라이더에 max값을 전달해야 하는 이유  

max 값을 전달하지 않으면 슬라이더는 기본적으로 0부터 100까지 범위를 가지는 슬라이더 입니다.  
- 그래서 슬라이더의 핸들을 끝까지 미뤘을때 100이라는 숫자까지 갔었죠.  
- 그래서 노래의 100초 부분으로 옮겨갔어요.  
- 이는 노래의 끝은 아닙니다. 그래서 다음 노래로 재생을 못했어요.  

```js
      <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value);
          }}
          max={state.duration}
        />
```

## 12.13 Player UI 연동1

## 12.14 Player UI 연동2


### 복습 포인트
https://velog.io/@hanei100/ReactElement-vs-ReactNode-vs-JSX.Element#reactelement-vs-reactnode-vs-jsxelement

## 체크포인트 코드  
https://github.com/dodokyo/yt-music-clone/tree/ch12-done


---

## 더 알아보기 

https://velog.io/@hanei100/ReactElement-vs-ReactNode-vs-JSX.Element#reactelement-vs-reactnode-vs-jsxelement



