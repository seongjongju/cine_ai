import { getDetail } from '@/features/services/getMovie_service';
import React from 'react';
import 'swiper/css';
import '../_styles/view.css';
import VIew_detail from '../_components/VIew_detail';

const DiscoverFilmsViewPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    if(!id) return;

    const movieDetail = await getDetail(id);

    return (
        <div className='wrap'>
            <VIew_detail 
                movieDetail={movieDetail}
            />
        </div>
    );
};

export default DiscoverFilmsViewPage;