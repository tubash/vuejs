  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { defineStore } from 'pinia';

  import type Movie from '@/types/Movie.ts';
  import useMovies from '@/composables/useMovies';

  const useMoviesStore = defineStore('datasource', () => {

    const movies: Ref<Movie[]> = ref<Movie[]>([]);
    const { fetchMovies } = useMovies();

    const loadMovies = async () => {
      const response = await fetchMovies();      
      movies.value = response.data;
    }

    const getMovie = (movieId: string) => {
      console.log("MOVIE ID: " + movieId);
      const result = movies.value.find(({ id }) => id === parseInt(movieId));
      console.log("MOVIE: " + result);
      return result;
    }    
    
    return { movies, loadMovies, getMovie };
  });
  
  export default useMoviesStore;
