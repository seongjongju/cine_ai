'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { Detail, Video, Wishlist } from '@/types/movie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ViewDetailQna from './ViewDetailQna';
import { useMovieStore } from '@/store/movieStore';
import { useUser } from '@/providers/UsersProvider';
import { addWishList } from '@/features/services/wish/addWishListService';
import { deleteWishlist } from '@/features/services/wish/deleteWishListService';

interface DetailProps {
    movieDetail:Detail;
    wishlist: Wishlist;
    video: Video;
    viewId: number;
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

const VIewDetail = ({ movieDetail, wishlist, video, viewId }: DetailProps) => {
    const {user} = useUser();
    const router = useRouter();
    const {genres} = useMovie();
    const [isSave, setIsSave] = useState(false);
    const addRecentMovies = useMovieStore((state) => state.addRecentMovies);

    //상세페이지를 들어오면 상세페이지의 정보를 저장한다.   
    useEffect(() => {
        if(!user) return;
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

    //위시리스트에 이미 저장되었는지 여부 확인을 위해 id확인
    const wishId = wishlist?.find(wish => wish.tmdb_id === Number(viewId))?.tmdb_id;

    //위시리스트에 저장
    const handleClickWishButton = async (id: number) => {
        if(!user) {
            alert('로그인이 필요한 서비스입니다.');
            router.push('/login');
            return;
        }

        try{
            if(!wishId) {
                const addResult = await addWishList(movieDetail);
                setIsSave(true);
                alert(`${addResult.message}`);
                router.refresh();
                return;
            } else {
                const deleteResult = await deleteWishlist(id);
                setIsSave(false);
                alert(`${deleteResult.message}`);
                router.refresh();
                return;
            }
        }catch(err) {
            console.error('위시리스트 저장/삭제 에러', err);
        };
    };

    //AI에게 제공할 영화 기본 정보 오브젝트
    const movieData = {
        title: movieDetail?.title,
        overview: movieDetail?.overview,
        genre: getGenreNames(movieDetail?.genres.map(genre => genre.id), genres)
    };

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
                            <button 
                                className={`save-btn ${wishId || isSave ? 'is-save' : ''}`}
                                onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    handleClickWishButton(movieDetail.id)
                                }}
                            >
                                <svg 
                                    className='save-ico'
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
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
                    
                    {
                        video?.key !== undefined ?  
                        (   
                            <>
                                <p className='title__chip md'>
                                    <span className='title__line'></span>
                                    예고편
                                </p>
                                <div className='video-wrap'>
                                    <iframe 
                                        width="100%" 
                                        height="100%" 
                                        src={`https://www.youtube.com/embed/${video?.key}`}
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </>
                        ) : null
                    }
                    
                    <ViewDetailQna 
                        movieData={movieData}
                    />

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