import React from 'react';
import Link from 'next/link';

interface NoneItemLayoutProps {
    text: string;
    href: string;
    linkText: string;
};

const NoneItemLayout = ({text, href, linkText}: NoneItemLayoutProps) => {
    return (
        <div>
            <p className='text-[#fff]'>{text}</p>
            <Link
                href={href}
                className='text-[var(--gold-0)]'
            >
                {linkText}
            </Link>
        </div>
    );
};

export default NoneItemLayout;