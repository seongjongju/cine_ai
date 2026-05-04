'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { AllMovie } from '@/types/movie';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

export interface SearchMoviesProps {
    allMovies: AllMovie[];
};

const SearchInterface = ({ allMovies }: SearchMoviesProps) => {
    const { genres, isLoading } = useMovie();
    const [searchInput, setSearchInput] = useState<string>('');
    const [searchOption, setSearchOption] = useState<string>('title');
    const [foundedList, setFoundedList] = useState<AllMovie[]>([]);
    const [movieCount, setMovieCount] = useState<number>(20);

    const searchInputRef = useRef<HTMLInputElement>(null);

    if(isLoading) return null;

    const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleChangeSearchSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setSearchOption(e.target.value);
    };

    const handleClickSearchButton = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if(searchInput === '') {
            searchOption === 'title' ? alert('영화제목을 입력해주세요.') : alert('장르를 입력해주세요.');
            searchInputRef.current?.focus();
            return;
        };

        if(searchOption === 'title') {
            const foundMovies = allMovies.filter(mv => mv.title.includes(searchInput.trim())); //영화 제목
            setFoundedList(foundMovies);
        } else if(searchOption === 'genre') {
            const foundGenre = allMovies.filter(mv => getGenreNames(mv.genre_ids, genres).includes(searchInput.trim().toUpperCase())); //영화 장르
            setFoundedList(foundGenre);   
        }    
    
        setMovieCount(20);
        setSearchInput('');
    };

    const cutMovies = foundedList.slice(0, movieCount);
    const more = movieCount < foundedList.length;

    return (
        <div className='inner'>
            <form className='search-form'>
                <select 
                    className='search-form__select'
                    onChange={handleChangeSearchSelect}
                >
                    <option value="title">제목</option>
                    <option value="genre">장르</option>
                </select>
                <div className='search-form__input-wrap'>
                    <input 
                        type="text" 
                        placeholder={searchOption === 'title' ? '영화제목을 입력하세요.' : '장르를 입력하세요.'} 
                        className='search-form__input' 
                        value={searchInput}
                        onChange={handleChangeSearchInput}
                        ref={searchInputRef}
                    />
                    <button 
                        className='search-form__button'
                        onClick={handleClickSearchButton}
                    >
                        검색
                    </button>
                </div>
            </form> {/* search-form */}

            <p className='search-count'>
                검색된 영화 총 <strong>{foundedList.length}</strong>개
            </p>

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

export default SearchInterface;