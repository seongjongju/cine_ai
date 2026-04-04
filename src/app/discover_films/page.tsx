import React from 'react';
import './_styles/discover_films.css';
import Title from '@/shared/components/title/Title';
import { AllMovie } from '@/types/movie';
import Paginations from './_components/Paginations';
import Films from './_components/Films';

const getAllMovies = async (page: number = 1): Promise<AllMovie[]> => {
    const url = `${process.env.NEXT_PUBLIC_ALL_MOVIE_BASE_URL}&page=${page}&sort_by=popularity.desc`;
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API}`
        }
    };

    try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        return json.results;
    } catch (err) {
        console.error('전체 영화 API 요청 실패:', err);
        return [];
    }
};

const paginations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //10페이지로 제한

const Discover_filmsPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
    const { page } = await searchParams;
    const allMovies = await getAllMovies(Number(page));

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
                    />
                </div>
            </section>
        </div>
    );
};

export default Discover_filmsPage;