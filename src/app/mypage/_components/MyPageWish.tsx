'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { Wishlist } from '@/types/movie';
import Link from 'next/link';
import React from 'react';

interface WishlistProps {
    wishlist: Wishlist;
};

const MyPageWish = ({wishlist}: WishlistProps) => {
    const {genres} = useMovie();
    if(!wishlist) return null;



    return (
        <section>
            <div className='inner'>
                <p className='title__chip md'>
                    <span className='title__line'></span>
                    위시리스트
                </p>
                <h2 className='title md'>
                    내가 담아둔 <span>영화들</span>
                </h2>
                
                {
                    wishlist.length > 0 ?
                    (
                        <div className='wishlist'>
                            {
                                wishlist.slice(0, 3).map((item) => (
                                    <Link
                                        key={item.id} 
                                        href={`/discover_films_view/${item.tmdb_id}`} 
                                        style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.poster_path ? item.poster_path : ''})`
                                        }} 
                                        className='wishlist__item'
                                    >
                                        <p className="wishlist__genre">
                                            <span>
                                                {
                                                    item.vote_average ? item.vote_average.toFixed(1)
                                                    : "0.0"
                                                }
                                            </span>
                                            {   
                                                item.genres ? getGenreNames((item.genres as Array<{id: number, name: string}>).map(gn => gn.id), genres)
                                                : "정보 없음"
                                            }
                                        </p>
                                        <h6 className='wishlist__name'>
                                            {
                                                item.title ?  item.title
                                                : ""
                                            }
                                        </h6>
                                    </Link>
                                ))
                            }
                            <Link 
                                href={'wish?page=1'}
                                className='moved-wish'
                            >
                                위시리스트로 이동
                            </Link>
                        </div>
                    ) :
                    (
                        <div>
                            <p className='text-[#fff]'>위시리스트 목록이 없습니다.</p>
                            <Link 
                                href={'/discover_films?page=1'}
                                className='text-[var(--gold-0)]'
                            >
                                위시리스트 채우러 가기 →
                            </Link>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default MyPageWish; 
