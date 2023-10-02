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
  import useMoviesStore from '@/store/datasource'
  import useSearch from '@/composables/useSearch.ts';
  
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
      const { movies } = useMoviesStore();
      const { filteredItems, setSearchQuery, setSearchCategory, setSortOption } = useSearch(movies);

      const performSearch = (message : string) => setSearchQuery(message);
      const performSort = (selected : boolean) => setSortOption(selected);
      const performSelect = (selected : boolean) => setSearchCategory(selected);

      return { performSearch, performSort, performSelect, filteredItems };
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
