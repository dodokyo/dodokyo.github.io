---
sidebar_position: 5
---

# 맥미니(Mac Server) 운용 방법 - 4

<head>
  <meta name="keywords" content="Mac Server, 맥미니 서버, 운용"/>
</head>


## CodeServer - Nginx + https 설정



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

(가능하면 아래 명령어로 nginx 설정을 자동으로 설정하게끔 하자.)
sudo certbot --nginx -d yourdomain.com


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

sudo certbot certonly --manual 명령어를 이용했더라면 자동으로 갱신이 불가능 하다.  
인증서 갱신을 할때 새로운 파일

```
[certbot]
# 인증서 정보 , 유효기간, 경로 확인 
sudo certbot certificates

# 인증서 발급
sudo certbot --nginx -d yourdomain.com
sudo certbot certonly --manual 

# 인증서 갱신 dry-run
sudo certbot renew --dry-run

# 인증서 갱신 (--apache, --nginx 등으로 자동 발급한 경우)
sudo certbot renew

# 인증서 갱신 (--manual 로 발급한 경우)
sudo certbot certonly --manual --dry-run -d www.your-domain.com
- /opt/homebrew/etc/nginx

```

#### cron job
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null


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


## 예) 최종 nginx.conf (code-server)

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



## 예) 최종 nginx.conf (ghost cms)

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

