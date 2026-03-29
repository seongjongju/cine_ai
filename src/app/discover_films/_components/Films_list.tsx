'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import React from 'react';
import { AllMoviesProps } from './Films';
import Link from 'next/link';

const Films_list = ({ allMovies }: AllMoviesProps) => {
    const { genres, isLoading } = useMovie();

    if(!allMovies) return null;
    if(isLoading) return null;

    return (
        <div className='films-list'>
            {
                allMovies.map((allMovie) => (
                    <Link 
                        key={allMovie.id}
                        href={`/discover_films_view/${allMovie.id}`}
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${allMovie.poster_path}` }}
                        className='films-list__item'
                    >
                        <p className="films-list__genre">
                            <span>{allMovie.vote_average.toFixed(1)}</span>
                            {getGenreNames(allMovie.genre_ids, genres)}
                        </p>
                        <h6 className='films-list__name'>{allMovie.title}</h6>
                    </Link>
                ))
            }
        </div>
    );
};

export default Films_list;