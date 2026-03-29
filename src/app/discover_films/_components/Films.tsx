'use client';
import React from 'react';
import Films_list from './Films_list';
import { AllMovie } from '@/types/movie';

export interface AllMoviesProps {
    allMovies: AllMovie[];
};

const Films = ({ allMovies }: AllMoviesProps) => {
    return (
        <Films_list allMovies={allMovies}/>  
    );
};

export default Films;