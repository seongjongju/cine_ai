import React from 'react';

const Intro = () => {
    return (
        <section>
            <div className='inner'>
                <div className='intro__titles'>
                    <div className='titles'>
                        <p className='title__chip'>
                            <span className='title__line'></span>
                            AI 기반 영화 큐레이터
                        </p>
                        <h2 className='title'>
                            영화를 보기 전 <br />
                            <span>대화하세요</span>
                        </h2>
                        <p className='text-[#ffffff] opacity-[.7] mt-[.5em] text-sm lg:text-base xl:text-lg'>
                            고구마 구간이 있는지, 철학적으로 어떤 의미인지, <br />
                            오늘 기분에 맞는 영화인지 — AI에게 직접 물어보세요.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;