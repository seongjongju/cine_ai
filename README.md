# Cine AI

Gemini 2.5 Flash와 TMDB API를 기반으로 제작한 AI 대화형 맞춤형 영화 큐레이션 플랫폼입니다.
사용자가 선택한 AI 모드에 따라 영화에 대한 다양한 관점의 답변을 제공하며, 영화 검색·찜하기·최근 본 영화 관리 등의 기능을 제공합니다.

* 개발 형태: 기획부터 배포까지 단독 수행
* 서비스: https://cine-ai-murex.vercel.app/
* GitHub: https://github.com/seongjongju/cine_ai

## 주요 기능

### AI 영화 큐레이션

* 스포일러 방지, 영화광, 철학적 해석, 친근한 대화 등 다양한 AI 모드 제공
* 선택한 AI 모드에 따라 프롬프트를 분기하여 영화 관련 답변 제공
* Gemini 2.5 Flash 기반 영화 관련 대화 기능

### 영화 데이터

* TMDB API 기반 최신작, 인기작, 상영 예정작 조회
* 영화 포스터, 줄거리, 평점, 장르 등 상세 정보 제공
* 영화명 및 장르 기반 검색

### 사용자 기능

* Google 및 Kakao 소셜 로그인
* Supabase Auth 기반 사용자 인증
* 최근 본 영화 히스토리 저장
* 관심 영화 찜하기
* TanStack Query 기반 찜하기 낙관적 업데이트
* 비동기 요청 상태를 반영한 로딩 UI

## 기술 스택

### 프론트엔드

* Next.js App Router
* TypeScript
* React
* Tailwind CSS
* CSS
* Zustand
* TanStack Query

### 백엔드 및 데이터

* Supabase
* PostgreSQL
* Supabase Auth
* Supabase Storage

### 외부 API

* Gemini 2.5 Flash API
* TMDB API

### 배포

* Vercel

## 개발 환경 설정 및 실행 방법

### 1. 프로젝트 클론 및 패키지 설치

```bash
git clone https://github.com/seongjongju/cine_ai.git
cd cine_ai
npm install
```

### 2. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 아래 환경변수를 설정합니다.

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

SERVICE_ROLE_KEY=your_supabase_service_role_key

NEXT_PUBLIC_ALL_MOVIE_BASE_URL=
NEXT_PUBLIC_MOVIE_API=
NEXT_PUBLIC_POPULAR_MOVIE_BASE_URL=
NEXT_PUBLIC_GENRE_BASE_URL=

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.
