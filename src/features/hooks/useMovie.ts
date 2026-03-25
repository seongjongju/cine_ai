import { useQuery } from "@tanstack/react-query";
import { getGenres, getMovies } from "../services/getMovie_service";

export const useMovie = () => {
    //영화 목록
    const movieQuery = useQuery({
        queryKey: ['movies'],
        queryFn: getMovies,
    });

    const genreQuery = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
    });

    return {
        movies: movieQuery.data || [],
        genres: genreQuery.data || [],
        isLoading: movieQuery.isLoading || genreQuery.isLoading,
        isError: movieQuery.isError || genreQuery.isError,
    };
};