---
sidebar_position: 2
---

# 맥미니(Mac Server) 운용 방법 및 후기

<head>
  <meta name="keywords" content="Mac Server"/>
</head>


## 문제

AWS 서버비용은 비싸다. 취미 혹은 개인용 서버로 사용하기에는 Mac Mini 혹은 라즈베리파이로도 충분하다.


## 맥미니 서버 어떻게 해야 잘 활용할까?

### Code Server 개발환경 

사실 코드 서버 하나만 배포해도 충분히 취미용 개발 서버로 그 역할을 다 한다.   
실사용 후기는 정말정말 만족하고 좋다. AWS 프리티어와 비교도 안된다.   

<img  src={require('./sc001.png').default} alt="Example banner"/>

`위 처럼 Web에서 언제 어디서나 접속이 가능한 나만의 Cloud IDE를 구축하고자 한다.`

Node.JS 관련 코딩 연습
- Javascript, React, NextJS, NestJS 등등 node.js 런타임이면 모두 개발과 동시에 포트를 열어서 실시간 확인이 가능하다.  
- 하지만 실서비스 배포는 가능하나 



### Docker 컨테이너 환경 구축

MySQL, PostgreSQL, Redis 등 각종 컨테이너들을 올려서 개발환경을 구축하고 있다.    
어떤 컨테이너를 사용하고 있는지 잠깐 보여드리면 아래와 같다.  

```
docker ps

7680119bcdca   mongo-express:latest                    "tini -- /docker-ent…"   4 months ago   
3caa96d61ed7   mongo:4.0.4                             "docker-entrypoint.s…"   4 months ago   
449b8f0710d7   portainer/portainer-ce                  "/portainer"             4 months ago   
79e49d8768ca   mysql:8.0.32                            "docker-entrypoint.s…"   4 months ago   
d78b865d9be1   m1macmini-jenkins-docker                "/usr/bin/tini -- /u…"   4 months ago   
77b2f22d1a7b   postgres:13                             "docker-entrypoint.s…"   4 months ago   
e2b69459e61c   rediscommander/redis-commander:latest   "/usr/bin/dumb-init …"   4 months ago   
ec347468f5cc   redis:latest                            "docker-entrypoint.s…"   4 months ago   
69b13440da19   redis:latest                            "docker-entrypoint.s…"   4 months ago   
```

### 부팅시 자동으로 켜지는 프로세스

- code-server by brew services
- nginx by brew services
- docker by DockerDesktop


--- 

TaskList
	- MacMini - codeServer start on boot
	- codeserver - subpath, subdomain set up

## 맥미니 기본 셋업

### brew 설치

### OS Update

### 맥미니 비번없이 바로 부팅 셋업
	- 자동으로 dosimpact(계정) 로그인 켜기
	- https://www.fonedog.com/ko/powermymac/how-to-turn-off-password-on-mac.html


### [필수셋팅] OS X Server: 잠자기 모드를 차단하는 방법
	*껐따키면 사라짐..?!

https://support.apple.com/ko-kr/HT200106
명령어를 입력하면 커버를 닫아도 잠자기 모드가 활성화 되지 않는다.
sudo pmset -c disablesleep 1  
다시 잠자기 모드를 활성화 하려면    명령어를 입력하면 된다.
sudo pmset -c disablesleep 0


### CodeServer install

```
curl -fsSL https://code-server.dev/install.sh | sh

1. 포트 설정, 2. 비밀번호 설정, 3. 보안 그룹 설정(개별 클라우드 셋팅하기)
vi ~/.config/code-server/config.yaml
	- 127.0.0.1:8080 -> 0.0.0.0:8080 ( 포트에서 접속 가능하게 )

## 실행 및 유지 & 자동재시작 ( launchctl이용 )
>sudo systemctl enable --now code-server@$USER
쉘에서 code-server로 실행 할 수 있으나, 원활한 사용을 위해 서비스에 등록하여 사용할 수 있습니다.

# 서비스 등록 (최초1회 실행)
sudo launchctl enable --now code-server@$USER

# code-server 실행
sudo launchctl start code-server@$USER

# code-server 중지
sudo launchctl stop code-server@$USER

# code-server 재시작
sudo systemctl restart code-server@$USER

# code-server 상태
sudo systemctl status code-server@$USER

```
---
https://support.apple.com/ko-kr/guide/terminal/apdc6c1077b-5d5d-4d35-9c19-60f2397b2369/mac
https://www.44bits.io/ko/post/register-service-on-macos-by-using-launchctl

