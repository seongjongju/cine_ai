export type AllMovie = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Movie = {
    id: number;
    title: string;
    vote_average: number;
    genre_ids: number[];
    poster_path: string;
    overview: string;
    release_date: string;
};

export type Genre = {
    id: number;
    name: string;
};