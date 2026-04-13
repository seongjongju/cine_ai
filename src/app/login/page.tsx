import React from 'react';
import './_styles/login.css';
import Link from 'next/link';
import OauthInterface from './_components/OauthInterface';

const LoginPage = async ({ searchParams }: { searchParams: Promise<{ message?: string }> }) => {
    const {message} = await searchParams;

    return (
        <div className='wrap'>
            <section className='login-section'>
                <div className='inner-2'>
                    <p className='title__chip md justify-center'>Welcome to CineAI</p>
                    <p className='title md text-center' style={{marginBottom: "10px"}}>시작하기</p>
                    <p className='text-[#5a5550] text-center break-keep text-sm md:text-base'>소셜 계정으로 3초 만에 시작하세요.</p>

                    <OauthInterface message={message} />
                    
                    <p className='text-[#5a5550] text-center break-keep text-sm md:text-base'>
                        가입 시 <Link href={''} className='underline underline-offset-3'>이용약관</Link> 및 <Link href={''} className='underline underline-offset-3'>개인정보처리방침</Link>
                        에 동의하는 것으로 간주됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;