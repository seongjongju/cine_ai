'use client';
import React from 'react';
import FilmsList from './FilmsList';
import { AllMovie } from '@/types/movie';

export interface AllMoviesProps {
    allMovies: AllMovie[];
};

const Films = ({ allMovies }: AllMoviesProps) => {
    return (
        <FilmsList allMovies={allMovies}/>  
    );
};

export default Films;