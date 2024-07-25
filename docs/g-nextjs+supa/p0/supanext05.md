---
sidebar_position: 5
---

# 5.TodoList with Browser Level

Goal  
- ToDoList를 클라이언트 사이드에서 구현합니다.  


## 1 TodoList with Browser Level  구현계획  

프로젝트 구조를 설명합니다.  

## 2 Supabase browserClient

Supabase 브라우저 클라이언트 반영하기  

## (보충) 브라우저 렌더링 역사 (CSR, SSR, Hydration, Progressive Render, Suspense, use client)



## 3 AppRouter 기본 설정하기

AppRouter의 기본 파일 구조 잡아 봅니다.  

## 4 API - getTodos 

Supabase API를 구현해봐요.  

## 5 API - getTodosById, getTodosBySearch

### 📌 면접 연습 : id 내림차순 대신 updated_at 내림차순이 더 적절할까요?  

힌트)  

정렬 기준으로 `id` 내림차순과 `updated_at` 내림차순 중 어떤 것이 더 적절한지는 사용 사례와 데이터의 특성에 따라 다를 수 있습니다. 일반적으로는 다음과 같은 고려 사항이 있습니다:

1. **데이터 업데이트 빈도**:
   - `updated_at`은 레코드가 마지막으로 업데이트된 시간을 나타내므로, 데이터가 자주 업데이트되는 경우에는 `updated_at` 내림차순이 더 적절할 수 있습니다. 이 경우 가장 최근에 업데이트된 레코드가 먼저 표시되므로 사용자가 가장 최신 정보에 더 쉽게 접근할 수 있습니다.

2. **고유 식별자의 중요성**:
   - `id`는 레코드의 고유 식별자로 사용되는 경우가 많습니다. 데이터의 고유성을 중요시하는 경우에는 `id` 내림차순이 더 적절할 수 있습니다. 이렇게 하면 가장 최근에 생성된 레코드가 먼저 표시되므로 데이터의 식별이 용이합니다.

3. **사용자 경험**:
   - 어떤 정렬 기준을 사용할지에 따라 사용자 경험에도 영향을 줍니다. 사용자가 보다 의미 있는 순서로 데이터를 확인하고 싶어할 때 해당 정렬 기준을 선택하는 것이 좋습니다.

따라서 데이터의 업데이트 패턴과 사용자의 요구에 따라 `id` 내림차순 또는 `updated_at` 내림차순을 선택할 수 있습니다. 일반적으로는 데이터의 최신 정보에 관심이 있는 경우 `updated_at` 내림차순을 사용하는 것이 적절할 수 있습니다.



### 📌 면접 연습 : timestamp vs timestamptz 데이터 타입에 대해서 설명해주세요.  

힌트)  


PostgreSQL에서 `timestamp`와 `timestamptz`는 둘 다 날짜와 시간 정보를 저장하는 데이터 유형입니다. 그러나 두 유형 간에는 중요한 차이가 있습니다.

1. **timestamp**:
   - `timestamp` 데이터 유형은 타임존 정보를 저장하지 않습니다. 즉, 저장된 날짜 및 시간은 로컬 시간대로 간주됩니다.
   - 예를 들어, '2024-05-19 12:00:00'은 그냥 날짜 및 시간 정보만을 나타내며, 이것이 어떤 타임존의 시간인지는 명시적으로 나타나지 않습니다.

2. **timestamptz**:
   - `timestamptz` 데이터 유형은 저장된 날짜 및 시간이 UTC (협정 세계 시간) 기준이며, 이를 로컬 시간대로 변환하여 표시합니다.
   - 즉, `timestamptz`는 타임존 정보를 포함하고 있어서 저장된 시간 정보가 어떤 타임존의 시간인지를 나타냅니다.
   - 예를 들어, '2024-05-19 12:00:00'이 `timestamptz`로 저장되면 이것은 UTC 시간이며 필요에 따라 표시될 때 로컬 시간대로 변환됩니다.

따라서 어떤 유형을 사용해야 할지는 사용 사례와 요구 사항에 따라 다릅니다. 일반적으로 전 세계적으로 시간 정보를 다루는 애플리케이션의 경우 `timestamptz`를 사용하는 것이 좋습니다. 하지만 로컬 시간대에 의존적인 애플리케이션의 경우 `timestamp`를 고려할 수 있습니다.


## 6 API - createTodos, updateTodos

## 7 Hook - todoController 1 Get

