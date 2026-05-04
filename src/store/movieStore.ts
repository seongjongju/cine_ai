import { Detail } from '@/types/movie';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface MoviesStore {
    recentMovies: Detail[];
    addRecentMovies: (newMovie: Detail) => void;
};

export const useMovieStore = create<MoviesStore>()(
    persist( 
        (set) => ({
            recentMovies: [],

            addRecentMovies: (newMovie) =>
                set((state) => {
                    const isExist = state.recentMovies.some((mv) => mv.id === newMovie.id);
                    if (isExist) return state;

                    return {
                        recentMovies: [newMovie, ...state.recentMovies].slice(0, 10),
                    };
                }),
        }),
        {
            name: 'recent-movies-storage',
        }
    )
);

export const recentMovieStoreClear = () => {
    useMovieStore.persist.clearStorage();
};