import React from 'react';
import './_styles/search.css';
import Search_interface from './_components/Search_interface';
import { getAllMovies } from '@/features/services/getMovie_service';
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
            <Search_interface allMovies={allMovies}/>
        </section>
    );
};

export default SearchPage;