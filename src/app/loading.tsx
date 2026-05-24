import Image from 'next/image';
import React from 'react';

const Loading = () => {
    return (
        <div id='loading'>
            <Image 
                width={150} 
                height={150}
                src={"/common/loading_img.gif"}
                alt='로딩 Gif' 
            />
        </div>
    );
};

export default Loading;