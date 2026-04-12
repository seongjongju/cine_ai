import React from 'react';
import './_styles/about.css';
import AboutIntro from './_components/AboutIntro';
import Problem from './_components/Problem';
import CoreFunction from './_components/CoreFunction';
import Faq from './_components/Faq';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className='wrap'>
            <AboutIntro />
            <Problem />
            <CoreFunction />
            <Faq />
            <section className='bg-[#111111]'>
                <div className='inner-2'>
                <p className='title__chip w-full text-center justify-center'>
                    지금 시작하세요
                </p>
                <h2 className='title text-center'>
                    오늘 밤 볼 영화, <br />
                    <span>AI에게 물어보세요</span>
                </h2>
                <p className='text-[#5a5550] text-center text-sm sm:text-base'>
                    신용카드 없이, 무료로, 지금 바로
                </p>

                <div className='flex justify-center gap-2 mt-6 sm:mt-10'>
                    <Link href={'/login'} className='button-0 bg-[#C9A84C] text-[#333333]'>
                        무료로 시작하기
                    </Link>
                    <Link href={'/'} className='button-0 bg-[rgba(255,255,255,.07)] text-[#ffffff]'>
                        메인으로 돌아가기
                    </Link>
                </div>
                </div>  
            </section>
        </div>
    );
};

export default AboutPage