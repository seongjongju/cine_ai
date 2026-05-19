import React from 'react';
import 'swiper/css';
import './_styles/mypage.css';
import '../wish/_styles/wish.css';
import MyPageInterface from './_components/MyPageInterface';
import MyPageRecentActivity from './_components/MyPageRecentActivity';
import MyPageWish from './_components/MyPageWish';
import { getWishlist } from '@/features/services/wish/getWishListService';
import MypageAiHistory from './_components/MypageAiHistory';
import { getHistory } from '@/features/services/history/getHistoryService';

const MyPage = async () => {
    const wishlist = (await getWishlist()).data;
    const history = (await getHistory()).data;

    return (
        <div className='wrap'>
            <MyPageInterface />
            <MypageAiHistory 
                history={history}
            />
            <MyPageRecentActivity />
            <MyPageWish 
                wishlist={wishlist}
            />
        </div>
    );
};

export default MyPage