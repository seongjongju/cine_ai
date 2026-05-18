import { Database, Json } from "./supabase";

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

export type Detail = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    } | null;
    budget: number;
    credits: {
        cast: Array<{
            adult: boolean; 
            cast_id: number;
            character: string;
            credit_id: string; 
            gender: number;
            id: number;
            known_for_department: string;
            name: string;
            order: number;
            original_name: string;
            popularity: number;
            profile_path: string | null; 
        }>;
        crew: Array<{
            adult: boolean; 
            credit_id: string; 
            department: string;
            gender: number;
            id: number;
            job: string; 
            name: string;
            original_name: string;
            popularity: number;
            profile_path: string | null; 
        }>;
    };
    genres: Array<{
        id: number;
        name: string;
    }>;
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<{
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }>;
    production_countries: Array<{
        iso_3166_1: string;
        name: string;
    }>;
    release_date: string;
    release_dates: {
        results: Array<{
            iso_3166_1: string;
            release_dates: Array<{
                certification: string;
                
            }>
        }>
    };
    revenue: number;
    runtime: number | null;
    spoken_languages: Array<{
        english_name: string;
        iso_639_1: string;
        name: string;
    }>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Video = {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
};

export type Wishlist = {
    created_at: string | null;
    genres: Json;
    id: string;
    poster_path: string | null;
    title: string | null;
    tmdb_id: number;
    user_id: string;
    vote_average: number | null;
}[] | null | undefined;