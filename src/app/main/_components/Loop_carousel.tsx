'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Loop_carousel = () => {
    return (
        <div className='pt-[10px] pb-[10px] sm:pt-[15px] sm:pb-[15px] bg-[#111111] border-t-1 border-b-1 border-[rgba(255,255,255,.07)]'>
            <Splide
                extensions={{ AutoScroll }}
                options={ {
                    type   : 'loop',
                    drag   : false,
                    focus  : 'center',
                    perPage: 8,
                    autoWidth: true,
                    gap    : '100px',
                    pagination : false,
                    arrows: false,
                    autoScroll: {
                        speed: .5,
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
                    <p className='text-xs sm:text-sm text-[#5A5550] font-light flex items-center justify-center gap-[1em]'>
                        <span className='block w-[4px] h-[4px] bg-[#C9A84C] rounded-full'></span>
                        고구마 구간 있나요?
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='text-xs sm:text-sm text-[#5A5550] font-light flex items-center justify-center gap-[1em]'>
                        <span className='block w-[4px] h-[4px] bg-[#C9A84C] rounded-full'></span>
                        반전 있어요? (스포X)
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='text-xs sm:text-sm text-[#5A5550] font-light flex items-center justify-center gap-[1em]'>
                        <span className='block w-[4px] h-[4px] bg-[#C9A84C] rounded-full'></span>
                        오늘 밤 볼 영화 추천해줘
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='text-xs sm:text-sm text-[#5A5550] font-light flex items-center justify-center gap-[1em]'>
                        <span className='block w-[4px] h-[4px] bg-[#C9A84C] rounded-full'></span>
                        눈물 주의 구간?
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <p className='text-xs sm:text-sm text-[#5A5550] font-light flex items-center justify-center gap-[1em]'>
                        <span className='block w-[4px] h-[4px] bg-[#C9A84C] rounded-full'></span>
                        이 영화 감독이 전하고 싶은 게 뭐야?
                    </p>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Loop_carousel;