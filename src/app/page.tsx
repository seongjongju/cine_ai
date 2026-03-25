import 'swiper/css';
import 'swiper/css/scrollbar';
import './main/_styles/main.css';

import Ai_pick from "./main/_components/Ai_pick";
import Intro from "./main/_components/Intro";
import Loop_carousel from "./main/_components/Loop_carousel";
import Instructions from './main/_components/Instructions';
import How_mood from './main/_components/How_mood';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="wrap">
      <Intro />
      <Loop_carousel />
      <Ai_pick />
      <Instructions />
      <How_mood />

      <section className='bg-[#111111]'>
        <div className='inner-2'>
          <p className='title__chip w-full text-center justify-center'>
              무료 시작
          </p>
          <h2 className='title text-center'>
              영화를 보기 전 <br />
              <span>대화하세요</span>
          </h2>
          <p className='text-[#5a5550] text-center text-sm sm:text-base'>
              신용카드 없이 무료로 시작. Gemini API 기반.
          </p>

          <div className='flex justify-center gap-2 mt-6 sm:mt-10'>
              <Link href={'/login'} className='button-0 bg-[#C9A84C] text-[#333333]'>
                  무료로 시작하기
              </Link>
              <Link href={'/about'} className='button-0 bg-[rgba(255,255,255,.07)] text-[#ffffff]'>
                  자세히 알아보기
              </Link>
          </div>
        </div>  
      </section>
    </div>
  );
}
