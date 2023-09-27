import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import type Movie from "@/types/Movie";

export default function useSearch(movies: Movie[]) { 
    const query: Ref<string> = ref('');
    const allMovies: Ref<Movie[]> = ref<Movie[]>(movies);

    const setSearchQuery = (text: string) => {
        query.value = text
    }
    const filteredItems = computed(() => {
        if (!query.value) {
          return allMovies.value;
        }
        return allMovies.value.filter(movie => {
          const title = movie?.title.toLocaleLowerCase();
          return title.includes(query.value.toLocaleLowerCase());
        })
    })

    return { filteredItems, setSearchQuery };
};