---
sidebar_position: 4
---

# 4.Supabase install to next.js  


## 4.1 supabase API key    

## 4.2 env설정  

아래와 같이 .env파일을 만들어 줍니다. 

```
NEXT_PUBLIC_SUPABASE_URL=xxxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxx
```


## 4.3 "3.Generating TypeScript Types


DB 스키마를 바탕으로 타입 제너레이팅이 가능하다.  
- 정말 유용한 기능!!   
- https://supabase.com/docs/guides/api/rest/generating-types

![Alt text](./img/image.png)
알아야 할 정보 
- Project Settings > General settings  
- Project name : next-todo  
- Reference ID : txigexxxxpllferqc  

```js
npm i supabase@">=1.8.1" --save-dev
npx supabase login
npx supabase gen types typescript --project-id txigexxxxpllferqc --schema public > types/supabase.ts

---

import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";

export const supaBrowserClient = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!
);

```