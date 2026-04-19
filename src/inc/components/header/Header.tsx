'use client';
import Link from 'next/link';
import React from 'react';
import '../../styles/inc.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Users } from '@/types/user';

const Header = ({isLoggedIn}: Users) => {
    const gnbOpen = () => {
        if(window.innerWidth > 768) return;

        const gnb = document.querySelector<HTMLElement>('.gnb');
        if (!gnb) return;
        
        gnb.style.display = 'flex';

        setTimeout(() => {
            gnb.style.opacity = '1';
        }, 10);
    };

    const gnbClose = () => {
        if(window.innerWidth > 768) return;

        const gnb = document.querySelector<HTMLElement>('.gnb');
        if (!gnb) return;

        gnb.style.opacity = '0';

        setTimeout(() => {
            gnb.style.display = 'none';
        }, 500);
    };

    const pathName = usePathname();

    return (
        <header 
            className='header'
            style={{
                backgroundColor: pathName.includes('discover_films_view') ? 'rgba(0,0,0,.5)' : ''
            }}
        >
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
                        <Link href={'/discover_films?page=1'} onClick={gnbClose}>Discover Films</Link>
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
                    {
                        isLoggedIn ? 
                        (
                            <div className='user-service'>
                                <Link
                                    className=''
                                    href={'/mypage'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                </Link>
                                <Link
                                    className=''
                                    href={'/wish'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>

                                </Link>
                            </div>
                        )
                        :
                        (
                            <Link
                                className='button-0 bg-[#C9A84C] text-[#333333]'
                                href={'/login'}
                            >
                                무료로 시작하기
                            </Link>
                        )
                    }
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