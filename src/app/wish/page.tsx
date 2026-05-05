import React from 'react';
import './_styles/wish.css';
import WishList from './_components/WishList';
import { getWishlist } from '../../features/services/wish/getWishListService';

const WishPage = async () => {
    const wishlist = (await getWishlist()).data;

    return (
        <section>
            <div className='inner-2'>
                <WishList 
                    wishlist={wishlist}
                />
            </div>
        </section>
    );
};

export default WishPage;