eg) 
다음과 같은 명령어로 주피터 노트북을 실행한다.
ipython notebook

시작프로그램으로 위 명령어를 실행시켜, 주피터 노트북을 처음에 시작하자.
---- 

cd /Library/LaunchDaemons/
sudo touch com.vscode.server.plist
sudo vi com.vscode.server.plist

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>KeepAlive</key>
    <true />
    <key>RunAtLoad</key>
    <true/>
    <key>Label</key>
    <string>com.vscode.server</string>
    <key>ProgramArguments</key>
    <array>
      <string>/opt/homebrew/bin/code-server</string>
    </array>
  </dict>
</plist>
```

sudo launchctl load -w /Library/LaunchDaemons/com.vscode.server.plist
sudo launchctl start com.vscode.server
sudo launchctl list | grep com.vscode.server
sudo launchctl stop com.vscode.server
sudo launchctl unload /Library/LaunchDaemons/com.vscode.server.plist

# Docker install 

https://codewagon.tistory.com/2

brew update
brew upgrade
brew search docker
brew install --cask docker


---

## CodeServer - Nginx + https 설정

### 개요

인터넷을 찾아보니 code-server에 https를 붙이기 위해서 nginx를 앞단에 두는 방식을 주로 사용했다.  
ubuntu 환경에서 certbot이 쉽게 nginx설정을 바꾸어 연동을 해주는데  
MacOS환경에서 brew로 nginx을 설치하니 경로가 다르게 설정되고 nginx도 직접 설정해줘야 했다. 

크게 code-server에 https를 붙이는 방법은 2가지다.  여기서는 1번 방법을 기록.  
1. https 인증서를 nginx에 붙이고, 뒷단에 code-server 두기  
2. code-server에 직접 https 인증서 붙이기  


### 사전 준비

내 아이피 확인하기 
- MY_IP = 123.123.123.123 


도메인 구매하기 (가비아)
- 가비아에서 2000원,1년 도메인을 구매했다.
- MY_DOMAIN = www.my-coding.site 


iptime port forward 확인
- 80, 443 포트가 맥서버와 연결되었는지 반드시 확인

<br/>

### NOTE) brew 명령어 정리

```
# 패키지 검색 
brew search nginx 

# 패키지 설치
brew install nginx 

# 서비스 시작
brew services start nginx 
( brew services [run|start|stop|restart|cleanup] service_name  )

# 서비스 확인
brew service list

Name        Status  User      File
nginx       started dosimpact ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist


```

### NOTE) certbot 명령어 정리


```
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


### NOTE) nginx 명령어 정리

```
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

nginx version: nginx/1.25.1
built by clang 14.0.3 (clang-1403.0.22.14.1)
built with OpenSSL 3.1.1 30 May 2023 (running with OpenSSL 3.1.2 1 Aug 2023)
TLS SNI support enabled
configure arguments: --prefix=/opt/homebrew/Cellar/nginx/1.25.1_1 --sbin-path=/opt/homebrew/Cellar/nginx/1.25.1_1/bin/nginx --with-cc-opt='-I/opt/homebrew/opt/pcre2/include -I/opt/homebrew/opt/openssl@3/include' --with-ld-opt='-L/opt/homebrew/opt/pcre2/lib -L/opt/homebrew/opt/openssl@3/lib' --conf-path=/opt/homebrew/etc/nginx/nginx.conf --pid-path=/opt/homebrew/var/run/nginx.pid --lock-path=/opt/homebrew/var/run/nginx.lock --http-client-body-temp-path=/opt/homebrew/var/run/nginx/client_body_temp --http-proxy-temp-path=/opt/homebrew/var/run/nginx/proxy_temp --http-fastcgi-temp-path=/opt/homebrew/var/run/nginx/fastcgi_temp --http-uwsgi-temp-path=/opt/homebrew/var/run/nginx/uwsgi_temp --http-scgi-temp-path=/opt/homebrew/var/run/nginx/scgi_temp --http-log-path=/opt/homebrew/var/log/nginx/access.log --error-log-path=/opt/homebrew/var/log/nginx/error.log --with-compat --with-debug --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_degradation_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-http_v3_module --with-ipv6 --with-mail --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module

여기서 : --prefix=/opt/homebrew/Cellar/nginx/1.25.1_1 에 루트 디렉터리가 된다.
하지만 해당 디렉터리의 html 폴더는 링크가 걸려 있다. 
최종적으로 /opt/homebrew/var/www 라는 곳에 index.html 이 있다. 

```


