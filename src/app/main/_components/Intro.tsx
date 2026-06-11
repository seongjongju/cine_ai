'use client';
import { useUser } from '@/providers/UsersProvider';
import Link from 'next/link';
import React from 'react';

const Intro = () => {
    const {user} = useUser();

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