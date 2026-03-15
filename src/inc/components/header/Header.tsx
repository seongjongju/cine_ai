'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import '../../styles/inc.css';

const Header = () => {
    const gnbOpen = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        const gnb = document.querySelector<HTMLElement>('.gnb');
        if (!gnb) return;

        gnb.style.display = "flex";

        setTimeout(() => {
            gnb.style.opacity = "1";
        }, 10);
    };

    const gnbClose = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        const gnb = document.querySelector<HTMLElement>('.gnb');
        if (!gnb) return;

        gnb.style.opacity = "0";

        setTimeout(() => {
            gnb.style.display = "none";
        }, 500);
    };

    return (
        <header className='fixed w-full z-[99] h-[55px] md:h-[60px] lg:h-[70px] xl:h-[90px]'>
            <nav className='inner h-full flex justify-between items-center'>
                <h1>
                    <Link href={'/'}>
                        <img src="/common/logo.png" alt="CINE AI 로고" />
                    </Link>
                </h1>

                <ul 
                    className='gnb'
                >
                    <button 
                        className='gnb-close'
                        onClick={gnbClose}
                    >
                        <span></span>
                        <span></span>
                    </button>

                    <li>
                        <Link href={'/'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Discover Films</Link>
                    </li>
                </ul>

                <div className='flex items-center gap-4'>
                    <Link 
                        className='flex items-center justify-center w-[8.25em] h-[3em] bg-[#C9A84C] text-[#333333] text-xs md:text-sm xl:text-base'
                        href={'/'}
                    >
                        무료로 시작하기
                    </Link>
                    <button 
                        className='gnb-open'
                        onClick={gnbOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;