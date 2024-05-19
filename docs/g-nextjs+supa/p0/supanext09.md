---
sidebar_position: 9
---

# 9.TodoList 공유하기 기능

## 1.Share 페이지 만들기
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
