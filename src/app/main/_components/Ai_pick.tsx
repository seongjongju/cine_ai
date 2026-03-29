'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import Title from '@/shared/components/title/Title';
import React from 'react';
import Link from 'next/link';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { useMovie } from '@/features/hooks/useMovie';


const Ai_pick = () => {    
    const {movies, genres, isLoading} = useMovie();

    if (isLoading) return null;

    return (
        <section>
            <div className='inner-2'>
                <Title chip='오늘의 큐레이션' title='AI가 고른' accent='이주의 영화'/>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={3}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1300}
                    loop={false}
                    pagination={{
                        el: '.navi .swiper-pagination',
                        clickable: false,
                    }}
                    navigation={{
                        nextEl: '.navi .swiper-button-next',
                        prevEl: '.navi .swiper-button-prev'
                    }}
                    breakpoints={{
                        1281: {slidesPerView: 4},
                        769: {slidesPerView: 3},
                        1: {slidesPerView: 2},
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="pick-swiper"
                >
                    {
                        movies.slice(0, 9).map((movie) => (
                            <SwiperSlide
                                className='pick-swiper__slide' 
                                key={movie.id} 
                                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                            >
                                <Link 
                                    href={`/discover_films_view/${movie.id}`}
                                    className='pick-swiper__link'
                                >
                                    <div className="pick-swiper__detail">
                                        <p className="pick-swiper__genre">
                                            <span>{movie.vote_average.toFixed(1)}</span>
                                            {getGenreNames(movie.genre_ids, genres)}
                                        </p>
                                        <p className="pick-swiper__name">{movie.title}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className='navi'>
                    <button className='swiper-button-prev'>◀</button>
                    <div className='swiper-pagination'></div>
                    <button className='swiper-button-next'>▶</button>
                </div>
            </div>
        </section>
    );
};

export default Ai_pick;