'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Loop_carousel = () => {
    return (
        <div className='loop-carousel'>
            <Splide
                extensions={{ AutoScroll }}
                options={{
                    type     : 'loop',
                    drag     : false,
                    focus    : 'center',
                    perPage  : 8,
                    autoWidth: true,
                    gap      : '100px',
                    pagination: false,
                    arrows   : false,
                    autoScroll: {
                        speed       : .5,
                        pauseOnHover: false,
                    },
                    breakpoints: {
                        600: {
                            gap: '30px'
                        },
                    },
                }}
            >
                <SplideSlide>
                    <p className='loop-carousel__item'>
                        <span className='loop-carousel__dot'></span>
                        고구마 구간 있나요?
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='loop-carousel__item'>
                        <span className='loop-carousel__dot'></span>
                        반전 있어요? (스포X)
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='loop-carousel__item'>
                        <span className='loop-carousel__dot'></span>
                        오늘 밤 볼 영화 추천해줘
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='loop-carousel__item'>
                        <span className='loop-carousel__dot'></span>
                        눈물 주의 구간?
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='loop-carousel__item'>
                        <span className='loop-carousel__dot'></span>
                        이 영화 감독이 전하고 싶은 게 뭐야?
                    </p>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Loop_carousel;