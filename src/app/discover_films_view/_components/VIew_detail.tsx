'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { Detail } from '@/types/movie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import View_detail_qna from './View_detail_qna';

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

const VIew_detail = ({ movieDetail }: DetailProps) => {
    const router = useRouter();
    const {genres} = useMovie();
    console.log('상세페이지 : ',movieDetail);

    //스태프 배열
    const crews = movieDetail.credits.crew;
    const crewsDirector = crews.filter(crew => crew.job === 'Director')
                                .map(director => director.name);
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
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920${movieDetail.backdrop_path})`
                }}
            >
                <div className='inner w-full'>
                    <div className='view-detail'>
                        <h6 className='view-detail__name'>{movieDetail.title}</h6>
                        <div className='view-detail__badges'>
                            <p className='view-detail__badge'>{movieDetail.vote_average.toFixed(1)}</p>
                            <p className='view-detail__badge'>{crewsDirector}</p>
                            <p className='view-detail__badge'>
                                {
                                    getGenreNames(movieDetail.genres.map(genre => genre.id), genres)
                                }
                            </p>
                            <p className='view-detail__badge'>{movieDetail.runtime ? `${movieDetail.runtime}분` : '정보 없음'}</p>
                        </div>
                        <button className='button-0 text-[var(--gray-1)] border-1 border-[var(--gray-1)]    hover:text-[var(--gold-0)] hover:border-[var(--gold-0)]   transition duration-300'>
                            + 찜하기
                        </button>
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
                            <p className='detail__summation--text'>{movieDetail.release_date}</p>  
                        </li>
                        <li className='detail__summation--li'>
                            <span className='detail__summation--chip'>등급</span>
                            <p className='detail__summation--text'>{rating.length > 0 ? rating[0] : '정보 없음'}</p>  
                        </li>
                        <li className='detail__summation--li'>
                            <span className='detail__summation--chip'>인기도</span>
                            <p className='detail__summation--text'>{movieDetail.popularity}</p>  
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

                                {/* 등장인물 작업 예정 */}
                            </>
                        ) : null
                    }

                    <View_detail_qna />

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

export default VIew_detail;