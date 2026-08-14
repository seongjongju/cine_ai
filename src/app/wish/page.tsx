import React from 'react';
import './_styles/wish.css';
import WishList from './_components/WishList';

const WishPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
    const { page } = await searchParams;

    return (
        <section style={{ minHeight: "85vh" }}>
            <div className='inner-2'>
                <WishList 
                    page={Number(page)}
                />
            </div>
        </section>
    );
};

export default WishPage;