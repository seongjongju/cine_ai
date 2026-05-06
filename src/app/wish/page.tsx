import React from 'react';
import './_styles/wish.css';
import WishList from './_components/WishList';
import { getWishlist } from '../../features/services/wish/getWishListService';

const WishPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
    const { page } = await searchParams;
    const wishlist = (await getWishlist()).data;

    return (
        <section style={{ minHeight: "85vh" }}>
            <div className='inner-2'>
                <WishList 
                    wishlist={wishlist}
                    page={Number(page)}
                />
            </div>
        </section>
    );
};

export default WishPage;