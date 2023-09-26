<template>
  <div class="list-movies">
    <movie-item v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts">
import MovieItem from "@/components/MovieItem.vue";
import { type Movie } from "@/types/Movie";

export default {
  components: {
    MovieItem,
  },
  props: {
    movies: {
      type: Array<Movie>,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.list-movies {
  display: grid;
  grid-template-columns: 275px 275px 275px;
  grid-gap: 10px;
}
</style>
