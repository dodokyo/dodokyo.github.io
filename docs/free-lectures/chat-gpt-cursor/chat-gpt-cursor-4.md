---
sidebar_position: 1
---

# 4. ChatGPT with Cursor (원데이 클래스) - 구현하기 

- [4. ChatGPT with Cursor (원데이 클래스) - 구현하기](#4-chatgpt-with-cursor-원데이-클래스---구현하기)
  - [4.구현하기](#4구현하기)
    - [4.1 README 요구사항 작성](#41-readme-요구사항-작성)
    - [📌 Shadcn --force 이슈](#-shadcn---force-이슈)
    - [4.2 Cursor Settings 알아보기](#42-cursor-settings-알아보기)
    - [4.3 1단계: 기본 설정 및 설치](#43-1단계-기본-설정-및-설치)
    - [4.4 2단계: API 라우트 핸들러 구현](#44-2단계-api-라우트-핸들러-구현)
    - [4.5 3단계: 프론트엔드와 API 연동](#45-3단계-프론트엔드와-api-연동)
    - [4.6 4단계: 채팅 UI 구현](#46-4단계-채팅-ui-구현)
    - [4.7 5단계: Vercel 배포하기](#47-5단계-vercel-배포하기)

## 4.구현하기

### 4.1 README 요구사항 작성    

프로젝트의 요구사항을 명확히 정의합니다:

```markdown
# ChatGPT 클론 프로젝트

## 요구사항
- Next.js App Router를 사용한 웹 애플리케이션
- OpenAI API를 활용한 채팅 기능 구현
- 사용자 메시지와 AI 응답을 표시하는 UI
- 메시지 이력 관리
- 로딩 상태 표시
- 모바일 반응형 디자인

## 기술 스택
- Next.js 14
- TypeScript
- TailwindCSS
- OpenAI API
- Vercel 배포

## 기능
- 사용자 입력을 받아 OpenAI API에 전송
- 스트리밍 방식으로 AI 응답 표시
- 채팅 이력 유지
- 에러 처리
```

### 📌 Shadcn --force 이슈   
>https://ui.shadcn.com/docs/react-19  
- To support React 19, package maintainers will need to test and update their packages to include React 19 as a peer dependency. This is already in progress.
- 패키지 유지보수자들이 React 19를 peer dependency로 추가하는 작업 진행 중.  


### 4.2 Cursor Settings 알아보기  

### 4.3 1단계: 기본 설정 및 설치  

```bash
# Next.js 프로젝트 생성
npx create-next-app@latest chatgpt-clone
cd chatgpt-clone

# 필요한 패키지 설치
npm install openai ai
npm install tailwindcss postcss autoprefixer
npm install @tailwindcss/typography
npm install react-markdown
npm install react-syntax-highlighter
npm install lucide-react

# 환경 설정
npx tailwindcss init -p
```

`.env.local` 파일을 생성하고 OpenAI API 키 설정:

```
OPENAI_API_KEY=your_api_key_here
```

TailwindCSS 설정 (`tailwind.config.js`):

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
```


### 4.4 2단계: API 라우트 핸들러 구현  

`app/api/chat/route.ts` 파일 생성:

```typescript
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

// OpenAI API 설정
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  // OpenAI API 호출
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    temperature: 0.7,
    max_tokens: 1000,
  });

  // 응답 스트리밍 설정
  const stream = OpenAIStream(response);
  
  // 스트리밍 응답 반환
  return new StreamingTextResponse(stream);
}
```

### 4.5 3단계: 프론트엔드와 API 연동  

`app/hooks/useChat.ts` 훅 생성:

```typescript
import { useState, useCallback } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;
    
    try {
      setIsLoading(true);
      
      // 사용자 메시지 추가
      const userMessage: Message = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);
      
      // API 호출
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });
      
      if (!response.ok) {
        throw new Error('API 요청 실패');
      }
      
      const data = await response.json();
      
      // AI 응답 추가
      const assistantMessage: Message = { role: 'assistant', content: data.content };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('메시지 전송 오류:', error);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);
  
  return {
    messages,
    isLoading,
    sendMessage,
  };
}
```

### 4.6 4단계: 채팅 UI 구현  

`app/components/ChatUI.tsx` 생성:

```tsx
import { useState, FormEvent, useRef, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ChatUI() {
  const [input, setInput] = useState('');
  const { messages, isLoading, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };
  
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold text-center">ChatGPT 클론</h1>
      </header>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            AI에게 질문해보세요!
          </div>
        ) : (
          messages.map((message, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-blue-100 ml-auto max-w-[80%]'
                  : 'bg-gray-100 max-w-[80%]'
              }`}
            >
              <ReactMarkdown className="prose">
                {message.content}
              </ReactMarkdown>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex items-center p-4 rounded-lg bg-gray-100 max-w-[80%]">
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
            생각 중...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="flex-1 p-2 border rounded-l-md focus:outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <Send className="h-4 w-4" />}
        </button>
      </form>
    </div>
  );
}
```

`app/page.tsx` 파일 수정:

```tsx
import ChatUI from './components/ChatUI';

export default function Home() {
  return <ChatUI />;
}
```

### 4.7 5단계: Vercel 배포하기    

1. GitHub에 프로젝트 푸시하기:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```

2. Vercel 웹사이트(https://vercel.com)에서:
   - GitHub 계정으로 로그인
   - "New Project" 클릭
   - 방금 생성한 GitHub 저장소 선택
   - 환경 변수 설정: `OPENAI_API_KEY`
   - "Deploy" 버튼 클릭

3. 배포 완료 후:
   - 제공된 URL로 접속하여 애플리케이션 테스트
   - 필요한 경우 사용자 정의 도메인 설정

