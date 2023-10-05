<template>
    <router-link 
        :to="{ 
            name: 'MovieView', 
            params: { 
                id: movie.id 
            }
        }" 
        class="nav-link">
        <div class="movie-item">
            <div>
                <movie-poster :source="movie.posterurl"></movie-poster>
            </div>
            <div class="flex-layout">
                <movie-title :title="movie.title"></movie-title>
                <movie-year :year="movie.year" class="right-block"></movie-year>
            </div>
            <div>
                <movie-genres :genres="movie.genres"></movie-genres>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
    import { type PropType } from "vue";
    import type Movie from "@/types/Movie";

    import MoviePoster from "@/components/MoviePoster.vue";
    import MovieTitle from "@/components/MovieTitle.vue";
    import MovieYear from "@/components/MovieYear.vue";
    import MovieGenres from "@/components/MovieGenres.vue";

    export default {
        components: {
            MoviePoster,
            MovieTitle,
            MovieYear,
            MovieGenres,
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
