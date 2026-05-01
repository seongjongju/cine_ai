import React from 'react';
import './_styles/discover_films.css';
import Title from '@/shared/components/title/Title';
import { getAllMovies } from '@/features/services/getMovieService';
import { paginations } from '@/shared/utils/paginations';
import FilmsList from './_components/FilmsList';

const Discover_filmsPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
    const { page } = await searchParams;
    const allMoviesRes = await Promise.all(
        paginations.map(page => getAllMovies(page))
    );
    
    const allMovies = allMoviesRes.flat(); 

    return (
        <div className='wrap'>
            <section>
                <div className='inner-2'>
                    <Title chip='전체 영화' title='Discover Films' />
                    <FilmsList 
                        allMovies={allMovies}
                        page={Number(page)}
                    />
                </div>
            </section>
        </div>
    );
};

export default Discover_filmsPage;