import { getDetail } from '@/features/services/movie/getMovieService';
import React from 'react';
import 'swiper/css';
import '../_styles/view.css';
import VIewDetail from '../_components/VIewDetail';
import { getWishlist } from '@/features/services/wish/getWishListService';

const DiscoverFilmsViewPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    if(!id) return;

    const movieDetail = await getDetail(id); //상세정보
    const wishlist = (await getWishlist()).data; // 찜 여부

    return (
        <div className='wrap'>
            <VIewDetail 
                movieDetail={movieDetail}
                wishlist={wishlist}
                viewId={id}
            />
        </div>
    );
};

export default DiscoverFilmsViewPage;