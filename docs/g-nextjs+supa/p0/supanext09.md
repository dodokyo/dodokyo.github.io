---
sidebar_position: 9
---

# supabase next 09


## 성능 최적화 : Serverless가 느린 현상  

- 최적화 전 속도 : 3000ms
- 최적화 후 속도 : 100ms    

https://vercel.com/guides/how-can-i-improve-serverless-function-lambda-cold-start-performance-on-vercel

- 함수에 맞는 지역을 선택하세요. Node.js 함수는iad1 기본적으로 배포됩니다 . 모든 고객은 프로젝트 설정에서 해당 기능의 기본 지역을 변경할 수 있습니다. 최적의 성능을 위해 데이터 소스에 가장 가까운 지역을 선택하세요 .

- Project Settings >  Functions > Function Region

- 어느정도 시간 계선이 되었는지 판단해 보자. !  



## Dynamic server usage: Page couldn't be rendered statically because it used `cookies`.

https://nextjs.org/docs/messages/dynamic-server-error

d [Error]: Dynamic server usage: Page couldn't be rendered statically because it used `cookies`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error

```
export const createServerSideClient = async (serverComponent = false) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookies().get(key)?.value,
        set: (key, value, options) => {
          if (serverComponent) return;
          cookies().set(key, value, options);
        },
        remove: (key, options) => {
          if (serverComponent) return;
          cookies().set(key, "", options);
        },
      } as CookieMethods,
    }
  );
};

```

```
export const createServerSideClient = async (serverComponent = false) => {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookieStore.get(key)?.value,
        set: (key, value, options) => {
          if (serverComponent) return;
          cookieStore.set(key, value, options);
        },
        remove: (key, options) => {
          if (serverComponent) return;
          cookieStore.set(key, "", options);
        },
      } as CookieMethods,
    }
  );
};
```