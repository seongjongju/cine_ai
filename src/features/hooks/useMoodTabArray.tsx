'use client';
import { Genre, Movie } from '@/types/movie';
import React from 'react';

const useMoodTabArray = (movies: Movie[]) => {
    //웃고 싶어 탭
    const filteredcomedy_0 = movies.filter(mv => mv.genre_ids?.includes(35)); //코메디
    const filteredcomedy_1 = movies.filter(mv => mv.genre_ids?.includes(16)); //애니메이션
    const filteredcomedy_2 = movies.filter(mv => mv.genre_ids?.includes(10751)); //가족
    const comedyArray = [...filteredcomedy_0, ...filteredcomedy_1, ...filteredcomedy_2];
    const comedyMovie = comedyArray.filter((v, i) => comedyArray.indexOf(v) === i);

    //울고 싶어 탭
    const filteredCry_0 = movies.filter(mv => mv.genre_ids?.includes(18));
    const filteredCry_1 = movies.filter(mv => mv.genre_ids?.includes(10749));
    const filteredCry_2 = movies.filter(mv => mv.genre_ids?.includes(10402));
    const cryArray = [...filteredCry_0, ...filteredCry_1, ...filteredCry_2];
    const cryMovies = cryArray.filter((v, i) => cryArray.indexOf(v) === i);

    //긴장감 탭
    const filteredTension_0 = movies.filter(mv => mv.genre_ids?.includes(28));
    const filteredTension_1 = movies.filter(mv => mv.genre_ids?.includes(53));
    const filteredTension_2 = movies.filter(mv => mv.genre_ids?.includes(80));
    const filteredTension_3 = movies.filter(mv => mv.genre_ids?.includes(27));
    const filteredTension_4 = movies.filter(mv => mv.genre_ids?.includes(10752));
    const tensionArray = [...filteredTension_0, ...filteredTension_1, ...filteredTension_2, ...filteredTension_3, ...filteredTension_4];
    const tensionMovies = tensionArray.filter((v, i) => tensionArray.indexOf(v) === i);

    //생각하고 싶어 탭
    const filteredThink_0 = movies.filter(mv => mv.genre_ids?.includes(878));
    const filteredThink_1 = movies.filter(mv => mv.genre_ids?.includes(14));
    const filteredThink_2 = movies.filter(mv => mv.genre_ids?.includes(36));
    const filteredThink_3 = movies.filter(mv => mv.genre_ids?.includes(99));
    const filteredThink_4 = movies.filter(mv => mv.genre_ids?.includes(9648));
    const thinkArray = [...filteredThink_0, ...filteredThink_1, ...filteredThink_2, ...filteredThink_3, ...filteredThink_4];
    const thinkMovies = thinkArray.filter((v, i) => thinkArray.indexOf(v) === i);

    //가볍게 탭
    const filteredLight_0 = movies.filter(mv => mv.genre_ids?.includes(16));
    const filteredLight_1 = movies.filter(mv => mv.genre_ids?.includes(35));
    const filteredLight_2 = movies.filter(mv => mv.genre_ids?.includes(10770));
    const filteredLight_3 = movies.filter(mv => mv.genre_ids?.includes(10751));
    const lightArray = [...filteredLight_0, ...filteredLight_1, ...filteredLight_2, ...filteredLight_3];
    const lightMovies = lightArray.filter((v, i) => lightArray.indexOf(v) === i);

    return {
        comedyMovie,
        cryMovies,
        tensionMovies,
        thinkMovies,
        lightMovies
    }
};

export default useMoodTabArray;