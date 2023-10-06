---
sidebar_position: 4
---

# 맥미니(Mac Server) 운용 방법 - 3

<head>
  <meta name="keywords" content="Mac Server, 맥미니 서버, 운용"/>
</head>


## CodeServer - Nginx + https 설정

---

### 개요

인터넷을 찾아보니 code-server에 https를 붙이기 위해서 `nginx를 앞단`에 두는 방식을 주로 사용했다.    
- ubuntu 환경에서 certbot이 쉽게 nginx설정을 바꾸어 연동을 해주는데  
- MacOS환경에서 brew로 nginx을 설치했다. 
- nginx 설치 경로가 우분투 환경과 다르게 셋업 되었다. 그래서 cerbot 자동 설정(`python3-certbot-nginx`)이 실패..
- 그래서 cerbot 수동설정 및 nginx conf도 직접 설정해서 https 인증서를 발급했다.


크게 code-server에 https를 붙이는 방법은 `2가지다`. (여기서는 1번 방법을 기록)  
1. https 인증서를 nginx에 붙이고, 뒷단에 code-server 두기  
2. code-server에 직접 https 인증서 붙이기   


1번 방법이 좀 더 일반적인 상황에서 사용이 가능하고, cerbot을 이용해서 수동으로 https 인증서를 발급할 예정이다.

<br/>

### 도메인을 붙이면 좋은 이유 - 다양한 서비스 연결

맥미니 서버를 운용하다보면, 각 포트에 여러 서비스를 만들게 된다.
예를들어, 
```
3000 리액트 서버
4000 api 서버
5432 db 서버
5555 redis 서버
8090 jeknins 서버
9009 portainer 서버
```

매번 내 아이피 주소에 포트를 붙여서 접근해도 되지만, 외부에 서비스를 노출할때는 그렇게 하지 않는다. 
도메인을 붙이는것이다. 도메인 example.com을 구매해서 다음처럼 구성이 가능하다.

```
www.example.com -> 3000 리액트 서버
api.example.com -> 4000 api 서버
db.example.com -> 5432 db 서버
cache.example.com -> 5555 redis 서버
jekins.example.com -> 8090 jeknins 서버
ci.example.com -> 9009 portainer 서버
```
<br/>

### 요약

1. 도메인 설정
- 도메인을 구매한다. eg) www.example.com
- DNS 래코드 설정으로 내 아이피와 연결한다. eg) www.example.com -> 123.123.123.123

2. nginx 80 port 설정
- 맥미니의 80포트 접속 = nginx로 셋업
- 마치 GW 같은 역학을 nginx가 해주는 것이다.  
- 그리고 각 도메인 별로 분기처리 하여, 뒷단의 서비스 포트로 연결한다.

```
    server {
        listen 80 ; # nginx는 80포트 opn  
        server_name www.example.com; # 그 중 특정 도메인에 해당하는 경우만 처리한다.

        location / {  # HTTP to HTTPS 리디렉션
            return 301 https://$host$request_uri;
        }
    }
```

3. cerbot 실행

- `sudo certbot certonly --manual`으로 인증서발급 진행
- cerbot에서 임의의 경로에 요청을 보낼테니, 특정 파일을 읽을 수 있도록 셋팅하라 한다.
- 그 설정을 / 앞단에 한다.

```
    server {
        listen 80 ; # nginx는 80포트 opn  
        server_name www.example.com; # 그 중 특정 도메인에 해당하는 경우만 처리한다. 

        location /.well-known/acme-challenge {
            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # 실제 파일이 위치한 경로를 지정합니다.
            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/EaICkPAIxkrb_MYWJPqLihzZCc228BkrgxXPvi9qUTA; # 특정 파일명을 여기에 지정합니다.
        }

        location / {  # HTTP to HTTPS 리디렉션
            return 301 https://$host$request_uri;
        }
    }
```

4. nginx 443 port 설정

