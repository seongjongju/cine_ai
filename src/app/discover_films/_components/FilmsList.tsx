'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AllMovie } from '@/types/movie';
import Paginations from './Paginations';
import { useRouter } from 'next/navigation';

export interface AllMoviesProps {
    allMovies: AllMovie[];
    page: number;
};

//장르
const genreName = {
    all: '장르전체',
    drama: '드라마',
    thriller: '스릴러',
    action: '액션',
    comedy: '코미디',
    romance: '로맨스',
    horror: '공포',
    animation: '애니메이션',
};

const GENRE_IDS = {
    drama: 18,
    thriller: 53,
    action: 28,
    comedy: 35,
    romance: 10749,
    horror: 27,
    animation: 16,
};

const FilmsList = ({ allMovies, page }: AllMoviesProps) => {
    const { genres, isLoading } = useMovie();
    const [genreSaved, setGenreSaved] = useState<string>('all');
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    //필터링
    const filteredMovies = React.useMemo(() => {
        if (genreSaved === 'all') return allMovies;

        const targetId = GENRE_IDS[genreSaved as keyof typeof GENRE_IDS];
        return allMovies.filter(mv => mv.genre_ids?.includes(targetId));
    }, [genreSaved, allMovies]);

    const currentPageMovies = filteredMovies.slice((page - 1) * 20, (page - 1) * 20 + 20);
    const uniqueMovies = Array.from(
        new Map(currentPageMovies.map(mv => [mv.id, mv])).values()
    );

    //장르 필터 상태를 바꿈
    const handleChangeGenreSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoading(true);

        const type = e.target.value;
        sessionStorage.setItem('lastGenre', type);

        setGenreSaved(type);
        router.push('discover_films?page=1');

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    //로컬에 저장된 장르필터 상태를 불러옴
    useEffect(() => {
        const genreSaveded = () => {
            const saved = sessionStorage.getItem('lastGenre');
            if (saved) {
                setGenreSaved(saved);
            }
        };   
        genreSaveded();
    }, []);
    
    if(!allMovies) return null;
    if(isLoading) return null;

    return (
        <>
            <p className="title__chip md" style={{marginBottom: "16px"}}>
                <span className="title__line"></span>
                필터
            </p>
            <div className='films-selects'>
                <select 
                    className="films-select"
                    onChange={handleChangeGenreSelect}
                    value={Object.keys(genreName).find(key => key === genreSaved)}
                >
                    {Object.entries(genreName).map(([key, name]) => (
                        <option key={key} value={key}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            
            {
                loading ? 
                (
                    <div style={{color: "#fff", fontSize: "50px"}}>
                        로딩 중
                    </div>
                )
                :
                (
                    <>
                        <div className='films-list'>
                            {   
                                uniqueMovies.map((allMovie) => (
                                    <Link 
                                        key={allMovie.id}
                                        href={`/discover_films_view/${allMovie.id}`}
                                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${allMovie.poster_path ? allMovie.poster_path : ''}`}}
                                        className='films-list__item'
                                    >
                                        <p className="films-list__genre">
                                            <span>
                                                {
                                                    allMovie.vote_average ? allMovie.vote_average.toFixed(1)
                                                    : "0.0"
                                                }
                                            </span>
                                            {
                                                allMovie.genre_ids ? getGenreNames(allMovie.genre_ids, genres)
                                                : "정보 없음" 
                                            }
                                        </p>
                                        <h6 className='films-list__name'>
                                            {
                                                allMovie.title ?  allMovie.title
                                                : ""
                                            }
                                        </h6>
                                    </Link>
                                ))
                            }
                        </div>

                        <Paginations
                            paginations={filteredMovies.length}
                            currentPage={page}
                            path='discover_films'
                        />
                    </>
                )
            }
        </>
    );
};

export default FilmsList;