  import { ref } from 'vue';
  import type { Ref } from 'vue';

  import { defineStore } from 'pinia';
  
  import type Movie from '@/types/Movie';
  import moviesData from '@/assets/movies.json'

  const useMoviesStore = defineStore('datasource', () => {
    const movies: Ref<Movie[]> = ref<Movie[]>(moviesData as Movie[]);
    return { movies };
  });
  
  export default useMoviesStore;