- 인증이 성공되면, 특정 경로에 인증서를 만들어주게 된다.
- 이는 fullchain.pem, privkey.pem 2개가 나온다.
- 해당 디렉터리는 nginx가 읽을권한이 없으므로 `sudo chmod -R 755 /etc/letsencrypt` 명령어로 권한 부여
- 다음처럼 설정을 추가한다. (아래 예제는 localhost 3030포트로 진입한다.)

```
    server {
        listen 443 ssl; 
        server_name www.example.com; 
        ssl_certificate /etc/letsencrypt/live/www.example.com/fullchain.pem; 
        ssl_certificate_key /etc/letsencrypt/live/www.example.com/privkey.pem; 

        # SSL 설정 (최신 보안 권장)
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';
        ssl_prefer_server_ciphers off;

        # SSL 세션 캐싱 설정
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 1h;

        location / {
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_pass http://127.0.0.1:3030/;
        }   
    }
```

<br/>

### 사전 준비

내 아이피 확인하기 
- MY_IP = 123.123.123.123 

도메인 구매하기 (가비아)
- 가비아에서 2000원,1년 도메인을 구매했다.
- MY_DOMAIN = www.my-coding.site 

iptime port forward 확인
- 80, 443 포트가 맥서버와 연결되었는지 반드시 확인

<br/>

### NOTE) brew / nginx / certbot 명령어 정리

```
[brew]
brew search nginx   # 패키지 검색 
brew install nginx  # 패키지 설치

brew services start nginx  # 서비스 시작
brew services restart nginx 
( brew services [run|start|stop|restart|cleanup] service_name  )

brew services # 서비스 확인
Name        Status  User      File
nginx       started dosimpact ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist

---

[nginx]
# 설정파일 변경 후 문법 체크하기
nginx -t 

# nginx.conf 파일 경로 확인
brew info nginx
...
The default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.
...

# nginx root 폴더 확인 
>nginx -V

nginx version: nginx/1.25.1 ...
configure arguments: --prefix=/opt/homebrew/Cellar/nginx/1.25.1_1 ...

여기서 : --prefix=/opt/homebrew/Cellar/nginx/1.25.1_1 에 루트 디렉터리가 된다.
하지만 해당 디렉터리의 html 폴더는 링크가 걸려 있다. 
최종적으로 /opt/homebrew/var/www 라는 곳에 index.html 이 있다. 

---
[certbot]
# 인증서 정보 , 유효기간, 경로 확인 
sudo certbot certificates

Saving debug log to /var/log/letsencrypt/letsencrypt.log
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Found the following certs:
  Certificate Name: MY_DOMAIN
    Serial Number: 3841dcd9246507891a8afc5cde8df0e0af1
    Key Type: ECDSA
    Domains: MY_DOMAIN
    Expiry Date: 2023-11-08 12:19:45+00:00 (VALID: 89 days)
    Certificate Path: /etc/letsencrypt/live/MY_DOMAIN/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/MY_DOMAIN/privkey.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# 인증서 갱신 dry-run
sudo certbot renew --dry-run

# 인증서 갱신
sudo certbot renew

```


### 1. nginx 설치

아래 명령어를 참고해서 nginx를 MacOS에 설치한다.   

```
#1 패키지 설치
brew install nginx 

#2 서비스 시작
brew services start nginx

#3 서비스 목록
brew services

# 서비스 재시작
brew services restart nginx

#4 8080포트 접근시 nginx 도달 확인하자.
> http://123.123.123.123:8080/
```

<br/>

#### 설정파일에서 80 포트로 변경해서 nginx접근이 되는지 확인 해보자.

```
# 1. nginx.conf 파일 경로 확인
brew info nginx

# 1.1 아래처럼 설정파일 경로를 확인 
...
The default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.
...

# 2. 설정 파일 변경
설정 파일 경로 : /opt/homebrew/etc/nginx/nginx.conf
  - 포트 8080 > 80 변경

#3. 서비스 재시작
brew services restart nginx

#3 nginx 도달 확인 (port 80)
> http://123.123.123.123/
```

