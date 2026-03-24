import Link from 'next/link';
import React from 'react';

const Intro = () => {
    return (
        <section className='intro'>
            <div className='inner intro__inner'>
                <div className='intro__text-col'>
                    <p className='title__chip'>
                        <span className='title__line'></span>
                        AI 기반 영화 큐레이터
                    </p>
                    <h2 className='title'>
                        영화를 보기 전 <br />
                        <span>대화하세요</span>
                    </h2>
                    <p className='intro__desc'>
                        고구마 구간이 있는지, 철학적으로 어떤 의미인지, <br />
                        오늘 기분에 맞는 영화인지 AI에게 직접 물어보세요.
                    </p>

                    <div className='intro__btn-group'>
                        <Link href={'/login'} className='button-0 bg-[#C9A84C] text-[#333333]'>
                            무료로 시작하기
                        </Link>
                        <Link href={''} className='button-0 bg-[rgba(255,255,255,.07)] text-[#ffffff]'>
                            서비스 소개 →
                        </Link>
                    </div>
                </div>

                <div className='intro__grid'>
                    <div className='intro__card'>
                        <div className='intro__card-header'>
                            <p className='intro__card-title'>기생충</p>
                            <span className='intro__card-score'>9.0</span>
                        </div>
                        <p className='intro__card-mode'>🔍 철학 모드</p>
                        <p className='intro__card-desc'>
                            계단이라는 모티프는 수직적 계급 구조 그 자체다. 봉준호는 공간으로 자본주의를 번역한다.
                        </p>
                    </div>

                    <div className='intro__card'>
                        <div className='intro__card-header'>
                            <p className='intro__card-title'>올드보이</p>
                            <span className='intro__card-score'>8.8</span>
                        </div>
                        <p className='intro__card-mode'>🎬 영화 비평 모드</p>
                        <p className='intro__card-desc'>
                            박찬욱의 복수 3부작 중 가장 강렬한 작품. 밀폐된 공간과 시간의 역설이 빚어내는 서사적 충격은 독보적이다.
                        </p>
                    </div>

                    <div className='intro__card'>
                        <div className='intro__card-header'>
                            <p className='intro__card-title'>버닝</p>
                            <span className='intro__card-score'>8.5</span>
                        </div>
                        <p className='intro__card-mode'>💬 캐주얼 모드</p>
                        <p className='intro__card-desc'>
                            뭔가 분명히 일어나고 있는데 아무것도 확실하지 않아. 이창동이 만든 가장 아름다운 미스터리.
                        </p>
                    </div>

                    <div className='intro__card'>
                        <div className='intro__card-header'>
                            <p className='intro__card-title'>헤레디터리</p>
                            <span className='intro__card-score'>8.3</span>
                        </div>
                        <p className='intro__card-mode'>🚫 스포일러 없는 모드</p>
                        <p className='intro__card-desc'>
                            공포의 본질을 가족이라는 틀 안에 담았다. 보고 나면 한동안 일상이 달라 보일 영화.
                        </p>
                    </div>
                </div>
            </div>

            <p className='inner intro__scroll-hint'>
                <span className='intro__scroll-line'></span>
                SCROLL TO EXPLORE
            </p>
        </section>
    );
};

export default Intro;