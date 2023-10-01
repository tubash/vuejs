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
  import type { Ref } from 'vue';
  
  import SearchForm from '@/components/SearchForm.vue';
  import SearchSummary from '@/components/SearchSummary.vue';
  import SortOptions from '@/components/SortOptions.vue';
  import SearchOptions from '@/components/SearchOptions.vue';
  import MovieGrid from '@/components/MovieGrid.vue';

  import type Movie from '@/types/Movie';

  import useSearch from '@/composables/useSearch.ts';

  import posterPulpFiction from "@/stories/assets/pulpfiction.png";
  import posterKillBill from "@/stories/assets/killbill.png";

  export default {
    components: {
      MovieGrid,
      SearchForm,
      SearchSummary,
      SortOptions,
      SearchOptions
    },
    setup() {
      const movies: Movie[] = [
        { id: "1", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "2", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "3", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "4", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "5", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "6", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "7", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "8", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "9", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "10", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "11", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "12", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "13", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "14", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "15", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "16", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "17", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "18", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "19", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "20", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "21", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "22", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: "23", image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: "24", image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
      ];

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
