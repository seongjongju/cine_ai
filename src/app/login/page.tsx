import React from 'react';
import './_styles/login.css';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
    return (
        <div className='wrap' style={{ height: "75vh" }}>
            <section>
                <div className='inner-2'>
                    <p className='title__chip md justify-center'>Welcome to CineAI</p>
                    <p className='title md text-center' style={{marginBottom: "10px"}}>시작하기</p>
                    <p className='text-[#5a5550] text-center break-keep text-sm md:text-base'>소셜 계정으로 3초 만에 시작하세요.</p>

                    <div className='login-btns'>
                        <button className='login-btn btn-0'>
                            <Image width={20} height={20} src="/icons/google_ico.png" alt="구글" className='login-btn__icon'/>
                            Google로 계속하기
                        </button>
                        <button className='login-btn btn-1'>
                            <Image width={20} height={20} src="/icons/kakao_ico.png" alt="카카오" className='login-btn__icon'/>
                            카카오로 계속하기
                        </button>
                        <button className='login-btn btn-2'>
                            <Image width={20} height={20} src="/icons/naver_ico.png" alt="네이버" className='login-btn__icon'/>
                            네이버로 계속하기
                        </button>
                    </div>

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