'use client';
import { useMovie } from '@/features/hooks/useMovie';
import { deleteWishlist } from '@/features/services/wish/deleteWishListService';
import Paginations from '@/shared/components/pagination/Paginations';
import { getGenreNames } from '@/shared/utils/get.genre.names';
import { Wishlist } from '@/types/movie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface WishlistProps {
    wishlist: Wishlist;
    page: number;
};

const WishList = ({wishlist, page}: WishlistProps) => {
    const {genres} = useMovie();
    const router = useRouter();

    if(!wishlist) return null;

    //위시리스트를 20개씩 페이징 처리
    const currentPageWishlist = wishlist.slice((page - 1) * 20, (page - 1) * 20 + 20);

    //위시리스트 아이템 삭제
    const deleteWishItem = async (id: number) => {
        try {
            const result = await deleteWishlist(id);
            alert(`${result.message}`);

            if(currentPageWishlist.length === 1 && page > 1) {
                router.push(`wish?page=${page - 1}`);
            } else {
                router.refresh();
            }
        } catch(err) {
            console.error('위시리스트 삭제 에러', err);
        }
    };

    return (
        <div>
            <p className='title__chip md'>
                <span className='title__line'></span>
                위시리스트
            </p>
            <h2 className='title md'>
                내가 담아둔 <span>영화들</span>
            </h2>

            {
                wishlist?.length > 0 ? 
                (
                    <>
                        <div className='wishlist'>
                            {
                                currentPageWishlist.map((item) => (
                                    <div
                                        key={item.id} 
                                        style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.poster_path ? item.poster_path : ''})`
                                        }} 
                                        className='wishlist__item'
                                    >
                                        <div className='wishlist__btns'>
                                            <Link 
                                                href={`/discover_films_view/${item.tmdb_id}`} 
                                                className='wishlist__btn'
                                            >
                                                이동
                                            </Link>
                                            <button
                                                className='wishlist__btn'
                                                onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
                                                    e.preventDefault();
                                                    deleteWishItem(item.tmdb_id)
                                                }}
                                            >
                                                삭제
                                            </button>
                                        </div>
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
                                    </div>
                                ))
                            }
                        </div>

                        <Paginations
                            paginations={wishlist?.length}
                            currentPage={page}
                            path='wish'
                        />
                    </>
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
    );
};

export default WishList;