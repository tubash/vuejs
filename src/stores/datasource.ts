  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { defineStore } from 'pinia';

  import type Movie from '@/types/Movie';
  import useMovies from '@/composables/useMovies';

  const useMoviesStore = defineStore('datasource', () => {

    const status = ref();
    const movies: Ref<Movie[]> = ref<Movie[]>([]);
    const { fetchMovies } = useMovies();

    const loadMovies = async () => {
      try {
        const response = await fetchMovies();   
        movies.value = response.data;
        status.value = undefined;
      } catch (error) {
        status.value = error;
      }
    }

    const getMovie = (movieId: string) => {
      return movies.value.find(({ id }) => id === parseInt(movieId));
    }    
    
    return { movies, loadMovies, getMovie, status };
  });
  
  export default useMoviesStore;
