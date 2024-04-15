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

### 📌 면접 연습 - UI를 개발하면서 사용자 경험(UX)을 신경 쓴 사례가 있나요?  

힌트  
- Player UI 컴포넌트를 만들면서 슬라이더의 Padding값을 의도적으로 늘렸습니다.  
- 그래서 사용자의 마우스 인터렉션, 터치 인터렉션에 보다 잘 반응할 수 있도록 만들었어요.


## 12.6 zustand - usePlayerState - 2

### 📌 면접 연습 - JS vs TS 사용 경험  

질문 
- Typescript를 사용해본 경험이 있나요?  
- 상태관리 도구 zustand를 TS로 사용해주셨군요.  
- Javascript 대비 어떤점이 Typescript을 사용했을때 장점이 있었나요?  
- 단점은 없었나요?  


### 📌 면접 연습 - zustand에서 불변성 관리를 어떻게 하나요?  

질문  
- 불변성이 무엇인가요? 
- zustand 상태관리 도구는 불변성을 유지하나요? 

힌트  
- https://velog.io/@bammyu/Zustand-%EB%B6%88%EB%B3%80%EC%84%B1-%EB%B3%91%ED%95%A9


## 12.7 zustand - usePlayerState - 3

### 📌 면접 연습 - ?. ?? 연산자  

질문  
- ?. ?? 라는 2가지 연산자 이름을 알려주세요.  
- 언제 사용하는지 설명해주세요. 

힌트  
- ?. 연산자는 옵셔널 체이닝 연산자
- ?? 연산자는 null 병합 연산자  

--- 
참조 : GPT 답변  

```
먼저 ?. 연산자는 옵셔널 체이닝 연산자입니다. 이 연산자는 객체의 속성을 안전하게 접근할 때 사용됩니다. 만약 객체가 null 또는 undefined인 경우에도 오류를 방지하고 코드 실행을 중단시키지 않고 그냥 null을 반환합니다. 예를 들어, obj?.prop는 obj가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 obj.prop와 같은 결과를 반환합니다.

다음으로 ?? 연산자는 null 병합 연산자입니다. 이 연산자는 왼쪽 피연산자가 null 또는 undefined인 경우에만 오른쪽 피연산자를 반환합니다. 그 외의 경우에는 왼쪽 피연산자를 반환합니다. 이 연산자는 변수가 null 또는 undefined인 경우에 기본값을 설정할 때 유용합니다. 예를 들어, a ?? b는 a가 null 또는 undefined인 경우 b를 반환하고, 그렇지 않으면 a를 반환합니다.

이러한 연산자들은 JavaScript 코드를 더 안전하고 간결하게 작성할 수 있게 해주며, 특히 null 또는 undefined로 인한 예기치 않은 오류를 방지하는 데 도움이 됩니다.
```


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



