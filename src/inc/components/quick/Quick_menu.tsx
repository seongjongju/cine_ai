'use client';
import React from 'react';
import '../../styles/inc.css';

const Quick_menu = () => {
    return (
        <div className='quick'>
            <button 
                className='top-btn'
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    window.scrollTo(0,0);
                }}
            >
                TOP
            </button>
        </div>
    );
};

export default Quick_menu;