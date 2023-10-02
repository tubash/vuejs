<template>
  <div class="movie-year">{{ year }}</div>
</template>

<script lang="ts">
    export default {
        props: {
            year: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style scoped>
    .movie-year {
        font-size: medium;
        margin: 3px 0;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 3px 10px;
        height: 18px;
    }
</style>
