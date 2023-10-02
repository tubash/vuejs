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
          <search-summary :amount="filteredItems.length" />
          <sort-options @do-sort="performSort" />
        </div>
        <div>
          <movie-grid :movies="filteredItems" />
        </div>
      </div>
    </div>
  <div>

  </div>
</template>

<script lang="ts">
  import moviesData from '@/assets/movies.json'
  
  import SearchForm from '@/components/SearchForm.vue';
  import SearchSummary from '@/components/SearchSummary.vue';
  import SortOptions from '@/components/SortOptions.vue';
  import SearchOptions from '@/components/SearchOptions.vue';
  import MovieGrid from '@/components/MovieGrid.vue';

  import type Movie from '@/types/Movie';

  import useSearch from '@/composables/useSearch.ts';

  export default {
    components: {
      MovieGrid,
      SearchForm,
      SearchSummary,
      SortOptions,
      SearchOptions
    },
    setup() {
      const movies: Movie[] = moviesData as Movie[];

      const { filteredItems, setSearchQuery } = useSearch(movies);
      const performSearch = (message : string) => setSearchQuery(message);
      const performSort = (selected : boolean) => console.log("SORTED: " + selected);
      const performSelect = (selected : boolean) => console.log("SELECTED: " + selected);

      return { performSearch, performSort, performSelect, setSearchQuery, filteredItems };
    },    
  }
</script>

<style>
  .center {
    width: 845px;
    text-align: center;
    margin: 50px auto;
  }
  .content {
    text-align: left;
  }
</style>
