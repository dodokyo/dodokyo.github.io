---
sidebar_position: 3
---

# 2.NextJS 배포하기

## CI/CD

**CI/CD (지속적 통합 및 지속적 배포):**

CI/CD는 소프트웨어 개발 프로세스를 자동화하고 지속적인 업데이트를 가능하게 하는 개발 방법론입니다. 여기에는 두 가지 주요 요소가 있습니다.

1. **지속적 통합 (Continuous Integration - CI):**
   - 개발자들이 코드를 주기적으로 공유하고, 이를 자동으로 빌드하고 테스트하는 과정입니다.
   - 주로 코드 변경이 발생할 때마다 자동으로 통합 테스트가 실행되어 코드 품질을 유지하고 버그를 빠르게 찾아내도록 도와줍니다.

2. **지속적 배포 (Continuous Deployment - CD):**
   - 코드가 통합 테스트를 통과하면 자동으로 스테이징 또는 프로덕션 환경으로 배포되는 과정입니다.
   - 개발자가 코드를 작성하고 푸시할 때마다 자동으로 프로덕션 환경에 변경 사항이 반영되어 신속한 업데이트를 가능케 합니다.

## 다양한 배포 방식들  
예) Vercel.   
예) AWS > github pull > build > run + https    
예) nextjs > Docker Image > AWS > Docker Container.   
예) github push > Jenkins > Docker Image > AWS > Portainer > Docker Container.   
예) github push > CI Tools > Docker Image > CD Tools > K8S (EKS). 

## Vercel 

- 가장 쉬운 방법  

## 실습 - Vercel github 연결

