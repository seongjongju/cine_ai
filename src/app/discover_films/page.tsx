import React from 'react';
import './_styles/discover_films.css';
import Title from '@/shared/components/title/Title';
import Paginations from './_components/Paginations';
import Films from './_components/Films';
import { getAllMovies } from '@/features/services/getMovieService';
import { paginations } from '@/shared/utils/paginations';

const Discover_filmsPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
    const { page } = await searchParams;
    const allMovies = await getAllMovies(Number(page));
    console.log(allMovies)
    const path = 'discover_films';

    return (
        <div className='wrap'>
            <section>
                <div className='inner-2'>
                    <Title chip='전체 영화' title='Discover Films' />
                    <Films 
                        allMovies={allMovies}
                    />

                    <Paginations
                        paginations={paginations}
                        currentPage={Number(page)}
                        path={path}
                    />
                </div>
            </section>
        </div>
    );
};

export default Discover_filmsPage;