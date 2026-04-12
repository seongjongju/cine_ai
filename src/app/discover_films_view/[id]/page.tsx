import { getDetail } from '@/features/services/getMovieService';
import React from 'react';
import 'swiper/css';
import '../_styles/view.css';
import VIewDetail from '../_components/VIewDetail';

const DiscoverFilmsViewPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    if(!id) return;

    const movieDetail = await getDetail(id);

    return (
        <div className='wrap'>
            <VIewDetail 
                movieDetail={movieDetail}
            />
        </div>
    );
};

export default DiscoverFilmsViewPage;