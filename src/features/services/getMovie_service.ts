import { Movie } from "@/types/movie";
//인기순 영화 목록
export const getMovies = async (): Promise<Movie[]> => {
    const url = `${process.env.NEXT_PUBLIC_POPULAR_MOVIE_BASE_URL}`;
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API}`
        }
    };

    try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        return json.results;
    } catch (err) {
        console.error('인기순 영화 API 요청 실패:', err);
        return [];
    }
};

//영화장르
export const getGenres = async () => {
    const url = `${process.env.NEXT_PUBLIC_GENRE_BASE_URL}`;
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API}`
        }
    };

    try{
        const res = await fetch(url, options);
        if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        return json.genres;
    }catch(err) {
        console.error('장르 API 요청 실패:', err)
    }
};
