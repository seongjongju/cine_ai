'use client';
import Title from '@/shared/components/title/Title';
import React, { useState } from 'react';
import How_mood_list from './How_mood_list';
import { Genre, Movie } from '@/types/movie';
import Link from 'next/link';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import useMoodTabArray from '@/features/hooks/useMoodTabArray';

const moodTabs = [
    { id: 'smile', label: '😂 웃고 싶어' },
    { id: 'cry', label: '😭 울고 싶어' },
    { id: 'tension', label: '😱 긴장감' },
    { id: 'think', label: '🧠 생각하고 싶어' },
    { id: 'light', label: '🌙 가볍게' },
];

const How_mood = ({ movies, genres }: {movies: Movie[], genres: Genre[]}) => {
    const [moodTabState, setMoodTabState] = useState('smile');
    const {comedyMovie, cryMovies, tensionMovies, thinkMovies, lightMovies} = useMoodTabArray(movies);
    
    return (
        <section>
            <div className='inner-2'>
                <Title chip='무드 픽' title='오늘 기분은' accent='어떤가요?'/>

                <ul className='mood-tab-btns'>
                    {
                        moodTabs.map((btn) => (
                            <li 
                                key={btn.id} 
                                className={`mood-tab-btn button-0 ${moodTabState === btn.id ? 'is-active' : ''}`}
                                onClick={() => setMoodTabState(btn.id)}
                            >
                                {btn.label}
                            </li>
                        ))
                    }
                </ul>

                <div className='mood-list'>
                    {
                        moodTabState === 'smile' ?
                        (
                            comedyMovie.map((movie) => (
                                <Link 
                                    href={'/'} 
                                    key={movie.id} 
                                    className='mood-list__link'
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                >
                                    <div className='mood-list__detail'>
                                        <p className='mood-list__title'>{movie.title}</p>
                                        <p className='mood-list__ex'>
                                            {getGenreNames(movie.genre_ids, genres)}
                                        </p>
                                    </div>
                                </Link> 
                            ))
                        ) 
                        : moodTabState === 'cry' ? 
                        (
                            cryMovies.map((movie) => (
                                <Link 
                                    href={'/'} 
                                    key={movie.id} 
                                    className='mood-list__link'
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                >
                                    <div className='mood-list__detail'>
                                        <p className='mood-list__title'>{movie.title}</p>
                                        <p className='mood-list__ex'>
                                            {getGenreNames(movie.genre_ids, genres)}
                                        </p>
                                    </div>
                                </Link> 
                            ))
                        ) 
                        : moodTabState === 'tension' ? 
                        (
                            tensionMovies.map((movie) => (
                                <Link 
                                    href={'/'} 
                                    key={movie.id} 
                                    className='mood-list__link'
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                >
                                    <div className='mood-list__detail'>
                                        <p className='mood-list__title'>{movie.title}</p>
                                        <p className='mood-list__ex'>
                                            {getGenreNames(movie.genre_ids, genres)}
                                        </p>
                                    </div>
                                </Link> 
                            ))
                        )
                        : moodTabState === 'think' ? 
                        (
                            thinkMovies.map((movie) => (
                                <Link 
                                    href={'/'} 
                                    key={movie.id} 
                                    className='mood-list__link'
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                >
                                    <div className='mood-list__detail'>
                                        <p className='mood-list__title'>{movie.title}</p>
                                        <p className='mood-list__ex'>
                                            {getGenreNames(movie.genre_ids, genres)}
                                        </p>
                                    </div>
                                </Link> 
                            ))
                        )
                        : moodTabState === 'light' ? 
                        (
                            lightMovies.map((movie) => (
                                <Link 
                                    href={'/'} 
                                    key={movie.id} 
                                    className='mood-list__link'
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                >
                                    <div className='mood-list__detail'>
                                        <p className='mood-list__title'>{movie.title}</p>
                                        <p className='mood-list__ex'>
                                            {getGenreNames(movie.genre_ids, genres)}
                                        </p>
                                    </div>
                                </Link> 
                            ))
                        )
                        : null
                    }
                </div>

                <How_mood_list movies={movies} genres={genres} />
            </div>
        </section>
    );
};

export default How_mood;