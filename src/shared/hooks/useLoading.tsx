'use client';
import React, { useState } from 'react';

const useLoading = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return {setIsLoading, isLoading}
};

export default useLoading;