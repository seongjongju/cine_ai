# 🎬 Cine AI

> **Gemini 2.5 Flash 기반의 AI 대화형 맞춤형 영화 큐레이션 플랫폼**
> 
> TMDB의 풍부한 영화 데이터와 Gemini API를 결합하여, 사용자가 선택한 모드에 따라 영화에 대한 깊이 있는 분석과 인사이트를 맞춤형으로 제공하는 1인 개발 프로젝트입니다.

<br />

## 📌 1. 프로젝트 소개
- **프로젝트 이름**: Cine AI
- **개발 형태**: 1인 개발 (개인 프로젝트)
- **서비스 한 줄 요약**: 넷플릭스 스타일의 세련된 UI에 **Gemini 2.5 Flash** 엔진을 탑재하여, 사용자가 원하는 다양한 모드로 영화에 대한 궁금한 점을 직접 물어보고 정밀한 답변을 받아볼 수 있는 스마트 영화 플랫폼입니다.

<br />

## 🚀 2. 핵심 기능 (Key Features)

### 🤖 AI 대화 및 영화 큐레이션 (Gemini API)
- **다양한 AI 모드 제공**: 사용자의 목적에 따라 스포 없이, 영화광처럼, 철학적으로, 친구한테 등 다양한 모드로 AI에게 질문이 가능합니다.
- **맞춤형 답변 엔진**: **Gemini 2.5 Flash** 버전을 장착하여 빠르고 정확한 영화 관련 인사이트를 제공합니다.

### 🎬 풍부한 영화 데이터 연동 (TMDB API)
- **실시간 영화 데이터**: TMDB API를 활용하여 최신 개봉작, 인기작, 상영 예정작 등 다양한 영화 리스트를 실시간으로 업데이트하고 제공합니다.
- **상세 정보 제공**: 영화별 포스터, 줄거리, 평점, 장르 등의 메타데이터를 깔끔하게 시각화했습니다.

### 🔐 사용자 경험 및 편의 기능
- **간편 소셜 로그인**: **Supabase Auth**를 연동하여 구글 및 카카오 소셜 로그인을 통한 빠르고 안전한 인증 시스템을 구축했습니다.
- **최근 본 영화 히스토리**: 사용자가 최근에 조회한 영화 기록을 저장하고 보여주어 서비스 이탈률을 낮추고 재접근성을 높였습니다.
- **관심 영화 찜하기**: 마음에 드는 영화를 보관함에 저장하고 마이페이지 및 위시리스트 페이지에서 언제든 확인할 수 있습니다.
- **영화명, 장르 검색**: 대용량 영화 데이터 속에서 사용자가 원하는 영화를 정확하게 찾을 수 있도록 영화명 검색과 장르 검색 기능을 제공합니다.

<br />

## 🛠 3. 기술 스택 (Tech Stack)

### Frontend
- **Framework**: `Next.js` (App Router를 활용한 최적의 라우팅 및 SSR/CSR 조합)
- **Language**: `TypeScript` (정적 타이핑을 통한 안정적인 데이터 구조 정의 및 컴파일 에러 방지)
- **Styling**: `Tailwind CSS`, `CSS` (유틸리티 클래스 기반의 빠른 스타일링 및 커스텀 스타일 결합)

### State Management & Data Fetching
- **Global State**: `Zustand` (보일러플레이트가 없는 가볍고 직관적인 전역 상태 관리)
- **Data Fetching**: `TanStack Query (React Query)` (서버 데이터 캐싱, 실시간 동기화 및 효율적인 API 상태 관리)

### Backend & Database
- **BaaS**: `Supabase` (PostgreSQL 기반의 강력한 DB 아키텍처 및 초고속 Auth, Storage 활용)

### Deployment
- **Hosting**: `Vercel` (Next.js에 최적화된 CI/CD 자동화 및 글로벌 에지 네트워크 배포)

<br />

## ⚠️ 4. 프로젝트 제약 사항 및 안내 (Limitations)

본 프로젝트는 서비스 데모 및 기술 검증을 목적으로 개발되었으며, API 제공사(Google Gemini)의 무료 티어 정책 및 데이터 제공 범위에 따라 다음과 같은 안내 사항이 있습니다.

- **영화 스트리밍 불가**: 본 서비스는 영화 정보 조회 및 AI 기반 큐레이션을 제공하는 플랫폼으로, **실제 영화 영상 재생(스트리밍) 기능은 포함되어 있지 않습니다.**
- **실시간 웹 서칭 불가**: 본 서비스에 탑재된 Gemini 2.5 Flash는 무료 티어 API 특성상 실시간 웹 서칭 기능이 제한되어 있습니다. 따라서 **TMDB API를 통해 기본적으로 제공되는 영화 정보 범위 내에서 답변을 생성**하며, 해당 데이터 외의 최신 정보나 외부 정보에 대해서는 답변이 제한될 수 있습니다.
- **다중 사용자 접속에 따른 API 제한 (RPM & RPD)**: 본 서비스는 배포된 플랫폼 특성상 모든 사용자가 무료 제공량을 공유하기 때문에, 여러 사람이 접속할 경우 다음과 같은 제한이 발생할 수 있습니다.
  * **단시간 호출 제한 (RPM)**: 단시간 내에 연속으로 여러 번 AI 대화를 요청하거나 동시 요청이 몰릴 경우, 순간 트래픽 제한으로 인해 잠시 답변 생성이 지연될 수 있습니다. (이 경우 1~2분 정도의 대기 시간 후 다시 정상 작동합니다.)
  * **일일 누적 사용량 제한 (RPD)**: 하루 동안 제공되는 무료 토큰 및 호출 총량을 모두 소모할 경우 당일 조기에 사용이 제한될 수 있으며, 이튿날 제공사 기준 시간에 초기화된 후 다시 사용이 가능합니다.

<br />

## 💻 5. 시작 가이드 (Installation & Run)

로컬 환경에서 프로젝트를 설치하고 실행하려면 아래 명령어를 순서대로 입력해 주세요.

### 1) 환경 변수 설정 (.env.local)
루트 디렉토리에 `.env.local` 파일을 생성하고 필요한 API 키를 입력해 주세요.
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_puplishable_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

SERVICE_ROLE_KEY=your_supabase_service_role_key

NEXT_PUBLIC_ALL_MOVIE_BASE_URL=
NEXT_PUBLIC_MOVIE_API=
NEXT_PUBLIC_POPULAR_MOVIE_BASE_URL=
NEXT_PUBLIC_GENRE_BASE_URL=

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

### 2) 의존성 패키지 설치 및 서버 실행
npm install && npm run dev

설치가 완료되면 자동으로 로컬 개발 서버가 켜지며, 브라우저를 열고 http://localhost:3000에서 결과를 확인하실 수 있습니다.