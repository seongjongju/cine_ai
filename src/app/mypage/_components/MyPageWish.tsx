'use client';
import React from 'react';

const MyPageWish = () => {
    return (
        <section>
            <div className='inner'>
                <p className='title__chip md'>
                    <span className='title__line'></span>
                    위시리스트
                </p>
                <h2 className='title md'>
                    내가 담아둔 <span>영화들</span>
                </h2>

                <p style={{ color: "#fff"}}>위시리시트 최신 순 5 - 7개 노출 / 위시리스트 이동 링크</p>
            </div>
        </section>
    );
};

export default MyPageWish; 
