'use client';
import { Detail } from '@/types/movie';
import Image from 'next/image';
import React from 'react';

interface DetailProps {
    movieDetail:Detail;
};

const VIew_detail = ({ movieDetail }: DetailProps) => {
    console.log(movieDetail);

    return (
        <div>
            <div 
                className='back-poster'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920${movieDetail.backdrop_path})`
                }}
            >

            </div>
            <p style={{color: "#fff"}}>{movieDetail.title}</p>
        </div>
    );
};

export default VIew_detail;