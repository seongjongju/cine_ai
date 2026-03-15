import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t-1 border-solid border-[rgba(255,255,255,.7)] h-[100px] xl:h-[120px]'>
            <nav className='inner h-full flex items-center justify-center flex-col gap-2 md:flex-row md:justify-between'>
                <h1 className='order-0'>
                    <Link href={''}>
                        <img src="/common/f_logo.png" alt="CINE AI 로고" />
                    </Link>
                </h1>

                <p className='text-xs text-[#ffffff] opacity-[.7] text-center order-2 md:order-1'>
                    © 2026 CineAI. All rights reserved.
                </p>

                <ul 
                    className='footer__list order-1 md:order-2'
                >
                    <li>
                        <Link href={'/'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Policy</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;