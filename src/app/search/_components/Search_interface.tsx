'use client';
import { AllMoviesProps } from '@/app/discover_films/_components/Films';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { AllMovie } from '@/types/movie';
import Link from 'next/link';
import React, { useState } from 'react';

const Search_interface = ({ allMovies }: AllMoviesProps) => {
    const { genres, isLoading } = useMovie();
    const [searchInput, setSearchInput] = useState<string>('');
    const [foundedList, setFoundedList] = useState<AllMovie[]>([]);
    const [movieCount, setMovieCount] = useState<number>(20);

    if(isLoading) return null;

    const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleClickSearchButton = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if(searchInput === '') {
            alert('영화명을 입력해주세요.');
            return;
        };
        const foundMovies = allMovies.filter(mv => mv.title.includes(searchInput.trim()));

        setFoundedList(foundMovies);
        setMovieCount(20);
    };

    const cutMovies = foundedList.slice(0, movieCount);
    const more = movieCount < foundedList.length;

    return (
        <div className='inner'>
            <form className='search-form'>
                <input 
                    type="text" 
                    placeholder='영화명을 입력하세요.' 
                    className='search-form__input' 
                    onChange={handleChangeSearchInput}
                />
                <button 
                    className='search-form__button'
                    onClick={handleClickSearchButton}
                >
                    검색
                </button>
            </form> {/* search-form */}

            <div className='search-list'>
                {
                    cutMovies.map((movie) => (
                        <Link 
                            key={movie.id}
                            href={`/discover_films_view/${movie.id}`}
                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : ''}`}}
                            className='search-list__item'
                        >
                            <p className="search-list__genre">
                                <span>
                                    {
                                        movie.vote_average ? movie.vote_average.toFixed(1)
                                        : "0.0"
                                    }
                                </span>
                                {
                                    movie.genre_ids ? getGenreNames(movie.genre_ids, genres)
                                    : "정보없음" 
                                }
                            </p>
                            <h6 className='search-list__name'>
                                {
                                    movie.title ?  movie.title
                                    : ""
                                }
                            </h6>
                        </Link>
                    ))
                }
            </div>

            {
                more && (
                    <button 
                        className='button-0 bg-[var(--gold-0)] mt-[3em] ml-auto mr-auto'
                        onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            setMovieCount(prev => prev + 20);
                        }}
                    >
                        더보기
                    </button>
                )
            }
        </div>
    );
};

export default Search_interface;