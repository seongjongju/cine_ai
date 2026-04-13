'use client';
import React from 'react';

const MyPageRecentActivity = () => {
    return (
        <section>
            <div className='inner'>
                <p className='title__chip md'>
                    <span className='title__line'></span>
                    최근 활동
                </p>
                <h2 className='title md'>
                    최근 본 <span>영화</span>
                </h2>

                <p style={{ color: "#fff"}}>최근 들어간 상세페이지 리스트로 노출 / 더보기 기능</p>
            </div>
        </section>
    );
};

export default MyPageRecentActivity;