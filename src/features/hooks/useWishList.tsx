import React from 'react';
import { getWishlist } from '../services/wish/getWishListService';
import { useQuery } from '@tanstack/react-query';

const useWishList = () => {
    const movieQuery = useQuery({
        queryKey: ['wish'],
        queryFn: getWishlist,
    });

    return {
        wishs: movieQuery.data?.data || [],
    }
};

export default useWishList;