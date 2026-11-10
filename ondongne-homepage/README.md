# 상생온동네 홈페이지 (리뉴얼)

빌드 과정이 없는 정적 사이트(HTML/CSS)입니다. Cloudflare Pages + GitHub로 배포합니다.

```
ondongne-homepage/
├── index.html   # 페이지 전체 (헤더·혜택·상생구조·서비스·지자체·이용방법·FAQ·푸터)
├── style.css    # 디자인 (색상은 맨 위 :root 값에서 변경)
├── favicon.svg
└── README.md
```

## 섹션 구성

| 순서 | 섹션 | 내용 출처 |
|---|---|---|
| 1 | 히어로 | 수수료 4% · 구독료 0원 · 2km 배달팁 무료 |
| 2 | 고객 혜택 `#benefits` | PPT 1: 최저가 비교, 구독료 0원, 상품권 할인 |
| 3 | 상생 구조 `#model` | PPT 2: 중개앱 vs 직거래, 선순환 5단계 |
| 4 | 주요 서비스 `#services` | 기존 사이트 |
| 5 | 지자체 협력 `#partners` | 기존 사이트 (나주·사하·영광·대구) |
| 6 | 이용방법 · FAQ · 푸터 | 기존 사이트 |

## ⚠️ 배포 전 확인할 것

1. **이미지 경로**: 지금은 기존 사이트 이미지를 `https://www.ssondongne.kr/images/...` 주소로 불러옵니다.
   새 사이트가 같은 도메인을 대체하면 이미지가 사라지므로, 기존 소스의 `images` 폴더를 이 폴더에 복사한 뒤
   `index.html`에서 `https://www.ssondongne.kr/images/` → `images/` 로 모두 바꿔 주세요.
2. **경쟁사 가격·구독료 수치**(배민·쿠팡이츠·요기요): PPT 기준 예시입니다. 게시 전 최신 금액인지 확인하세요.
3. **약관 링크**: 이용약관 · 전자금융 거래 약관 · 개인정보 처리방침 링크가 `#`(빈 링크)입니다. 기존 사이트와 같습니다.

---

## 배포 1단계. GitHub 저장소 만들기

1. https://github.com → **New repository** → 이름 `ondongne-homepage` → **Create repository**
2. **uploading an existing file** → 이 폴더의 파일(그리고 `images` 폴더)을 끌어다 놓기 → **Commit changes**

> 이 PC에는 git이 없어 웹 업로드 방식으로 안내합니다. 자주 고친다면 GitHub Desktop 설치를 추천합니다.

## 배포 2단계. Cloudflare Pages 연결

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. GitHub 연결 후 `ondongne-homepage` 저장소 선택 → **Begin setup**
3. 빌드 설정

   | 항목 | 값 |
   |---|---|
   | Framework preset | **None** |
   | Build command | *(비워둠)* |
   | Build output directory | `/` |

4. **Save and Deploy** → `https://<프로젝트명>.pages.dev` 에서 먼저 확인

## 배포 3단계. 기존 도메인(ssondongne.kr)으로 교체

기존 사이트도 이미 Cloudflare를 거쳐 서비스되고 있습니다.
**pages.dev 주소에서 충분히 확인한 뒤** 진행하세요.

1. Cloudflare → 새 Pages 프로젝트 → **Custom domains** → `www.ssondongne.kr` 추가
2. 기존 사이트가 같은 이름을 쓰고 있으면 기존 연결(기존 Pages 프로젝트의 도메인 또는 DNS 레코드)을 먼저 해제해야 합니다.
   잘 모르시면 이 단계는 저에게 화면을 보여주며 함께 진행하세요.
3. `ssondongne.kr`(www 없는 주소)도 같은 방식으로 추가하면 둘 다 접속됩니다.

이후에는 GitHub에서 파일을 고치면 자동으로 다시 배포됩니다.
문제가 생기면 Cloudflare → 프로젝트 → **Deployments** 에서 이전 버전으로 되돌릴 수 있습니다.
