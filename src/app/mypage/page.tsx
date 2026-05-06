import React from 'react';
import 'swiper/css';
import './_styles/mypage.css';
import '../wish/_styles/wish.css';
import MyPageInterface from './_components/MyPageInterface';
import MyPageRecentActivity from './_components/MyPageRecentActivity';
import MyPageWish from './_components/MyPageWish';
import { getWishlist } from '@/features/services/wish/getWishListService';

const MyPage = async () => {
    const wishlist = (await getWishlist()).data;

    return (
        <div className='wrap'>
            <MyPageInterface />
            <MyPageRecentActivity />
            <MyPageWish 
                wishlist={wishlist}
            />
        </div>
    );
};

export default MyPage