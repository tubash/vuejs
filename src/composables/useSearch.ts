import { ref, Ref } from 'vue';
import { type Movie } from "@/types/Movie";

export default function useSearch() { 

    const filteredItems = ref<Movie[]>([]);
  
    function doSearch(title: string, movies: Movie[]) {
        filteredItems.value = movies.filter((obj) => {
            return obj.title.includes(title);
          });
    }
  
    return { filteredItems, doSearch };
};