<br/>

### 2. 도메인(가비아) > DNS 레코드 수정

my-coding.site 도메인을 구매 후  
www.my-coding.site 도메인과 내 맥미니 서버와 연결해야 한다.  

```
#1 A 타입으로 레코드를 추가한다. 
- eg) www.my-coding.site -> 123.123.123.123 설정을 원한다면
- host:www
- host 는 www 이며 서브도메인을 뜻한다. 

# 참고)
- eg) my-coding.site -> 123.123.123.123 설정을 원한다면
- host:@
- Note) host에 @은 서브도메인이 없는 경우이다.
- 즉, http://my-coding.site / 로 접속하면 지정된 IP로 이동한다.

#2 nginx 도달 확인
>http://www.my-coding.site 

```


<br/>

### 3. 인증서 발급 

https://ukprog.tistory.com/125

```
# 1. 인증서 발급 시작
sudo certbot certonly --manual 

# 2. 연결할 도메인 입력
www.my-coding.site

# 도메인에 아래 파일 서빙하도록 nginx 설정 변경
Create a file containing just this data:
Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0
And make it available on your web server at this URL:
http://www.my-coding.site/.well-known/acme-challenge/Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9


# nginx.conf 추가
---
    server {
        listen 80 ;
        server_name www.my-coding.site;

        location /.well-known/acme-challenge {
            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # 실제 파일이 위치한 경로를 지정합니다.
            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9; # 특정 파일명을 여기에 지정합니다.
        }

        location / {  # HTTP to HTTPS 리디렉션
            return 301 https://$host$request_uri;
        }
    }
...

--- 

mkdir -p .well-known/acme-challenge/
vi Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8
Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0  입력 후 저장

#3. nginx 재실행
nginx -t # 문법 검사
brew services restart nginx # 재시작 

#4. cerbot 확인 후 발급 성공
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/www.my-coding.site /fullchain.pem
Key is saved at:         /etc/letsencrypt/live/www.my-coding.site /privkey.pem
This certificate expires on 2023-11-08.
These files will be updated when the certificate renews.


#5. 인증서 읽기 권한 문제 해결
sudo chmod -R 755 /etc/letsencrypt

#6. https 처리하는 nginx.conf 추가

---
    server {
        listen 443 ssl; 
        server_name www.my-coding.site; 
        ssl_certificate /etc/letsencrypt/live/www.my-coding.site/fullchain.pem; 
        ssl_certificate_key /etc/letsencrypt/live/www.my-coding.site/privkey.pem; 

        # SSL 설정 (최신 보안 권장)
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';
        ssl_prefer_server_ciphers off;

        # SSL 세션 캐싱 설정
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 1h;

        location / {
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_pass http://127.0.0.1:3030/;
        }   
    }
...

```
### 4. 인증서 갱신

#### cron job
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null

#### 수동 작업
( nginx 경로로 오류 > sudo certbot --nginx -d www.my-coding.site  )



## 최종 nginx.conf

```c
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;
    #keepalive_timeout  0;
    keepalive_timeout  65;
    #gzip  on;

    server {
        listen 443 ssl; # managed by Certbot
        server_name www.you-domain.site; # managed by Certbot
        ssl_certificate /opt/homebrew/etc/nginx/fullchain.pem; # managed by Certbot
        ssl_certificate_key /opt/homebrew/etc/nginx/privkey.pem; # managed by Certbot
        # SSL 설정 추가 (optional, 추천)
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384';
        ssl_prefer_server_ciphers off;
        ssl_session_timeout 1d;
        ssl_session_cache shared:SSL:50m;

        location / {
            proxy_pass http://127.0.0.1:2229/;           
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection upgrade;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
	    }   
    }

    server {
        listen 80 ;
        server_name www.you-domain.site;
        location / {  # HTTP to HTTPS 리디렉션
            return 301 https://$host$request_uri;
        }
    }

    include servers/*;
}
```