### 📌 면접 연습 : 리액트에서 디자인 패턴을 적용한 경험이 있나요?

힌트) MVC, MVVM, headless  

React는 기본적으로 MVC(Model-View-Controller) 패턴을 따르지 않습니다. 대신, React는 UI 컴포넌트 기반의 아키텍처를 가지고 있으며, 주로 **단방향 데이터 흐름 (One-Way Data Flow)** 개념을 따릅니다. 그러나 React 애플리케이션을 개발할 때 MVC 패턴의 개념을 적용할 수 있습니다.

여기서 MVC 패턴은 다음과 같이 구성됩니다:

1. **Model (모델)**:
   - 모델은 데이터의 상태와 비즈니스 로직을 담당합니다. React에서는 모델이 주로 상태(state)를 가집니다. 상태는 컴포넌트의 데이터를 나타내며, `useState`나 `useReducer` 훅을 사용하여 관리될 수 있습니다.

2. **View (뷰)**:
   - 뷰는 사용자 인터페이스를 표시하는 역할을 합니다. React에서는 컴포넌트가 뷰의 역할을 담당합니다. 각각의 컴포넌트는 UI의 일부분을 나타내며, JSX를 사용하여 작성됩니다.

3. **Controller (컨트롤러)**:
   - 컨트롤러는 사용자의 입력에 대한 처리를 담당하고, 모델과 뷰 간의 통신을 관리합니다. React에서는 사용자의 입력을 처리하기 위해 이벤트 핸들러를 사용하고, 필요한 경우 상태를 업데이트하여 모델과 상호 작용합니다. 이러한 작업은 주로 컴포넌트의 메서드나 커스텀 훅을 사용하여 처리될 수 있습니다.

따라서 React에서 MVC 패턴을 적용할 때, 상태(state)를 모델로 사용하고, 컴포넌트를 뷰로 사용하여 사용자 인터페이스를 표시하고, 이벤트 핸들러와 상태 업데이트를 통해 컨트롤러의 역할을 수행할 수 있습니다. 이러한 방식으로 React 애플리케이션을 구성하면 유지보수가 용이하고 확장 가능한 코드를 작성할 수 있습니다.




## 8 Hook - todoController 2 Create, Update, Delete

## 9 (보충수업) tailwindCSS 정리 1,2,3

## 10 UI 및 기능 구현 계획

## 11 TodoList UI 만들기 - Header

### CSS가 어렵다면 아래 순서로 이해하시면 조금 더 쉽습니다.!

- w,h,p,m  
- flex  
- bg, border, rounded  
- text, font, cursor  
- hover  

## 12 TodoList UI 만들기 - Search

## 13 TodoList UI 만들기 - TodoItem

## 14 TodoList UI 만들기 - event


### 📌 질문 : apis/todos-no-rls.ts 파일의 1번 라인에 "use client" 혹시 오타인지 잘 모르겠어서 말씀드립니다. 위 구절 지우고 실행해보니 정상적으로 됐습니다. todos-no-rls.ts파일은 클라이언트에서 실행되는 파일은 아니지 않나요??  


답변

1.todos-no-rls.ts 파일은 createSupabaseBrowserClient 을 사용하고 있으며 클라이언트에서 가져와서 실행되는 함수가 담긴 모듈(파일) 입니다. 서버 액션이 아닙니다. 그냥 함수라고 보면 됩니다. 서버액션도 비스무리 하게 정의되어 있어서 많이 헷갈리는 부분입니다.  

2.사실 "use client" 가 없어도 잘 작동합니다. 왜냐하면 todos-no-rls.ts 파일을 다른 리액트 컴포넌트에서 사용할거에요.근데 그 리액트 컴포넌트 파일에 "use client" 가 붙어있다면, todos-no-rls.ts 파일도 "use client" 가 붙어 있는 효과를 받습니다.  

3."use client"가 붙어 있는 효과라는것은 서버에서만 동작하는 함수/파일이 아닌브라우저에서도 동작 가능하도록, "서버에서 제공" 됩니다. ( 한마디로 모든 PC 크롬까지 파일을 전달함)   

4.이러한 동작원리를 "클라이언트 경계"라고 합니다.  ( 좀 어려운 내용이긴 해요.)참고 : https://react.dev/reference/rsc/use-client#use-client  

5.todos-no-rls.ts 에 "use client" 붙인 이유는 다른 협업할 프로그래머를 위해서,클라이언트에서 동작함을 명시적으로 보여주기 위함입니다.!  
