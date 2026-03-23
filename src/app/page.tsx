import 'swiper/css';
import 'swiper/css/scrollbar';
import './main/_styles/main.css';

import Ai_pick from "./main/_components/Ai_pick";
import Intro from "./main/_components/Intro";
import Loop_carousel from "./main/_components/Loop_carousel";
import Instructions from './main/_components/Instructions';
import How_mood from './main/_components/How_mood';

import { Movie } from '@/types/movie'

//영화 목록
const getMovies = async (): Promise<Movie[]> => {
  const url = `${process.env.NEXT_PUBLIC_MOVIE_BASE_URL}`;
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
    console.error('영화 API 요청 실패:', err);
    return [];
  }
};

//영화장르
const getGenres = async () => {
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

export default async function Home() {
  const movies = await getMovies();
  const genres = await getGenres();

  return (
    <div className="wrap">
      <main>
        <Intro />
        <Loop_carousel />
        <Ai_pick movies={movies} genres={genres}/>
        <Instructions />
        <How_mood movies={movies} genres={genres} />
      </main>
    </div>
  );
}
