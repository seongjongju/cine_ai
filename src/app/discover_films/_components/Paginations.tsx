import React from 'react';

interface PaginationsProps {
    paginations: number[],
    currentPage: number
};

const Paginations = ({ paginations, currentPage }: PaginationsProps) => {
    return (
        <div className='paginations'>
            {
                currentPage > 5 &&
                <a href={`discover_films?page=5`} className='paging'>←</a>
            }
            {
                currentPage <= 5 ? 
                (
                    paginations.slice(0,5).map((paging) => (
                        <a 
                            href={`discover_films?page=${paging}`} 
                            key={paging}
                            className={`paging ${currentPage === paging ? 'current' : ''}`}
                        >
                            {paging}
                        </a>
                    ))
                )
                :
                (
                    paginations.slice(5,10).map((paging) => (
                        <a 
                            href={`discover_films?page=${paging}`} 
                            key={paging}
                            className={`paging ${currentPage === paging ? 'current' : ''}`}
                        >
                            {paging}
                        </a>
                    ))
                )
            }
            {
                currentPage <= 5 &&
                <a href={`discover_films?page=6`} className='paging'>→</a>
            }
        </div>
    );
};

export default Paginations;