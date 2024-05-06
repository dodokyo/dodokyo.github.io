---
sidebar_position: 3
---

# 3.NextJS 배포하기




## middleware  


### basic 
The user experience of the Frontend Cloud > 
https://vercel.com/blog/the-user-experience-of-the-frontend-cloud#edge-functions-and-middleware


```
import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  console.log("middleware pass : pathname ", req.nextUrl.pathname);

  return res;
}

export const config = {
  matcher: "/",
};

```

### cookie 조작해보기 

- 쿠키란 ? 
- 브라우저에서 cookie 지우는 방법

```
  request.cookies.delete("vercel");
  request.cookies.get("vercel");
  request.cookies.getAll();
  request.cookies.has("vercel");
  request.cookies.set("vercel", "slow");

  response.cookies.delete("vercel");
  response.cookies.get("vercel");
  response.cookies.getAll();
  response.cookies.has("vercel");
  response.cookies.set("vercel", "slow");
```

### cookie counter

```js
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.cookies.get("cookie-counter")?.value) {
    const prev = request.cookies.get("cookie-counter")?.value;
    response.cookies.set("cookie-counter", `${Number(prev) + 1}`);
  } else {
    response.cookies.set("cookie-counter", "1");
  }

  return response;
}

export const config = {
  matcher: "/",
};

```