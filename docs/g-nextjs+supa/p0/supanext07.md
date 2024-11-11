---
sidebar_position: 7
---

# 7.인증 (Authentication) with OAuth 2.1

Goal  
- Google Login  
- Github Login  

## 1. OAuth를 위한 GoogleCloud, Supabase Setup 

## 2. 구글 로그인 1 - AuthUI 구현  

구글 로그인을 구현해 봅니다. AuthUI 패키지를 이용하면 쉽게 구현할 수 있어요.  

## Implicit flow, PKCE flow

>>Implicit flow : https://supabase.com/docs/guides/auth/sessions/implicit-flow    

Implicit Flow는 서버 없이 클라이언트 측에서만 동작하는 애플리케이션, 예를 들어 SPA(Single Page Application)나 모바일 앱에서 주로 사용돼요. 
- 하지만 보안상의 이유로, 서버 측에서 인증이 필요한 경우에는 PKCE 흐름을 사용하는 것이 권장돼요.


>>PKCE flow : https://supabase.com/docs/guides/auth/sessions/pkce-flow     

PKCE(Proof Key for Code Exchange)는 OAuth 2.0의 인증 코드 흐름을 강화하여, 특히 클라이언트 시크릿을 안전하게 저장할 수 없는 공개 클라이언트(예: 모바일 앱, 싱글 페이지 애플리케이션)에서 보안을 향상시키는 메커니즘이에요. (OAuth)  


읽어보기  
>>https://supabase.com/blog/supabase-auth-sso-pkce   

## 3. 구글 로그인 2 - PKCE Flow 구현  

>>https://supabase.com/docs/guides/auth/sessions/pkce-flow  
>>https://supabase.com/docs/guides/auth/sessions/implicit-flow  

## 4. 깃허브 로그인   

>>https://supabase.com/docs/guides/auth/social-login/auth-github  


### 더 알아보기  

>>https://www.misha.wtf/blog/supabase-auth-next-13-pkce  
- 세션을 관리하고 싶다면 위 내용을 읽어보세요.  
- 사용자의 세션이 풀리는 경우 리다이렉트를 일으킬 수 있어요.  
