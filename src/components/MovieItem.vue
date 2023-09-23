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
  import MoviePoster from './MoviePoster.vue';
  import MovieTitle from './MovieTitle.vue';
  import MovieYear from './MovieYear.vue';
  import MovieGenre from './MovieGenre.vue';

  export default {
    components: {
        MoviePoster,
        MovieTitle,
        MovieYear,
        MovieGenre
    },
    props: {
      movie: {
        type: Object,
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