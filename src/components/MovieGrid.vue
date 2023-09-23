<template>
    <div class="list-movies">        
        <MovieItem 
            v-for="movie in movies"
            :movie="movie"
        />
    </div>
</template>

<script lang="ts">
    import MovieItem from './MovieItem.vue';

    export default {
        components: {
            MovieItem,
        },
        props: {
            movies: { 
                type: Array<Object>, 
                required: true, 
                default: () => [] 
            },
        }
    }
</script>

<style scoped>
    .list-movies {
        display: grid;
        grid-template-columns: 275px 275px 275px;
        grid-gap: 10px;
    }
</style>