export const getMovieVideo = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=ko-KR`;
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
    } catch(err) {
        console.error('영화 트레일러 불러오기 실패', err);
        throw err;
    }
};