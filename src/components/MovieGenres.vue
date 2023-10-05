<template>
    <h3 class="movie-genre-title">{{ display }}</h3>
</template>

<script lang="ts">
import { computed } from 'vue';

    export default {
        props: {
            genres: {
            type: Array<string>,
            required: true,
            },
        }, 
        setup(props) {
            const display = computed(() => props.genres.join(" & "));
            return {display};
        }
    };
</script>

<style scoped>
    .movie-genre-title {
    font-size: small;
    margin-top: 0;
    }
</style>
