import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import type Movie from "@/types/Movie";

export default function useSearch(movies: Movie[]) { 
    const query: Ref<string> = ref('');
    
    const searchCategory: Ref<boolean> = ref(false);
    const sortOption: Ref<boolean> = ref(false);

    const allMovies: Ref<Movie[]> = ref<Movie[]>(movies);

    const setSearchQuery = (text: string) => {
        query.value = text
    }
    // true is genre and false is title
    const setSearchCategory = (category: boolean) => {
      searchCategory.value = category;
    }
    // true is release date and false is rating
    const setSortOption = (sort: boolean) => {
      sortOption.value = sort;
    }
    const filteredItems = computed(() => {
        if (!query.value) {
          return sortOption.value
            ? allMovies.value.sort((a, b) => a.ratings.reduce((c, d) => c + d) - b.ratings.reduce((c, d) => c + d))
            : allMovies.value.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
        }
        const filtered = allMovies.value.filter(movie => {
          const title = movie?.title.toLocaleLowerCase();
          const genre = movie?.genres.join().toLocaleLowerCase();

          return searchCategory.value 
            ? genre.includes(query.value.toLocaleLowerCase())
            : title.includes(query.value.toLocaleLowerCase());
        });

        return sortOption.value
          ? filtered.sort((a, b) => a.ratings.reduce((c, d) => c + d) - b.ratings.reduce((c, d) => c + d))
          : filtered.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    })

    return { filteredItems, setSearchQuery, setSearchCategory, setSortOption };
};
