import Link from 'next/link';
import React from 'react';

const Intro = () => {
    return (
        <section className='relative flex items-center pb-[50px!important] sm:pb-[100px!important] h-auto lg:h-[90vh]'>
            <div className='inner flex items-center justify-between gap-8 flex-col lg:flex-row'>
                <div className='w-full lg:w-[50%] xl:w-[60%]'>
                    <p className='title__chip'>
                        <span className='title__line'></span>
                        AI 기반 영화 큐레이터
                    </p>
                    <h2 className='title'>
                        영화를 보기 전 <br />
                        <span>대화하세요</span>
                    </h2>
                    <p className='text-[#ffffff] opacity-[.7] mt-[.5em] break-keep text-sm lg:text-base xl:text-lg'>
                        고구마 구간이 있는지, 철학적으로 어떤 의미인지, <br />
                        오늘 기분에 맞는 영화인지 AI에게 직접 물어보세요.
                    </p>

                    <div className='flex gap-2 mt-[15px] sm:mt-[20px]'>
                        <Link 
                            href={''}
                            className='flex items-center justify-center w-[8.25em] h-[3em] bg-[#C9A84C] text-[#333333] text-xs md:text-sm xl:text-base'
                        >
                            무료로 시작하기
                        </Link>
                        <Link 
                            href={''}
                            className='flex items-center justify-center w-[8.25em] h-[3em] bg-[rgba(255,255,255,.07)] text-[#ffffff] text-xs md:text-sm xl:text-base'
                        >
                            서비스 소개 →
                        </Link>
                    </div>
                </div>

                <div className='grid gap-2 w-full grid-cols-1 sm:grid-cols-2 lg:w-[50%] xl:w-[40%]'>
                    <div 
                        className='
                            bg-[rgba(255,255,255,.12)] border-1 border-solid border-[rgba(255,255,255,.3)] p-[1rem] 
                            text-[#ffffff] text-base lg:text-lg xl:text-xl
                        '
                    >
                        <div className='flex items-center justify-between gap-2 mb-[.5em]'>
                            <p className='text-[1em]'>기생충</p>
                            <span className='
                                w-[3em] h-[1.7em] bg-[rgba(201,168,76,.12)] flex items-center justify-center
                                text-[#C9A84C] text-xs md:text-sm lg:text-base
                            '
                        >
                            9.0
                        </span>
                        </div>
                        <p className='text-xs mb-[1em]'>🔍 철학 모드</p>
                        <p className='text-[.8em] break-keep'>
                            계단이라는 모티프는 수직적 계급 구조 그 자체다. 봉준호는 공간으로 자본주의를 번역한다.
                        </p>
                    </div>{/* item */}

                    <div 
                        className='
                            bg-[rgba(255,255,255,.12)] border-1 border-solid border-[rgba(255,255,255,.3)] p-[1rem] 
                            text-[#ffffff] text-base lg:text-lg xl:text-xl
                        '>
                        <div className='flex items-center justify-between gap-2 mb-[.5em]'>
                            <p className='text-[1em]'>올드보이</p>
                            <span className='
                                w-[3em] h-[1.7em] bg-[rgba(201,168,76,.12)] flex items-center justify-center
                                text-[#C9A84C] text-xs md:text-sm lg:text-base
                            '
                        >
                            8.8
                        </span>
                        </div>
                        <p className='text-xs mb-[1em]'>🎬 영화 비평 모드</p>
                        <p className='text-[.8em] break-keep'>
                            박찬욱의 복수 3부작 중 가장 강렬한 작품. 밀폐된 공간과 시간의 역설이 빚어내는 서사적 충격은 독보적이다.
                        </p>
                    </div>{/* item */}

                    <div 
                        className='
                            bg-[rgba(255,255,255,.12)] border-1 border-solid border-[rgba(255,255,255,.3)] p-[1rem] 
                            text-[#ffffff] text-base lg:text-lg xl:text-xl
                        '
                    >
                        <div className='flex items-center justify-between gap-2 mb-[.5em]'>
                            <p className='text-[1em]'>버닝</p>
                            <span className='
                                w-[3em] h-[1.7em] bg-[rgba(201,168,76,.12)] flex items-center justify-center
                                text-[#C9A84C] text-xs md:text-sm lg:text-base
                            '
                        >
                            8.5
                        </span>
                        </div>
                        <p className='text-xs mb-[1em]'>💬 캐주얼 모드</p>
                        <p className='text-[.8em] break-keep'>
                            뭔가 분명히 일어나고 있는데 아무것도 확실하지 않아. 이창동이 만든 가장 아름다운 미스터리.
                        </p>
                    </div>{/* item */}

                    <div 
                        className='
                            bg-[rgba(255,255,255,.12)] border-1 border-solid border-[rgba(255,255,255,.3)] p-[1rem] 
                            text-[#ffffff] text-base lg:text-lg xl:text-xl
                        '
                    >
                        <div className='flex items-center justify-between gap-2 mb-[.5em]'>
                            <p className='text-[1em]'>헤레디터리</p>
                            <span className='
                                w-[3em] h-[1.7em] bg-[rgba(201,168,76,.12)] flex items-center justify-center
                                text-[#C9A84C] text-xs md:text-sm lg:text-base
                            '>
                                8.3
                            </span>
                        </div>
                        <p className='text-xs mb-[1em]'>🚫 스포일러 없는 모드</p>
                        <p className='text-[.8em] break-keep'>
                            공포의 본질을 가족이라는 틀 안에 담았다. 보고 나면 한동안 일상이 달라 보일 영화.
                        </p>
                    </div>{/* item */}
                </div> {/* grid */}
            </div> {/* .inner : end */}

            <p 
                className='
                    inner w-full absolute left-[50%] bottom-[10px] sm:bottom-[30px] transform-[translateX(-50%)]
                    flex items-center gap-[1em] text-[rgba(255,255,255,.5)] font-light text-xs sm:text-sm
                '
            >
                <span 
                    className='block w-[2em] h-[1px]' 
                    style={{background: 'linear-gradient(to right, transparent 0%, #ffffff 100%)'}}
                ></span>
                SCROLL TO EXPLORE
            </p>
        </section>
    );
};

export default Intro;