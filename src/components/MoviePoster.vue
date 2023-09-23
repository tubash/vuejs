<template>
    <img class="movie-poster-parameters" :src="source">
</template>

<script lang="ts">
    export default {
        props: {
            source: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style scoped>
  .movie-poster-parameters {
    width: 275px;
    height: 400px;
  }
</style>