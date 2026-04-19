import React from 'react';
import './_styles/mypage.css';
import MyPageInterface from './_components/MyPageInterface';
import MyPageRecentActivity from './_components/MyPageRecentActivity';
import MyPageWish from './_components/MyPageWish';

const MyPage = () => {
    return (
        <div className='wrap'>
            <MyPageInterface />
            <MyPageRecentActivity />
            <MyPageWish />
        </div>
    );
};

export default MyPage