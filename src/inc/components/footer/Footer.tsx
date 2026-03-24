import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='inner footer__nav'>
                <h1 className='footer__logo'>
                    <Link href={''}>
                        <Image src="/common/f_logo.png" alt="CINE AI 로고" width={58} height={15} />
                    </Link>
                </h1>

                <p className='footer__copy'>
                    © 2026 CineAI. All rights reserved.
                </p>

                <ul className='footer__list'>
                    <li>
                        <Link href={'/about'}>About</Link>
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