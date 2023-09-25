<template>
  <h3 class="movie-genre-title">{{ genre }}</h3>
</template>

<script lang="ts">
export default {
  props: {
    genre: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-genre-title {
  font-size: small;
  margin-top: 0;
}
</style>
