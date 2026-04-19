import React from 'react';
import './_styles/search.css';
import SearchInterface from './_components/SearchInterface';
import { getAllMovies } from '@/features/services/getMovieService';
import { paginations } from '@/shared/utils/paginations';

const SearchPage = async () => {
    const allMoviesRes = await Promise.all(
        paginations.map(page => getAllMovies(page))
    );

    const allMovies = allMoviesRes.flat();

    return (
        <section style={{
            minHeight: "85vh"
        }}>
            <SearchInterface allMovies={allMovies}/>
        </section>
    );
};

export default SearchPage;