## 예) 최종 nginx.conf

```
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;
    #keepalive_timeout  0;
    keepalive_timeout  65;
    #gzip  on;

    # ghost cms - coding-play
    server {
        listen 80 ;
        server_name wp.coding-play.site;

        location /.well-known/acme-challenge {
            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # 실제 파일이 위치한 경로를 지정합니다.
            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/GA8XfAQnDC7jp1kjtxMmzhUJ5RVeYWG0MbwfdnH1JXQ; # 특정 파일명을 여기에 지정합니다.
        }

        location / {  # HTTP to HTTPS 리디렉션
            return 301 https://$host$request_uri;
            # proxy_pass http://127.0.0.1:8080;
        }
        # location ~ /.well-known {
        #     allow all;
        # }
    }

    server {
        listen 443 ssl; 
        server_name wp.coding-play.site; 
        ssl_certificate /etc/letsencrypt/live/wp.coding-play.site/fullchain.pem; 
        ssl_certificate_key /etc/letsencrypt/live/wp.coding-play.site/privkey.pem; 

        # SSL 설정 (최신 보안 권장)
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';
        ssl_prefer_server_ciphers off;

        # SSL 세션 캐싱 설정
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 1h;

        location / {
            # proxy_set_header Host "wp.coding-play.site";
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
            # proxy_set_header X-Real-IP $remote_addr;
            # proxy_set_header Host $http_host;
            # proxy_set_header X-NginX-Proxy true;
            # proxy_redirect off;
            proxy_pass http://127.0.0.1:3030/;


            # proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            # proxy_set_header X-Forwarded-Proto $scheme;
            # proxy_set_header X-Real-IP $remote_addr;
            # proxy_set_header Host $http_host;
        }   
    }

    # vscode
    server {
        listen 443 ssl; 
        server_name code.coding-play.site; 
        ssl_certificate /etc/letsencrypt/live/code.coding-play.site/fullchain.pem; 
        ssl_certificate_key /etc/letsencrypt/live/code.coding-play.site/privkey.pem; 

        # SSL 설정 추가 (optional, 추천)
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384';
        # ssl_prefer_server_ciphers off;
        # ssl_session_timeout 1d;
        # ssl_session_cache shared:SSL:50m;


        location / {
            proxy_pass http://127.0.0.1:2229;           
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection upgrade;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
	    }   
    }

    server {
        listen 80 ;
        server_name code.coding-play.site;

        location /.well-known/acme-challenge {
            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # 실제 파일이 위치한 경로를 지정합니다.
            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/XGNhDLRm4LMqNgFd3QC3RdI4mGM1ZedPYZiSt0nTCUY; # 특정 파일명을 여기에 지정합니다.
        }

        location / {  # HTTP to HTTPS 리디렉션
            return 301 https://$host$request_uri;
        }
    }

    include servers/*;
}

# nginx -t
# brew services restart nginx
# sudo chmod -R 755 /etc/letsencrypt
```

## ref

[DNS 레코드 종류](https://www.delmaster.net/69).   
[DNS 레코드 종류 쉽게 이해](https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-DNS-%EB%A0%88%EC%BD%94%EB%93%9C-%EC%A2%85%EB%A5%98-%E2%98%85-%EC%95%8C%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC).   
[ssh 접속 to mac mini](https://dev-repository.tistory.com/96)      
[nginx + code-server 구축](https://www.hakawati.co.kr/entry/Code-Server-%EA%B5%AC%EC%B6%95%ED%8E%B8#NginX%EC%9D%98%20%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C%20%EC%9D%B8%EC%A6%9D%20%EA%B5%AC%EC%84%B1-1).   
[code-server 자체에 https 적용](https://donghun.dev/code-server-tutorial-guide) 

