import Image from 'next/image';
import React from 'react';
import loadingImg from '@/assets/icons/loading_img.gif';

const Loading = () => {
    return (
        <div id='loading'>
            <Image 
                width={150} 
                height={150}
                src={loadingImg}
                alt='로딩 Gif' 
            />
        </div>
    );
};

export default Loading;