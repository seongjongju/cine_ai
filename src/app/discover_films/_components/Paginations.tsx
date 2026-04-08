import React from 'react';

interface PaginationsProps {
    paginations: number[],
    currentPage: number,
    path: string,
};

const Paginations = ({ paginations, currentPage, path }: PaginationsProps) => {
    return (
        <div className='paginations'>
            {
                currentPage > 5 &&
                <a href={`${path}?page=5`} className='paging'>←</a>
            }
            {
                currentPage <= 5 ? 
                (
                    paginations.slice(0,5).map((paging) => (
                        <a 
                            href={`${path}?page=${paging}`} 
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
                            href={`${path}?page=${paging}`} 
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
                <a href={`${path}?page=6`} className='paging'>→</a>
            }
        </div>
    );
};

export default Paginations;