'use client';
import { Movie } from '@/types/movie';
import React from 'react';

const Test_com = () => {
/*     const MOVIE_API = process.env.NEXT_PUBLIC_MOVIE_API;
    const MOVIE_BASE_URL = process.env.NEXT_PUBLIC_MOVIE_BASE_URL;

 const url = MOVIE_BASE_URL;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${MOVIE_API}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err)); */

/* const url = 'https://api.themoviedb.org/3/movie/83533?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDRlZGJiYjQyMzE2MDQ5ZjhlZjc0NzRkYWIyYjlhMiIsIm5iZiI6MTc3NDIzMDU5NC41MjEsInN1YiI6IjY5YzA5YzQyZWJiZjEyOWJmYTEzYzE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5djlhJ9xj23slBkYvz5YwQvqik8dKsqgaT70_tmPNhk'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err)); */

  const getMovies = async (): Promise<Movie[]> => {
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

  console.log(getMovies()) 

    return (
        <div>
            
        </div>
    );
};

export default Test_com;