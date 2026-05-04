'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { useMovieStore } from '@/store/movieStore';
import React from 'react';
import Link from 'next/link';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { useMovie } from '@/features/hooks/useMovie';

const MyPageRecentActivity = () => {
    const {genres} = useMovie();
    const recentMovies = useMovieStore((state) => state.recentMovies);

    return (
        <section>
            <div className='inner'>
                <p className='title__chip md'>
                    <span className='title__line'></span>
                    최근 활동
                </p>
                <h2 className='title md'>
                    최근 본 <span>영화</span>
                </h2>

                {
                    recentMovies?.length > 0 ?
                    (
                        <>
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
                                className="recent-swiper"
                            >
                                {
                                    recentMovies.map((movie) => (
                                        <SwiperSlide
                                            className='recent-swiper__slide' 
                                            key={movie.id} 
                                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : ''}` }}
                                        >
                                            <Link 
                                                href={`/discover_films_view/${movie.id}`}
                                                className='recent-swiper__link'
                                            >
                                                <div className="pick-swiper__detail">
                                                    <p className="recent-swiper__genre">
                                                        <span>  
                                                            {
                                                                movie.vote_average ? movie.vote_average.toFixed(1)
                                                                : "0.0"
                                                            }
                                                        </span>
                                                        {
                                                            movie.genres ? getGenreNames(movie.genres.map(genre => genre.id), genres)
                                                            : "정보없음"
                                                        }
                                                    </p>
                                                    <p className="recent-swiper__name">
                                                        {
                                                            movie.title ? movie.title
                                                            : ""
                                                        }
                                                    </p>
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
                        </>
                    ) :
                    (
                        <div>
                            <p className='text-[#fff]'>최근 본 영화가 없습니다.</p>
                            <Link 
                                href={'/discover_films?page=1'}
                                className='text-[var(--gold-0)]'
                            >
                                영화 보러 가기 →
                            </Link>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default MyPageRecentActivity;