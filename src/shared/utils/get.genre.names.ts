import { Genre } from '@/types/movie';

export const getGenreNames = (genreIds: number[], genres: Genre[]) => {
    return genreIds
        .map(id => genres.find(g => g.id === id)?.name)
        .join(' · ');
};