### 1. nginx 설치

아래 명령어를 참고해서 nginx를 MacOS에 설치한다.   
```
# 패키지 설치
brew install nginx 

# 서비스 시작
brew services start nginx 
```

<br/>



#### nginx 도달 확인 (port 8080)
> http://123.123.123.123:8080/


<br/>

#### 설정파일에서 80 포트로 변경해서 nginx접근이 되는지 확인 해보자.

```
# nginx.conf 파일 경로 확인
brew info nginx
```

- 설정 파일 경로 : /opt/homebrew/etc/nginx/nginx.conf
  - 포트 8080 > 80 변경
- 서비스 재시작 brew services restart nginx


#### nginx 도달 확인 (port 80)
> http://123.123.123.123/



<br/>

### 2. 도메인(가비아) > DNS 레코드 수정


#### A 타입으로 레코드를 추가한다. 
- host 는 www 이며 서브도메인을 뜻한다. 

Note) host에 @은 서브도메인이 없는 경우이다.
즉, http://my-coding.site / 로 접속하면 지정된 IP로 이동한다.

#### nginx 도달 확인
http://www.my-coding.site 


<br/>

### 3. 인증서 발급 


https://ukprog.tistory.com/125

sudo certbot certonly --manual

www.my-coding.site  

-----------
Create a file containing just this data:

Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0

And make it available on your web server at this URL:

http://www.my-coding.site /.well-known/acme-challenge/Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8

-----------

nginx 
mkdir -p .well-known/acme-challenge/
vi Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8
Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0  입력 후 저장

-----------

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/www.my-coding.site /fullchain.pem
Key is saved at:         /etc/letsencrypt/live/www.my-coding.site /privkey.pem
This certificate expires on 2023-11-08.
These files will be updated when the certificate renews.

-----------

#### cron job
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null

-----------
( nginx 경로로 오류 > sudo certbot --nginx -d www.my-coding.site  )


### 4. nginx > code-server로 프록시 설정
https://www.hakawati.co.kr/entry/Code-Server-%EA%B5%AC%EC%B6%95%ED%8E%B8#NginX%EC%9D%98%20%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C%20%EC%9D%B8%EC%A6%9D%20%EA%B5%AC%EC%84%B1-1



### 프록시 확인


```
    server {
        listen 80 ;
        server_name www.my-coding.site ;
        
        # HTTP to HTTPS 리디렉션
        # location / {
        #     root   html;
        #     index  index.html index.htm;
        # }
        location / {
            proxy_pass http://127.0.0.1:2229/;           
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection upgrade;
            proxy_set_header Accept-Encoding gzip;
        }  
    }
```

(http only 확인 )
http://www.my-coding.site /login

# https 적용


# 수정 확인 
nginx -t 


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
    server {
        listen 443 ssl; # managed by Certbot
        server_name www.my-coding.site ; # managed by Certbot
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
        server_name www.my-coding.site ;
          # HTTP to HTTPS 리디렉션
        location / {
            return 301 https://$host$request_uri;
        }
    }
   
    include servers/*;
}
```


# 설정파일 server_name 변경하기


# cerbot실행
certbot --nginx -d example.com -d dev.example.com


---

1-1) nginx docker로 관리하기


2) code-server 자체에 https 적용
https://donghun.dev/code-server-tutorial-guide



certbot 인증서 갱신 3달 


---백로그

DNS 레코드 종류 : https://www.delmaster.net/69  
DNS 레코드 종류 쉽게 이해 : https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-DNS-%EB%A0%88%EC%BD%94%EB%93%9C-%EC%A2%85%EB%A5%98-%E2%98%85-%EC%95%8C%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC  
ssh 접속 to mac mini : https://dev-repository.tistory.com/96  

