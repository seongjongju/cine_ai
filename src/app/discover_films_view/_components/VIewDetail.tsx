'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { Detail } from '@/types/movie';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ViewDetailQna from './ViewDetailQna';
import ViewDetailMoodBoard from './ViewDetailMoodBoard';
import { useMovieStore } from '@/store/movieStore';

interface DetailProps {
    movieDetail:Detail;
};

const countryMap: { [key: string]: string } = {
    'US': '미국',
    'KR': '한국',
    'JP': '일본',
    'GB': '영국',
    'FR': '프랑스',
    'CN': '중국',
    'DE': '독일',
    'CA': '캐나다',
    'IT': '이탈리아',
    'ES': '스페인',
    'HK': '홍콩',
    'TW': '대만',
    'IN': '인도',
    'AU': '호주',
    'PH': '필리핀',
};

const VIewDetail = ({ movieDetail }: DetailProps) => {
    const router = useRouter();
    const {genres} = useMovie();
    const addRecentMovies = useMovieStore((state) => state.addRecentMovies);

    //상세페이지를 들어오면 상세페이지의 정보를 저장한다.   
    useEffect(() => {
        addRecentMovies(movieDetail);
    }, [addRecentMovies, movieDetail]);

    //스태프 배열
    const crews = movieDetail.credits.crew;
    const crewsDirector = crews.filter(crew => crew.job === 'Director')
                                .map(director => director.name);

    //캐스팅
    const casts = movieDetail.credits.cast;

    //국가 맵핑
    const countryName = movieDetail.origin_country?.[0] 
                        ? (countryMap[movieDetail.origin_country[0]] || movieDetail.origin_country[0]) 
                        : '정보 없음';

    //등급
    const krResults = movieDetail.release_dates?.results?.find(country => country.iso_3166_1 === 'KR');
    const releseData = krResults?.release_dates || []; 
    const rating = releseData.map(ret => ret.certification).filter(c => c !== "");  
    
    return (
        <div>
            <div 
                className='back-poster'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path ? movieDetail.backdrop_path : ''})`
                }}
            >
                <div className='inner w-full'>
                    <div className='view-detail'>
                        <h6 className='view-detail__name'>
                            {
                                movieDetail.title ? movieDetail.title 
                                : ""
                            }
                        </h6>
                        <div className='view-detail__badges'>
                            <p className='view-detail__badge'>
                                {
                                    movieDetail.vote_average ? movieDetail.vote_average.toFixed(1) 
                                    : "0.0"
                                }
                            </p>
                            <p className='view-detail__badge'>{crewsDirector}</p>
                            <p className='view-detail__badge'>
                                {
                                    movieDetail.genres ? getGenreNames(movieDetail.genres.map(genre => genre.id), genres)
                                    : "정보 없음"
                                }
                            </p>
                            <p className='view-detail__badge'>{movieDetail.runtime ? `${movieDetail.runtime}분` : '정보 없음'}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='cursor-pointer'>
                                <svg 
                                    className='save-ico'
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </button>
                            <button className='text-[var(--gray-1)] cursor-pointer hover:text-[var(--gold-0)] hover:border-[var(--gold-0)] transition duration-300'>
                                넷플릭스
                            </button>
                            <button className='text-[var(--gray-1)] cursor-pointer hover:text-[var(--gold-0)] hover:border-[var(--gold-0)] transition duration-300'>
                                쿠팡플레이
                            </button>
                            <button className='text-[var(--gray-1)] cursor-pointer hover:text-[var(--gold-0)] hover:border-[var(--gold-0)] transition duration-300'>
                                티빙
                            </button>
                        </div>
                    </div> {/* view-detail */}
                </div> {/* inner */}
            </div> {/* back-poster */}
            
            <div className='detail'>
                <div className='inner'>
                    <ul className='detail__summation'>
                        <li className='detail__summation--li'>
                            <span className='detail__summation--chip'>국가</span>
                            <p className='detail__summation--text'>{countryName}</p>  
                        </li>
                        <li className='detail__summation--li'>
                            <span className='detail__summation--chip'>개봉</span>
                            <p className='detail__summation--text'>
                                {
                                    movieDetail.release_date ? movieDetail.release_date 
                                    : "정보 없음"
                                }
                            </p>  
                        </li>
                        <li className='detail__summation--li'>
                            <span className='detail__summation--chip'>등급</span>
                            <p className='detail__summation--text'>{rating.length > 0 ? rating[0] : '정보 없음'}</p>  
                        </li>
                        <li className='detail__summation--li'>
                            <span className='detail__summation--chip'>인기도</span>
                            <p className='detail__summation--text'>
                                {
                                    movieDetail.popularity ? movieDetail.popularity
                                    : "정보 없음"
                                }
                            </p>  
                        </li>
                    </ul> {/* detail__summation */}
                    
                    {
                        movieDetail.overview !== '' ?
                        (   
                            <>
                                <p className='title__chip md'>
                                    <span className='title__line'></span>
                                    영화 소개
                                </p>
                                <div className='movie-info'>
                                    <p className='movie-info__text'>{movieDetail.overview}</p>
                                </div>
                            </>
                        ) : null
                    }

                    <p className='title__chip md'>
                        <span className='title__line'></span>
                        캐스팅
                    </p>

                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={10}
                        speed={1300}
                        freeMode={true}
                        breakpoints={{
                            1081: {slidesPerView: 5.5},
                            769: {slidesPerView: 4.5},
                            641: {slidesPerView: 3.5},
                            481: {slidesPerView: 2.5},
                            1: {slidesPerView: 1.5},
                        }}
                        className='cast-list'
                    >
                        {
                            casts?.map((cast) => (
                                <SwiperSlide
                                    key={cast.id}
                                >
                                    {
                                        cast.profile_path !== null ? 
                                        (
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} 
                                                alt={cast.name}
                                                className='cast-list__image' 
                                            />
                                        )
                                        :
                                        (
                                            <img 
                                                src="/images/profile_none.png" 
                                                alt="기본 이미지"
                                                className='cast-list__image' 
                                            />
                                        )
                                    }
                                    <p className='cast-list__casting'>{cast?.character}역</p>
                                    <p className='cast-list__name'>{cast?.name}</p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <ViewDetailQna />

                    <ViewDetailMoodBoard />

                    <button 
                        className='back-films-btn'
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            router.back();
                        }}
                    >
                        Back To
                    </button>
                </div> {/* inner */}
            </div> {/* detail */}
        </div>
    );
};

export default VIewDetail;