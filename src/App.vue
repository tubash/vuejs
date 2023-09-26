<template>
    <div class="center">
      <div class="content">
        <h1>FIND YOUR MOVIE</h1>
        <div>
          <search-component :text="text" />
        </div>
        <div>
          <search-summary :amount="amount" />
        </div>
        <div>
          <movie-grid :movies="movies" />
        </div>
      </div>
    </div>
  <div>

  </div>
</template>

<script lang="ts">
  import SearchComponent from '@/components/SearchComponent.vue';
  import SearchSummary from '@/components/SearchSummary.vue';
  import MovieGrid from '@/components/MovieGrid.vue';
  import type Movie from '@/types/Movie';

  import posterPulpFiction from "./stories/assets/pulpfiction.png";
  import posterKillBill from "./stories/assets/killbill.png";

  export default {
    components: {
      MovieGrid,
      SearchComponent,
      SearchSummary
    },
    props: {
      movies: {
        type: Array<Movie>,
        required: true,
        default: () => [
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        { id: 1, image: posterKillBill, title: "Kill Bill", year: 1994, genre: "Oscar Winning Movie"},
        { id: 2, image: posterPulpFiction, title: "PulpFiction", year: 1994, genre: "Oscar Winning Movie"},
        ],
      },
      text: {
        type: String,
        required: false,
        default: '1234',
      },
      amount: {
        type: Number,
        required: true,
        default: 0,
      }
    }
  }
</script>

<style>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
.invert {
  background-color: #000;
  color: #fff;
  padding: 0 15px;
  border-radius: 10px;
}
html,
body {
  font-family: "Anonymous Pro", monospace;
  font-family: "Roboto", sans-serif;
  height: 100%;
  min-height: 100% !important;
  margin: auto;
  text-align: center;
}
.center {
  width: 825px;
  text-align: center;
  margin: 50px auto;
}
.content {
  text-align: left;
}
</style>
