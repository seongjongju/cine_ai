'use client';
import React from 'react';

interface PaginationsProps {
    paginations: number;
    currentPage: number;
    path: string;
    genre?: string;
};

const Paginations = ({ paginations, currentPage, path, genre }: PaginationsProps) => {
    const pagingArray = Array.from({length: Math.ceil(paginations / 20)}, (_, i) => i + 1);

    return (
        <div className='paginations'>
            {
                paginations > 100 && currentPage > 5 &&
                <a href={
                    !genre ? `${path}?page=5` : 
                    `${path}?page=5$&genre=${genre}`
                } className='paging'>←</a>
            }
            {
                currentPage <= 5 ? 
                (
                    pagingArray.slice(0,5).map((paging) => (
                        <a 
                            href={
                                !genre ? `${path}?page=${paging}` : 
                                `${path}?page=${paging}&genre=${genre}`
                            } 
                            key={paging}
                            className={`paging ${currentPage === paging ? 'current' : ''}`}
                        >
                            {paging}
                        </a>
                    ))
                )
                :
                (
                    pagingArray.slice(5,10).map((paging) => (
                        <a 
                            href={
                                !genre ? `${path}?page=${paging}` : 
                                `${path}?page=${paging}&genre=${genre}`
                            } 
                            key={paging}
                            className={`paging ${currentPage === paging ? 'current' : ''}`}
                        >
                            {paging}
                        </a>
                    ))
                )
            }
            {
                paginations > 100 && currentPage < 6 &&
                <a href={!genre ? `${path}?page=6` : 
                    `${path}?page=6$&genre=${genre}`} className='paging'>→</a>
            }
        </div>
    );
};

export default Paginations;