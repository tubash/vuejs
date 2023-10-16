<template>
  <div class="center">
    <div class="content">
      <h1>FIND YOUR MOVIE</h1>
      <div>
        <search-form @do-search="performSearch"/>
      </div>
      <div>
        <search-options @do-select="performSelect" />
      </div>
      <div style="display: flex;width: 100%;">
        <search-summary :amount="processed.length" />
        <sort-options @do-sort="performSort" />
      </div>
      <div>
        <movie-grid :movies="processed" />
      </div>
      <div v-if="store.status" class="error">
        <h1>ERROR LOADING</h1>
        <h4>{{ store.status }}</h4>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import type { Ref } from 'vue';
    
    import useSearch from '@/composables/useSearch';
    import useMoviesStore from '@/stores/datasource'
    
    import type Movie from '@/types/Movie';
  
    import SearchForm from '@/components/SearchForm.vue';
    import SearchSummary from '@/components/SearchSummary.vue';
    import SortOptions from '@/components/SortOptions.vue';
    import SearchOptions from '@/components/SearchOptions.vue';
    import MovieGrid from '@/components/MovieGrid.vue';
  
    export default {
      components: {
        MovieGrid,
        SearchForm,
        SearchSummary,
        SortOptions,
        SearchOptions
      },
      setup() {
        const searchOption: Ref<boolean> = ref(false);
        const sortOption: Ref<boolean> = ref(false);
        const searchQuery: Ref<string> = ref('');
  
        const store = useMoviesStore();
        const { process } = useSearch();

        const processed: Ref<Movie[]> = computed(() => {
          return process(store.movies, searchQuery.value, searchOption.value, sortOption.value);
        });
  
        const performSort = (sorted : boolean) => sortOption.value = sorted;
        const performSelect = (selected : boolean) => searchOption.value = selected;
        const performSearch = (message : string) => searchQuery.value = message;
  
        onMounted(async () => {
          if (!store.movies || !store.movies.length) {
            await store.loadMovies();
          }
        });
  
        return { processed, performSort, performSelect, performSearch, store };
      },    
    }
</script>
<style scoped>
  .center {
    width: 845px;
    text-align: center;
    margin: 50px auto;
  }
  .content {
    text-align: left;
  }
  .error h1 {
    font-size: 50pt;
    text-align: center;
    padding: 50px 0 0 0;
  }
  .error h4 {
    text-align: center;
  }
</style>
  