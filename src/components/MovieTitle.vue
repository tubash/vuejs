<template>
  <h2 class="movie-title">{{ title }}</h2>
</template>

<script lang="ts">
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style scoped>
    .movie-title {
        font-size: large;
        margin: 3px 0;
    }
</style>
