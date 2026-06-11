import { getDetail } from '@/features/apis/movie/getMovieService';
import React from 'react';
import 'swiper/css';
import '../_styles/view.css';
import VIewDetail from '../_components/VIewDetail';
import { getWishlist } from '@/features/services/wish/getWishListService';
import { getMovieVideo } from '@/features/apis/movie/getMovieVideoService';

const DiscoverFilmsViewPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    if(!id) return;

    const movieDetail = await getDetail(id); //상세정보
    const wishlist = (await getWishlist()).data; // 찜 여부
    const video = await getMovieVideo(id);

    return (
        <div className='wrap'>
            <VIewDetail 
                movieDetail={movieDetail}
                wishlist={wishlist}
                video={video[0]}
                viewId={id}
            />
        </div>
    );
};

export default DiscoverFilmsViewPage;