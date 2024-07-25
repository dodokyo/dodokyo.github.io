---
sidebar_position: 9
---

# 9.TodoList 공유하기 기능

## 1.Share 페이지 만들기  

### (강의 첨삭) getUser 에 갑자기 serverComponent가 추가되었어요.!

1.갑자기 serverComponent 파라미터가 생긴점을 확인했습니다.아래 변경사항 참고해주세요.!  

강의 중 코드  
```ts
export const getUser = async () => {
  const supabase = await createServerSideClient();
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};
```

변경 된 코드 : https://github.com/dodokyo/supa-next-todo/blob/main/actions/auth/user.action.tsserverComponent 
```ts
export const getUser = async ({ serverComponent = false }) => {
  const supabase = await createServerSideClient(serverComponent);
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};
```
변수가 추가된 이유 (배경)
- 2.1 서버 액션의 경우에는 서버 사이드 랜더링 도중에 호출될 수 있습니다. 이러한 환경에서는 서버는 쿠키 조작이 불가능 합니다.
- 또 다른 경우에는요.  
- 2.2 서버 액션은 라우터 핸들러, 혹은 미들웨어에서도 호출될 수 있습니다. 이러한 환경에서는 서버는 쿠키 조작이 가능합니다.    

3.serverComponent 변수가 추가된 이유 (해결)  
- 2.1 같은 환경을 분기처리하기 위해 serverComponent 변수가 추가 되었습니다.  
- 서버 액션은 다양한 컨텍스트에서 활용될 수 있으므로 액션의 호출된 컨텍스트가 붙게되는겁니다.!  


## 2.Profiles Table 만들기 ( trigger function )  

### API로 auth.users 테이블은 조회사 불가능 합니다.  

해결 : 
>>https://supabase.com/docs/guides/auth/managing-user-data#using-triggers
- 트리거 함수 만들기 + 백필   
- SQL에 userManagement 퀵스타트가 있다.    


아래 순서대로 수행   

1.트리거 함수를 먼저 지워야 한다. (SQL only)  
- drop trigger on_auth_user_created on auth.users;  
2.handle_new_user functions 삭제
3.SQL문 수행

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own profile." on profiles
  for update using ((select auth.uid()) = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

```

### 📌 연습해보기 - 프로필 테이블을 새로 만들었어요. 기존 회원들의 프로필을 옮겨볼까요?  


### 힌트) 1개 행에 대해서 옮기는 방법  

데이터 확인하기 
```
select
  id,
  raw_user_meta_data ->> 'full_name' as full_name , 
  raw_user_meta_data ->> 'avatar_url' as avatar_url
from
  auth.users;
```

1.select > insert 구문 만들기  


데이터를 마이그레이션 할꺼야  select   id,   raw_user_meta_data ->> 'full_name' as full_name ,    raw_user_meta_data ->> 'avatar_url' as avatar_url from   auth.users; 에서   insert into public.profiles (id, full_name, avatar_url) 연결해줘


```
insert into
  public.profiles (id, full_name, avatar_url)
select
  id,
  raw_user_meta_data ->> 'full_name' as full_name,
  raw_user_meta_data ->> 'avatar_url' as avatar_url
from
  auth.users
where
  id = '1e8ea338-4d09-4748-8ad1-d06282f983b6';
```


## 3.Profile actions & permanentRedirect  

## 4.getTodoByUserId   

## 5.테스트 및 오류수정
