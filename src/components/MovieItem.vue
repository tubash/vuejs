<template>
  <div class="movie-item">
    <div>
      <movie-poster :source="movie.image"></movie-poster>
    </div>
    <div class="flex-layout">
      <movie-title :title="movie.title"></movie-title>
      <movie-year :year="movie.year" class="right-block"></movie-year>
    </div>
    <div>
      <movie-genre :genre="movie.genre"></movie-genre>
    </div>
  </div>
</template>

<script lang="ts">
import { type PropType } from "vue";
import { type Movie } from "@/types/Movie";

import MoviePoster from "@/components/MoviePoster.vue";
import MovieTitle from "@/components/MovieTitle.vue";
import MovieYear from "@/components/MovieYear.vue";
import MovieGenre from "@/components/MovieGenre.vue";

export default {
  components: {
    MoviePoster,
    MovieTitle,
    MovieYear,
    MovieGenre,
  },
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-item {
  width: 275px;
}
.flex-layout {
  display: flex;
}
.right-block {
  margin-left: auto;
  vertical-align: middle;
}
.complex-layout::after {
  content: "";
  clear: both;
  display: inline;
}
</style>
