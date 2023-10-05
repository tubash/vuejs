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
    
    return { movies, loadMovies };
  });
  
  export default useMoviesStore;
  