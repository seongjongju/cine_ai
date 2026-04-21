import { useQuery } from "@tanstack/react-query";
import { getGenres, getMovies } from "../services/getMovieService";

export const useMovie = () => {
    //영화 인기순 목록
    const movieQuery = useQuery({
        queryKey: ['movies'],
        queryFn: getMovies,
    });

    //인기순 목록 내용 없음 필터링
    const movies = movieQuery.data?.filter(mv => mv.overview !== "");
    
    //영화 장르
    const genreQuery = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
    });

    return {
        movies: movies || [],
        genres: genreQuery.data || [],
        isLoading: movieQuery.isLoading || genreQuery.isLoading,
        isError: movieQuery.isError || genreQuery.isError,
    };
};