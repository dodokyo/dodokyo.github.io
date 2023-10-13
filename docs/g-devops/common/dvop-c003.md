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
- 도메인을 구매한다. eg) example.com
- DNS 래코드 설정으로 내 아이피와 연결한다. eg) www.example.com -> 123.123.123.123

1. nginx 80 port 설정
- 맥미니의 80포트 접속 = nginx로 셋업
- 마치 GW 같은 역학을 nginx가 해주는 것이다.  
- 그리고 각 도메인 별로 분기처리 하여, 뒷단의 서비스 포트로 연결한다.

```
    server {
        listen 80 ; # nginx는 80포트 open  
        server_name www.example.com; # 특정 서브 도메인에 해당하는 경우만 처리한다.

        location / {  # HTTP to HTTPS 리디렉션
            return 301 https://$host$request_uri;
        }
    }
```

3. cerbot 실행

- `sudo certbot certonly --manual`으로 인증서발급 진행
- cerbot에서 임의의 경로에 요청을 보낼테니, 특정 파일을 읽을 수 있도록 셋팅하라 한다.
- 그 설정을 `location /` 앞단에 한다.

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

### 0. 사전 준비

내 아이피 확인하기 
- MY_IP = 123.123.123.123 

도메인 구매하기 (가비아 등)
- 가비아에서 2000원,1년 도메인을 구매했다.
- MY_DOMAIN = www.my-coding.site 
- 외국 사이트 중 https://www.namecheap.com/ 가 싼것 같다.

공유기 포트포워딩 확인
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

# 인증서 발급
sudo certbot certonly --manual 
sudo certbot --nginx -d yourdomain.com
sudo certbot --nginx --nginx-server-root /opt/homebrew/etc/nginx -d yourdomain.com


# 인증서 정보 , 유효기간, 경로 확인
sudo certbot certificates
sudo certbot certificates -d www.domain.com

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
sudo certbot renew --dry-run -d www.domain.com

# 인증서 갱신
( 발급시 90일 연장, 30일 남았을때 연장 가능 )
sudo certbot renew

# 인증서 삭제
sudo certbot delete --cert-name yourdomain.com

```

