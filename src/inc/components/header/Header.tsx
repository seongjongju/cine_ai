'use client';
import Link from 'next/link';
import React from 'react';
import '../../styles/inc.css';
import Image from 'next/image';

const Header = () => {
    const gnbOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(window.innerWidth > 768) return;

        const gnb = document.querySelector<HTMLElement>('.gnb');
        if (!gnb) return;
        
        gnb.style.display = 'flex';

        setTimeout(() => {
            gnb.style.opacity = '1';
        }, 10);
    };

    const gnbClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(window.innerWidth > 768) return;

        const gnb = document.querySelector<HTMLElement>('.gnb');
        if (!gnb) return;

        gnb.style.opacity = '0';

        setTimeout(() => {
            gnb.style.display = 'none';
        }, 500);
    };

    return (
        <header className='header'>
            <nav className='inner header__nav'>
                <h1>
                    <Link href={'/'}>
                        <Image src="/common/logo.png" alt="CINE AI 로고" width={68} height={33}/>
                    </Link>
                </h1>

                <ul className='gnb'>
                    <button
                        className='gnb-close'
                        onClick={gnbClose}
                    >
                        <span></span>
                        <span></span>
                    </button>

                    <li>
                        <Link href={'/about'} onClick={gnbClose}>About</Link>
                    </li>
                    <li>
                        <Link href={'/'} onClick={gnbClose}>Discover Films</Link>
                    </li>
                </ul>

                <div className='header__actions'>
                    <Link href={'/search'} className='moved-search'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle 
                                cx="11" 
                                cy="11" 
                                r="7" 
                                stroke="#ffffff" 
                                strokeWidth="2"      
                                strokeLinecap="round"   
                                strokeLinejoin="round"  
                            />
                            <path 
                                d="M20 20L16.65 16.65" 
                                stroke="#ffffff" 
                                strokeWidth="2"      
                                strokeLinecap="round"   
                                strokeLinejoin="round"  
                            />
                        </svg>
                    </Link>
                    <Link
                        className='button-0 bg-[#C9A84C] text-[#333333]'
                        href={'/login'}
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