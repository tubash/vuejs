import apiClient from '@/api/api';

import type Movie from '@/types/Movie.ts';

export default function useMovies() {

    const fetchMovies = async () => {
        return await apiClient.get<Movie[]>('/movies');
    };
    
    return { fetchMovies };
};
