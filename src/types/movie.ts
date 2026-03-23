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